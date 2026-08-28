/**
 * Code Templates & Source Exporter for Dr. GI Medical Blog
 * Contains:
 * 1. Standard HTML5 (linking to style.css and js/main.js)
 * 2. WordPress style.css (with theme header comments & CSS variables)
 * 3. js/main.js (jQuery + JS functionality)
 * 4. Complete WordPress Theme Files (header.php, footer.php, index.php, single.php, functions.php, sidebar.php)
 */

export function getStyleCssContent(): string {
  return `/*
Theme Name: Dr. GI - Gastroenterologist & Medical Fellowship Blog Theme
Theme URI: https://example.com/dr-gi-theme
Author: Dr. [Your Name]
Author URI: https://example.com
Description: A clean, modern, SEO-optimized, and 100% mobile-friendly Bootstrap 5 blog theme for gastroenterologists, medical fellows, healthcare educators, and clinical writers.
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: dr-gi-theme
Tags: medical, blog, gastroenterology, doctor, fellowship, gut-health, clean, two-columns, custom-header, editor-style, featured-images, responsive-layout
*/

/* ==========================================================================
   CSS CUSTOM PROPERTIES (THEME VARIABLES)
   ========================================================================== */
:root {
  --primary-navy: #0D2240;
  --secondary-navy: #15325B;
  --deep-footer: #08162A;
  --accent-blue: #1A56DB;
  --accent-hover: #1646B5;
  --tagline-blue: #2563EB;
  --sky-blue: #38BDF8;
  --light-blue-bg: #EFF6FF;
  --bg-cream: #FAFBFD;
  --card-bg: #FFFFFF;
  --text-main: #1E293B;
  --text-muted: #64748B;
  --border-light: #E2E8F0;
  --border-subtle: #F1F5F9;
  --badge-bg: #EFF6FF;
  --badge-text: #1D4ED8;

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-script: 'Caveat', cursive;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 20px 25px -5px rgba(15, 36, 68, 0.12);

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}

body {
  font-family: var(--font-sans);
  color: var(--text-main);
  background-color: var(--bg-cream);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, .serif-font {
  font-family: var(--font-serif);
  color: var(--primary-navy);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.script-font {
  font-family: var(--font-script);
  color: var(--tagline-blue);
  font-weight: 700;
  font-size: 1.5rem;
}

/* Navbar */
.navbar-custom {
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-light);
  padding: 0.85rem 0;
  position: sticky;
  top: 0;
  z-index: 1020;
  transition: all 0.25s ease-in-out;
}
.navbar-custom.is-scrolled {
  box-shadow: 0 4px 20px rgba(13, 34, 64, 0.08);
  padding: 0.6rem 0;
}
.doctor-avatar-badge {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid var(--accent-blue);
}
.brand-title {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--primary-navy);
  line-height: 1.1;
}
.brand-specialty {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--accent-blue);
  text-transform: uppercase;
}
.brand-subtitles {
  font-size: 0.68rem;
  color: var(--text-muted);
  font-weight: 600;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(180deg, #FFFFFF 0%, var(--bg-cream) 100%);
  padding: 3.5rem 0 2.5rem;
  border-bottom: 1px solid var(--border-light);
}
.hero-main-title {
  font-size: 2.85rem;
  font-weight: 800;
  color: var(--primary-navy);
  line-height: 1.15;
  margin-bottom: 1.15rem;
}
.hero-lead-text {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.7;
  max-width: 580px;
}
.hero-stats-row {
  display: flex;
  gap: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-light);
  margin-top: 1.5rem;
}
.stat-value {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--primary-navy);
}
.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
}

/* Featured Card */
.hero-featured-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all 0.25s ease-in-out;
}
.hero-featured-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.hero-card-media {
  position: relative;
  height: 240px;
  overflow: hidden;
}
.hero-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.hero-featured-card:hover .hero-card-media img {
  transform: scale(1.05);
}
.card-floating-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--accent-blue);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
}

/* 3-Column Content */
.section-column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary-navy);
  padding-bottom: 0.75rem;
  margin-bottom: 1.75rem;
}
.column-title {
  font-size: 1.35rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--primary-navy);
}
.post-entry-card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.35rem;
  margin-bottom: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.25s ease-in-out;
}
.post-entry-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: rgba(26, 86, 219, 0.25);
}

/* Sidebar Widgets */
.sidebar-widget {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.35rem;
  margin-bottom: 1.75rem;
  box-shadow: var(--shadow-sm);
}
.widget-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--primary-navy);
  border-bottom: 1.5px solid var(--border-light);
  padding-bottom: 0.65rem;
  margin-bottom: 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Topics Grid */
.topics-section {
  background: #ffffff;
  padding: 4rem 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}
.topic-grid-card {
  background: var(--bg-cream);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.35rem;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.topic-grid-card:hover {
  background: #ffffff;
  border-color: var(--accent-blue);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.topic-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--light-blue-bg);
  color: var(--accent-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

/* Doctor Bio */
.doctor-bio-section {
  padding: 4.5rem 0;
  background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
  border-bottom: 1px solid var(--border-light);
}
.doctor-bio-card-wrapper {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
}

/* Newsletter & Footer */
.newsletter-banner-section {
  background: linear-gradient(135deg, var(--deep-footer) 0%, var(--primary-navy) 100%);
  color: #ffffff;
  padding: 4rem 0;
}
.footer-main {
  background-color: var(--deep-footer);
  color: #94A3B8;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
`;
}

