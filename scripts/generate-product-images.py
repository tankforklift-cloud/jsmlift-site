#!/usr/bin/env python3
"""Generate professional product card images for MLIFT forklift parts website."""

import os
from PIL import Image, ImageDraw, ImageFont
import math

OUTPUT_DIR = "/Users/tank/WorkBuddy/2026-05-28-17-40-45/jsmlift-site/public/images/products"
os.makedirs(OUTPUT_DIR, exist_ok=True)

W, H = 600, 500

# Category-based color schemes (industrial look)
CATEGORY_COLORS = {
    "maintenance": ("#E8F0FE", "#1A56DB", "#3B82F6"),  # blue
    "brake": ("#FEE2E2", "#DC2626", "#EF4444"),         # red
    "steering": ("#FEF3C7", "#D97706", "#F59E0B"),       # amber
    "electrical": ("#E0E7FF", "#4F46E5", "#6366F1"),     # indigo
    "engine": ("#F3E8FF", "#7C3AED", "#8B5CF6"),         # purple
    "transmission": ("#ECFDF5", "#059669", "#10B981"),    # emerald
    "hydraulic": ("#EFF6FF", "#2563EB", "#3B82F6"),      # blue dark
    "wheels": ("#F9FAFB", "#374151", "#6B7280"),          # gray
    "mast": ("#FFF7ED", "#EA580C", "#F97316"),            # orange
    "seat": ("#F0FDF4", "#16A34A", "#22C55E"),            # green
    "attachments": ("#FDF2F8", "#BE185D", "#EC4899"),     # pink
    "oem": ("#F8FAFC", "#0F172A", "#334155"),             # slate
    "other": ("#F5F5F4", "#78716C", "#A8A29E"),           # stone
}

