"""
Generate a QR code for the published website.
Usage:
  python -m pip install "qrcode[pil]"
  python generate_qr.py https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
"""
import sys
from pathlib import Path

try:
    import qrcode
except ImportError:
    raise SystemExit('Install dependency first: python -m pip install "qrcode[pil]"')

if len(sys.argv) != 2 or not sys.argv[1].startswith(("https://", "http://")):
    raise SystemExit("Usage: python generate_qr.py https://your-published-site-url/")

url = sys.argv[1]
qr = qrcode.QRCode(version=None, error_correction=qrcode.constants.ERROR_CORRECT_H,
                   box_size=12, border=4)
qr.add_data(url)
qr.make(fit=True)
image = qr.make_image(fill_color="black", back_color="white")
out = Path(__file__).with_name("zindajan_qr.png")
image.save(out)
print(f"QR code saved to: {out}")
print("Scan it using a phone that is not connected to your computer.")
