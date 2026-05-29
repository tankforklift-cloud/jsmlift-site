#!/usr/bin/env python3
"""Generate MLIFT branded product placeholder images with watermark."""
import os
import sys

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Installing Pillow...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw, ImageFont

PUBLIC_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")
IMG_DIR = os.path.join(PUBLIC_DIR, "images", "products")
os.makedirs(IMG_DIR, exist_ok=True)

# Category colors for visual variety
CATEGORY_COLORS = {
    "maintenance": ("#E63946", "#FFF"),
    "brake": ("#457B9D", "#FFF"),
    "steering-axle": ("#2A9D8F", "#FFF"),
    "electrical": ("#E9C46A", "#333"),
    "engine": ("#F4A261", "#333"),
    "transmission": ("#264653", "#FFF"),
    "hydraulic": ("#9B5DE5", "#FFF"),
    "wheel-tire": ("#F15BB5", "#FFF"),
    "mast": ("#00BBF9", "#333"),
    "seat": ("#FEE440", "#333"),
    "attachment": ("#00F5D4", "#333"),
    "heli-hangcha": ("#D90429", "#FFF"),
    "other": ("#8D99AE", "#FFF"),
    "air-filter": ("#E63946", "#FFF"),
    "oil-filter": ("#457B9D", "#FFF"),
}

