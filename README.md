# HUD Workbench (installable web app)

Game-style heads-up display for AR glasses. Black background reads as clear on see-through glasses.

## Put it online (GitHub Pages)
1. On github.com click **New repository**. Name it `hud`. Keep it Public (free Pages needs Public). Create it.
2. On the empty repo page click **uploading an existing file**.
3. Unzip this folder, then drag **everything inside it** (including the `vendor` folder and the files starting with a dot, like `.nojekyll`) into the upload box. Commit.
4. Repo **Settings > Pages**. Under Branch pick `main` and `/ (root)`. Save.
5. After a minute or two the address `https://YOUR-NAME.github.io/hud/` works.

## Install on the phone
1. Open that address in **Chrome** on the S26.
2. Chrome menu (three dots) > **Add to Home screen** (or **Install app**).
3. Open it from the home screen. It runs fullscreen in landscape.

## Go live
1. Tap the small "controls" text at the bottom (or press C).
2. Tap **Start live sensors**. Allow **Location** and, if asked, motion sensors.
3. Heading uses your direction of travel while moving and the phone compass when still. In a pocket the compass is the phone's, not your head's.
4. **Scan item** asks for the camera, loads a small object-detection model (about 5 MB, once), then looks for about 2.5 seconds.

## What is real vs demo
- Real: map and buildings (OpenStreetMap via OpenFreeMap), GPS position and speed, heading, battery, network, temperature and air quality (Open-Meteo), camera scan (generic objects such as scissors, phone, bottle).
- Estimated: steps (distance walked divided by stride).
- Demo: Tasks, Comms messages and calls, pulse, noise.

## Notes
- Map tiles and the scan model need a data connection. The app shell works offline.
- Credit: map data © OpenStreetMap contributors, tiles by OpenFreeMap, map engine MapLibre GL JS (BSD license, included in `vendor/`).
