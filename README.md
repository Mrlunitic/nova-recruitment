# NOVA Recruitment Pvt. Ltd. – Corporate Static Website

A premium, modern, fully responsive, and legally compliant corporate website built for **NOVA Recruitment Pvt. Ltd.** (Budhanilakantha-12, Kathmandu, Nepal). Inspired by modern international recruitment websites, designed with corporate navy-blue and gold accents, clear navigation, and static-ready architecture.

---

## 1. Company Information & Branding

- **Company Name:** NOVA Recruitment Pvt. Ltd.
- **Address:** Budhanilakantha-12, Kathmandu, Nepal
- **Phone:** `9851122545` / `+977 9851122545`
- **Email:** `info@novarecruitment.com.np`
- **Website:** `novarecruitment.com.np`
- **WhatsApp Support:** `+977 9851122545`

### Brand Color Palette
- **Navy Blue:** `#09265B` (Primary corporate brand color)
- **Royal Blue:** `#123D85` (Secondary brand and gradients)
- **Gold Accent:** `#D9A52E` (Highlights, CTAs, icons)
- **White:** `#FFFFFF`
- **Light Grey:** `#F5F7FA` (Section backgrounds and cards)

---

## 2. Technology Stack

- **HTML5:** Semantic, accessible, and SEO-optimized markup.
- **CSS3:** Custom responsive layout (`css/style.css`, `css/responsive.css`), smooth transitions, CSS variables.
- **JavaScript (Vanilla):** Dynamic job listings controller, live keyword search, category & country filtering, modal management, client-side form validation, and WhatsApp pre-fill URL generation.
- **Bootstrap 5:** Grid system, responsive navigation, accordions, and modals.
- **Bootstrap Icons & Google Fonts:** High-performance vector icons and modern typography (*Plus Jakarta Sans* & *Outfit*).

> **Zero Backend Dependencies:** No PHP, Node.js backend server, database, or login panels required. Works seamlessly as a static site hosted anywhere.

---

## 3. Project Directory Structure

```
nova-recruitment/
├── index.html            # Complete master homepage (All 13 required sections)
├── about.html            # Corporate profile, mission, vision, Nepal heritage, ethical framework
├── services.html         # 6 core services breakdown, recruitment flowchart, legal compliance
├── jobs.html             # Interactive jobs portal with live search, filters, details modal
├── employers.html        # B2B manpower request portal, demand letter guide, inquiry form
├── contact.html          # Contact details, interactive form, verified Google Map embed, directions
├── css/
│   ├── style.css         # Main corporate stylesheet and component classes
│   └── responsive.css    # Mobile, tablet, and responsive breakpoint rules
├── js/
│   ├── script.js         # Navigation, forms, tabs, scroll events, feedback alerts
│   └── jobs.js           # Sample job vacancy data array, renderers, search, WhatsApp links
├── assets/
│   ├── nova-logo.svg     # Scalable vector logo (Navy and Gold)
│   ├── nova-logo-white.svg # White vector logo for dark footer and hero
│   ├── nova-logo.png     # High-resolution raster PNG logo
│   └── favicon.svg       # Favicon
├── images/
│   ├── hero-network.svg  # Global recruitment flight network map with Kathmandu hub
│   ├── nepal-himalayas.svg # Mount Everest, Himalayan range, stupa, and prayer flags
│   ├── process-roadmap.svg # 5-step visual recruitment roadmap
│   └── flags/            # SVG vector flags for 15 destinations + Nepal
│       ├── nepal.svg, uae.svg, saudi-arabia.svg, qatar.svg, kuwait.svg, oman.svg, bahrain.svg
│       ├── malaysia.svg, singapore.svg, maldives.svg, brunei.svg
│       └── poland.svg, romania.svg, croatia.svg, portugal.svg, cyprus.svg
├── sitemap.xml           # Search engine sitemap
├── robots.txt            # Search engine crawler directives
└── README.md             # Project documentation and deployment guide
```

---

## 4. Key Website Sections & Features

1. **Sticky Header & Top Bar:** Direct contact numbers (+977 9851122545), location (Budhanilakantha-12), email, office hours, and sticky navigation with active link tracking.
2. **Hero Banner:** "Connecting Nepalese Talent to Global Opportunities", dual CTAs for job seekers and employers, live network graphic.
3. **About NOVA:** Corporate introduction, ethical recruitment commitment, and candidate-focused values.
4. **About Nepal:** Highlighting Nepal's geographical location, cultural diversity, and world-renowned reputation for disciplined, hardworking, and honest talent.
5. **Why Choose Nepalese Workforce:** 5 key feature cards (Hardworking, Adaptability, Diverse Skills, Commitment & Loyalty, International Experience).
6. **Why Choose NOVA:** 6 operational excellence cards (Candidate Screening, Transparent Communication, Employer Coordination, Candidate Support, Documentation Assistance, Organized Procedures).
7. **Our Services (6 Cards):**
   - Overseas Recruitment
   - Bulk Manpower Supply
   - Candidate Screening & Selection
   - Pre-Departure Orientation
   - Visa & Documentation Assistance
   - Employer Recruitment Coordination