PRODUCTS = [
    # === 1. Forklift Maintenance ===
    {"id": "air-filter", "cat": "maintenance", "name": "Air Filter Element", "text": "AIR FILTER"},
    {"id": "oil-filter-2", "cat": "maintenance", "name": "Engine Oil Filter", "text": "OIL FILTER"},
    {"id": "fuel-filter", "cat": "maintenance", "name": "Diesel Fuel Filter", "text": "FUEL FILTER"},
    {"id": "air-filter-housing", "cat": "maintenance", "name": "Air Filter Housing & Accessories", "text": "FILTER HOUSING"},
    {"id": "oil-strainer", "cat": "maintenance", "name": "Oil Strainer / Mesh Filter", "text": "STRAINER"},
    {"id": "water-separator", "cat": "maintenance", "name": "Fuel Water Separator", "text": "WATER SEPARATOR"},
    {"id": "filter-body", "cat": "maintenance", "name": "Filter Housing Assembly", "text": "FILTER BODY"},
    {"id": "forklift-oil", "cat": "maintenance", "name": "Special Oil & Antifreeze", "text": "OIL & FLUID"},

    # === 2. Brake System ===
    {"id": "hand-brake", "cat": "brake", "name": "Hand Brake Lever", "text": "HAND BRAKE"},
    {"id": "brake-master", "cat": "brake", "name": "Brake Master Cylinder / Booster", "text": "MASTER CYL"},
    {"id": "brake-wheel-cyl", "cat": "brake", "name": "Wheel Brake Cylinder", "text": "WHEEL CYL"},
    {"id": "brake-drum", "cat": "brake", "name": "Brake Drum", "text": "BRAKE DRUM"},
    {"id": "brake-shoe", "cat": "brake", "name": "Brake Shoe / Caliper Assembly", "text": "BRAKE SHOE"},
    {"id": "brake-cable", "cat": "brake", "name": "Brake Cable", "text": "BRAKE CABLE"},
    {"id": "brake-assembly", "cat": "brake", "name": "Brake Assembly & Parts", "text": "BRAKE ASSY"},
    {"id": "brake-disc", "cat": "brake", "name": "Brake Disc Plate", "text": "BRAKE DISC"},

    # === 3. Steering / Drive Axle ===
    {"id": "steering-joint", "cat": "steering-axle", "name": "Steering Joint & Accessories", "text": "STEERING JOINT"},
    {"id": "king-pin", "cat": "steering-axle", "name": "King Pin Set", "text": "KING PIN"},
    {"id": "tie-rod", "cat": "steering-axle", "name": "Tie Rod / Drag Link", "text": "TIE ROD"},
    {"id": "steering-wheel", "cat": "steering-axle", "name": "Steering Wheel & Accessories", "text": "STEERING WHEEL"},
    {"id": "steering-axle-housing", "cat": "steering-axle", "name": "Steering Axle Housing", "text": "AXLE HOUSING"},
    {"id": "drive-hub", "cat": "steering-axle", "name": "Drive Hub / Steering Hub", "text": "DRIVE HUB"},
    {"id": "half-shaft", "cat": "steering-axle", "name": "Half Shaft / Axle Shaft", "text": "HALF SHAFT"},

    # === 4. Electrical & Electronic ===
    {"id": "dashboard", "cat": "electrical", "name": "Instrument Panel / Gauge", "text": "DASHBOARD"},
    {"id": "ignition-switch", "cat": "electrical", "name": "Ignition / Start Switch", "text": "IGNITION"},
    {"id": "battery", "cat": "electrical", "name": "Storage Battery", "text": "BATTERY"},
    {"id": "alternator", "cat": "electrical", "name": "Alternator / Starter Motor", "text": "ALTERNATOR"},
    {"id": "lighting", "cat": "electrical", "name": "Lighting Assembly", "text": "LIGHTING"},
    {"id": "contactor", "cat": "electrical", "name": "Electrical Contactor", "text": "CONTACTOR"},
    {"id": "controller", "cat": "electrical", "name": "Electronic Controller", "text": "CONTROLLER"},
    {"id": "wiring-harness", "cat": "electrical", "name": "Wiring Harness", "text": "WIRING"},

    # === 5. Engine & Power ===
    {"id": "engine-assembly", "cat": "engine", "name": "Engine Assembly", "text": "ENGINE"},
    {"id": "cylinder-kit", "cat": "engine", "name": "Cylinder Liner / Piston Kit", "text": "CYLINDER KIT"},
    {"id": "oil-pump", "cat": "engine", "name": "Engine Oil Pump", "text": "OIL PUMP"},
    {"id": "crankshaft", "cat": "engine", "name": "Crankshaft / Camshaft", "text": "CRANKSHAFT"},
    {"id": "water-pump", "cat": "engine", "name": "Water Pump", "text": "WATER PUMP"},
    {"id": "radiator", "cat": "engine", "name": "Radiator / Water Tank", "text": "RADIATOR"},
    {"id": "fuel-injector", "cat": "engine", "name": "Fuel Injector / Pump", "text": "INJECTOR"},
    {"id": "fan-belt", "cat": "engine", "name": "Fan Belt / Pulley", "text": "FAN BELT"},

    # === 6. Transmission ===
    {"id": "torque-converter", "cat": "transmission", "name": "Hydraulic Torque Converter", "text": "TORQUE CONV"},
    {"id": "gear-pump", "cat": "transmission", "name": "Transmission Oil Pump", "text": "GEAR PUMP"},
    {"id": "clutch-pack", "cat": "transmission", "name": "Clutch Pack / Friction Disc", "text": "CLUTCH"},
    {"id": "clutch-plate", "cat": "transmission", "name": "Clutch Separator Plate", "text": "CLUTCH PLATE"},
    {"id": "control-valve", "cat": "transmission", "name": "Control Valve / Modulator", "text": "CONTROL VALVE"},
    {"id": "transmission-assy", "cat": "transmission", "name": "Transmission Assembly", "text": "TRANSMISSION"},
    {"id": "shift-lever", "cat": "transmission", "name": "Gear Shift Lever", "text": "SHIFT LEVER"},

    # === 7. Hydraulic System ===
    {"id": "hydraulic-pump", "cat": "hydraulic", "name": "Gear Pump / Hydraulic Pump", "text": "HYDRAULIC PUMP"},
    {"id": "steering-unit", "cat": "hydraulic", "name": "Steering Unit / Orbitrol", "text": "STEERING UNIT"},
    {"id": "multi-valve", "cat": "hydraulic", "name": "Multi-Spool Control Valve", "text": "CONTROL VALVE"},
    {"id": "relief-valve", "cat": "hydraulic", "name": "Relief Valve / Pressure Valve", "text": "RELIEF VALVE"},
    {"id": "tilt-cylinder", "cat": "hydraulic", "name": "Tilt Cylinder Assembly", "text": "TILT CYLINDER"},
    {"id": "lift-cylinder", "cat": "hydraulic", "name": "Lift Cylinder Assembly", "text": "LIFT CYLINDER"},
    {"id": "side-shift-cyl", "cat": "hydraulic", "name": "Side Shift Cylinder", "text": "SIDE SHIFT"},
    {"id": "hydraulic-seal", "cat": "hydraulic", "name": "Hydraulic Seal Kit", "text": "SEAL KIT"},

    # === 8. Wheels & Tires ===
    {"id": "pneumatic-tire-28", "cat": "wheel-tire", "name": "Pneumatic Tire 28×9-15", "text": "TIRE 28×9-15"},
    {"id": "solid-tire-650", "cat": "wheel-tire", "name": "Solid Tire 6.50-10", "text": "SOLID TIRE"},
    {"id": "wheel-rim", "cat": "wheel-tire", "name": "Forklift Wheel Rim", "text": "WHEEL RIM"},
    {"id": "tire-tube", "cat": "wheel-tire", "name": "Inner Tube & Flap", "text": "INNER TUBE"},

    # === 9. Mast / Lifting ===
    {"id": "mast-roller", "cat": "mast", "name": "Mast Roller Bearing", "text": "MAST ROLLER"},
    {"id": "fork-arm", "cat": "mast", "name": "Fork Arm / Tine", "text": "FORK ARM"},
    {"id": "chain", "cat": "mast", "name": "Lifting Chain Assembly", "text": "LIFT CHAIN"},
    {"id": "mast-carriage", "cat": "mast", "name": "Carriage Assembly", "text": "CARRIAGE"},

    # === 10. Seat & Cabin ===
    {"id": "forklift-seat", "cat": "seat", "name": "Forklift Seat Assembly", "text": "SEAT"},
    {"id": "seat-belt", "cat": "seat", "name": "Seat Belt / Safety Belt", "text": "SEAT BELT"},
    {"id": "cabin-mount", "cat": "seat", "name": "Cabin Rubber Mount", "text": "CABIN MOUNT"},

    # === 11. Attachments ===
    {"id": "side-shifter", "cat": "attachment", "name": "Side Shifter Attachment", "text": "SIDE SHIFTER"},
    {"id": "fork-positioner", "cat": "attachment", "name": "Fork Positioner", "text": "POSITIONER"},
    {"id": "rotator", "cat": "attachment", "name": "Fork Rotator", "text": "ROTATOR"},

    # === 12. Heli / Hangcha OEM ===
    {"id": "heli-brake", "cat": "heli-hangcha", "name": "Heli Brake Master Cylinder", "text": "HELI BRAKE"},
    {"id": "heli-seal-kit", "cat": "heli-hangcha", "name": "Heli Hydraulic Seal Kit", "text": "HELI SEAL"},
    {"id": "hangcha-filter", "cat": "heli-hangcha", "name": "Hangcha Air Filter OEM", "text": "HANGCHA FILTER"},
    {"id": "hangcha-cylinder", "cat": "heli-hangcha", "name": "Hangcha Tilt Cylinder OEM", "text": "HANGCHA CYL"},

    # === 13. Other Parts ===
    {"id": "bearing", "cat": "other", "name": "Forklift Bearing Kit", "text": "BEARING"},
    {"id": "bolt-nut", "cat": "other", "name": "Bolt / Nut / Fastener Kit", "text": "FASTENER"},
    {"id": "hydraulic-hose", "cat": "other", "name": "Hydraulic Hose Assembly", "text": "HYDRAULIC HOSE"},
    {"id": "exhaust-pipe", "cat": "other", "name": "Exhaust Pipe / Muffler", "text": "EXHAUST"},
]