export function getMainJsContent(): string {
  return `/**
 * Dr. GI - Gastroenterology & Medical Fellowship Blog
 * Main Theme JavaScript (Standard Vanilla JS + jQuery Support)
 * WordPress Theme Ready
 */

(function ($) {
  'use strict';

  $(document).ready(function () {

    // 1. Sticky Navbar Shadow
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 30) {
        $('.navbar-custom').addClass('is-scrolled');
      } else {
        $('.navbar-custom').removeClass('is-scrolled');
      }
    });

    // 2. Smooth Scrolling
    $('a[href^="#"]').on('click', function (e) {
      const target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 600);
      }
    });

    // 3. Back to Top Button
    $('#backToTopBtn').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // 4. Newsletter AJAX handler
    $('.newsletter-form').on('submit', function (e) {
      e.preventDefault();
      const $btn = $(this).find('button[type="submit"]');
      const original = $btn.html();
      $btn.prop('disabled', true).html('<i class="fa-solid fa-spinner fa-spin me-1"></i> Subscribing...');
      setTimeout(function () {
        $btn.prop('disabled', false).html('<i class="fa-solid fa-check me-1"></i> Subscribed!');
        alert('Thank you for subscribing to Dr. GI Insights!');
        setTimeout(() => $btn.html(original), 3500);
      }, 800);
    });

    // 5. Live Search Filter
    $('#searchInput').on('keyup', function () {
      const query = $(this).val().toLowerCase();
      $('.post-entry-card, .editor-pick-item, .popular-ranked-item').each(function () {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.includes(query) || query.length < 2);
      });
    });

  });
})(jQuery);
`;
}