8. **5-Step Recruitment Process:** Visual roadmap covering Demand Letter -> Candidate Sourcing -> Interview & Selection -> Visa & Documentation Processing -> Final Deployment.
9. **International Recruitment Destinations:** Interactive regional filtering across 15 destinations in the Middle East, Southeast Asia, and Europe with accurate flags and ethical advisory notices.
10. **Interactive FAQ Accordion:** Answering the 6 core questions regarding application steps, documents, timelines, orientation, and employer contact.
11. **Testimonial Slider:** Cleanly presented representative candidate and employer experiences.
12. **Employer Partnership CTA:** High-contrast conversion section with "Request Manpower" button.
13. **Job Opportunities Portal:** Live searchable directory loaded from `js/jobs.js`. Features WhatsApp pre-fill application generation and full transparent disclaimer notices.
14. **Contact Us Section:** Verified office coordinates in Budhanilakantha-12, Kathmandu, click-to-call, click-to-WhatsApp, interactive form with validation, and Google Maps embed.
15. **Floating WhatsApp Button & Back to Top:** Instant mobile communication for candidates and quick navigation.

---

## 5. Local Testing & Preview

To preview the website locally on your computer:

### Option A: Using Python built-in server (Recommended)
Open your terminal inside the `nova-recruitment` directory and run:
```bash
python -m http.server 8080
```
Then open your browser at:
`http://localhost:8080`

### Option B: Using Node.js `npx serve`
```bash
npx serve .
```

### Option C: Direct File Open
You can also directly double-click `index.html` in Windows Explorer to open it in Chrome, Edge, or Firefox.

---

## 6. How to Edit Sample Job Vacancies

All vacancy listings are defined in `js/jobs.js` in an easy-to-read JSON array:
```javascript
{
  id: "JOB-001",
  title: "Executive Chef / Pastry Chef",
  category: "Hospitality",
  country: "United Arab Emirates",
  countryCode: "uae",
  flag: "images/flags/uae.svg",
  verifiedSalary: "AED 3,500 - 4,500 / month",
  salaryVerified: true,
  experience: "3+ Years in 4/5 Star Hotel",
  vacancies: 6,
  description: "Responsible for luxury resort culinary preparation...",
  requirements: ["Culinary diploma", "Basic English fluency", "Valid passport"]
}
```
To add, edit, or remove vacancies, simply update the `NOVA_JOBS` array in `js/jobs.js`. The search bar, category filters, and modal dialogues will update automatically!

---

## 7. Deployment Instructions

Because this site is 100% static, it can be deployed for free with high global performance and automatic SSL certificates.

### A. Deploying to Vercel (Recommended)
1. Sign up or log in at [vercel.com](https://vercel.com).
2. Install Vercel CLI (optional) or push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for NOVA Recruitment website"
   ```
3. In the Vercel Dashboard, click **Add New** > **Project** and import your repository.
4. Leave the Framework Preset as **Other** (Root directory: `./`).
5. Click **Deploy**. Vercel will deploy the site in under 30 seconds and provide a live `*.vercel.app` URL.

### B. Deploying to Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Go to **Sites** and drag & drop the entire `nova-recruitment` folder onto the browser window.
3. Your website is instantly live!

### C. Deploying to GitHub Pages
1. Push your code to a GitHub repository (e.g., `https://github.com/username/nova-recruitment`).
2. Go to repository **Settings** > **Pages**.
3. Under **Build and deployment**, set Source to `Deploy from a branch`, choose `main` branch and `/ (root)` folder, then click **Save**.
4. Your site will be available at `https://<username>.github.io/<repo-name>/`.

---

## 8. Connecting Custom Domain `novarecruitment.com.np`

`.np` domains in Nepal are administered by Mercantile Communications via [register.com.np](https://register.com.np).

### Step 1: Add Domain to Your Hosting Platform
- **On Vercel:** Go to Project Settings > **Domains** > Enter `novarecruitment.com.np` and `www.novarecruitment.com.np`.
- **On Netlify:** Go to Domain Management > **Add Custom Domain** > Enter `novarecruitment.com.np`.

### Step 2: Configure DNS Records in Nepal (.np Registrar)
Log in to your `.np` domain management account at [register.com.np](https://register.com.np):
1. Locate your domain `novarecruitment.com.np`.
2. Update the Name Servers (or DNS Records) as provided by your host:
   - **For Vercel:**
     - Type: `A` | Host: `@` | Points to: `76.76.21.21`
     - Type: `CNAME` | Host: `www` | Points to: `cname.vercel-dns.com`
   - **For Cloudflare DNS (Recommended for .np domains):**
     Point your .np domain nameservers to Cloudflare (e.g., `aria.ns.cloudflare.com` and `ben.ns.cloudflare.com`), and create the `A` and `CNAME` records in Cloudflare. This provides instantaneous SSL issuance, DDoS protection, and caching.

Once DNS propagates (usually 2 to 24 hours), your website will be securely accessible at `https://novarecruitment.com.np`.

---

&copy; NOVA Recruitment Pvt. Ltd. | Budhanilakantha-12, Kathmandu, Nepal. All Rights Reserved.

