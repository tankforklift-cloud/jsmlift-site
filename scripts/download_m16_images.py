"""Download GÖWEIL G1015 images for MLIFT M16 reference."""
import urllib.request
import os
import time

BASE = "https://www.goeweil.com"
OUT = "/Users/tank/WorkBuddy/2026-05-28-17-40-45/jsmlift-site/public/images/m16"

images = [
    # Main product shots / field use
    ("m16-main.jpg", "/fileadmin/_processed_/a/f/csm_rundballen-wickelmaschine_g1015_bauweise_goeweil_aa2ed37866.jpg"),
    ("m16-field-1.jpg", "/fileadmin/_processed_/6/6/csm_rundballen-wickelmaschine_g1015_feldeinsatz2_goeweil_bbb82bc15b.jpg"),
    ("m16-field-2.jpg", "/fileadmin/_processed_/6/c/csm_rundballen-wickelmaschine_g1015_lader-stapeln_goeweil_a32e651eb5.jpg"),
    ("m16-pickup.jpg", "/fileadmin/_processed_/e/2/csm_rundballen-wickelmaschine_g1015_ballen-aufnehmen_goeweil_e6cce863ca.jpg"),
    ("m16-wrapping.jpg", "/fileadmin/_processed_/b/6/csm_rundballen-wickelmaschine_g1015_wickelvorgang_goeweil_619a6ebb08.jpg"),
    ("m16-side.jpg", "/fileadmin/_processed_/6/3/csm_rundballen-wickelmaschine_g1015_freie-sicht_goeweil_7cfb468c84.jpg"),
    ("m16-tipper.jpg", "/fileadmin/_processed_/e/3/csm_rundballen-wickelmaschine_g1015_ballen-mit-ballenaufsteller_goeweil_02b84772bc.jpg"),
    # Detail shots
    ("m16-control.jpg", "/fileadmin/_processed_/b/e/csm_rundballen-wickelmaschine_g1015_steuerung_goeweil_0864c425f3.jpg"),
    ("m16-hydraulic.jpg", "/fileadmin/_processed_/4/6/csm_rundballen-wickelmaschine_g1015_walze_goeweil_261951bae0.jpg"),
    ("m16-rollers.jpg", "/fileadmin/_processed_/b/c/csm_rundballen-wickelmaschine_g1015_walzen_goeweil_fa334042d2.jpg"),
    ("m16-arm.jpg", "/fileadmin/_processed_/1/c/csm_rundballen-wickelmaschine_g1015_wickelarm_goeweil_67d8c77435.jpg"),
    ("m16-cutter.jpg", "/fileadmin/_processed_/5/b/csm_rundballen-wickelmaschine_g1015_folie-cut_goeweil_b90f400c07.jpg"),
    ("m16-toplink.jpg", "/fileadmin/_processed_/2/d/csm_rundballen-wickelmaschine_g1015_hydraulischer-oberlenker_goeweil_792d974299.jpg"),
    ("m16-tipper-detail.jpg", "/fileadmin/_processed_/a/c/csm_rundballen-wickelmaschine_g1015_ballenaufsteller_goeweil_29b251633e.jpg"),
]

os.makedirs(OUT, exist_ok=True)

for filename, path in images:
    url = BASE + path
    filepath = os.path.join(OUT, filename)
    try:
        print(f"Downloading {filename}...")
        urllib.request.urlretrieve(url, filepath)
        size = os.path.getsize(filepath)
        print(f"  ✓ {filename} ({size:,} bytes)")
        time.sleep(0.5)
    except Exception as e:
        print(f"  ✗ {filename}: {e}")

print("\nDone!")
