# Zindajan Response Room

A short, black-interface interactive opening for a student presentation on SDG 10 and earthquake-displaced children in Herat, Afghanistan.

## 1. Preview locally
Open this folder in VS Code. Use the Live Server extension, or run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## 2. Publish it so the committee can scan the QR code
A QR code pointing to `localhost` will NOT work on committee members' phones.
1. Create a GitHub repository.
2. Upload the contents of this folder.
3. In the repository, open Settings → Pages.
4. Choose deployment from the `main` branch and `/ (root)`.
5. Wait for GitHub Pages to publish the site. Copy its public HTTPS URL.

## 3. Generate the QR code with Python
Install the package:
```bash
python -m pip install "qrcode[pil]"
```
Then run:
```bash
python generate_qr.py https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```
The image `zindajan_qr.png` will be created in this folder.

## 4. Optional background audio
If you have permission to use a suitable instrumental track, place it in this folder and name it `ambient.mp3`. The visitor must press "Sound off" to enable it; sound is not autoplayed. Keep the presentation fully understandable without audio.

## Evidence and careful interpretation
- **44% water-point access finding:** ACAPS, *Earthquakes in Herat province*, 12 October 2023, citing an IRC assessment conducted on 9 October 2023. It refers to assessment respondents, not 44% of Herat's entire population.
- **258 water systems:** UNICEF Afghanistan, 22 March 2024, describes water systems destroyed across the western province after the October 2023 earthquakes.
- **244 of 380 children:** WHO Afghanistan Earthquake Health Situation Report No. 4, October 2023. This is the reported group at Gazarga transit centre in Herat City, not the total displaced population of Zindajan.
- The 44%, 258 and 244/380 figures have different geographic scopes, dates and denominators. Do not combine them into one population estimate.
- The Portable Learning Identity is presented as a student policy proposal, not an existing Afghan government service.

## Sources
1. ACAPS, *Earthquakes in Herat province*, 12 October 2023: https://www.acaps.org/fileadmin/Data_Product/Main_media/20231012_ACAPS_Briefing_note_Afghanistan_Earthquakes_in_Herat_province.pdf
2. International Rescue Committee, *IRC Afghanistan, Earthquake Rapid Assessment*, October 2023: https://www.rescue.org/sites/default/files/2023-10/Herat%20earthquake%20IRC%20assessment.pdf
3. UNICEF Afghanistan, *Safe water, sanitation facilities and supplies for every child*, 22 March 2024: https://www.unicef.org/afghanistan/stories/safe-water-sanitation-facilities-and-supplies-every-child
4. WHO, *Afghanistan Earthquake Health Situation Report No. 4*, October 2023: https://www.emro.who.int/images/stories/afghanistan/Earthquake_in_Herat_AFGHANISTAN_Health_Sitrep_04.pdf
