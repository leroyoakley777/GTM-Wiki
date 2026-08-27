from PIL import Image, ImageDraw

# Standard OG image size: 1200x630
W, H = 1200, 630
bg = (10, 12, 22)  # deep near-black navy
img = Image.new("RGB", (W, H), bg)
d = ImageDraw.Draw(img)

blue = (0, 83, 253)  # #0053fd funnel blue
white = (245, 247, 250)

# Large funnel mark centered horizontally, upper area
# Scale logo 48x48 up. Bar widths: 32,22,12 ; positions from top.
bar_s = 9.0
fw = 32 * bar_s  # 288
fh = 6 * bar_s   # 54
fx0 = W // 2 - (fw // 2)  # center
bars = [
    (0, 0, 32, 6),
    (5, 11, 22, 6),
    (10, 22, 12, 6),
]
for (bx, by, bw, bh) in bars:
    x = fx0 + (bx - (32 - bw)) * bar_s  # keep centered: left inset grows
    # simpler: center each bar
    x = W // 2 - (bw * bar_s) // 2
    y = 110 + by * bar_s
    d.rectangle([x, y, x + bw * bar_s, y + bh * bar_s], fill=blue)

# Title text below funnel
from PIL import ImageFont
def load_font(size, bold=False):
    import glob, os
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Unicode.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, size)
            except Exception:
                pass
    return ImageFont.load_default()

title_font = load_font(84, bold=True)
sub_font = load_font(40)

# Title
title = "Open GTM Wiki"
tw = d.textlength(title, font=title_font)
d.text(((W - tw) // 2, 380), title, fill=white, font=title_font)

# Subtitle
sub = "building the best place to learn GTM"
sw = d.textlength(sub, font=sub_font)
d.text(((W - sw) // 2, 500), sub, fill=(120, 140, 180), font=sub_font)

img.save("/Users/leroyoakley/gtm-wiki/static/img/og-image.jpg", quality=92)
print("og-image.jpg written", img.size)
