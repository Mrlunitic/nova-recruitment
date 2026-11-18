/**
 * NOVA RECRUITMENT PVT. LTD. - SAMPLE JOBS DATA & CONTROLLER
 * Address: Budhanilakantha-12, Kathmandu, Nepal
 * Phone / WhatsApp: +977 9851122545
 * 
 * NOTE: As per ethical recruitment guidelines and user instructions, 
 * these vacancies are illustrative samples representative of typical demand 
 * categories handled by NOVA Recruitment. Active vacancies are subject to verified 
 * Government of Nepal Department of Foreign Employment approval.
 */

const NOVA_JOBS = [
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
    description: "Responsible for luxury resort culinary preparation, hygiene compliance, menu execution, and kitchen team coordination.",
    requirements: ["Culinary diploma or equivalent certification", "Prior Gulf or hotel experience preferred", "Basic English fluency", "Valid passport"]
  },
  {
    id: "JOB-002",
    title: "Structural Steel Welder (3G / 4G / 6G)",
    category: "Construction & Engineering",
    country: "Poland",
    countryCode: "poland",
    flag: "images/flags/poland.svg",
    verifiedSalary: "PLN 4,200 - 5,500 / month",
    salaryVerified: true,
    experience: "2+ Years verified trade experience",
    vacancies: 15,
    description: "Industrial welding on structural steel frameworks, fabrication adherence, safety gear protocol, and blueprint interpretation.",
    requirements: ["Trade test pass certificate", "Experience in MIG/TIG welding", "Fit to work European standards", "Police clearance report"]
  },
  {
    id: "JOB-003",
    title: "Heavy Equipment & Crane Operator",
    category: "Construction & Engineering",
    country: "Saudi Arabia",
    countryCode: "saudi-arabia",
    flag: "images/flags/saudi-arabia.svg",
    verifiedSalary: "SAR 2,200 - 2,800 / month",
    salaryVerified: true,
    experience: "Valid GCC or Nepal Heavy License",
    vacancies: 12,
    description: "Operation of mobile cranes and earthmoving equipment across major infrastructure and commercial construction developments.",
    requirements: ["Valid heavy vehicle driving license", "Minimum 2 years operating experience", "Medical fitness certification", "Safety certification"]
  },
  {
    id: "JOB-004",
    title: "Hotel Front Desk & Guest Relations",
    category: "Hospitality",
    country: "Maldives",
    countryCode: "maldives",
    flag: "images/flags/maldives.svg",
    verifiedSalary: "USD 700 - 950 + Service Charge",
    salaryVerified: true,
    experience: "1-2 Years front office experience",
    vacancies: 8,
    description: "Greeting resort guests, managing check-in/out, providing island tour itineraries, and handling concierge services.",
    requirements: ["Hospitality management training or degree", "Fluent spoken English (additional language is a plus)", "Customer-first pleasant personality", "Passport validity minimum 1 year"]
  },
  {
    id: "JOB-005",
    title: "Warehouse Logistics & Forklift Associate",
    category: "Logistics & Transport",
    country: "Romania",
    countryCode: "romania",
    flag: "images/flags/romania.svg",
    verifiedSalary: "RON 3,200 - 4,000 / month",
    salaryVerified: true,
    experience: "1+ Year in warehouse or distribution",
    vacancies: 20,
    description: "Receiving, inventory scanning, pallet stacking, packaging, and operating standard electric reach forklifts.",
    requirements: ["High school completion", "Forklift handling experience or certificate", "Good physical stamina", "Clean legal record"]
  },
  {
    id: "JOB-006",
    title: "Certified Security Officer (PSBD / SIRA)",
    category: "Facilities & Security",
    country: "Qatar",
    countryCode: "qatar",
    flag: "images/flags/qatar.svg",
    verifiedSalary: "QAR 1,800 - 2,200 / month",
    salaryVerified: true,
    experience: "Prior Ex-Army, Police or Civil Security",
    vacancies: 25,
    description: "Access control, corporate building surveillance, crowd safety monitoring, and emergency response protocol.",
    requirements: ["Minimum height 5'7\"", "Ex-military/police or 2 yrs civil security experience", "Basic spoken English", "Discipline and clear background"]
  },
  {
    id: "JOB-007",
    title: "Electronics Assembly Technician",
    category: "Manufacturing & Production",
    country: "Malaysia",
    countryCode: "malaysia",
    flag: "images/flags/malaysia.svg",
    verifiedSalary: "MYR 1,700 - 2,100 + Overtime",
    salaryVerified: true,
    experience: "Entry level with technical aptitude",
    vacancies: 30,
    description: "Precision component assembly, quality visual inspection, testing electronics on conveyor manufacturing lines.",
    requirements: ["Technical high school or SLC/SEE pass", "Color vision and good eyesight", "Willingness to work shifts", "Age 18-35"]
  },
  {
    id: "JOB-008",
    title: "Retail Sales Representative & Cashier",
    category: "Retail & Customer Service",
    country: "Kuwait",
    countryCode: "kuwait",
    flag: "images/flags/kuwait.svg",
    verifiedSalary: "KWD 160 - 200 / month",
    salaryVerified: true,
    experience: "1 Year retail or customer service",
    vacancies: 10,
    description: "Managing mall retail store merchandise, customer assistance, POS cash register transactions, and store inventory display.",
    requirements: ["Good communication skills in English", "Computer literacy (POS)", "Smart grooming and presentation", "Passport ready"]
  }
];

