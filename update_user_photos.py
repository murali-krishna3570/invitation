import os
import shutil
from PIL import Image

brain_dir = r"C:\Users\mural\.gemini\antigravity-ide\brain\7e596a56-535a-42b4-a227-0b4ffdcf4183"
venue_uploaded = os.path.join(brain_dir, "media__1786973885510.jpg")
couple_uploaded = os.path.join(brain_dir, "media__1786973885533.jpg")

src_dir = os.path.join(os.getcwd(), 'src', 'assets')
pub_dir = os.path.join(os.getcwd(), 'public', 'assets')

os.makedirs(src_dir, exist_ok=True)
os.makedirs(pub_dir, exist_ok=True)

# 1. Process Venue Photo
venue_img = Image.open(venue_uploaded)
if venue_img.mode != 'RGB':
    venue_img = venue_img.convert('RGB')

venue_jpg_src = os.path.join(src_dir, 'venue.jpg')
venue_jpg_pub = os.path.join(pub_dir, 'venue.jpg')
venue_webp_src = os.path.join(src_dir, 'venue.webp')
venue_webp_pub = os.path.join(pub_dir, 'venue.webp')

venue_img.save(venue_jpg_src, 'JPEG', quality=88)
shutil.copyfile(venue_jpg_src, venue_jpg_pub)

venue_img.save(venue_webp_src, 'WEBP', quality=84, method=6)
shutil.copyfile(venue_webp_src, venue_webp_pub)

print(f"Venue photo updated: {os.path.getsize(venue_webp_src)/1024:.1f} KB")

# 2. Process Couple Photo (Used for both cover circular frame and landing standing couple)
couple_img = Image.open(couple_uploaded)
if couple_img.mode != 'RGB':
    couple_img = couple_img.convert('RGB')

targets = ['couple.png', 'couple-standing.png']
targets_webp = ['couple.webp', 'couple-standing.webp']

for t_png, t_webp in zip(targets, targets_webp):
    png_src = os.path.join(src_dir, t_png)
    png_pub = os.path.join(pub_dir, t_png)
    webp_src = os.path.join(src_dir, t_webp)
    webp_pub = os.path.join(pub_dir, t_webp)

    couple_img.save(png_src, 'PNG')
    shutil.copyfile(png_src, png_pub)

    couple_img.save(webp_src, 'WEBP', quality=84, method=6)
    shutil.copyfile(webp_src, webp_pub)

    print(f"Couple photo updated for {t_webp}: {os.path.getsize(webp_src)/1024:.1f} KB")