export function getFullHtmlTemplate(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- ================= SEO META TAGS ================= -->
  <title>Dr. [Your Name] | Gastroenterologist &amp; GI Fellow – Stories, Science, Compassion</title>
  <meta name="description" content="Personal experiences from GI fellowship, practical lessons from medicine, and approachable evidence-based insights into digestive health, IBS, GERD, and the microbiome.">
  <meta name="keywords" content="Gastroenterology, GI Fellow, Gut Health, Gut-Brain Axis, IBS, GERD, Colonoscopy, Probiotics, Endoscopy, Medical Education">
  <meta name="author" content="Dr. [Your Name]">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="https://dr-gi-journal.example.com/">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://dr-gi-journal.example.com/">
  <meta property="og:title" content="Dr. [Your Name] | Gastroenterologist &amp; GI Fellow">
  <meta property="og:description" content="Personal experiences from GI fellowship, practical lessons from medicine, and approachable insights into digestive health.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80">
  <meta property="og:site_name" content="Dr. [Your Name] - Gastroenterology Journal">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Dr. [Your Name] | Gastroenterologist &amp; GI Fellow">
  <meta name="twitter:description" content="Stories. Science. Compassion. Evidence-based digestive health insights and clinical fellowship reflections.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80">

  <!-- Mobile Browser Theme Color -->
  <meta name="theme-color" content="#0D2240">

  <!-- Google Fonts: Playfair Display (Serif), Plus Jakarta Sans (Body), Caveat (Script) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Bootstrap 5.3.3 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- Font Awesome 6.5.2 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <!-- External WordPress Theme Stylesheet (style.css) -->
  <link rel="stylesheet" href="style.css">

  <!-- JSON-LD SEO Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://dr-gi-journal.example.com/#physician",
        "name": "Dr. [Your Name]",
        "medicalSpecialty": "Gastroenterology",
        "jobTitle": "Gastroenterology Fellow",
        "url": "https://dr-gi-journal.example.com"
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Top Notice Bar -->
  <div class="top-notice-bar d-none d-md-block">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <i class="fa-solid fa-bell me-1 text-info"></i>
        <span>New Clinical Insight: <strong>The Gut–Brain Connection: What Science Is Teaching Us</strong></span>
      </div>
      <div>
        <a href="#newsletter" class="text-decoration-none">
          <i class="fa-solid fa-paper-plane me-1"></i> Subscribe to Weekly GI Roundups &rarr;
        </a>
      </div>
    </div>
  </div>

  <!-- Header & Navigation -->
  <header class="navbar-custom">
    <div class="container">
      <nav class="navbar navbar-expand-lg p-0">
        
        <!-- Brand -->
        <a class="navbar-brand-wrapper" href="#home">
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80" alt="Dr. [Your Name]" class="doctor-avatar-badge" width="52" height="52">
          <div>
            <span class="brand-title d-block">Dr. [Your Name]</span>
            <span class="brand-specialty d-block">GASTROENTEROLOGIST</span>
            <span class="brand-subtitles d-block">GI FELLOW &bull; WRITER &bull; MEDICAL EDUCATOR</span>
          </div>
        </a>

        <!-- Mobile Toggle -->
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainContent" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars-staggered fs-4 text-primary"></i>
        </button>

        <!-- Nav items -->
        <div class="collapse navbar-collapse" id="navbarMainContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#gi-journey">GI Journey</a></li>
            <li class="nav-item"><a class="nav-link" href="#digestive-health">Digestive Health</a></li>
            <li class="nav-item"><a class="nav-link" href="#topics">Topics</a></li>
            <li class="nav-item"><a class="nav-link" href="#about-doctor">About Me</a></li>
          </ul>

          <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <a href="https://twitter.com" target="_blank" class="nav-social-link" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" class="nav-social-link" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" class="nav-social-link" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#newsletter" class="btn-subscribe-header ms-1">
              <i class="fa-regular fa-envelope"></i>
              <span>Subscribe</span>
            </a>
          </div>
        </div>

      </nav>
    </div>
  </header>

  <main id="main-content">

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center g-4 g-lg-5">
          <div class="col-lg-7">
            <p class="script-font mb-2">A doctor's journey to heal minds and improve lives. 💙</p>
            <div class="hero-tagline-badge">
              <i class="fa-solid fa-stethoscope"></i>
              <span>Stories &bull; Science &bull; Compassion</span>
            </div>
            <h1 class="hero-main-title">
              The GI Journey, <span class="text-primary text-decoration-underline">Shared.</span>
            </h1>
            <p class="hero-lead-text">
              Personal experiences from GI fellowship, practical lessons from medicine, and approachable insights into digestive health.
            </p>
            <div class="d-flex flex-wrap gap-3 mb-4">
              <a href="#gi-journey" class="btn btn-primary btn-lg rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2">
                <span>Explore Articles</span>
                <i class="fa-solid fa-arrow-right fs-6"></i>
              </a>
              <a href="#about-doctor" class="btn btn-outline-secondary btn-lg rounded-pill px-4 py-2 fw-semibold">
                About Dr. [Your Name]
              </a>
            </div>
            <div class="hero-stats-row">
              <div class="stat-item">
                <span class="stat-value">10+</span>
                <span class="stat-label">Years Clinical Training</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">500+</span>
                <span class="stat-label">Articles &amp; Insights</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">1 Mission</span>
                <span class="stat-label">Better Digestive Health</span>
              </div>
            </div>
          </div>

          <!-- Featured Card -->
          <div class="col-lg-5">
            <article class="hero-featured-card">
              <div class="hero-card-media">
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80" alt="Featured Article" loading="lazy">
                <span class="card-floating-badge">FEATURED ARTICLE</span>
              </div>
              <div class="hero-card-body">
                <span class="category-pill">GUT-BRAIN AXIS</span>
                <h2 class="hero-card-title">
                  <a href="#article-gut-brain">The Gut–Brain Connection: What Science Is Teaching Us</a>
                </h2>
                <p class="hero-card-excerpt">
                  New research continues to reveal how closely the gut and brain communicate—and what that means for your everyday health.
                </p>
                <div class="article-meta-row">
                  <div class="meta-author-group">
                    <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&auto=format&fit=crop&q=80" alt="Dr. [Your Name]" class="meta-author-avatar">
                    <span class="fw-semibold">Dr. [Your Name]</span>
                  </div>
                  <span><i class="fa-regular fa-clock me-1"></i> 7 min read &bull; May 12, 2024</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content 3-Columns Section -->
    <section class="main-content-section">
      <div class="container">
        <div class="row g-4 g-xl-5">

          <!-- Column 1: GI Journey -->
          <div class="col-lg-4 col-md-6" id="gi-journey">
            <div class="section-column-header">
              <h2 class="column-title"><i class="fa-solid fa-user-doctor"></i> From the GI Journey</h2>
              <span class="badge bg-light text-primary border fw-semibold">4 Posts</span>
            </div>

            <article class="post-entry-card">
              <div class="post-card-meta"><span class="meta-date">May 8, 2024</span> &bull; <span>6 min read</span></div>
              <h3 class="post-card-title"><a href="#">A Day in the Life of a GI Fellow</a></h3>
              <p class="post-card-excerpt">Moments from the wards, the endoscopy suite, and everything in between during intense training.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Story &rarr;</a><span>8 comments</span></div>
            </article>

            <article class="post-entry-card">
              <div class="post-card-meta"><span class="meta-date">May 1, 2024</span> &bull; <span>5 min read</span></div>
              <h3 class="post-card-title"><a href="#">Lessons No Textbook Taught Me</a></h3>
              <p class="post-card-excerpt">Real-world lessons from patients, mentors, and mistakes that shaped my bedside manner.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Story &rarr;</a><span>5 comments</span></div>
            </article>

            <article class="post-entry-card">
              <div class="post-card-meta"><span class="meta-date">Apr 26, 2024</span> &bull; <span>6 min read</span></div>
              <h3 class="post-card-title"><a href="#">Why I Chose Gastroenterology</a></h3>
              <p class="post-card-excerpt">The curiosity, procedural challenges, and lifelong reward of caring for the gut ecosystem.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Story &rarr;</a><span>7 comments</span></div>
            </article>

            <article class="post-entry-card">
              <div class="post-card-meta"><span class="meta-date">Apr 20, 2024</span> &bull; <span>4 min read</span></div>
              <h3 class="post-card-title"><a href="#">The Journey Continues...</a></h3>
              <p class="post-card-excerpt">Reflections on clinical growth, physician gratitude, and patient empowerment.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Story &rarr;</a><span>4 comments</span></div>
            </article>
          </div>

          <!-- Column 2: Health Insights -->
          <div class="col-lg-4 col-md-6" id="digestive-health">
            <div class="section-column-header">
              <h2 class="column-title"><i class="fa-solid fa-heart-pulse"></i> Digestive Health Insights</h2>
              <span class="badge bg-light text-primary border fw-semibold">Clinical</span>
            </div>

            <article class="post-entry-card">
              <span class="category-pill">IBS &amp; MOTILITY</span>
              <h3 class="post-card-title"><a href="#">Understanding IBS: What's the Difference?</a></h3>
              <p class="post-card-excerpt">Learn how to identify irritable bowel syndrome and manage acute flare-ups.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Clinical Guide &rarr;</a><span>May 9, 2024</span></div>
            </article>

            <article class="post-entry-card">
              <span class="category-pill">MICROBIOME</span>
              <h3 class="post-card-title"><a href="#">Do Probiotics Really Work? Evidence-Based Facts</a></h3>
              <p class="post-card-excerpt">Examining clinical trials behind CFUs, strain specificity, and actual gut benefits.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Clinical Guide &rarr;</a><span>Apr 28, 2024</span></div>
            </article>

            <article class="post-entry-card">
              <span class="category-pill">PROCEDURES</span>
              <h3 class="post-card-title"><a href="#">What to Expect During an Upper Endoscopy</a></h3>
              <p class="post-card-excerpt">Step-by-step patient walkthrough explaining sedation, biopsy, and recovery.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Patient Guide &rarr;</a><span>Apr 16, 2024</span></div>
            </article>

            <article class="post-entry-card">
              <span class="category-pill">NUTRITION</span>
              <h3 class="post-card-title"><a href="#">Gut–Friendly Diet: Foods That Heal and Protect</a></h3>
              <p class="post-card-excerpt">Nutritional protocols, soluble fiber, and low-FODMAP dietary principles.</p>
              <div class="post-card-footer"><a href="#" class="read-more-link">Read Nutritional Guide &rarr;</a><span>Apr 10, 2024</span></div>
            </article>
          </div>

          <!-- Column 3: Sidebar -->
          <div class="col-lg-4 col-md-12">
            <aside class="sidebar-wrapper">
              
              <!-- Search -->
              <div class="sidebar-widget">
                <h3 class="widget-title"><i class="fa-solid fa-magnifying-glass"></i> Search Insights</h3>
                <input type="text" id="searchInput" class="form-control" placeholder="Search IBS, reflux, diet...">
              </div>

              <!-- Editor's Picks -->
              <div class="sidebar-widget">
                <h3 class="widget-title"><i class="fa-solid fa-star"></i> Editor's Picks</h3>
                <div class="editor-pick-item">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=150&auto=format&fit=crop&q=80" alt="IBS" class="editor-pick-thumb">
                  <div class="editor-pick-content">
                    <h6><a href="#">IBS Triggers: What Makes Symptoms Worse?</a></h6>
                    <span class="editor-pick-date">May 10, 2024</span>
                  </div>
                </div>
                <div class="editor-pick-item">
                  <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=150&auto=format&fit=crop&q=80" alt="GERD" class="editor-pick-thumb">
                  <div class="editor-pick-content">
                    <h6><a href="#">GERD and Sleep: Why Nighttime Matters</a></h6>
                    <span class="editor-pick-date">May 7, 2024</span>
                  </div>
                </div>
              </div>

              <!-- Popular -->
              <div class="sidebar-widget">
                <h3 class="widget-title"><i class="fa-solid fa-fire"></i> Most Popular</h3>
                <div class="popular-ranked-item">
                  <span class="rank-number-badge">1</span>
                  <div class="popular-item-text"><h6><a href="#">How to Improve Gut Health: Daily Habits</a></h6></div>
                </div>
                <div class="popular-ranked-item">
                  <span class="rank-number-badge">2</span>
                  <div class="popular-item-text"><h6><a href="#">Best Foods for a Healthy Digestive System</a></h6></div>
                </div>
              </div>

              <!-- Newsletter -->
              <div class="sidebar-widget sidebar-newsletter-box">
                <h3 class="widget-title"><i class="fa-solid fa-envelope-open-text"></i> Weekly Insights</h3>
                <p class="sidebar-newsletter-desc">Join 15,000+ medical readers receiving our Friday digest.</p>
                <form class="newsletter-form">
                  <input type="email" class="form-control form-control-sm mb-2" placeholder="Your email" required>
                  <button type="submit" class="btn btn-primary btn-sm w-100 fw-bold">Subscribe Free</button>
                </form>
              </div>

            </aside>
          </div>

        </div>
      </div>
    </section>

    <!-- Topics Grid -->
    <section id="topics" class="topics-section">
      <div class="container">
        <div class="section-header-center">
          <span class="section-tag">Curated Taxonomy</span>
          <h2 class="section-heading-lg">Explore Topics by Category</h2>
          <p class="text-muted">Targeted clinical articles, digestive protocols, and procedure walkthroughs.</p>
        </div>
        <div class="row g-3 g-md-4">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#topics" class="topic-grid-card">
              <div class="topic-icon-wrapper"><i class="fa-solid fa-graduation-cap"></i></div>
              <h3 class="topic-card-title">GI Fellowship</h3>
              <p class="topic-card-desc">Training experiences, residency memories, and fellowship life.</p>
              <span class="topic-card-count">18 Articles &rarr;</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#topics" class="topic-grid-card">
              <div class="topic-icon-wrapper"><i class="fa-solid fa-stethoscope"></i></div>
              <h3 class="topic-card-title">Clinical Experiences</h3>
              <p class="topic-card-desc">Case studies, bedside intuition, and hospital ward moments.</p>
              <span class="topic-card-count">24 Articles &rarr;</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#topics" class="topic-grid-card">
              <div class="topic-icon-wrapper"><i class="fa-solid fa-heart-pulse"></i></div>
              <h3 class="topic-card-title">IBS &amp; Motility</h3>
              <p class="topic-card-desc">Managing bloating, bowel sensitivity, and flare protocols.</p>
              <span class="topic-card-count">32 Articles &rarr;</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#topics" class="topic-grid-card">
              <div class="topic-icon-wrapper"><i class="fa-solid fa-shield-virus"></i></div>
              <h3 class="topic-card-title">Colon Health</h3>
              <p class="topic-card-desc">Colonoscopy screening, polyp prevention, and wellness.</p>
              <span class="topic-card-count">27 Articles &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Doctor Bio Section -->
    <section id="about-doctor" class="doctor-bio-section">
      <div class="container">
        <div class="doctor-bio-card-wrapper">
          <div class="row align-items-center g-4 g-lg-5">
            <div class="col-lg-5">
              <div class="doctor-portrait-frame">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80" alt="Dr. [Your Name]" loading="lazy">
              </div>
            </div>
            <div class="col-lg-7">
              <span class="section-tag">Meet Your Doctor</span>
              <h2 class="serif-font mb-3 fs-1 text-primary">Healing with Science, Listening with Empathy</h2>
              <blockquote class="doctor-quote-lead">
                &ldquo;Digestive health isn't just about pathology—it's the core interface between our nutrition, immune vitality, and emotional wellness.&rdquo;
              </blockquote>
              <p class="text-secondary mb-3">
                I am a gastroenterology fellow passionate about translating complex physiological science into actionable advice for patients and colleagues alike.
              </p>
              <a href="#newsletter" class="btn btn-primary rounded-pill px-4 py-2 fw-bold">Subscribe to My Journal</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section id="newsletter" class="newsletter-banner-section">
      <div class="container">
        <div class="newsletter-box-inner">
          <h2 class="newsletter-heading">Join 15,000+ Readers Receiving Weekly GI Insights</h2>
          <p class="newsletter-subtext">Get practical digestive health breakdowns delivered to your inbox every Friday.</p>
          <form class="newsletter-form">
            <div class="newsletter-form-group">
              <input type="email" class="newsletter-input" placeholder="Enter your email address..." required>
              <button type="submit" class="btn btn-newsletter-submit">Join Free &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="footer-main">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <h3 class="footer-brand-title">Dr. [Your Name]</h3>
          <p class="text-info small fw-bold mb-2">GASTROENTEROLOGIST &amp; GI FELLOW</p>
          <p class="small text-secondary">Personal reflections from medical training and approachable evidence-based digestive health guidance.</p>
        </div>
        <div class="col-lg-2 col-md-6 col-6">
          <h4 class="footer-col-heading">Quick Links</h4>
          <ul class="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#gi-journey">GI Journey</a></li>
            <li><a href="#digestive-health">Digestive Health</a></li>
            <li><a href="#topics">Topics</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <h4 class="footer-col-heading">Topics</h4>
          <ul class="footer-links-list">
            <li><a href="#topics">IBS &amp; Motility</a></li>
            <li><a href="#topics">Gut-Brain Axis</a></li>
            <li><a href="#topics">Colon Health</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="footer-col-heading">Disclaimer</h4>
          <div class="medical-disclaimer-box">
            <p class="m-0">Educational purposes only. Does not constitute medical diagnosis or individual treatment advice.</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <div>&copy; 2025 Dr. [Your Name]. All rights reserved.</div>
        <a href="#home" id="backToTopBtn" class="back-to-top-btn" title="Back to Top"><i class="fa-solid fa-arrow-up"></i></a>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
`;
}

export function getWordPressHeaderPhp(): string {
  return `<?php
/**
 * The header for our theme
 * Template Name: Header
 * @package Dr_GI_Theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Header / Navigation -->
<header class="navbar-custom">
  <div class="container">
    <nav class="navbar navbar-expand-lg p-0">
      
      <a class="navbar-brand-wrapper" href="<?php echo esc_url(home_url('/')); ?>">
        <?php if (has_custom_logo()): ?>
          <?php the_custom_logo(); ?>
        <?php else: ?>
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/doctor-avatar.jpg" alt="<?php bloginfo('name'); ?>" class="doctor-avatar-badge" width="52" height="52">
        <?php endif; ?>
        <div>
          <span class="brand-title d-block"><?php bloginfo('name'); ?></span>
          <span class="brand-specialty d-block">GASTROENTEROLOGIST</span>
          <span class="brand-subtitles d-block"><?php bloginfo('description'); ?></span>
        </div>
      </a>

      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainContent">
        <i class="fa-solid fa-bars-staggered fs-4 text-primary"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarMainContent">
        <?php
          wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_class'     => 'navbar-nav mx-auto mb-2 mb-lg-0',
            'container'      => false,
            'fallback_cb'    => '__return_false',
            'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
            'depth'          => 2,
          ));
        ?>
        <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">
          <a href="<?php echo esc_url(home_url('/#newsletter')); ?>" class="btn-subscribe-header">
            <i class="fa-regular fa-envelope"></i>
            <span>Subscribe</span>
          </a>
        </div>
      </div>

    </nav>
  </div>
</header>
`;
}

export function getWordPressFooterPhp(): string {
  return `<?php
/**
 * The template for displaying the footer
 * @package Dr_GI_Theme
 */
?>
<!-- Footer -->
<footer class="footer-main">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <h3 class="footer-brand-title"><?php bloginfo('name'); ?></h3>
        <p class="text-info small fw-bold mb-2">GASTROENTEROLOGIST &amp; GI FELLOW</p>
        <p class="small text-secondary"><?php echo get_theme_mod('footer_about_text', 'Personal reflections from medical training and evidence-based digestive health guidance.'); ?></p>
      </div>

      <div class="col-lg-2 col-md-6 col-6">
        <h4 class="footer-col-heading">Quick Links</h4>
        <?php wp_nav_menu(array('theme_location' => 'footer', 'menu_class' => 'footer-links-list', 'container' => false)); ?>
      </div>

      <div class="col-lg-3 col-md-6 col-6">
        <h4 class="footer-col-heading">Clinical Topics</h4>
        <ul class="footer-links-list">
          <?php
            $categories = get_categories(array('number' => 6));
            foreach ($categories as $cat) {
              echo '<li><a href="' . esc_url(get_category_link($cat->term_id)) . '">' . esc_html($cat->name) . '</a></li>';
            }
          ?>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h4 class="footer-col-heading">Medical Disclaimer</h4>
        <div class="medical-disclaimer-box">
          <p class="m-0">Educational purposes only. Does not constitute personal medical advice or clinical diagnosis.</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom-bar">
      <div>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</div>
      <a href="#top" id="backToTopBtn" class="back-to-top-btn" title="Back to Top"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
`;
}

export function getWordPressFunctionsPhp(): string {
  return `<?php
/**
 * Dr. GI Theme functions and definitions
 * @package Dr_GI_Theme
 */

if (!function_exists('dr_gi_theme_setup')):
  function dr_gi_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Title tag management
    add_theme_support('title-tag');

    // Featured image support
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(800, 450, true);
    add_image_size('dr-gi-card', 600, 400, true);
    add_image_size('dr-gi-thumb', 150, 150, true);

    // Register Nav Menus
    register_nav_menus(array(
      'primary' => esc_html__('Primary Navigation', 'dr-gi-theme'),
      'footer'  => esc_html__('Footer Navigation', 'dr-gi-theme'),
    ));

    // HTML5 semantic markup support
    add_theme_support('html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
      'style',
      'script',
    ));
  }
