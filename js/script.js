/**
 * NOVA RECRUITMENT PVT. LTD. - MAIN SCRIPT
 * Interactive functionality for static corporate website
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar on Scroll
  const navbar = document.querySelector(".navbar-nova");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if (navbar) navbar.classList.add("scrolled");
      if (backToTopBtn) backToTopBtn.classList.add("visible");
    } else {
      if (navbar) navbar.classList.remove("scrolled");
      if (backToTopBtn) backToTopBtn.classList.remove("visible");
    }
  });

  // 2. Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 3. Highlight Active Navigation Item based on URL (cleanUrls-compatible)
  const normalizePageName = (path) => {
    if (!path) return "index";
    const segment = path.split("/").filter(Boolean).pop() || "index";
    return segment.replace(/\.html$/i, "");
  };

  const currentPage = normalizePageName(window.location.pathname);
  const navLinks = document.querySelectorAll(".navbar-nova .nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    const linkPage = normalizePageName(href);
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 4. Close Mobile Navbar when a link is clicked
  const navToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  if (navToggler && navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navToggler.click();
        }
      });
    });
  }

  // 5. Destination Regional Filter Tabs
  const destinationTabs = document.querySelectorAll(".destination-filter-btn");
  const destinationCards = document.querySelectorAll(".destination-card-wrapper");

  if (destinationTabs.length > 0 && destinationCards.length > 0) {
    destinationTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        // Toggle active button
        destinationTabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const targetRegion = btn.getAttribute("data-region");

        destinationCards.forEach(card => {
          const cardRegion = card.getAttribute("data-region");
          if (targetRegion === "all" || cardRegion === targetRegion) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // HTML escaping helper to prevent XSS
  const escapeHtml = (str) => {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // 6. Contact Us Form Client-Side Validation & Static Handling
  const contactForm = document.getElementById("novaContactForm");
  const contactFeedback = document.getElementById("contactFormFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const fullName = document.getElementById("contactName").value.trim();
      const phone = document.getElementById("contactPhone").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value;
      const message = document.getElementById("contactMessage").value.trim();

      if (!fullName || !phone || !message) {
        if (contactFeedback) {
          contactFeedback.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              Please fill in all required fields (Full Name, Phone Number, and Message).
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
          `;
        }
        return;
      }

      // Static feedback success message with WhatsApp / Mailto fallbacks
      const whatsappText = `Hello NOVA Recruitment Pvt. Ltd.,%0A%0AMy name is ${encodeURIComponent(fullName)}.%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email || "N/A")}%0ASubject: ${encodeURIComponent(subject)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
      const waKathmandu = `https://wa.me/9779851122545?text=${whatsappText}`;
      const waQatar = `https://wa.me/97477059127?text=${whatsappText}`;
      const waGreece = `https://wa.me/306998664901?text=${whatsappText}`;

      const safeName = escapeHtml(fullName);

      if (contactFeedback) {
        contactFeedback.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h5 class="alert-heading mb-2"><i class="bi bi-check-circle-fill me-2"></i> Inquiry Prepared!</h5>
            <p class="mb-2">Thank you, <strong>${safeName}</strong>. Select your preferred branch desk below to connect immediately:</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <a href="${waKathmandu}" target="_blank" rel="noopener" class="btn btn-sm btn-success">
                <i class="bi bi-whatsapp"></i> WhatsApp Kathmandu HQ
              </a>
              <a href="${waQatar}" target="_blank" rel="noopener" class="btn btn-sm btn-success">
                <i class="bi bi-whatsapp"></i> WhatsApp Qatar Desk
              </a>
              <a href="${waGreece}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
                <i class="bi bi-whatsapp"></i> WhatsApp Greece Desk
              </a>
              <a href="tel:+9779851122545" class="btn btn-sm btn-outline-dark">
                <i class="bi bi-telephone-fill"></i> Call HQ (+977 9851122545)
              </a>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>
        `;
      }

      contactForm.reset();
    });
  }

  // 7. Employer Manpower Demand Form
  const employerForm = document.getElementById("employerInquiryForm");
  const employerFeedback = document.getElementById("employerFeedback");

  if (employerForm) {
    employerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const company = document.getElementById("empCompany").value.trim();
      const contactPerson = document.getElementById("empPerson").value.trim();
      const country = document.getElementById("empCountry").value.trim();
      const phone = document.getElementById("empPhone").value.trim();
      const email = document.getElementById("empEmail").value.trim();
      const category = document.getElementById("empCategory").value;
      const count = document.getElementById("empCount").value;
      const details = document.getElementById("empDetails").value.trim();

      if (!company || !contactPerson || !phone || !email) {
        if (employerFeedback) {
          employerFeedback.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              Please provide Company Name, Contact Person, Phone, and Official Email.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
          `;
        }
        return;
      }

      const msg = `Hello NOVA Recruitment Pvt. Ltd.,%0A%0A*MANPOWER DEMAND INQUIRY*%0ACompany: ${encodeURIComponent(company)}%0AContact Person: ${encodeURIComponent(contactPerson)}%0ACountry: ${encodeURIComponent(country)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0ACategory: ${encodeURIComponent(category)}%0ARequired Workforce: ${encodeURIComponent(count || "Flexible")}%0ADetails: ${encodeURIComponent(details || "Inquiry regarding demand letter and recruitment process.")}`;
      const waKathmandu = `https://wa.me/9779851122545?text=${msg}`;
      const waQatar = `https://wa.me/97477059127?text=${msg}`;
      const waGreece = `https://wa.me/306998664901?text=${msg}`;

      const safeCompany = escapeHtml(company);

      if (employerFeedback) {
        employerFeedback.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h5 class="alert-heading mb-2"><i class="bi bi-check-circle-fill me-2"></i> Demand Inquiry Prepared</h5>
            <p class="mb-2">Thank you, <strong>${safeCompany}</strong>. Dispatch your demand specification to any of our dedicated offices:</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <a href="${waKathmandu}" target="_blank" rel="noopener" class="btn btn-sm btn-gold-nova">
                <i class="bi bi-whatsapp"></i> Send to Kathmandu HQ
              </a>
              <a href="${waQatar}" target="_blank" rel="noopener" class="btn btn-sm btn-success">
                <i class="bi bi-whatsapp"></i> Send to Qatar Desk
              </a>
              <a href="${waGreece}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
                <i class="bi bi-whatsapp"></i> Send to Greece Desk
              </a>
              <a href="mailto:info@novarecruitment.com.np?subject=Manpower%20Demand%20Inquiry%20-%20${encodeURIComponent(company)}" class="btn btn-sm btn-outline-dark">
                <i class="bi bi-envelope"></i> Email Us
              </a>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>
        `;
      }

      employerForm.reset();
    });
  }
});

