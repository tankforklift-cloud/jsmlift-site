#!/usr/bin/env python3
"""Download real product category images from Pexels for all 13 categories."""

import subprocess
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'categories')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# All image URLs from Pexels - REAL photos, not AI-generated
# Each entry: (category_id, [list of fallback URLs])
CATEGORY_IMAGES = {
    'maintenance': [
        # Engine air filter
        'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
    ],
    'brake': [
        # Close-up of brake drum
        'https://images.pexels.com/photos/33653858/pexels-photo-33653858.jpeg',
        # Disc brake caliper
        'https://images.pexels.com/photos/34277923/pexels-photo-34277923.jpeg',
    ],
    'steering-axle': [
        # Steering / mechanical axle parts - heavy truck axle
        'https://images.pexels.com/photos/2196928/pexels-photo-2196928.jpeg',
    ],
    'electrical': [
        # Dashboard / instrument panel
        'https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg',
    ],
    'engine': [
        # Diesel engine on pallet
        'https://images.pexels.com/photos/34640514/pexels-photo-34640514.jpeg',
        # Blue diesel engine
        'https://images.pexels.com/photos/31740442/pexels-photo-31740442.jpeg',
        # Camshaft & valve springs
        'https://images.pexels.com/photos/29226618/pexels-photo-29226618.jpeg',
    ],
    'transmission': [
        # Chrome gear mechanism
        'https://images.pexels.com/photos/19703747/pexels-photo-19703747.jpeg',
        # Vintage engine gears
        'https://images.pexels.com/photos/13528013/pexels-photo-13528013.jpeg',
    ],
    'hydraulic': [
        # Hydraulic cylinder components
        'https://images.pexels.com/photos/10733800/pexels-photo-10733800.jpeg',
        # Industrial machinery part
        'https://images.pexels.com/photos/36463697/pexels-photo-36463697.jpeg',
        # Yellow machinery component
        'https://images.pexels.com/photos/36463274/pexels-photo-36463274.jpeg',
    ],
    'wheel-tire': [
        # Heavy equipment tire / wheel
        'https://images.pexels.com/photos/7337415/pexels-photo-7337415.jpeg',
    ],
    'mast': [
        # Forklift in warehouse
        'https://images.pexels.com/photos/4487446/pexels-photo-4487446.jpeg',
    ],
    'seat': [
        # Industrial / forklift seat
        'https://images.pexels.com/photos/29491402/pexels-photo-29491402.jpeg',
    ],
    'attachment': [
        # Forklift working / attachment
        'https://images.pexels.com/photos/11666905/pexels-photo-11666905.jpeg',
    ],
    'heli-hangcha': [
        # Industrial parts display
        'https://images.pexels.com/photos/28641471/pexels-photo-28641471.jpeg',
        # Engine parts
        'https://images.pexels.com/photos/19703747/pexels-photo-19703747.jpeg',
    ],
    'other': [
        # Assorted industrial parts
        'https://images.pexels.com/photos/36463697/pexels-photo-36463697.jpeg',
        # Hydraulic hoses / machinery
        'https://images.pexels.com/photos/14637831/pexels-photo-14637831.jpeg',
    ],
}

def download(url, output_path, width=600):
    """Download a file using curl to specified width."""
    # Add width parameter for Pexels images
    if 'pexels.com' in url and '?' not in url:
        url = f"{url}?auto=compress&cs=tinysrgb&w={width}"
    
    cmd = [
        'curl', '-s', '-L',
        '--connect-timeout', '15',
        '--max-time', '60',
        '--retry', '2',
        '-H', 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        '-o', output_path,
        url
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=65)
    return result.returncode == 0

def is_image(path):
    """Check if file is a valid image."""
    try:
        result = subprocess.run(['file', path], capture_output=True, text=True)
        return 'image' in result.stdout.lower()
    except:
        return False

def main():
    success = 0
    failed = []
    
    for cat_id, urls in CATEGORY_IMAGES.items():
        print(f"\n📦 {cat_id}")
        output = os.path.join(OUTPUT_DIR, f'{cat_id}.jpg')
        
        downloaded = False
        for i, url in enumerate(urls):
            print(f"  [{i+1}] {url[:90]}...")
            if download(url, output, width=600):
                if is_image(output):
                    size_kb = os.path.getsize(output) // 1024
                    print(f"  ✅ Downloaded ({size_kb}KB)")
                    success += 1
                    downloaded = True
                    break
                else:
                    print(f"  ❌ Not valid image, removing...")
                    os.remove(output)
            else:
                print(f"  ❌ Download failed")
        
        if not downloaded:
            print(f"  ❌ ALL URLs FAILED for {cat_id}")
            failed.append(cat_id)
    
    print(f"\n{'='*50}")
    print(f"✅ {success} succeeded, ❌ {len(failed)} failed")
    if failed:
        print(f"Failed: {', '.join(failed)}")
    
    # List output
    print(f"\n📁 {OUTPUT_DIR}:")
    for f in sorted(os.listdir(OUTPUT_DIR)):
        fpath = os.path.join(OUTPUT_DIR, f)
        print(f"  {f} ({os.path.getsize(fpath)//1024}KB)")

if __name__ == '__main__':
    main()
