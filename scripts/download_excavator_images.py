#!/usr/bin/env python3
"""Download all excavator images from herestrongmachinery.com"""
import urllib.request
import os
import ssl
import time

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'images', 'excavators')
os.makedirs(OUTPUT_DIR, exist_ok=True)

HERO_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'images', 'hero')
os.makedirs(HERO_DIR, exist_ok=True)

IMAGES = {
    # Hero slider images
    'hero/hs-factory.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/1-3.jpg',
    'hero/hs-excavator-line.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/2-3.jpg',
    'hero/hs-excavator-work.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/3.jpg',
    
    # HS12-6 (1.2 ton)
    'hs12-6-main.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2025-08-26_152434_009-1024x854.jpg',
    
    # HS18 (1.8 ton)
    'hs18-main.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/2-5-1024x768.jpg',
    'hs18-full.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/2-4-scaled.jpg',
    
    # HS20 (2.2 ton)
    'hs20-main.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/3-2-1024x768.jpg',
    'hs20-full.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/3-1-scaled.jpg',
    
    # HS45 (4.2 ton)
    'hs45-main.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/1-5-1024x1024.jpg',
    'hs45-full.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/1-5.jpg',
    
    # Certificate
    'certificate.jpg': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/5.jpg',
    
    # Logo
    'logo.png': 'https://herestrongmachinery.com/wp-content/uploads/2025/03/cropped-%E5%9B%BE%E7%89%871-95x70.png',
}

def download():
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'}
    
    for filename, url in IMAGES.items():
        # Route hero images to HERO_DIR
        if filename.startswith('hero/'):
            filepath = os.path.join(os.path.dirname(OUTPUT_DIR), 'hero', filename.replace('hero/', ''))
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
        else:
            filepath = os.path.join(OUTPUT_DIR, filename)
        
        if os.path.exists(filepath) and os.path.getsize(filepath) > 10000:
            size_kb = os.path.getsize(filepath) / 1024
            print(f"  SKIP: {filename} ({size_kb:.0f}KB, already exists)")
            continue
        
        print(f"  DOWNLOADING: {filename}...")
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30, context=ssl_context) as resp:
                data = resp.read()
                with open(filepath, 'wb') as f:
                    f.write(data)
                size_kb = len(data) / 1024
                print(f"    OK: {filename} ({size_kb:.0f}KB)")
        except Exception as e:
            print(f"    FAIL: {filename} - {e}")
        
        time.sleep(0.5)

if __name__ == '__main__':
    print(f"Downloading {len(IMAGES)} images to:")
    print(f"  Products: {OUTPUT_DIR}")
    print(f"  Hero: {HERO_DIR}")
    download()
    print("\nDONE!")