def create_product_image(slug, category, name, text, width=600, height=500):
    """Create a product image with MLIFT branding."""
    colors = CATEGORY_COLORS.get(category, ("#DC2626", "#FFF"))
    bg_color, text_color = colors

    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)

    # Draw geometric pattern background
    for i in range(0, width, 40):
        draw.line([(i, 0), (i + 40, height)], fill=(0, 0, 0, 20), width=1)
    for i in range(0, height, 40):
        draw.line([(width, i), (0, i + 40)], fill=(255, 255, 255, 15), width=1)

    # Try to load a font, fall back to default
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    font_large = None
    font_small = None

    for fp in font_paths:
        if os.path.exists(fp):
            try:
                font_large = ImageFont.truetype(fp, 48)
                font_small = ImageFont.truetype(fp, 24)
                break
            except Exception:
                continue

    if font_large is None:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw category label
    cat_names = {
        "maintenance": "MAINTENANCE PARTS",
        "brake": "BRAKE SYSTEM",
        "steering-axle": "STEERING / DRIVE AXLE",
        "electrical": "ELECTRICAL PARTS",
        "engine": "ENGINE & POWER",
        "transmission": "TRANSMISSION",
        "hydraulic": "HYDRAULIC SYSTEM",
        "wheel-tire": "WHEELS & TIRES",
        "mast": "MAST & LIFTING",
        "seat": "SEAT & CABIN",
        "attachment": "ATTACHMENTS",
        "heli-hangcha": "HELI / HANGCHA OEM",
        "other": "OTHER PARTS",
    }
    cat_label = cat_names.get(category, category.upper())

    # Center product text
    bbox = draw.textbbox((0, 0), text, font=font_large)
    tx_w = bbox[2] - bbox[0]
    tx_h = bbox[3] - bbox[1]
    draw.text(((width - tx_w) / 2, (height - tx_h) / 2 - 30), text, fill=text_color, font=font_large)

    # Category below
    cat_bbox = draw.textbbox((0, 0), cat_label, font=font_small)
    draw.text(((width - cat_bbox[2] + cat_bbox[0]) / 2, (height + tx_h) / 2), cat_label, fill=text_color, font=font_small)

    # MLIFT Watermark (bottom right)
    watermark_text = "MLIFT"
    watermark_bbox = draw.textbbox((0, 0), watermark_text, font=font_large)
    wm_w = watermark_bbox[2] - watermark_bbox[0]
    # Parse hex color (handles #FFF and #FFFFFF)
    hx = text_color.lstrip('#')
    if len(hx) == 3:
        r, g, b = int(hx[0]*2, 16), int(hx[1]*2, 16), int(hx[2]*2, 16)
    else:
        r, g, b = int(hx[0:2], 16), int(hx[2:4], 16), int(hx[4:6], 16)
    draw.text((width - wm_w - 20, height - 50), watermark_text,
              fill=(r, g, b, 128), font=font_large)

    # Bottom bar with brand
    draw.rectangle([(0, height - 5), (width, height)], fill=text_color)

    filepath = os.path.join(IMG_DIR, f"{slug}.png")
    img.save(filepath, "PNG", quality=85)
    print(f"  ✓ {slug}.png")
    return filepath


def main():
    print("Generating MLIFT product images...\n")
    files = []
    for i, p in enumerate(PRODUCTS):
        fp = create_product_image(p["id"], p["cat"], p["name"], p["text"])
        files.append(fp)
        if (i + 1) % 10 == 0:
            print(f"  [{i + 1}/{len(PRODUCTS)}] done")

    print(f"\n✅ Generated {len(files)} product images in {IMG_DIR}")
    return files


if __name__ == "__main__":
    main()
