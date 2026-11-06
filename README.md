# VVFC poster supplement — placeholder

A simple GitHub Pages landing page for the MaTiPS 2026 poster. The page identifies the project and says that the supplement will be updated. No build tools, JavaScript, external fonts or packages are required.

## Files to upload

- `index.html` — page content.
- `styles.css` — layout and colours.
- `README.md` — these instructions.

Upload these files directly to the repository's top level. Do not upload the ZIP itself or put the files inside an extra folder.

## Publish on GitHub Pages

1. Extract this ZIP.
2. In your repository, choose **Add file → Upload files**. If the repository is empty, use its **uploading an existing file** link. Upload the three files and commit them to the default branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select your default branch, usually **main**, and **/(root)**. Click **Save**.
6. Wait for deployment, then open the published URL shown on the Pages settings screen. If necessary, check the repository's **Actions** tab for its status.

GitHub's official instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## QR code

Make the QR code point to the published **GitHub Pages website**, not the repository or a file download. Copy the exact URL shown in **Settings → Pages** and open it on your phone before adding the QR code to the poster.

For a normal project repository, the address usually has this form:

`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

The real address comes from GitHub; replace neither part by guessing. A repository named `YOUR_USERNAME.github.io` instead uses the account's root Pages address.

## Populate the supplement later

Edit `index.html`: replace the `<section class="notice">` placeholder with your content and add more sections before `</main>`. Edit `styles.css` if you want to change the appearance.

Suggested later sections: poster PDF, integration method, figures, code and recorded outputs, limitations, references and acknowledgements. None of those are linked yet, so visitors will not encounter empty download buttons.

Keep `index.html` at the same published location. Updating its contents on the publishing branch will update the same website, so the QR code can stay unchanged.

To preview locally, double-click `index.html` and keep `styles.css` beside it.
