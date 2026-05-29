#!/usr/bin/env python3
"""Generate professional product placeholder images as PNG.
Creates clean catalog-style placeholders that look realistic enough for a B2B site.
Skips products that already have AI-generated images.
"""

import os
import json
from PIL import Image, ImageDraw, ImageFont
import textwrap

PRODUCTS_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'products')
W, H = 1024, 1024

# Color scheme
BG_COLOR = (248, 249, 250)  # Light gray-white
BORDER_COLOR = (222, 226, 230)
ACCENT_COLOR = (52, 73, 94)  # Dark blue-gray
TEXT_COLOR = (108, 117, 125)  # Gray
LIGHT_ACCENT = (233, 236, 239)

# Category-specific icons (simple shapes)
def draw_icon(draw, category_id):
    """Draw a simple category icon using shapes."""
    cx, cy = W // 2, H // 2 - 60
    color = ACCENT_COLOR + (60,)  # Semi-transparent
    
    if category_id == 'maintenance':
        # Filter icon - cylinder with pleats
        draw.rectangle([cx-80, cy-60, cx+80, cy+60], outline=ACCENT_COLOR, width=4)
        for i in range(6):
            x = cx - 55 + i * 22
            draw.line([x, cy-50, x, cy+50], fill=ACCENT_COLOR, width=2)
        draw.rectangle([cx-20, cy-75, cx+20, cy-60], fill=ACCENT_COLOR)
        draw.rectangle([cx-20, cy+60, cx+20, cy+75], fill=ACCENT_COLOR)
    elif category_id == 'brake':
        # Brake drum - circle with inner ring
        draw.ellipse([cx-70, cy-70, cx+70, cy+70], outline=ACCENT_COLOR, width=5)
        draw.ellipse([cx-25, cy-25, cx+25, cy+25], fill=ACCENT_COLOR)
        for i in range(5):
            angle = i * 72
            import math
            rad = angle * math.pi / 180
            bx = cx + 48 * math.cos(rad)
            by = cy + 48 * math.sin(rad)
            draw.ellipse([bx-8, by-8, bx+8, by+8], fill=ACCENT_COLOR)
    elif category_id == 'steering-axle':
        # Axle shaft
        draw.rectangle([cx-100, cy-20, cx+100, cy+20], outline=ACCENT_COLOR, width=4)
        draw.ellipse([cx+80, cy-35, cx+120, cy+35], outline=ACCENT_COLOR, width=3)
        draw.ellipse([cx-120, cy-35, cx-80, cy+35], outline=ACCENT_COLOR, width=3)
    elif category_id == 'electrical':
        # Circuit/dashboard
        draw.rectangle([cx-75, cy-55, cx+75, cy+55], outline=ACCENT_COLOR, width=3, fill=LIGHT_ACCENT)
        draw.ellipse([cx-40, cy-25, cx-10, cy+5], outline=ACCENT_COLOR, width=2)
        draw.ellipse([cx+10, cy-25, cx+40, cy+5], outline=ACCENT_COLOR, width=2)
        draw.rectangle([cx-15, cy+10, cx+15, cy+40], outline=ACCENT_COLOR, width=2)
    elif category_id == 'engine':
        # Engine block
        draw.rectangle([cx-65, cy-50, cx+65, cy+50], outline=ACCENT_COLOR, width=4)
        for i in range(4):
            x = cx - 40 + i * 27
            draw.ellipse([x-6, cy-30, x+6, cy-18], outline=ACCENT_COLOR, width=2)
        draw.rectangle([cx-80, cy+10, cx-65, cy+30], outline=ACCENT_COLOR, width=2)
        draw.rectangle([cx+65, cy+10, cx+80, cy+30], outline=ACCENT_COLOR, width=2)
    elif category_id == 'transmission':
        # Gear
        draw.ellipse([cx-60, cy-60, cx+60, cy+60], outline=ACCENT_COLOR, width=3)
        for i in range(8):
            import math
            angle = i * 45
            rad = angle * math.pi / 180
            ox = cx + math.cos(rad) * 55
            oy = cy + math.sin(rad) * 55
            draw.rectangle([ox-8, oy-12, ox+8, oy+12], fill=ACCENT_COLOR, 
                          outline=ACCENT_COLOR, width=1)
        draw.ellipse([cx-18, cy-18, cx+18, cy+18], fill=(248, 249, 250), outline=ACCENT_COLOR, width=2)
        draw.ellipse([cx-6, cy-6, cx+6, cy+6], fill=ACCENT_COLOR)
    elif category_id == 'hydraulic':
        # Cylinder/hydraulic
        draw.rectangle([cx-90, cy-25, cx+90, cy+25], outline=ACCENT_COLOR, width=4)
        draw.rectangle([cx+50, cy-25, cx+90, cy+25], fill=LIGHT_ACCENT)
        draw.line([cx-90, cy-15, cx-110, cy-15], fill=ACCENT_COLOR, width=3)
        draw.line([cx-90, cy+15, cx-110, cy+15], fill=ACCENT_COLOR, width=3)
    elif category_id == 'wheel-tire':
        # Wheel/tire
        draw.ellipse([cx-75, cy-75, cx+75, cy+75], outline=ACCENT_COLOR, width=12)
        draw.ellipse([cx-50, cy-50, cx+50, cy+50], outline=ACCENT_COLOR, width=3)
        draw.ellipse([cx-10, cy-10, cx+10, cy+10], fill=ACCENT_COLOR)
        for i in range(6):
            import math
            angle = i * 60
            rad = angle * math.pi / 180
            ox = cx + 60 * math.cos(rad)
            oy = cy + 60 * math.sin(rad)
            draw.line([cx + 40 * math.cos(rad), cy + 40 * math.sin(rad),
                       ox, oy], fill=ACCENT_COLOR, width=2)
    elif category_id == 'mast':
        # Fork/fork arm
        points = [(cx-20, cy-60), (cx+20, cy-60), (cx+30, cy+60), (cx-30, cy+60)]
        draw.polygon(points, outline=ACCENT_COLOR, width=4)
        draw.polygon([(cx-20, cy-60), (cx-35, cy-40), (cx-30, cy+40), (cx-30, cy+60)], 
                     fill=LIGHT_ACCENT, outline=ACCENT_COLOR, width=2)
    elif category_id == 'seat':
        # Seat
        draw.rounded_rectangle([cx-60, cy-40, cx+60, cy+10], radius=10, 
                              outline=ACCENT_COLOR, width=3, fill=LIGHT_ACCENT)
        draw.rectangle([cx-25, cy+10, cx+25, cy+60], outline=ACCENT_COLOR, width=3)
        draw.rounded_rectangle([cx-60, cy-50, cx+60, cy-40], radius=5,
                              outline=ACCENT_COLOR, width=3, fill=LIGHT_ACCENT)
    elif category_id == 'attachment':
        # Attachment - two plates with cylinder
        draw.rectangle([cx-85, cy-60, cx-70, cy+40], fill=ACCENT_COLOR)
        draw.rectangle([cx+70, cy-60, cx+85, cy+40], fill=ACCENT_COLOR)
        draw.rectangle([cx-25, cy-60, cx+25, cy+60], outline=ACCENT_COLOR, width=3,
                      fill=LIGHT_ACCENT)
    elif category_id == 'heli-hangcha':
        # OEM box/package
        draw.rectangle([cx-50, cy-40, cx+50, cy+50], outline=ACCENT_COLOR, width=3)
        draw.text((cx, cy-15), "OEM", fill=ACCENT_COLOR, font=ImageFont.load_default(), 
                 anchor="mm")
    elif category_id == 'other':
        # Box of mixed parts
        draw.rectangle([cx-60, cy-50, cx+60, cy+50], outline=ACCENT_COLOR, width=3,
                      fill=LIGHT_ACCENT)
        draw.ellipse([cx-40, cy-20, cx-20, cy], fill=ACCENT_COLOR)
        draw.rectangle([cx+5, cy-15, cx+30, cy+15], outline=ACCENT_COLOR, width=2)
        draw.ellipse([cx-15, cy+10, cx+15, cy+40], outline=ACCENT_COLOR, width=2)
    else:
        # Default: box
        draw.rectangle([cx-60, cy-50, cx+60, cy+50], outline=ACCENT_COLOR, width=3)


