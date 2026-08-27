from PIL import Image, ImageDraw

# ---- Create favicon (256x256 with funnel mark) ----
# Funnel: three descending centered bars, electric blue #0053fd on white
SIZE = 256
img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))  # transparent bg
d = ImageDraw.Draw(img)

blue = (0, 83, 253, 255)  # #0053fd

# Bar geometry (centered, descending width) scaled from logo 48x48
# logo rects: (8,10,32,6), (13,21,22,6), (18,32,12,6) -> map to 256 canvas
def scale(x, y, w, h):
    s = SIZE / 48.0
    return (int(x*s), int(y*s), int((x+w)*s), int((y+h)*s))

d.rectangle(scale(8, 10, 32, 6), fill=blue)
d.rectangle(scale(13, 21, 22, 6), fill=blue)
d.rectangle(scale(18, 32, 12, 6), fill=blue)

# Rounded corners look nicer for favicon
img = img.convert("RGBA")

img.save("/Users/leroyoakley/gtm-wiki/static/img/favicon.png")
print("favicon.png written", img.size)
