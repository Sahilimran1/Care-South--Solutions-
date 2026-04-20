# Care South Solutions

Care South Solutions is a premium static website for a philanthropy-led partnership between Care South Solutions and the Jihan Shariff Foundation. The site is designed to feel warm, editorial, and mission-driven while making email signups and partnership contact easy.

## Tech stack

- Plain HTML
- Plain CSS
- Plain JavaScript
- Google Fonts
- Formspree for forms

## How to run locally

1. Download or clone the project folder.
2. Open `index.html` directly in your browser for a quick preview.
3. For the cleanest local test, run a simple local server from the project root, for example `python -m http.server 8000`.
4. Open `http://localhost:8000` in your browser.

## Folder structure

```text
/
├── index.html
├── about.html
├── mission.html
├── partnership.html
├── join.html
├── contact.html
├── manifest.json
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.jpg
│   ├── logo.png
│   ├── logo-white.png
│   └── images/
└── README.md
```

## Formspree setup

1. Create a free Formspree account.
2. Create one form inside Formspree.
3. Copy the generated form ID.
4. Open `js/main.js`.
5. Replace `[FORM_ID]` in the `FORM_ENDPOINT` constant with your real ID.
6. Test one signup form and the contact form.

## Deployment notes

### Replit hosting

1. Upload the full folder into a Replit static site or HTML/CSS/JS project.
2. Set the project root to this folder.
3. Confirm that `index.html` is the default entry file.
4. Publish the project using Replit's deployment option.

### Connect a custom domain

1. Open your Replit deployment settings.
2. Add your custom domain.
3. Update your DNS records at your domain registrar using the values Replit provides.
4. Wait for DNS propagation.

### SSL on Replit

1. Replit usually provisions SSL automatically after the custom domain is connected.
2. Confirm the site loads over `https`.
3. Update all canonical URLs and Open Graph URLs once the final domain is live.

## Assets needed from Tanna

### Global

- Final transparent `logo.png`
- Final white `logo-white.png`
- Final `og-image.jpg`
- Final `apple-touch-icon.png`
- Final favicon if the placeholder is temporary
- Final primary domain for canonicals and Open Graph URLs
- Final Formspree form ID
- Final email address for contact page
- Final Facebook, Instagram, TikTok, and YouTube URLs

### Home page

- Final hero image of Tanna with children in Kenya or the wheelchair delivery moment
- Wheelchair delivery count for the impact strip
- Partnership profile photos for Tanna and Jihan
- Community rendering or field image and caption
- Three YouTube embed URLs
- Three video titles and descriptions
- YouTube channel URL
- Tanna headshot and alt text

### About page

- Tanna portrait
- Full 2–3 sentence bio intro
- Tanna quote for the mission section
- Expanded philosophy paragraph
- Specific examples of consulting and partnership work

### Mission page

- Photo of children, community, or the Maasai landscape
- Final YouTube link for amplification CTA if needed

### Partnership page

- Tanna photo
- Jihan photo
- Story of how Tanna and Jihan connected
- Final YouTube URL for Jihan's channel

### Join page

- Three real quotes from community members, partners, or early supporters
- Names and locations for each quote

### Contact page

- Final contact email address
- Final social handle URLs

## [FILL IN] checklist by page

### `index.html`
- Full page URL
- Hero image and alt text
- Impact number
- Two profile photos
- Community image and caption
- Three YouTube embeds
- Three video titles
- Three video descriptions
- YouTube channel URL
- Tanna headshot and alt text
- Social URLs in footer

### `about.html`
- Full page URL
- Tanna portrait and alt text
- Tanna intro paragraph
- Tanna quote
- Expanded mission philosophy copy
- Consulting examples
- Social URLs in footer

### `mission.html`
- Full page URL
- Need section image and alt text
- YouTube link in help card
- Social URLs in footer

### `partnership.html`
- Full page URL
- Tanna photo and alt text
- Jihan photo and alt text
- Origin story copy
- Jihan YouTube URL
- Social URLs in footer

### `join.html`
- Full page URL
- Three testimonial quotes
- Three testimonial names and locations
- Social URLs in footer

### `contact.html`
- Full page URL
- Contact email address
- Social URLs in footer and contact card
