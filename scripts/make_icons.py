from PIL import Image, ImageDraw

# Recreate the funnel mark and write favicon.ico (multi-size) + logo.png
blue = (0, 83, 253, 255)

def funnel_img(size, bg_alpha=0):
    img = Image.new("RGBA", (size, size), (0, 0, 0, bg_alpha))
    d = ImageDraw.Draw(img)
    s = size / 48.0
    def rect(x, y, w, h, r=None):
        d.rectangle([x*s, y*s, (x+w)*s, (y+h)*s], fill=blue)
    rect(8, 10, 32, 6)
    rect(13, 21, 22, 6)
    rect(18, 32, 12, 6)
    return img

# favicon.ico: 32 and 16 sizes
img32 = funnel_img(32)
img32.save("/Users/leroyoakley/gtm-wiki/static/img/favicon.ico", sizes=[(32, 32), (16, 16)])
print("favicon.ico written")

# logo.png (used as navbar logo if referenced)
img256 = funnel_img(256)
img256.save("/Users/leroyoakley/gtm-wiki/static/img/logo.png")
print("logo.png written")

# favicon.svg - make a clean SVG of the funnel for browser tab crispness
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="#0053fd"><rect x="8" y="10" width="32" height="6"/><rect x="13" y="21" width="22" height="6"/><rect x="18" y="32" width="12" height="6"/></g></svg>'''
with open("/Users/leroyoakley/gtm-wiki/static/img/favicon.svg", "w") as f:
    f.write(svg)
print("favicon.svg written")
