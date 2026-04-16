# Coffee Flavor Map

An interactive static infographic comparing the flavor profiles of 15 single-origin coffees across six dimensions — Fruity, Floral, Sweet, Nutty, Spicy, and Earthy. Each coffee is displayed as a radar chart with clickable dimension dots that reveal tasting notes and flavor highlights. Cards can be sorted by any dimension from the header legend.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import Git Repository**.
3. Select the `coffee-flavor-map` repo. Vercel auto-detects Vite and sets:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
4. Click **Deploy**. Your live URL appears on the project dashboard once the build finishes.
