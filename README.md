# NOVA Recruitment Website

Official responsive static corporate website for NOVA Recruitment Pvt. Ltd., designed for international manpower recruitment, overseas employment vacancies, and employer hiring coordination.

## Tech Stack

- **HTML5 & CSS3:** Semantic markup, custom responsive stylesheet (`css/style.css`, `css/responsive.css`).
- **Bootstrap 5 & Bootstrap Icons:** Grid system, responsive layout, and interface components.
- **Vanilla JavaScript:** Client-side job search, regional destination filtering, dynamic modals, and contact form handling (`js/script.js`, `js/jobs.js`).
- **Zero Backend Dependencies:** 100% static architecture, compatible with modern static web hosts and CDNs.

## Project Structure

```
nova-recruitment/
├── index.html            # Main homepage
├── about.html            # About the company and recruitment ethics
├── services.html         # Recruitment and manpower services
├── jobs.html             # Job vacancy listings and search portal
├── employers.html        # Manpower demand inquiry page
├── contact.html          # Contact form and office location
├── css/                  # Custom CSS stylesheets
├── js/                   # Interactive scripts and job listings
├── assets/               # Brand logos and favicon
├── images/               # Vectors, illustrations, and country flags
├── robots.txt            # Search engine directives
├── sitemap.xml           # Search engine sitemap
├── vercel.json           # Vercel deployment configuration
├── CNAME                 # Custom domain configuration for GitHub Pages
└── .gitignore            # Git ignore rules
```

## Local Development

Preview the website locally using any static web server:

```bash
# Using Python
python -m http.server 8080

# Or using Node.js
npx serve .
```

Open `http://localhost:8080` in your browser.

## Deployment

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Select **Other** as the Framework Preset (Root Directory: `./`).
4. Click **Deploy**.

### GitHub Pages
1. Go to repository **Settings > Pages**.
2. Under **Build and deployment**, select `Deploy from a branch`, choose `main` branch and `/ (root)`.
3. Save to publish.

## Custom Domain

The site is configured for the production custom domain:
- `https://novarecruitment.com.np`
