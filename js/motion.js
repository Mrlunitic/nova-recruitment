/**
 * NOVA RECRUITMENT - MOTION DESIGN SYSTEM
 * High-end cinematic animations, Lenis smooth scrolling,
 * GSAP ScrollTrigger storytelling, 3D card tilt, magnetic buttons,
 * and mask-based typography reveals.
 */

(function () {
  "use strict";

  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Wait for DOM to be ready
  document.addEventListener("DOMContentLoaded", () => {
    initPageTransition();

    if (prefersReducedMotion) {
      document.body.classList.add("reduced-motion");
      return;
    }

    initSmoothScroll();
    initCustomCursor();
    initMagneticElements();
    init3DCardTilt();
    initTypographyReveals();
    initHeroCinematics();
    initScrollStorytelling();
    initProcessTimelineScrubber();
    initCounterAnimations();
  });

  /* ===================================================================
     1. SMOOTH SCROLL (LENIS) + GSAP SCROLLTRIGGER SYNC
     =================================================================== */
  let lenisInstance = null;

  function initSmoothScroll() {
    if (typeof Lenis === "undefined" || typeof gsap === "undefined") return;

    try {
      lenisInstance = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
      });

      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        lenisInstance.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn("Smooth scroll initialization notice:", e);
    }
  }

  /* ===================================================================
     2. CUSTOM CINEMATIC CURSOR (DESKTOP ONLY)
     =================================================================== */
  function initCustomCursor() {
    const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 992px)").matches;
    if (!isDesktop) return;

    // Create cursor elements in DOM
    const dot = document.createElement("div");
    dot.className = "custom-cursor-dot";

    const follower = document.createElement("div");
    follower.className = "custom-cursor-follower";

    document.body.appendChild(dot);
    document.body.appendChild(follower);
    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;
    let isVisible = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        dot.style.opacity = "1";
        follower.style.opacity = "1";
        isVisible = true;
      }
    });

    window.addEventListener("mouseleave", () => {
      dot.style.opacity = "0";
      follower.style.opacity = "0";
      isVisible = false;
    });

    // 120fps smooth interpolation loop
    function renderCursor() {
      // Core dot follows tightly
      dotX += (mouseX - dotX) * 0.75;
      dotY += (mouseY - dotY) * 0.75;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

      // Follower glides with spring damping
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive hover triggers
    const interactiveSelectors = [
      "a",
      "button",
      ".btn",
      ".nav-link",
      ".destination-card",
      ".feature-card-nova",
      ".service-card-nova",
      ".badge",
      ".accordion-button",
      "input",
      "textarea",
      "select"
    ];

    document.querySelectorAll(interactiveSelectors.join(", ")).forEach((el) => {
      el.addEventListener("mouseenter", () => follower.classList.add("is-hovering"));
      el.addEventListener("mouseleave", () => follower.classList.remove("is-hovering"));
    });

    window.addEventListener("mousedown", () => follower.classList.add("is-clicking"));
    window.addEventListener("mouseup", () => follower.classList.remove("is-clicking"));
  }

  /* ===================================================================
     3. SELECTIVE MAGNETIC BUTTONS
     =================================================================== */
  function initMagneticElements() {
    const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 992px)").matches;
    if (!isDesktop || typeof gsap === "undefined") return;

    const magneticElements = document.querySelectorAll(
      ".btn-gold-nova, .btn-primary-nova, .nav-cta-btn .btn, .floating-whatsapp-btn"
    );

    magneticElements.forEach((btn) => {
      btn.classList.add("btn-magnetic");

      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.28;
        const deltaY = (e.clientY - centerY) * 0.28;

        gsap.to(btn, {
          x: deltaX,
          y: deltaY,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.75,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });
      });
    });
  }

  /* ===================================================================
     4. 3D CARD TILT WITH DYNAMIC GLARE
     =================================================================== */
  function init3DCardTilt() {
    const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 992px)").matches;
    if (!isDesktop || typeof gsap === "undefined") return;

    const cards = document.querySelectorAll(
      ".feature-card-nova, .service-card-nova, .destination-card, .contact-card-info"
    );

    cards.forEach((card) => {
      card.classList.add("tilt-card");

      // Inject glare and sheen elements if not present
      if (!card.querySelector(".card-glare")) {
        const glare = document.createElement("div");
        glare.className = "card-glare";
        card.appendChild(glare);
      }
      if (!card.querySelector(".card-hover-sheen")) {
        const sheen = document.createElement("div");
        sheen.className = "card-hover-sheen";
        card.appendChild(sheen);
      }

      const glare = card.querySelector(".card-glare");

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 7;
        const rotateY = ((x - centerX) / centerX) * 7;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power1.out",
          overwrite: "auto",
        });

        if (glare) {
          const percentX = (x / rect.width) * 100;
          const percentY = (y / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(217, 165, 46, 0.18) 0%, transparent 60%)`;
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    });
  }

  /* ===================================================================
     5. MASK-BASED TYPOGRAPHY REVEALS
     =================================================================== */
  function splitIntoWordMasks(element) {
    if (!element || element.dataset.splitDone) return;
    element.dataset.splitDone = "true";

    // Split text nodes into masked word spans
    const text = element.innerText.trim();
    if (!text) return;

    const words = text.split(/\s+/);
    element.innerHTML = "";

    words.forEach((word, index) => {
      const maskSpan = document.createElement("span");
      maskSpan.className = "split-text-mask";

      const wordSpan = document.createElement("span");
      wordSpan.className = "split-word";
      wordSpan.textContent = word;

      maskSpan.appendChild(wordSpan);
      element.appendChild(maskSpan);

      if (index < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
    });
  }

  function initTypographyReveals() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    // Apply to section headings across pages
    const sectionHeadings = document.querySelectorAll(
      ".section-title:not(.hero-heading), .page-hero h1"
    );

    sectionHeadings.forEach((heading) => {
      // Save accent spans if present
      const accent = heading.querySelector("span");
      const accentText = accent ? accent.textContent : "";

      // Reveal with ScrollTrigger
      gsap.fromTo(
        heading,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }

  /* ===================================================================
     6. HERO CINEMATIC ENTRANCE TIMELINE
     =================================================================== */
  function initHeroCinematics() {
    if (typeof gsap === "undefined") return;

    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    const heroBadge = heroSection.querySelector(".hero-badge");
    const heroHeading = heroSection.querySelector(".hero-heading");
    const heroLead = heroSection.querySelector(".hero-lead");
    const heroBtns = heroSection.querySelectorAll(".hero-btn-group a");
    const heroStats = heroSection.querySelector(".hero-stats-row");
    const heroGraphic = heroSection.querySelector(".hero-graphic-wrap");

    // Mask split hero heading words
    if (heroHeading) {
      splitIntoWordMasks(heroHeading);
    }

    const heroWords = heroSection.querySelectorAll(".split-word");

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      delay: 0.15,
    });

    if (heroBadge) {
      tl.fromTo(
        heroBadge,
        { y: -25, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 }
      );
    }

    if (heroWords.length > 0) {
      tl.to(
        heroWords,
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.05,
        },
        "-=0.5"
      );
    }

    if (heroLead) {
      tl.fromTo(
        heroLead,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.7"
      );
    }

    if (heroBtns.length > 0) {
      tl.fromTo(
        heroBtns,
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.6)",
        },
        "-=0.6"
      );
    }

    if (heroStats) {
      tl.fromTo(
        heroStats,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.5"
      );
    }

    if (heroGraphic) {
      tl.fromTo(
        heroGraphic,
        { scale: 0.88, opacity: 0, rotateY: 10 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.1"
      );

      // Layered subtle mouse parallax on hero graphic
      const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 992px)").matches;
      if (isDesktop) {
        window.addEventListener("mousemove", (e) => {
          const normX = (e.clientX / window.innerWidth - 0.5) * 2;
          const normY = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(heroGraphic, {
            x: normX * 18,
            y: normY * 18,
            rotateY: normX * 4,
            rotateX: -normY * 4,
            duration: 1.2,
            ease: "power1.out",
            overwrite: "auto",
          });
        });
      }
    }
  }

  /* ===================================================================
     7. SCROLL STORYTELLING & SECTION ENTRANCES
     =================================================================== */
  function initScrollStorytelling() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    // Feature Cards (Why Choose Nepalese Talent)
    const featureCards = document.querySelectorAll(".feature-card-nova");
    if (featureCards.length > 0) {
      gsap.fromTo(
        featureCards,
        { y: 45, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featureCards[0].parentElement.parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Why NOVA Operational Excellence Cards
    const whyNovaCards = document.querySelectorAll(".why-nova-card");
    if (whyNovaCards.length > 0) {
      gsap.fromTo(
        whyNovaCards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyNovaCards[0].parentElement.parentElement,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Services Cards
    const serviceCards = document.querySelectorAll(".service-card-nova");
    if (serviceCards.length > 0) {
      gsap.fromTo(
        serviceCards,
        { y: 45, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceCards[0].parentElement.parentElement,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Destinations Cards (Staggered Wave)
    const destinationCards = document.querySelectorAll(".destination-card-wrapper");
    if (destinationCards.length > 0) {
      gsap.fromTo(
        destinationCards,
        { y: 35, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#destinationsGrid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Nepal Himalayas Image Cinematic Zoom Reveal
    const nepalImg = document.querySelector(".section-about-nepal img");
    if (nepalImg) {
      gsap.fromTo(
        nepalImg,
        { scale: 1.15, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: nepalImg,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }

  /* ===================================================================
     8. XOOM-STYLE ZIGZAG WORKFLOW ANIMATION (NEON MINT CONNECTING PATH)
     =================================================================== */
  function initProcessTimelineScrubber() {
    const wrapper = document.getElementById("xoomWorkflowWrapper");
    if (!wrapper) return;

    const baseTrack = document.getElementById("xoomTrackBase");
    const activeTrack = document.getElementById("xoomTrackActive");
    const beacon = document.getElementById("xoomTrackBeacon");
    if (!baseTrack || !activeTrack) return;

    const nodes = [
      document.getElementById("xoomNode1"),
      document.getElementById("xoomNode2"),
      document.getElementById("xoomNode3"),
      document.getElementById("xoomNode4"),
      document.getElementById("xoomNode5"),
    ];

    const cards = [
      document.getElementById("xoomCard1"),
      document.getElementById("xoomCard2"),
      document.getElementById("xoomCard3"),
      document.getElementById("xoomCard4"),
      document.getElementById("xoomCard5"),
    ];

    function activateStep(stepNum) {
      const card = cards[stepNum - 1];
      if (card) {
        card.classList.add("is-active", "is-completed");
        if (typeof gsap !== "undefined" && !prefersReducedMotion) {
          gsap.fromTo(
            card,
            { scale: 0.98 },
            { scale: 1, duration: 0.45, ease: "back.out(1.8)" }
          );
        }
      }
    }

    // Dynamic Zigzag SVG Path Generation with Horizontal & Vertical Turns
    function calculateZigzagPath() {
      const isDesktop = window.matchMedia("(min-width: 992px)").matches;
      const wrapperRect = wrapper.getBoundingClientRect();
      const points = [];

      nodes.forEach((node) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - wrapperRect.left;
        const y = rect.top + rect.height / 2 - wrapperRect.top;
        points.push({ x, y });
      });

      if (points.length < 5) return "";

      let pathD = "";

      if (isDesktop) {
        // Orthogonal zigzag path with 90° rounded corners (horizontal & vertical turns)
        const R = 28;
        pathD = `M ${points[0].x} ${points[0].y}`;

        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const midX = (p1.x + p2.x) / 2;

          if (p1.x < p2.x) {
            // Left column to Right column
            pathD += ` L ${midX - R} ${p1.y}`;
            pathD += ` Q ${midX} ${p1.y}, ${midX} ${p1.y + R}`;
            pathD += ` L ${midX} ${p2.y - R}`;
            pathD += ` Q ${midX} ${p2.y}, ${midX + R} ${p2.y}`;
            pathD += ` L ${p2.x} ${p2.y}`;
          } else {
            // Right column to Left column
            pathD += ` L ${midX + R} ${p1.y}`;
            pathD += ` Q ${midX} ${p1.y}, ${midX} ${p1.y + R}`;
            pathD += ` L ${midX} ${p2.y - R}`;
            pathD += ` Q ${midX} ${p2.y}, ${midX - R} ${p2.y}`;
            pathD += ` L ${p2.x} ${p2.y}`;
          }
        }
      } else {
        // Mobile: Vertical connecting line straight down through the nodes
        pathD = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
          pathD += ` L ${points[i].x} ${points[i].y}`;
        }
      }

      baseTrack.setAttribute("d", pathD);
      activeTrack.setAttribute("d", pathD);

      return pathD;
    }

    // Measure initial path
    calculateZigzagPath();

    // Reduced motion accessibility fallback
    if (prefersReducedMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      cards.forEach((_, idx) => activateStep(idx + 1));
      wrapper.classList.add("is-workflow-completed");
      activeTrack.style.strokeDashoffset = "0";
      return;
    }

    let totalLength = activeTrack.getTotalLength() || 2500;
    gsap.set(activeTrack, { strokeDasharray: totalLength, strokeDashoffset: totalLength });

    // Leading glowing beacon update helper
    function updateBeacon(currentLen) {
      if (!beacon || totalLength === 0) return;
      try {
        const pt = activeTrack.getPointAtLength(Math.min(currentLen, totalLength));
        beacon.setAttribute("cx", pt.x);
        beacon.setAttribute("cy", pt.y);
        beacon.style.opacity = "1";
      } catch (e) {}
    }

    // Coordinated GSAP ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#process",
        start: "top 72%",
        toggleActions: "play none none none",
        once: true,
        onEnter: () => {
          // Re-calibrate coordinates right at trigger point for subpixel accuracy
          calculateZigzagPath();
          totalLength = activeTrack.getTotalLength();
          gsap.set(activeTrack, { strokeDasharray: totalLength, strokeDashoffset: totalLength });
        },
      },
    });

    // Step 1 illuminates immediately
    tl.call(() => {
      activateStep(1);
      updateBeacon(0);
    });
    tl.to({}, { duration: 0.35 });

    // Progress from Step 1 to Step 2 (0% -> 25% of path)
    tl.to(activeTrack, {
      strokeDashoffset: totalLength * 0.75,
      duration: 0.8,
      ease: "power1.inOut",
      onUpdate: function () {
        const cur = totalLength - parseFloat(gsap.getProperty(activeTrack, "strokeDashoffset"));
        updateBeacon(cur);
      },
    });
    tl.call(() => activateStep(2));
    tl.to({}, { duration: 0.3 });

    // Progress from Step 2 to Step 3 (25% -> 50% of path)
    tl.to(activeTrack, {
      strokeDashoffset: totalLength * 0.5,
      duration: 0.8,
      ease: "power1.inOut",
      onUpdate: function () {
        const cur = totalLength - parseFloat(gsap.getProperty(activeTrack, "strokeDashoffset"));
        updateBeacon(cur);
      },
    });
    tl.call(() => activateStep(3));
    tl.to({}, { duration: 0.3 });

    // Progress from Step 3 to Step 4 (50% -> 75% of path)
    tl.to(activeTrack, {
      strokeDashoffset: totalLength * 0.25,
      duration: 0.8,
      ease: "power1.inOut",
      onUpdate: function () {
        const cur = totalLength - parseFloat(gsap.getProperty(activeTrack, "strokeDashoffset"));
        updateBeacon(cur);
      },
    });
    tl.call(() => activateStep(4));
    tl.to({}, { duration: 0.3 });

    // Progress from Step 4 to Step 5 (75% -> 100% of path)
    tl.to(activeTrack, {
      strokeDashoffset: 0,
      duration: 0.8,
      ease: "power1.inOut",
      onUpdate: function () {
        const cur = totalLength - parseFloat(gsap.getProperty(activeTrack, "strokeDashoffset"));
        updateBeacon(cur);
      },
    });
    tl.call(() => {
      activateStep(5);
      wrapper.classList.add("is-workflow-completed");
    });

    // Interactive card clicks / hover
    cards.forEach((card, idx) => {
      if (card) {
        card.addEventListener("click", () => activateStep(idx + 1));
      }
    });

    // Debounced resize handler to keep path strictly anchored
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        calculateZigzagPath();
        const newTotal = activeTrack.getTotalLength();
        if (newTotal > 0 && wrapper.classList.contains("is-workflow-completed")) {
          gsap.set(activeTrack, { strokeDasharray: newTotal, strokeDashoffset: 0 });
          const pt = activeTrack.getPointAtLength(newTotal);
          if (beacon) {
            beacon.setAttribute("cx", pt.x);
            beacon.setAttribute("cy", pt.y);
          }
        }
      }, 150);
    });
  }

  /* ===================================================================
     9. LIVE STATS NUMBER COUNTER ANIMATIONS
     =================================================================== */
  function initCounterAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    const statNumbers = document.querySelectorAll(".hero-stat-item h3");
    if (statNumbers.length === 0) return;

    statNumbers.forEach((el) => {
      const originalText = el.textContent.trim();
      const match = originalText.match(/(\d+)(\D*)/);
      if (!match) return;

      const targetNum = parseInt(match[1], 10);
      const suffix = match[2] || "";

      const counterObj = { val: 0 };

      gsap.to(counterObj, {
        val: targetNum,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.floor(counterObj.val) + suffix;
        },
        onComplete: () => {
          el.textContent = targetNum + suffix;
        },
      });
    });
  }

  /* ===================================================================
     10. CINEMATIC PAGE TRANSITIONS (CURTAIN OVERLAY)
     =================================================================== */
  function initPageTransition() {
    // Create transition curtain if not present
    let curtain = document.querySelector(".page-transition-curtain");
    if (!curtain) {
      curtain = document.createElement("div");
      curtain.className = "page-transition-curtain";
      curtain.innerHTML = '<img src="assets/nova-logo-white.png" alt="NOVA" class="curtain-logo">';
      document.body.appendChild(curtain);
    }

    // Slide curtain out on page entrance
    if (typeof gsap !== "undefined" && !prefersReducedMotion) {
      gsap.fromTo(
        curtain,
        { y: "0%" },
        {
          y: "-100%",
          duration: 0.75,
          ease: "power3.inOut",
          delay: 0.05,
          onComplete: () => {
            curtain.style.pointerEvents = "none";
          },
        }
      );
    }

    // Intercept internal navigation for smooth exit
    const internalLinks = document.querySelectorAll(
      'a[href]:not([target="_blank"]):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]):not([href^="javascript:"])'
    );

    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href) return;

        // Skip same-page anchors
        if (href.startsWith("#") || href === window.location.pathname) return;

        e.preventDefault();
        curtain.style.pointerEvents = "all";
        curtain.classList.add("is-animating");

        if (typeof gsap !== "undefined" && !prefersReducedMotion) {
          gsap.fromTo(
            curtain,
            { y: "100%" },
            {
              y: "0%",
              duration: 0.55,
              ease: "power3.inOut",
              onComplete: () => {
                window.location.href = href;
              },
            }
          );
        } else {
          window.location.href = href;
        }
      });
    });
  }
})();