# Try to load a font, fallback to default
FONT_PATH = None
for fp in ["/System/Library/Fonts/Helvetica.ttc", "/System/Library/Fonts/Arial.ttf", 
            "/Library/Fonts/Arial.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]:
    if os.path.exists(fp):
        FONT_PATH = fp
        break

def get_font(size, bold=False):
    if FONT_PATH:
        try:
            return ImageFont.truetype(FONT_PATH, size)
        except:
            pass
    return ImageFont.load_default()

def draw_shape(draw, shape_type, x, y, w, h, color):
    """Draw a simple industrial shape representing the product."""
    if shape_type == "filter":
        # Cylinder/filter shape
        draw.rounded_rectangle([x, y, x+w, y+h], radius=10, fill=color, outline=None)
        draw.rectangle([x+5, y+10, x+w//2-5, y+30], fill="white")
        draw.rectangle([x+5, y+35, x+w//2-5, y+55], fill="white")
    elif shape_type == "cylinder":
        draw.ellipse([x, y, x+w, y+20], fill=color)
        draw.rectangle([x, y+10, x+w, y+h], fill=color)
        draw.ellipse([x, y+h-20, x+w, y+h], fill=color)
    elif shape_type == "disc":
        draw.ellipse([x, y, x+w, y+h], fill=color)
        draw.ellipse([x+w//4, y+h//4, x+3*w//4, y+3*h//4], fill="white")
    elif shape_type == "pump":
        draw.rounded_rectangle([x, y, x+w, y+h], radius=8, fill=color)
        draw.rectangle([x+10, y+h//2-3, x+w-10, y+h//2+3], fill="white")
    elif shape_type == "gear":
        draw.ellipse([x+5, y+5, x+w-5, y+h-5], fill=color)
        draw.ellipse([x+w//4, y+h//4, x+3*w//4, y+3*h//4], fill="white")
    elif shape_type == "valve":
        draw.rounded_rectangle([x, y, x+w, y+h], radius=6, fill=color)
        draw.rectangle([x+15, y, x+25, y+h], fill="white")
        draw.rectangle([x+w-25, y, x+w-15, y+h], fill="white")
    elif shape_type == "tire":
        draw.ellipse([x, y, x+w, y+h], fill="#1F2937")
        draw.ellipse([x+15, y+15, x+w-15, y+h-15], fill=color)
    elif shape_type == "fork":
        draw.rectangle([x+5, y, x+15, y+h], fill=color)
        draw.rectangle([x+w-15, y, x+w-5, y+h], fill=color)
        draw.rectangle([x, y+h-20, x+w, y+h], fill=color)
    elif shape_type == "seat":
        draw.rounded_rectangle([x, y, x+w, y+h//2], radius=10, fill=color)
        draw.rectangle([x+10, y+h//2, x+w, y+h], fill=color)
    elif shape_type == "electrical":
        draw.rounded_rectangle([x, y, x+w, y+h], radius=5, fill=color)
        for i in range(5):
            draw.rectangle([x+15, y+15+i*15, x+w-15, y+25+i*15], fill="white")
    elif shape_type == "engine":
        draw.rounded_rectangle([x, y, x+w, y+h], radius=12, fill=color)
        draw.rectangle([x+w//2-20, y+10, x+w//2+20, y+h-10], fill="white")
    else:
        draw.rounded_rectangle([x, y, x+w, y+h], radius=8, fill=color)

def create_product_image(filename, product_name, category, shape_type):
    """Create a product card image."""
    bg, primary, accent = CATEGORY_COLORS.get(category, CATEGORY_COLORS["other"])
    
    img = Image.new("RGB", (W, H), bg)
    draw = ImageDraw.Draw(img)
    
    # Draw subtle grid pattern
    for i in range(0, W, 40):
        draw.line([(i, 0), (i, H)], fill=primary, width=1)
    draw.rectangle([(0, 0), (W, H)], fill=(255,255,255,180))
    
    # Draw product illustration area
    shape_x = W//2 - 80
    shape_y = 80
    shape_w = 160
    shape_h = 160
    draw_shape(draw, shape_type, shape_x, shape_y, shape_w, shape_h, primary)
    
    # Product name
    font_title = get_font(22, bold=True)
    name = product_name[:35]
    bbox = draw.textbbox((0,0), name, font=font_title)
    tw = bbox[2] - bbox[0]
    draw.text((W//2 - tw//2, 270), name, fill="#1F2937", font=font_title)
    
    # Category badge
    cat_names = {
        "maintenance": "MAINTENANCE PARTS", "brake": "BRAKE SYSTEM",
        "steering": "STEERING & AXLE", "electrical": "ELECTRICAL",
        "engine": "ENGINE & POWER", "transmission": "TRANSMISSION",
        "hydraulic": "HYDRAULIC SYSTEM", "wheels": "WHEELS & TIRES",
        "mast": "MAST & LIFTING", "seat": "SEAT & CABIN",
        "attachments": "ATTACHMENTS", "oem": "OEM PARTS", "other": "OTHER PARTS"
    }
    cat_name = cat_names.get(category, "PARTS")
    font_cat = get_font(13)
    bbox = draw.textbbox((0,0), cat_name, font=font_cat)
    cw = bbox[2] - bbox[0]
    draw.rounded_rectangle([W//2-cw//2-12, 305, W//2+cw//2+12, 328], radius=12, fill=primary)
    draw.text((W//2-cw//2, 306), cat_name, fill="white", font=font_cat)
    
    # MLIFT Watermark
    wm = "MLIFT"
    font_wm = get_font(48, bold=True)
    bbox = draw.textbbox((0,0), wm, font=font_wm)
    wm_w, wm_h = bbox[2]-bbox[0], bbox[3]-bbox[1]
    
    # Semi-transparent watermark
    overlay = Image.new("RGBA", (W, H), (0,0,0,0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.text((W-wm_w-25, H-wm_h-15), wm, fill=(162,156,148,90), font=font_wm)
    img = img.convert("RGBA")
    img = Image.alpha_composite(img, overlay)
    img = img.convert("RGB")
    
    # Bottom accent bar
    img_draw = ImageDraw.Draw(img)
    img_draw.rectangle([(0, H-4), (W, H)], fill=primary)
    
    output_path = os.path.join(OUTPUT_DIR, filename)
    img.save(output_path, "PNG", quality=95)
    print(f"  Created: {filename}")

# Define all products
PRODUCTS = [
    # Maintenance Parts
    ("filter-air.png", "Air Filter Element", "maintenance", "filter"),
    ("filter-oil.png", "Engine Oil Filter", "maintenance", "filter"),
    ("filter-diesel.png", "Diesel Fuel Filter", "maintenance", "filter"),
    ("filter-water-separator.png", "Oil-Water Separator", "maintenance", "filter"),
    ("filter-hydraulic.png", "Hydraulic Oil Filter", "maintenance", "filter"),
    ("filter-transmission.png", "Transmission Oil Filter", "maintenance", "filter"),
    
    # Brake System
    ("brake-master-cylinder.png", "Brake Master Cylinder", "brake", "cylinder"),
    ("brake-drum.png", "Brake Drum Assembly", "brake", "disc"),
    ("brake-shoe.png", "Brake Shoe Set", "brake", "disc"),
    ("brake-wheel-cylinder.png", "Wheel Brake Cylinder", "brake", "cylinder"),
    ("brake-handbrake.png", "Hand Brake Assembly", "brake", "cylinder"),
    ("brake-booster.png", "Brake Booster Pump", "brake", "pump"),
    
    # Steering & Drive Axle
    ("steering-knuckle.png", "Steering Knuckle", "steering", "valve"),
    ("steering-kingpin.png", "King Pin Kit", "steering", "cylinder"),
    ("steering-cylinder.png", "Steering Cylinder", "steering", "cylinder"),
    ("steering-link.png", "Steering Link Rod", "steering", "cylinder"),
    ("steering-axle-shaft.png", "Drive Axle Half Shaft", "steering", "gear"),
    ("steering-hub.png", "Wheel Hub Assembly", "steering", "disc"),
    
    # Electrical & Electronic
    ("elec-dashboard.png", "Dashboard Instrument Panel", "electrical", "electrical"),
    ("elec-combination-switch.png", "Combination Switch", "electrical", "electrical"),
    ("elec-ignition-switch.png", "Ignition Switch", "electrical", "electrical"),
    ("elec-controller.png", "Controller Unit", "electrical", "electrical"),
    ("elec-sensor.png", "Sensor Assembly", "electrical", "electrical"),
    ("elec-wiring-harness.png", "Wiring Harness", "electrical", "electrical"),
    
    # Engine & Power
    ("engine-assembly.png", "Engine Assembly", "engine", "engine"),
    ("engine-cylinder-liner.png", "Cylinder Liner Kit", "engine", "engine"),
    ("engine-cylinder-head.png", "Cylinder Head", "engine", "engine"),
    ("engine-crankshaft.png", "Crankshaft", "engine", "engine"),
    ("engine-water-pump.png", "Water Pump", "engine", "pump"),
    ("engine-oil-pump.png", "Engine Oil Pump", "engine", "pump"),
    ("engine-injector.png", "Fuel Injector", "engine", "cylinder"),
    ("engine-glow-plug.png", "Glow Plug", "engine", "cylinder"),
    
    # Transmission
    ("transmission-assembly.png", "Transmission Assembly", "transmission", "gear"),
    ("transmission-torque-converter.png", "Torque Converter", "transmission", "gear"),
    ("transmission-clutch-disc.png", "Clutch Disc", "transmission", "disc"),
    ("transmission-friction-plate.png", "Friction Plate Set", "transmission", "disc"),
    ("transmission-gear.png", "Transmission Gear", "transmission", "gear"),
    ("transmission-differential.png", "Differential Assembly", "transmission", "gear"),
    
    # Hydraulic System
    ("hydraulic-gear-pump.png", "Hydraulic Gear Pump", "hydraulic", "pump"),
    ("hydraulic-control-valve.png", "Multi-way Control Valve", "hydraulic", "valve"),
    ("hydraulic-tilt-cylinder.png", "Tilt Cylinder", "hydraulic", "cylinder"),
    ("hydraulic-lift-cylinder.png", "Lift Cylinder", "hydraulic", "cylinder"),
    ("hydraulic-steering-cylinder.png", "Power Steering Cylinder", "hydraulic", "cylinder"),
    ("hydraulic-seal-kit.png", "Hydraulic Seal Kit", "hydraulic", "disc"),
    
    # Wheels & Tires
    ("wheel-pneumatic.png", "Pneumatic Tire", "wheels", "tire"),
    ("wheel-solid.png", "Solid Tire", "wheels", "tire"),
    ("wheel-rim.png", "Wheel Rim", "wheels", "disc"),
    ("wheel-hub-assy.png", "Wheel Hub Assembly", "wheels", "disc"),
    ("wheel-bolt.png", "Wheel Bolt & Nut Set", "wheels", "cylinder"),
    
    # Mast & Lifting
    ("mast-roller.png", "Mast Roller Bearing", "mast", "disc"),
    ("mast-fork.png", "Fork Arm", "mast", "fork"),
    ("mast-chain.png", "Lifting Chain", "mast", "cylinder"),
    ("mast-side-roller.png", "Side Roller Assembly", "mast", "disc"),
    ("mast-bearing.png", "Mast Bearing", "mast", "disc"),
    
    # Seat & Cabin
    ("seat-assembly.png", "Seat Assembly", "seat", "seat"),
    ("seat-belt.png", "Safety Belt", "seat", "cylinder"),
    ("cabin-mirror.png", "Rear View Mirror", "seat", "disc"),
    ("cabin-joystick.png", "Control Joystick", "seat", "cylinder"),
    ("cabin-pedal.png", "Accelerator Pedal", "seat", "disc"),
    
    # Attachments
    ("attach-sideshift.png", "Sideshift Attachment", "attachments", "fork"),
    ("attach-fork-positioner.png", "Fork Positioner", "attachments", "fork"),
    ("attach-rotator.png", "Fork Rotator", "attachments", "disc"),
    
    # OEM Parts
    ("oem-hangcha-parts.png", "Hangcha Genuine Parts", "oem", "engine"),
    ("oem-heli-parts.png", "Heli Genuine Parts", "oem", "engine"),
    ("oem-oem-kit.png", "OEM Service Kit", "oem", "gear"),
    
    # Other Parts
    ("other-bearing.png", "Bearing Assembly", "other", "disc"),
    ("other-fastener.png", "Bolt & Fastener Kit", "other", "cylinder"),
    ("other-hose.png", "Hydraulic Hose Assembly", "other", "cylinder"),
    ("other-seal.png", "Oil Seal Set", "other", "disc"),
    ("other-bushing.png", "Bushing & Shim Kit", "other", "disc"),
]

print(f"Generating {len(PRODUCTS)} product images...")
for filename, name, cat, shape in PRODUCTS:
    create_product_image(filename, name, cat, shape)

print(f"\nDone! {len(PRODUCTS)} images created in {OUTPUT_DIR}")