def get_category_id(product_id):
    """Map product id to category id."""
    mapping = {
        'filter': 'maintenance', 'brake': 'brake',
        'steering': 'steering-axle', 'elec': 'electrical',
        'engine': 'engine', 'transmission': 'transmission',
        'hydraulic': 'hydraulic', 'wheel': 'wheel-tire',
        'mast': 'mast', 'seat': 'seat', 'cabin': 'seat',
        'attach': 'attachment', 'oem': 'heli-hangcha',
        'other': 'other',
    }
    for prefix, cat in mapping.items():
        if product_id.startswith(prefix):
            return cat
    return 'other'


def get_display_name(filename):
    """Generate a readable display name from filename."""
    # Remove extension
    name = filename.replace('.png', '')
    # Capitalize words
    parts = name.split('-')
    display = ' '.join(p.capitalize() for p in parts)
    return display


# Font path - use system font
def get_font(size):
    """Get a suitable font. Falls back to default."""
    font_paths = [
        '/System/Library/Fonts/Helvetica.ttc',
        '/System/Library/Fonts/SFNSText.ttf',
        '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except:
                pass
    return ImageFont.load_default()


def generate_placeholder(filename, category_id):
    """Generate a single placeholder image."""
    img = Image.new('RGB', (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Draw subtle border with rounded corners
    margin = 2
    draw.rounded_rectangle([margin, margin, W-margin, H-margin], 
                          radius=16, outline=BORDER_COLOR, width=2)
    
    # Draw category icon
    draw_icon(draw, category_id)
    
    # Draw product name at bottom
    display_name = get_display_name(filename)
    font_title = get_font(28)
    font_sub = get_font(20)
    
    # Product name
    name_y = H - 120
    bbox = draw.textbbox((0, 0), display_name, font=font_title)
    tw = bbox[2] - bbox[0]
    draw.text(((W-tw)//2, name_y), display_name, fill=ACCENT_COLOR, font=font_title)
    
    # Divider line
    line_y = name_y + 45
    draw.line([(W//2-60, line_y), (W//2+60, line_y)], fill=BORDER_COLOR, width=2)
    
    # Subtitle
    sub_y = line_y + 15
    cat_names = {
        'maintenance': 'Maintenance Parts',
        'brake': 'Brake System',
        'steering-axle': 'Steering & Drive Axle',
        'electrical': 'Electrical & Electronic',
        'engine': 'Engine & Power',
        'transmission': 'Transmission',
        'hydraulic': 'Hydraulic System',
        'wheel-tire': 'Wheels & Tires',
        'mast': 'Mast & Lifting',
        'seat': 'Seat & Cabin',
        'attachment': 'Attachments',
        'heli-hangcha': 'Heli / Hangcha OEM',
        'other': 'Other Parts',
    }
    cat_name = cat_names.get(category_id, 'Forklift Parts')
    bbox2 = draw.textbbox((0, 0), cat_name, font=font_sub)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W-tw2)//2, sub_y), cat_name, fill=TEXT_COLOR, font=font_sub)
    
    # MLIFT watermark
    font_wm = get_font(16)
    draw.text((W-100, H-25), "MLIFT", fill=(180, 185, 190), font=font_wm, anchor="rs")
    
    # Light corner accents
    corner = 30
    draw.line([(margin+corner, margin+6), (margin+6, margin+6), (margin+6, margin+corner)], 
              fill=BORDER_COLOR, width=3)
    draw.line([(W-margin-corner, margin+6), (W-margin-6, margin+6), (W-margin-6, margin+corner)], 
              fill=BORDER_COLOR, width=3)
    draw.line([(margin+corner, H-margin-6), (margin+6, H-margin-6), (margin+6, H-margin-corner)], 
              fill=BORDER_COLOR, width=3)
    draw.line([(W-margin-corner, H-margin-6), (W-margin-6, H-margin-6), (W-margin-6, H-margin-corner)], 
              fill=BORDER_COLOR, width=3)
    
    output_path = os.path.join(PRODUCTS_DIR, filename)
    img.save(output_path, 'PNG')
    return output_path


def main():
    # Products that have AI-generated images (skip these)
    ai_generated = {
        'filter-air.png', 'filter-oil.png', 'filter-diesel.png',
        'filter-water-separator.png', 'filter-hydraulic.png',
        'filter-transmission.png',
        'brake-master-cylinder.png', 'brake-drum.png', 'brake-shoe.png',
        'brake-wheel-cylinder.png', 'brake-handbrake.png', 'brake-booster.png',
        'steering-knuckle.png', 'steering-kingpin.png', 'steering-cylinder.png',
        'steering-link.png', 'steering-axle-shaft.png', 'steering-hub.png',
        'elec-dashboard.png', 'elec-combination-switch.png', 'elec-ignition-switch.png',
        'elec-controller.png', 'elec-sensor.png', 'elec-wiring-harness.png',
        'engine-assembly.png', 'engine-cylinder-liner.png', 'engine-cylinder-head.png',
        'engine-crankshaft.png', 'engine-water-pump.png', 'engine-oil-pump.png',
        'engine-injector.png', 'engine-glow-plug.png',
        'transmission-assembly.png', 'transmission-torque-converter.png',
        'transmission-clutch-disc.png', 'transmission-friction-plate.png',
        'transmission-gear.png', 'transmission-differential.png',
        'hydraulic-gear-pump.png', 'hydraulic-control-valve.png',
        'hydraulic-tilt-cylinder.png', 'hydraulic-lift-cylinder.png',
        'hydraulic-steering-cylinder.png', 'hydraulic-seal-kit.png',
        'wheel-pneumatic.png', 'wheel-solid.png', 'wheel-rim.png',
        'wheel-hub-assy.png', 'wheel-bolt.png',
        'mast-roller.png', 'mast-fork.png', 'mast-chain.png',
        'mast-side-roller.png', 'mast-bearing.png',
        'seat-assembly.png', 'seat-belt.png',
        'cabin-mirror.png', 'cabin-joystick.png', 'cabin-pedal.png',
    }
    
    # All products from gen_images.py
    all_products = [
        # Maintenance
        'filter-air.png', 'filter-oil.png', 'filter-diesel.png',
        'filter-water-separator.png', 'filter-hydraulic.png', 'filter-transmission.png',
        # Brake
        'brake-master-cylinder.png', 'brake-drum.png', 'brake-shoe.png',
        'brake-wheel-cylinder.png', 'brake-handbrake.png', 'brake-booster.png',
        # Steering
        'steering-knuckle.png', 'steering-kingpin.png', 'steering-cylinder.png',
        'steering-link.png', 'steering-axle-shaft.png', 'steering-hub.png',
        # Electrical
        'elec-dashboard.png', 'elec-combination-switch.png', 'elec-ignition-switch.png',
        'elec-controller.png', 'elec-sensor.png', 'elec-wiring-harness.png',
        # Engine
        'engine-assembly.png', 'engine-cylinder-liner.png', 'engine-cylinder-head.png',
        'engine-crankshaft.png', 'engine-water-pump.png', 'engine-oil-pump.png',
        'engine-injector.png', 'engine-glow-plug.png',
        # Transmission
        'transmission-assembly.png', 'transmission-torque-converter.png',
        'transmission-clutch-disc.png', 'transmission-friction-plate.png',
        'transmission-gear.png', 'transmission-differential.png',
        # Hydraulic
        'hydraulic-gear-pump.png', 'hydraulic-control-valve.png',
        'hydraulic-tilt-cylinder.png', 'hydraulic-lift-cylinder.png',
        'hydraulic-steering-cylinder.png', 'hydraulic-seal-kit.png',
        # Wheels
        'wheel-pneumatic.png', 'wheel-solid.png', 'wheel-rim.png',
        'wheel-hub-assy.png', 'wheel-bolt.png',
        # Mast
        'mast-roller.png', 'mast-fork.png', 'mast-chain.png',
        'mast-side-roller.png', 'mast-bearing.png',
        # Seat
        'seat-assembly.png', 'seat-belt.png', 'cabin-mirror.png',
        'cabin-joystick.png', 'cabin-pedal.png',
        # Attachments
        'attach-sideshift.png', 'attach-fork-positioner.png', 'attach-rotator.png',
        # OEM
        'oem-hangcha-parts.png', 'oem-heli-parts.png', 'oem-oem-kit.png',
        # Other
        'other-bearing.png', 'other-fastener.png', 'other-hose.png',
        'other-seal.png', 'other-bushing.png',
    ]
    
    generated = []
    skipped = []
    
    for filename in all_products:
        if filename in ai_generated:
            skipped.append(filename)
            continue
        
        category_id = get_category_id(filename.split('-')[0])
        # Special cases
        if filename.startswith('elec'):
            category_id = 'electrical'
        elif filename.startswith('oem'):
            category_id = 'heli-hangcha'
        elif filename.startswith('cabin'):
            category_id = 'seat'
        
        path = generate_placeholder(filename, category_id)
        generated.append(filename)
        print(f"  ✅ {filename}")
    
    print(f"\nSummary: {len(generated)} generated, {len(skipped)} skipped (AI images)")
    print(f"Total: {len(generated) + len(skipped)}/{len(all_products)} products have images")


if __name__ == '__main__':
    main()
