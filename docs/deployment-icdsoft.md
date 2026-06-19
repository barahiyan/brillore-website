# Deploying to ICDSoft

This site builds to a plain static `dist/` folder — no Node runtime is required on
the server. The steps below get it live on ICDSoft shared hosting.

---

## 1. Build the site locally

```bash
npm install
npm run build
```

This produces a `dist/` folder containing:

```
dist/
├─ index.html
├─ .htaccess          ← SPA fallback (copied from public/)
├─ favicon.png
├─ robots.txt
└─ assets/            ← hashed JS/CSS + logo/images
```

> Tip: run `npm run preview` first to confirm everything works locally at the
> production build before uploading.

## 2. Upload to `public_html`

Use the ICDSoft **File Manager** or any SFTP/FTP client (FileZilla, WinSCP):

1. Connect to your hosting account.
2. Open the `public_html` directory of your domain (e.g. `brillore.co.tz`).
3. Upload **the contents of `dist/`** — *not* the `dist` folder itself.
   - `index.html`, `.htaccess`, `favicon.png`, `robots.txt`, and the `assets/`
     folder should all sit directly inside `public_html`.

> **Make sure `.htaccess` is uploaded.** Hidden dotfiles are sometimes filtered
> by FTP clients — enable "show hidden files" if you don't see it. Without it,
> refreshing `/services` or `/contact` will return a 404.

## 3. Confirm it works

Open the site and check:

- [ ] `https://yourdomain/` loads (Home)
- [ ] Navigation to **Services** and **Contact** works
- [ ] **Hard refresh** (Ctrl/Cmd + R) on `/services` and `/contact` still loads
      the correct page (this proves `.htaccess` is active)
- [ ] The logo and all assets load (no broken images, no console errors)
- [ ] Mobile layout is clean (no horizontal scroll), menu opens/closes
- [ ] WhatsApp button, phone, and email links work

## 4. The `.htaccess` fallback (why it's needed)

React Router handles routes in the browser. On a static host, a direct request to
`/services` would otherwise look for a folder that doesn't exist. The included
rule rewrites unknown paths back to `index.html` so the router can take over:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

The shipped `.htaccess` also adds gzip compression and long-lived caching for
hashed assets.

> **Deploying into a subfolder** (e.g. `public_html/site/`)? The Vite config uses
> `base: "./"` so relative asset URLs still resolve. Update `RewriteBase` and the
> rewrite target to match the subfolder (e.g. `/site/`).

## 5. Optional: Git / SSH deployment

If your ICDSoft plan supports SSH/Git:

```bash
# On the server (or via deploy hook), after pulling the repo:
npm install
npm run build
# then sync dist/ into public_html, e.g.:
rsync -av --delete dist/ ~/www/yourdomain/public_html/
```

A simple workflow is to build locally and commit only source (the repo ignores
`dist/`), then build on the server or upload `dist/` manually.

---

## Enabling a working contact form (later)

The contact form currently uses a **`mailto` fallback** (opens the visitor's email
app with the message pre-filled). To accept submissions server-side, pick one:

### Option A — PHP handler on ICDSoft (no third party)
1. Add a `contact.php` to `public_html` that reads `$_POST` and calls `mail()`.
2. Change the form in `src/components/contact/ContactForm.tsx` to `fetch('/contact.php', { method: 'POST', body: ... })` instead of the `mailto` redirect.
3. Rebuild and redeploy.

### Option B — Formspree (fastest, no backend code)
1. Create a form at [formspree.io], get your endpoint URL.
2. POST the form data to that endpoint from `handleSubmit`.

### Option C — EmailJS (client-side email)
1. Set up a service + template at [emailjs.com].
2. Use `@emailjs/browser` to send from `handleSubmit`.

Until one of these is wired up, **do not advertise that the form auto-sends** —
the UI is honest about opening the user's email client.
