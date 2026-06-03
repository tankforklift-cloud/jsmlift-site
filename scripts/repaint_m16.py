#!/usr/bin/env python3
"""
MLIFT M16 Image Repaint v4 — Lightweight & Reliable
- HSV-based color masking (fast, no GrabCut overhead)
- LAB color space transfer (natural lighting/shadows preserved)
- Logo inpainting + M16 text overlay
- RAL 1019 beige (body) + RAL 8014 brown (accent)
"""
import cv2
import numpy as np
import os

INPUT_DIR = '/Users/tank/WorkBuddy/2026-05-28-17-40-45/jsmlift-site/public/images/m16'
OUTPUT_DIR = '/Users/tank/WorkBuddy/2026-05-28-17-40-45/jsmlift-site/public/images/m16/m16'

# Target RAL colors in BGR → LAB
RAL_1019_BGR = np.uint8([[[128, 154, 169]]])  # Grey Beige
RAL_8014_BGR = np.uint8([[[37, 53, 74]]])      # Sepia Brown

RAL_1019_LAB = cv2.cvtColor(RAL_1019_BGR, cv2.COLOR_BGR2LAB).astype(np.float64)[0,0]
RAL_8014_LAB = cv2.cvtColor(RAL_8014_BGR, cv2.COLOR_BGR2LAB).astype(np.float64)[0,0]


def blue_body_mask(hsv):
    """Blue body panels: H=85-130, S>30, V>25"""
    h, s, v = cv2.split(hsv)
    mask = ((h >= 85) & (h <= 130)) & (s > 30) & (v > 25)
    kernel = np.ones((5,5), np.uint8)
    mask = cv2.morphologyEx(mask.astype(np.uint8), cv2.MORPH_CLOSE, kernel, iterations=2)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=2)
    return mask


def yellow_mask(hsv):
    """Yellow/gold arm: H=10-42, S>50, V>85"""
    h, s, v = cv2.split(hsv)
    mask = ((h >= 10) & (h <= 42)) & (s > 50) & (v > 85)
    kernel = np.ones((7,7), np.uint8)
    mask = cv2.morphologyEx(mask.astype(np.uint8), cv2.MORPH_CLOSE, kernel, iterations=1)
    return mask


def gray_mask(hsv, excl1=None, excl2=None):
    """Gray/silver machine parts"""
    h, s, v = cv2.split(hsv)
    mask = (s < 35) & (v > 60) & (v < 230)
    sky_like = (v > 200) & (s < 15)
    mask &= ~sky_like
    if excl1 is not None:
        mask &= ~excl1
    if excl2 is not None:
        mask &= ~excl2
    return mask


def lab_transfer(img_bgr, mask, target_lab, strength):
    """Transfer color in LAB space: preserve L, blend A/B toward target."""
    if mask.sum() == 0:
        return img_bgr
    lab = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2LAB).astype(np.float64)
    L, A, B = cv2.split(lab)
    A[mask] = A[mask] * (1 - strength) + target_lab[1] * strength
    B[mask] = B[mask] * (1 - strength) + target_lab[2] * strength
    result_lab = cv2.merge([L, A, B])
    return cv2.cvtColor(result_lab.astype(np.uint8), cv2.COLOR_LAB2BGR)