endif;
add_action('after_setup_theme', 'dr_gi_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function dr_gi_theme_scripts() {
  // Bootstrap 5.3.3 CSS
  wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', array(), '5.3.3');

  // Font Awesome 6
  wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css', array(), '6.5.2');

  // Main Theme Stylesheet (style.css)
  wp_enqueue_style('dr-gi-style', get_stylesheet_uri(), array('bootstrap'), '1.0.0');

  // jQuery (built into WordPress) & Bootstrap Bundle JS
  wp_enqueue_script('jquery');
  wp_enqueue_script('bootstrap-bundle', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.3', true);

  // Main Custom Script
  wp_enqueue_script('dr-gi-main', get_template_directory_uri() . '/js/main.js', array('jquery', 'bootstrap-bundle'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'dr_gi_theme_scripts');

/**
 * Register Sidebar and Widget Areas
 */
function dr_gi_widgets_init() {
  register_sidebar(array(
    'name'          => esc_html__('Main Blog Sidebar', 'dr-gi-theme'),
    'id'            => 'sidebar-main',
    'description'   => esc_html__('Add widgets here to appear in your sidebar.', 'dr-gi-theme'),
    'before_widget' => '<div id="%1$s" class="sidebar-widget %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h3 class="widget-title">',
    'after_title'   => '</h3>',
  ));
}
add_action('widgets_init', 'dr_gi_widgets_init');
`;
}
