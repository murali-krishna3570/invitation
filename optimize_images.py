import os
from PIL import Image

src_dir = os.path.join(os.getcwd(), 'src', 'assets')
pub_dir = os.path.join(os.getcwd(), 'public', 'assets')

def optimize_image(filename):
    src_file = os.path.join(src_dir, filename)
    if not os.path.exists(src_file):
        return

    orig_size = os.path.getsize(src_file)
    im = Image.open(src_file)

    # Convert RGBA / RGB
    base, ext = os.path.splitext(filename)
    webp_filename = f"{base}.webp"
    
    webp_src = os.path.join(src_dir, webp_filename)
    webp_pub = os.path.join(pub_dir, webp_filename)

    # Save as webp with quality=82
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        im.save(webp_src, 'WEBP', quality=82, method=6)
    else:
        im_rgb = im.convert('RGB')
        im_rgb.save(webp_src, 'WEBP', quality=82, method=6)

    # Copy to public/assets
    if os.path.exists(pub_dir):
        import shutil
        shutil.copyfile(webp_src, webp_pub)

    webp_size = os.path.getsize(webp_src)
    print(f"Compressed {filename}: {orig_size / 1024:.1f} KB -> {webp_size / 1024:.1f} KB (saved {100 - (webp_size/orig_size*100):.1f}%)")

files = ['ganesha.png', 'couple-standing.png', 'elephants.png', 'couple.png', 'venue.jpg', 'mandala.png', 'temple.png', 'rays.png', 'divider.png', 'om.png']

for f in files:
    optimize_image(f)