def remove_logos(img, hsv):
    """Inpaint white logos on blue body."""
    h, s, v = cv2.split(hsv)
    blue = ((h >= 85) & (h <= 130)) & (s > 30) & (v > 25)
    bright = (v > 170) & (s < 65) & blue
    
    kernel = np.ones((3,10), np.uint8)
    lm = cv2.dilate(bright.astype(np.uint8), kernel, iterations=3)
    kernel_sq = np.ones((9,9), np.uint8)
    lm = cv2.morphologyEx(lm, cv2.MORPH_CLOSE, kernel_sq)
    
    contours, _ = cv2.findContours(lm, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    fm = np.zeros_like(lm)
    for cnt in contours:
        x, y, rw, rh = cv2.boundingRect(cnt)
        area = cv2.contourArea(cnt)
        ar = rw / max(rh, 1)
        if 80 < area < 12000 and 0.3 < ar < 12:
            fm[y:y+rh, x:x+rw] = 255
    
    n = 0
    if fm.sum() > 500:
        img = cv2.inpaint(img, fm, 5, cv2.INPAINT_TELEA)
        n = int(fm.sum() // 255)
    return img, n


def add_branding(img, text="M16"):
    """Top-right M16 badge."""
    font = cv2.FONT_HERSHEY_SIMPLEX
    scale, thick = 0.9, 2
    (tw, th), bl = cv2.getTextSize(text, font, scale, thick)
    pad = 8
    x = img.shape[1] - tw - 30
    y = th + 30
    
    ov = img.copy()
    cv2.rectangle(ov, (x-pad, y-th-pad+bl), (x+tw+pad, y+pad), (37,53,74), -1)
    cv2.addWeighted(ov, 0.75, img, 0.25, 0, img)
    cv2.putText(img, text, (x, y), font, scale, (255,255,255), thick, cv2.LINE_AA)
    return img


def process_one(filepath):
    basename = os.path.basename(filepath)
    name = os.path.splitext(basename)[0]
    print(f"\n{'─'*50}\n[v4] {basename}")
    
    img = cv2.imread(filepath)
    if img is None:
        print("  ERROR: cannot read")
        return False
    orig = img.copy()
    h, w = img.shape[:2]
    total = h * w
    
    # Parse HSV once
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # 1. Logo removal
    img, logo_px = remove_logos(img, hsv)
    print(f"  Logo: {logo_px} px")
    
    # Re-parse HSV after inpainting
    hsv2 = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # 2. Blue → Beige
    bm = blue_body_mask(hsv2)
    bp = bm.sum() / total * 100
    print(f"  Blue→Beige  : {bp:.1f}% (strength 0.65)")
    img = lab_transfer(img, bm, RAL_1019_LAB, 0.65)
    
    # 3. Yellow → Brown
    ym = yellow_mask(hsv2)
    yp = ym.sum() / total * 100
    print(f"  Yellow→Brown: {yp:.1f}% (strength 0.78)")
    img = lab_transfer(img, ym, RAL_8014_LAB, 0.78)
    
    # 4. Gray → Beige tint
    gm = gray_mask(hsv2, bm, ym)
    gp = gm.sum() / total * 100
    if gp > 0.5:
        print(f"  Gray→Tint   : {gp:.1f}% (strength 0.35)")
        img = lab_transfer(img, gm, RAL_1019_LAB, 0.35)
    
    # 5. Branding
    img = add_branding(img, "M16")
    
    # Save
    out = os.path.join(OUTPUT_DIR, f"{name}.jpg")
    cv2.imwrite(out, img, [cv2.IMWRITE_JPEG_QUALITY, 94])
    
    # Comparison
    cmp = np.zeros((h, w*2, 3), dtype=np.uint8)
    cmp[:, :w] = orig
    cmp[:, w:] = img
    cv2.imwrite(os.path.join(OUTPUT_DIR, f"cmp_{name}.jpg"), cmp, [cv2.IMWRITE_JPEG_QUALITY, 85])
    
    print(f"  ✓ {name}.jpg")
    return True


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    files = sorted([f for f in os.listdir(INPUT_DIR)
                    if f.endswith('.jpg') and 'debug' not in f])
    
    print(f"{len(files)} images, output → {OUTPUT_DIR}")
    print(f"RAL1019 LAB: {tuple(int(x) for x in RAL_1019_LAB)}")
    print(f"RAL8014 LAB: {tuple(int(x) for x in RAL_8014_LAB)}")
    
    ok = 0
    for i, fn in enumerate(files, 1):
        print(f"\n[{i}/{len(files)}]", end="", flush=True)
        fp = os.path.join(INPUT_DIR, fn)
        try:
            if process_one(fp):
                ok += 1
        except Exception as e:
            print(f"  ERROR: {e}")
    
    print(f"\n{'='*50}")
    print(f"DONE: {ok}/{len(files)} processed → {OUTPUT_DIR}")


if __name__ == '__main__':
    main()