// Helper to generate WhatsApp URL with pre-filled message
function getWhatsAppJobLink(jobTitle, country) {
  const phone = "9779851122545";
  const msg = `Hello NOVA Recruitment Pvt. Ltd., I am interested in inquiring about the sample vacancy: "${jobTitle}" in ${country}. Please guide me regarding the required documents, interview schedules, and legal recruitment process.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

// Render Job Card HTML
function createJobCardHTML(job) {
  return `
    <div class="col-lg-6 col-md-6 mb-4 job-item" data-category="${job.category}" data-country="${job.countryCode}">
      <div class="job-card">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <span class="job-category-tag">${job.category}</span>
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-light text-dark border"><i class="bi bi-people me-1"></i> ${job.vacancies} Positions</span>
          </div>
        </div>

        <h4 class="job-title">${job.title}</h4>

        <div class="job-meta-row">
          <div class="job-meta-item">
            <img src="${job.flag}" alt="${job.country} Flag" width="20" height="14" class="rounded-1 border me-1">
            <strong>${job.country}</strong>
          </div>
          <div class="job-meta-item">
            <i class="bi bi-cash-stack"></i>
            <span>${job.verifiedSalary}</span>
          </div>
          <div class="job-meta-item">
            <i class="bi bi-briefcase"></i>
            <span>${job.experience}</span>
          </div>
        </div>

        <p class="job-description-text">${job.description}</p>

        <div class="job-card-actions mt-auto pt-3 border-top">
          <a href="${getWhatsAppJobLink(job.title, job.country)}" target="_blank" rel="noopener" class="btn btn-sm btn-gold-nova flex-grow-1">
            <i class="bi bi-whatsapp"></i> Apply via WhatsApp
          </a>
          <a href="tel:+9779851122545" class="btn btn-sm btn-outline-primary" title="Call NOVA Office">
            <i class="bi bi-telephone-fill"></i> Call Now
          </a>
          <button class="btn btn-sm btn-light border text-muted" onclick="showJobDetailsModal('${job.id}')" title="View Requirements">
            <i class="bi bi-info-circle"></i> Details
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Jobs on Homepage (Preview Top 4)
function renderHomepageJobs() {
  const container = document.getElementById("homepage-jobs-container");
  if (!container) return;

  const previewJobs = NOVA_JOBS.slice(0, 4);
  container.innerHTML = previewJobs.map(job => createJobCardHTML(job)).join("");
}

// Render Jobs on Dedicated Jobs Page (With Filter and Search)
function renderJobsPage() {
  const container = document.getElementById("all-jobs-container");
  if (!container) return;

  const searchInput = document.getElementById("job-search-input");
  const categoryFilter = document.getElementById("job-category-filter");
  const countryFilter = document.getElementById("job-country-filter");
  const countDisplay = document.getElementById("jobs-count-display");

  function filterAndDisplay() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const category = categoryFilter ? categoryFilter.value : "all";
    const country = countryFilter ? countryFilter.value : "all";

    const filtered = NOVA_JOBS.filter(job => {
      const matchesSearch = query === "" || 
        job.title.toLowerCase().includes(query) || 
        job.description.toLowerCase().includes(query) || 
        job.country.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query);

      const matchesCategory = category === "all" || job.category === category;
      const matchesCountry = country === "all" || job.countryCode === country;

      return matchesSearch && matchesCategory && matchesCountry;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-5 bg-white rounded-3 border">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="mt-3 text-navy">No Sample Vacancies Found</h4>
            <p class="text-muted">No vacancies matched your current search criteria. Try clearing filters or contact our office directly for upcoming employer demands.</p>
            <a href="https://wa.me/9779851122545?text=Hello%20NOVA%20Recruitment,%20I%20am%20looking%20for%20vacancies%20in%20my%20trade." target="_blank" class="btn btn-gold-nova mt-2">
              <i class="bi bi-whatsapp"></i> Inquire via WhatsApp (9851122545)
            </a>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(job => createJobCardHTML(job)).join("");
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${NOVA_JOBS.length} sample vacancies`;
    }
  }

  if (searchInput) searchInput.addEventListener("input", filterAndDisplay);
  if (categoryFilter) categoryFilter.addEventListener("change", filterAndDisplay);
  if (countryFilter) countryFilter.addEventListener("change", filterAndDisplay);

  // Initial load
  filterAndDisplay();
}

// Job Details Modal
function showJobDetailsModal(jobId) {
  const job = NOVA_JOBS.find(j => j.id === jobId);
  if (!job) return;

  const modalTitle = document.getElementById("jobModalTitle");
  const modalBody = document.getElementById("jobModalBody");
  const modalWhatsapp = document.getElementById("jobModalWhatsappBtn");

  if (modalTitle) modalTitle.textContent = job.title;
  if (modalWhatsapp) modalWhatsapp.href = getWhatsAppJobLink(job.title, job.country);

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="d-flex align-items-center gap-3 mb-3 p-3 bg-light rounded">
        <img src="${job.flag}" alt="${job.country}" width="40" height="26" class="rounded border">
        <div>
          <h6 class="mb-0 text-navy fw-bold">${job.country}</h6>
          <span class="badge bg-primary text-white">${job.category}</span>
        </div>
        <div class="ms-auto text-end">
          <small class="text-muted d-block">Verified Salary</small>
          <strong class="text-gold">${job.verifiedSalary}</strong>
        </div>
      </div>

      <h6 class="fw-bold text-navy mt-3">Job Description:</h6>
      <p class="text-muted">${job.description}</p>

      <h6 class="fw-bold text-navy mt-3">Candidate Requirements:</h6>
      <ul class="text-muted ps-3">
        ${job.requirements.map(req => `<li>${req}</li>`).join("")}
      </ul>

      <div class="alert alert-info py-2 px-3 small mt-4">
        <i class="bi bi-info-circle-fill me-1"></i>
        <strong>Static Site Application Notice:</strong> Applications are processed through direct interview coordination, document verification, and WhatsApp submission at NOVA Recruitment (+977 9851122545).
      </div>
    `;
  }

  // Trigger modal
  const modalEl = document.getElementById("jobDetailsModal");
  if (modalEl && window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderHomepageJobs();
  renderJobsPage();
});

