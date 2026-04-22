# Surya Website

Static site ready for GitHub Pages.

## Files added for GitHub Pages

- `index.html` as the root entry page (copied from `refined.html`)
- `faithful.html` redirecting to `refined.html` so nav links do not 404
- `.nojekyll` to disable Jekyll processing on GitHub Pages

## Publish on GitHub Pages

1. Create a new GitHub repository and push this folder.
2. In GitHub, open repo `Settings` -> `Pages`.
3. Under `Build and deployment`:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your default branch), folder `/ (root)`
4. Save, then wait about 1-3 minutes.
5. Open the URL shown in the Pages settings.

## Local preview

```bash
cd /Users/suryaamitrano/Desktop/Documents/surya-website
python3 -m http.server 5500
```

Then open:

- http://localhost:5500/index.html

## Custom domain (optional)

If you later add a custom domain in GitHub Pages settings, GitHub will create a `CNAME` file automatically.
