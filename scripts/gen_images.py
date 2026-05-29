#!/usr/bin/env python3
"""Helper: rename generated images to match product references."""

import os
import sys
import json

PRODUCTS_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'products')

# Mapping: product image filename -> prompt for ImageGen
PRODUCT_PROMPTS = {
    # === 1. Maintenance Parts ===
    'filter-air.png': 'forklift air filter element cylindrical white pleated paper filter media metal end caps, professional product photography, white background, studio lighting, heavy equipment spare part',
    'filter-oil.png': 'spin-on engine oil filter metal canister painted black exterior threaded base, forklift spare part, professional product photography, white background studio lighting',
    'filter-diesel.png': 'diesel fuel filter assembly metal cylindrical body water drain valve bottom threaded connections, forklift heavy machinery part, product photography white background',
    'filter-water-separator.png': 'oil water separator fuel filter assembly transparent bowl bottom metal top housing fittings, diesel forklift part, professional product photo white background',
    'filter-hydraulic.png': 'hydraulic oil filter element metal mesh cylindrical construction end fittings, industrial forklift part, product photography white background studio light',
    'filter-transmission.png': 'transmission oil filter element synthetic fiber media with O-ring seal, powershift gearbox filter, product photography white background',

    # === 2. Brake System ===
    'brake-master-cylinder.png': 'hydraulic brake master cylinder with vacuum booster assembly, metal casting with reservoir, forklift brake part, professional product photography white background',
    'brake-drum.png': 'cast iron brake drum precision machined cylindrical shape, heavy duty forklift brake component, product photography white background studio lighting',
    'brake-shoe.png': 'brake shoe set non-asbestos friction material bonded curved metal shoes, forklift brake parts, professional product photography white background',
    'brake-wheel-cylinder.png': 'wheel brake cylinder metal casting with rubber dust boots bleeder valve, drum brake hydraulic component, product photography white background',
    'brake-handbrake.png': 'hand brake parking brake lever assembly ratchet mechanism metal handle, forklift parking brake, product photography white background',
    'brake-booster.png': 'hydraulic brake booster pump metal body with fluid ports, power assisted braking component, forklift part, product photography white background',

    # === 3. Steering & Drive Axle ===
    'steering-knuckle.png': 'steering knuckle forged steel component with bearings taper, forklift steering axle part, professional product photography white background',
    'steering-kingpin.png': 'king pin kit steel pin thrust bearings washers seals, forklift steering repair kit, product photography white background',
    'steering-cylinder.png': 'double acting steering cylinder hydraulic chrome rod metal body, forklift steering component, product photo white background',
    'steering-link.png': 'steering link rod tie rod adjustable metal bar ball joint ends, forklift steering linkage, product photography white background',
    'steering-axle-shaft.png': 'drive axle half shaft splined steel shaft CV joint, forklift drivetrain component, product photography white background',
    'steering-hub.png': 'wheel hub assembly steel with studs bearings oil seal, forklift drive axle hub, product photography white background',

    # === 4. Electrical & Electronic ===
    'elec-dashboard.png': 'forklift dashboard instrument panel LCD analog gauges fuel temperature hour meter, heavy equipment display, product photography white background',
    'elec-combination-switch.png': 'combination switch steering column multi function turn signal wiper light control, forklift electrical part, product photography white background',
    'elec-ignition-switch.png': 'ignition key switch metal barrel with key ACC ON START positions, forklift electrical component, product photo white background',
    'elec-controller.png': 'MOSFET motor controller unit aluminum heatsink electrical connectors, forklift traction controller, product photography white background',
    'elec-sensor.png': 'forklift sensor assembly temperature pressure speed level, electronic component with connector, product photography white background',
    'elec-wiring-harness.png': 'wiring harness bundle labeled wires connectors Deutsch Weatherpack, forklift electrical harness, product photography white background',

    # === 5. Engine & Power ===
    'engine-assembly.png': 'forklift diesel engine assembly 490 series gray cast iron block, complete industrial engine, product photography white background studio',
    'engine-cylinder-liner.png': 'cylinder liner kit cast iron liners aluminum pistons rings pins, engine rebuild parts, product photography white background',
    'engine-cylinder-head.png': 'cylinder head assembly cast iron with valves springs guides, engine top component, product photography white background',
    'engine-crankshaft.png': 'forged steel crankshaft precision ground journals counterweights, engine rotating component, product photography white background',
    'engine-water-pump.png': 'engine water pump centrifugal cast iron housing pulley, cooling system component, product photography white background',
    'engine-oil-pump.png': 'engine oil pump external gear type metal housing, lubrication system component, product photography white background',
    'engine-injector.png': 'diesel fuel injector nozzle metal body precision machined, engine fuel system component, product photography white background',
    'engine-glow-plug.png': 'glow plug heating element metal body threaded M10, diesel engine cold start component, product photography white background',

    # === 6. Transmission ===
    'transmission-assembly.png': 'powershift transmission assembly metal housing with shafts ports, forklift gearbox, professional product photography white background',
    'transmission-torque-converter.png': 'hydraulic torque converter metal housing circular shape, forklift transmission component, product photography white background',
    'transmission-clutch-disc.png': 'clutch disc paper based friction material circular disc splined center, transmission clutch pack part, product photography white background',
    'transmission-friction-plate.png': 'friction plate set paper and steel separator plates stacked, transmission clutch overhaul kit, product photography white background',
    'transmission-gear.png': 'transmission gear precision cut hardened steel gear teeth, powershift gearbox component, product photography white background',
    'transmission-differential.png': 'differential assembly bevel gears side gears spider, drive axle component, product photography white background',

    # === 7. Hydraulic System ===
    'hydraulic-gear-pump.png': 'hydraulic gear pump aluminum body with ports shaft, high pressure industrial pump, product photography white background',
    'hydraulic-control-valve.png': 'multi way control valve monoblock spool valve hydraulic ports levers, forklift hydraulic control, product photography white background',
    'hydraulic-tilt-cylinder.png': 'tilt cylinder double acting hydraulic chrome rod metal body, forklift mast tilt component, product photography white background',
    'hydraulic-lift-cylinder.png': 'lift cylinder single acting hydraulic large chrome rod, forklift mast lifting component, product photography white background',
    'hydraulic-steering-cylinder.png': 'power steering cylinder double acting equal area clevis mounts, forklift steering hydraulic, product photography white background',
    'hydraulic-seal-kit.png': 'hydraulic seal kit polyurethane rubber O-rings wipers piston rod seals, cylinder repair kit, product photography white background',

    # === 8. Wheels & Tires ===
    'wheel-pneumatic.png': 'pneumatic tire 28x9-15 heavy duty tread pattern black rubber, forklift tire, product photography white background studio',
    'wheel-solid.png': 'solid tire press-on type black rubber industrial, forklift solid tyre, product photography white background',
    'wheel-rim.png': 'steel wheel rim with bolt holes circular metal, forklift wheel component, product photography white background',
    'wheel-hub-assy.png': 'wheel hub assembly steel with bearings pre-installed studs, forklift hub component, product photography white background',
    'wheel-bolt.png': 'wheel bolt nut set high strength steel zinc plated threaded studs, forklift wheel fasteners, product photography white background',

    # === 9. Mast & Lifting ===
    'mast-roller.png': 'mast roller bearing heavy duty sealed double lip, forklift mast component, product photography white background',
    'mast-fork.png': 'fork arm forged steel L-shape ISO standard, forklift fork tine, product photography white background studio',
    'mast-chain.png': 'leaf chain lifting chain metal links zinc plated, forklift mast chain, product photography white background',
    'mast-side-roller.png': 'side roller assembly with bearing shaft snap rings, forklift mast component, product photography white background',
    'mast-bearing.png': 'thrust bearing set ball roller taper types, forklift mast bearing, product photography white background',

    # === 10. Seat & Cabin ===
    'seat-assembly.png': 'forklift seat ergonomic mechanical suspension black vinyl, operator seat with adjustment, product photography white background',
    'seat-belt.png': 'safety seat belt 3 point retractable black webbing buckle, forklift safety restraint, product photography white background',
    'cabin-mirror.png': 'rear view mirror wide angle rectangular glass ball joint mount, forklift mirror, product photography white background',
    'cabin-joystick.png': 'control joystick ergonomic hydraulic with buttons knob, forklift operator control, product photography white background',
    'cabin-pedal.png': 'accelerator pedal electronic hall sensor metal pedal assembly, forklift drive control, product photography white background',

    # === 11. Attachments ===
    'attach-sideshift.png': 'sideshift attachment hydraulic cylinder lateral fork movement, forklift attachment, product photography white background',
    'attach-fork-positioner.png': 'fork positioner hydraulic adjustable fork spread cylinder, forklift attachment, product photography white background',
    'attach-rotator.png': 'fork rotator hydraulic 360 degree continuous rotation, forklift attachment, product photography white background',

    # === 12. Heli / Hangcha OEM ===
    'oem-hangcha-parts.png': 'Hangcha OEM forklift genuine parts set filters seals brake components, product photography white background',
    'oem-heli-parts.png': 'Heli OEM forklift genuine parts master cylinder seal kit filters, product photography white background',
    'oem-oem-kit.png': 'OEM service maintenance kit box filters seals gaskets, forklift 500hr service kit, product photography white background',

    # === 13. Other Parts ===
    'other-bearing.png': 'bearing assembly ball roller taper types steel, industrial bearing set, product photography white background',
    'other-fastener.png': 'bolt fastener kit high strength grade steel zinc black oxide assorted sizes, product photography white background',
    'other-hose.png': 'hydraulic hose assembly high pressure wire braid crimped fittings JIC BSP, product photography white background',
    'other-seal.png': 'oil seal set NBR FKM rubber TC SC TB profile assorted sizes, product photography white background',
    'other-bushing.png': 'bushing shim kit bronze steel plain flanged thrust washers, industrial bushing set, product photography white background',
}


def get_remaining():
    """Return list of products that still need images."""
    remaining = []
    for filename in PRODUCT_PROMPTS:
        path = os.path.join(PRODUCTS_DIR, filename)
        if not os.path.exists(path):
            remaining.append(filename)
    return remaining


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--list-remaining':
        for f in get_remaining():
            print(f"{f} | {PRODUCT_PROMPTS[f]}")
    elif len(sys.argv) > 1 and sys.argv[1] == '--count':
        total = len(PRODUCT_PROMPTS)
        done = total - len(get_remaining())
        print(f"{done}/{total} done, {len(get_remaining())} remaining")
    else:
        print(f"Total products: {len(PRODUCT_PROMPTS)}")
        print(f"Remaining: {len(get_remaining())}")
        for f in get_remaining():
            print(f"  {f}")
