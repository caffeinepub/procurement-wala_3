import { useEffect, useRef, useState } from "react";

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue: #0F4C81;
    --blue-dark: #0a3460;
    --blue-deeper: #071f3d;
    --gold: #D4AF37;
    --gold-light: #e8c84e;
    --white: #ffffff;
    --gray-light: #f5f7fa;
    --gray-mid: #e8ecf0;
    --text-dark: #1a1a2e;
    --text-mid: #4a5568;
    --radius: 12px;
    --shadow: 0 4px 24px rgba(15,76,129,0.12);
    --shadow-lg: 0 8px 40px rgba(15,76,129,0.2);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  /* ===== NAVBAR ===== */
  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    padding: 16px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;
  }
  .navbar.scrolled {
    background: rgba(7,31,61,0.92);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
  .nav-logo-btn {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
    letter-spacing: 0.02em;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .nav-logo-btn span { color: var(--gold); }
  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }
  .nav-links a {
    color: rgba(255,255,255,0.85);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    transition: color 0.2s;
    text-transform: uppercase;
  }
  .nav-links a:hover { color: var(--gold); }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    background: none;
    border: none;
  }
  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--white);
    transition: transform 0.3s, opacity 0.3s;
    border-radius: 2px;
  }
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* ===== HERO ===== */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--blue-deeper) 0%, var(--blue-dark) 40%, var(--blue) 100%);
    display: flex;
    align-items: center;
    padding: 120px 40px 80px;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    width: 100%;
  }
  .hero-tagline {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 16px;
  }
  .hero-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .hero-headline em {
    color: var(--gold);
    font-style: normal;
  }
  .hero-sub {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.75);
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 36px;
    max-width: 480px;
  }
  .hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
  .btn-gold {
    background: var(--gold);
    color: var(--blue-deeper);
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    border: none;
    cursor: pointer;
    letter-spacing: 0.02em;
    font-family: 'Inter', sans-serif;
  }
  .btn-gold:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212,175,55,0.4);
  }
  .btn-outline-white {
    background: transparent;
    color: var(--white);
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 2px solid rgba(255,255,255,0.5);
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  .btn-outline-white:hover {
    border-color: var(--white);
    background: rgba(255,255,255,0.08);
    transform: translateY(-2px);
  }
  .hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .badge-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border: 1px solid var(--gold);
    border-radius: 50px;
    color: var(--gold);
    font-size: 0.78rem;
    font-weight: 500;
    background: rgba(212,175,55,0.08);
    animation: float 3s ease-in-out infinite;
  }
  .badge-chip:nth-child(2) { animation-delay: 0.5s; }
  .badge-chip:nth-child(3) { animation-delay: 1s; }
  .badge-chip:nth-child(4) { animation-delay: 1.5s; }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  /* 3D Book */
  .book-scene {
    perspective: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .book-wrap {
    transform-style: preserve-3d;
    transform: rotateY(-20deg) rotateX(5deg);
    transition: transform 0.6s ease;
    cursor: pointer;
    position: relative;
  }
  .book-wrap:hover { transform: rotateY(0deg) rotateX(0deg); }
  .book-front {
    width: 220px;
    height: 300px;
    background: linear-gradient(160deg, #1a5fa0 0%, var(--blue-deeper) 100%);
    border-radius: 4px 12px 12px 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    position: relative;
    box-shadow: 8px 8px 30px rgba(0,0,0,0.5);
    border: 1px solid rgba(212,175,55,0.3);
  }
  .book-front::before {
    content: '';
    position: absolute;
    top: 12px; left: 12px; right: 12px; bottom: 12px;
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 4px;
    pointer-events: none;
  }
  .book-stripe {
    position: absolute;
    top: 0; bottom: 0;
    left: -28px;
    width: 28px;
    background: linear-gradient(to right, #05213e, var(--blue-deeper));
    border-radius: 4px 0 0 4px;
    transform: rotateY(-90deg);
    transform-origin: right center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .book-spine-text {
    color: rgba(212,175,55,0.6);
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Playfair Display', serif;
  }
  .book-icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: var(--gold);
    opacity: 0.9;
  }
  .book-title-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--gold);
    text-align: center;
    line-height: 1.3;
    margin-bottom: 8px;
  }
  .book-author-text {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.6);
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .book-divider {
    width: 40px;
    height: 1px;
    background: var(--gold);
    opacity: 0.5;
    margin: 10px auto;
  }
  .book-badge {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gold);
    color: var(--blue-deeper);
    font-size: 0.6rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* ===== SECTION SHARED ===== */
  .section {
    padding: 96px 40px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .section-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 12px;
  }
  .section-heading.light { color: var(--white); }
  .gold-underline {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), transparent);
    border-radius: 2px;
    margin-bottom: 48px;
  }
  .section-sub {
    color: var(--text-mid);
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 48px;
    max-width: 640px;
  }

  /* ===== ABOUT ===== */
  .about-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 60px;
    align-items: start;
  }
  .photo-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--blue) 0%, var(--blue-deeper) 100%);
    border: 4px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 0 6px rgba(212,175,55,0.15);
  }
  .photo-placeholder i { font-size: 5rem; color: rgba(255,255,255,0.4); }
  .about-bio {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 36px;
  }
  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 48px;
  }
  .stat-card {
    background: var(--white);
    border: 1px solid var(--gray-mid);
    border-radius: var(--radius);
    padding: 24px 20px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--blue);
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 0.82rem;
    color: var(--text-mid);
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  /* ===== BOOK SECTION ===== */
  .book-section { background: var(--gray-light); }
  .book-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .book-scene-large .book-front { width: 260px; height: 360px; padding: 28px; }
  .book-scene-large .book-stripe { width: 34px; left: -34px; }
  .book-scene-large .book-icon { font-size: 3rem; }
  .book-scene-large .book-title-text { font-size: 1.3rem; }
  .stars {
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
  }
  .stars i { color: var(--gold); font-size: 1.2rem; }
  .book-subtitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.4;
    margin-bottom: 16px;
  }
  .book-desc {
    color: var(--text-mid);
    line-height: 1.7;
    margin-bottom: 28px;
    font-size: 0.97rem;
  }
  .chapter-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;
    margin-bottom: 32px;
  }
  .chapter-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--text-dark);
    font-weight: 500;
  }
  .chapter-list li i { color: var(--gold); font-size: 0.85rem; }
  .book-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
  .btn-blue {
    background: var(--blue);
    color: var(--white);
    padding: 12px 26px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.87rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, transform 0.2s;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  .btn-blue:hover { background: var(--blue-dark); transform: translateY(-2px); }

  /* ===== MENTORSHIP ===== */
  .mentorship-sub {
    text-align: center;
    color: var(--text-mid);
    font-size: 1.05rem;
    margin-bottom: 52px;
    margin-top: -24px;
  }
  .packages-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    align-items: start;
  }
  .package-card {
    background: var(--white);
    border: 2px solid var(--gray-mid);
    border-radius: 16px;
    padding: 36px 28px;
    position: relative;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .package-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }
  .package-card.featured {
    border-color: var(--gold);
    transform: translateY(-12px);
    box-shadow: 0 12px 50px rgba(212,175,55,0.2);
  }
  .package-card.featured:hover { transform: translateY(-18px); }
  .popular-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gold);
    color: var(--blue-deeper);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 5px 16px;
    border-radius: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .package-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
  }
  .package-price {
    font-size: 2rem;
    font-weight: 700;
    color: var(--blue);
    margin-bottom: 4px;
    font-family: 'Playfair Display', serif;
  }
  .package-freq {
    font-size: 0.8rem;
    color: var(--text-mid);
    margin-bottom: 24px;
  }
  .package-divider {
    height: 1px;
    background: var(--gray-mid);
    margin-bottom: 20px;
  }
  .package-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  }
  .package-features li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    color: var(--text-mid);
  }
  .package-features li i { color: var(--gold); font-size: 0.8rem; flex-shrink: 0; }
  .package-card .btn-gold { width: 100%; justify-content: center; }
  .package-card.featured .btn-gold { background: var(--blue); color: var(--white); }
  .package-card.featured .btn-gold:hover { background: var(--blue-dark); }

  /* ===== TESTIMONIALS ===== */
  .testimonials {
    background: linear-gradient(135deg, var(--blue-deeper), var(--blue-dark));
  }
  .testimonials .section-heading { color: var(--white); }
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .testimonial-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 16px;
    padding: 32px;
    transition: transform 0.2s, background 0.2s;
  }
  .testimonial-card:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.1);
  }
  .testimonial-stars { display: flex; gap: 3px; margin-bottom: 16px; }
  .testimonial-stars i { color: var(--gold); font-size: 0.9rem; }
  .testimonial-quote {
    color: rgba(255,255,255,0.85);
    font-size: 0.95rem;
    line-height: 1.75;
    margin-bottom: 24px;
    font-style: italic;
  }
  .testimonial-quote::before { content: '\u201C'; }
  .testimonial-quote::after { content: '\u201D'; }
  .testimonial-name {
    font-weight: 600;
    color: var(--gold);
    font-size: 0.92rem;
  }
  .testimonial-role {
    color: rgba(255,255,255,0.5);
    font-size: 0.8rem;
    margin-top: 2px;
  }

  /* ===== BLOG ===== */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .blog-card {
    background: var(--white);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--gray-mid);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .blog-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }
  .blog-img {
    height: 160px;
    background: linear-gradient(135deg, var(--blue-dark), var(--blue));
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-img i { font-size: 3rem; color: rgba(212,175,55,0.6); }
  .blog-content { padding: 28px; }
  .blog-tag {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 10px;
  }
  .blog-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.4;
    margin-bottom: 12px;
  }
  .blog-excerpt {
    font-size: 0.87rem;
    color: var(--text-mid);
    line-height: 1.65;
    margin-bottom: 20px;
  }
  .read-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--blue);
    font-size: 0.87rem;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: 'Inter', sans-serif;
    transition: gap 0.2s, color 0.2s;
  }
  .read-more-btn:hover { gap: 10px; color: var(--gold); }

  /* ===== CONTACT ===== */
  .contact-section {
    background: #0a0a1a;
    color: var(--white);
  }
  .contact-section .section-heading { color: var(--white); }
  .contact-section .gold-underline { background: linear-gradient(90deg, var(--gold), transparent); }
  .contact-section .section-sub { color: rgba(255,255,255,0.6); }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 72px;
    align-items: start;
  }
  .contact-info { display: flex; flex-direction: column; gap: 28px; }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .contact-icon {
    width: 44px;
    height: 44px;
    background: rgba(212,175,55,0.12);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .contact-icon i { color: var(--gold); font-size: 1rem; }
  .contact-item-label { font-size: 0.78rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 3px; }
  .contact-item-val { font-size: 0.95rem; color: rgba(255,255,255,0.85); }
  .social-row {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  .social-link {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    font-size: 1rem;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .social-link:hover {
    background: var(--gold);
    color: var(--blue-deeper);
    border-color: var(--gold);
  }
  .contact-form { display: flex; flex-direction: column; gap: 16px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-field { display: flex; flex-direction: column; gap: 6px; }
  .form-label { font-size: 0.82rem; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.06em; }
  .form-input, .form-select, .form-textarea {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 12px 16px;
    color: var(--white);
    font-family: 'Inter', sans-serif;
    font-size: 0.92rem;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }
  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: var(--gold);
    background: rgba(255,255,255,0.09);
  }
  .form-select option { background: var(--blue-deeper); color: var(--white); }
  .form-textarea { min-height: 120px; resize: vertical; }
  .form-submit {
    align-self: flex-start;
    padding: 14px 36px;
    font-size: 0.95rem;
  }

  /* ===== FOOTER ===== */
  .footer {
    background: var(--blue-deeper);
    color: rgba(255,255,255,0.6);
    padding: 60px 40px 32px;
  }
  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  .footer-top {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin-bottom: 32px;
  }
  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 12px;
  }
  .footer-logo span { color: var(--gold); }
  .footer-tagline { font-size: 0.85rem; line-height: 1.6; max-width: 260px; }
  .footer-heading {
    font-weight: 600;
    color: var(--white);
    font-size: 0.88rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .footer-links a {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 0.88rem;
    transition: color 0.2s;
  }
  .footer-links a:hover { color: var(--gold); }
  .footer-socials { display: flex; gap: 10px; margin-top: 16px; }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.82rem;
  }
  .footer-bottom a {
    color: var(--gold);
    text-decoration: none;
  }

  /* ===== HEADING CENTER VARIANT ===== */
  .text-center { text-align: center; }
  .text-center .gold-underline { margin-left: auto; margin-right: auto; }
  .text-center .section-sub { margin-left: auto; margin-right: auto; }

  /* ===== MOBILE NAV OVERLAY ===== */
  .mobile-nav {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(7,31,61,0.98);
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }
  .mobile-nav.open { opacity: 1; pointer-events: all; }
  .mobile-nav-btn {
    color: var(--white);
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    transition: color 0.2s;
    background: none;
    border: none;
    cursor: pointer;
  }
  .mobile-nav-btn:hover { color: var(--gold); }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 1024px) {
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .packages-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
    .package-card.featured { transform: none; }
    .package-card.featured:hover { transform: translateY(-6px); }
  }

  @media (max-width: 768px) {
    .navbar { padding: 14px 20px; }
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .hero { padding: 100px 20px 60px; }
    .hero-inner { grid-template-columns: 1fr; gap: 48px; }
    .book-scene { order: -1; }
    .section { padding: 64px 20px; }
    .about-grid { grid-template-columns: 1fr; text-align: center; }
    .photo-placeholder { margin: 0 auto; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .book-grid { grid-template-columns: 1fr; gap: 40px; }
    .book-scene-large { margin: 0 auto; width: fit-content; }
    .chapter-list { grid-template-columns: 1fr; }
    .testimonials-grid { grid-template-columns: 1fr; }
    .blog-grid { grid-template-columns: 1fr; }
    .contact-grid { grid-template-columns: 1fr; gap: 40px; }
    .form-row { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr; gap: 32px; }
    .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
    .hero-ctas { flex-direction: column; align-items: flex-start; }
    .hero-headline { font-size: 1.9rem; }
  }
`;

const NAV_IDS = ["home", "about", "book", "mentorship", "blog", "contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.12 },
    );
    for (const el of document.querySelectorAll(".section")) {
      observerRef.current?.observe(el);
    }
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Ravinder will respond within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <style>{CSS}</style>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {NAV_IDS.map((id) => (
          <button
            key={id}
            type="button"
            className="mobile-nav-btn"
            onClick={() => scrollTo(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>

      {/* NAVBAR */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <button
          type="button"
          className="nav-logo-btn"
          onClick={() => scrollTo("home")}
          data-ocid="nav.link"
        >
          Procurement <span>Wala</span>
        </button>
        <ul className="nav-links">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} data-ocid="nav.link">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-tagline">
              37 Years &middot; Procurement &middot; Negotiation &middot;
              Contracts
            </div>
            <h1 className="hero-headline">
              37 Years of Procurement Wisdom &mdash;{" "}
              <em>Now Your Competitive Edge</em>
            </h1>
            <p className="hero-sub">
              Mentoring the Next Generation of Procurement Professionals through
              battle-tested frameworks, one-to-one coaching, and a published
              book.
            </p>
            <div className="hero-ctas">
              <button
                type="button"
                className="btn-gold"
                onClick={() => scrollTo("book")}
                data-ocid="hero.primary_button"
              >
                <i className="fas fa-book" /> Get the Book
              </button>
              <button
                type="button"
                className="btn-outline-white"
                onClick={() => scrollTo("mentorship")}
                data-ocid="hero.secondary_button"
              >
                <i className="fas fa-calendar" /> Book a Mentorship Call
              </button>
            </div>
            <div className="hero-badges">
              <span className="badge-chip">
                <i className="fas fa-rupee-sign" />
                500Cr+ Deals Negotiated
              </span>
              <span className="badge-chip">
                <i className="fas fa-clock" />
                37 Years Experience
              </span>
              <span className="badge-chip">
                <i className="fas fa-users" />
                100+ Mentees
              </span>
              <span className="badge-chip">
                <i className="fas fa-feather-alt" />
                Published Author
              </span>
            </div>
          </div>
          <div className="book-scene">
            <div className="book-wrap">
              <div className="book-front">
                <div className="book-stripe">
                  <span className="book-spine-text">
                    The Procurement Mentor &middot; Ravinder Kapoor
                  </span>
                </div>
                <div className="book-icon">
                  <i className="fas fa-balance-scale" />
                </div>
                <div className="book-title-text">The Procurement Mentor</div>
                <div className="book-divider" />
                <div className="book-author-text">Ravinder Kapoor</div>
                <div className="book-badge">Amazon KDP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-heading">Meet Ravinder Kapoor</h2>
          <div className="gold-underline" />
          <div className="about-grid">
            <div className="photo-placeholder">
              <i className="fas fa-user" />
            </div>
            <div>
              <p className="about-bio">
                Ravinder Kapoor is a procurement professional with 37 years of
                experience in negotiation, contracts, and supply chain
                leadership. Over nearly four decades, he has negotiated deals
                worth over &#8377;500 crore, led procurement operations across
                multiple locations, and mentored over 100 professionals at every
                stage of their careers.
              </p>
              <p className="about-bio">
                Through <strong>&ldquo;Procurement Wala,&rdquo;</strong>{" "}
                Ravinder mentors early-career professionals (0&ndash;5 years
                experience) and shares hard-won lessons via his book, blog, and
                one-to-one coaching sessions. His approach is practical, direct,
                and built on real-world procurement experience &mdash; not
                textbooks.
              </p>
            </div>
          </div>
          <div className="stats-row">
            {[
              { num: "37", unit: " Years", label: "Industry Experience" },
              { num: "100+", unit: "", label: "Mentees Coached" },
              { num: "1", unit: "", label: "Published Book" },
              { num: "\u20b9500Cr+", unit: "", label: "Deals Negotiated" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">
                  {s.num}
                  <span style={{ fontSize: "1rem", color: "var(--gold)" }}>
                    {s.unit}
                  </span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="section book-section">
        <div className="container">
          <h2 className="section-heading">The Procurement Mentor</h2>
          <div className="gold-underline" />
          <div className="book-grid">
            <div className="book-scene book-scene-large">
              <div className="book-wrap">
                <div className="book-front">
                  <div className="book-stripe">
                    <span className="book-spine-text">
                      The Procurement Mentor &middot; Ravinder Kapoor
                    </span>
                  </div>
                  <div className="book-icon">
                    <i className="fas fa-balance-scale" />
                  </div>
                  <div className="book-title-text">The Procurement Mentor</div>
                  <div className="book-divider" />
                  <div className="book-author-text">Ravinder Kapoor</div>
                  <div className="book-badge">Amazon KDP</div>
                </div>
              </div>
            </div>
            <div>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className="fas fa-star" />
                ))}
              </div>
              <div className="book-subtitle">
                37 Years of Hard-Won Lessons in Negotiation, Contracts &amp;
                Career Success
              </div>
              <p className="book-desc">
                This book distills nearly four decades of procurement experience
                into actionable frameworks and real-world lessons. Whether
                you&apos;re negotiating your first supplier contract or managing
                a category worth hundreds of crores, this guide gives you the
                tools, mindset, and strategies to succeed.
              </p>
              <ul className="chapter-list">
                {[
                  "Negotiation Tactics",
                  "Contract Management",
                  "Career Growth",
                  "Vendor Management",
                  "Strategic Sourcing",
                  "Supplier Relations",
                ].map((ch) => (
                  <li key={ch}>
                    <i className="fas fa-check-circle" />
                    {ch}
                  </li>
                ))}
              </ul>
              <div className="book-ctas">
                <a
                  href="https://amazon.in"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  data-ocid="book.primary_button"
                >
                  <i className="fab fa-amazon" /> Buy on Amazon &mdash; eBook
                </a>
                <a
                  href="https://amazon.in"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-blue"
                  data-ocid="book.secondary_button"
                >
                  <i className="fab fa-amazon" /> Buy on Amazon &mdash;
                  Paperback
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section id="mentorship" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">One-to-One Mentorship</h2>
            <div className="gold-underline" />
          </div>
          <p className="mentorship-sub">
            Designed for Procurement Professionals with 0&ndash;5 Years of
            Experience
          </p>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-name">Starter Session</div>
              <div className="package-price">&#8377;2,999</div>
              <div className="package-freq">One-time payment</div>
              <div className="package-divider" />
              <ul className="package-features">
                <li>
                  <i className="fas fa-check" />1 &times; 60-minute session
                </li>
                <li>
                  <i className="fas fa-check" />
                  Career roadmap planning
                </li>
                <li>
                  <i className="fas fa-check" />
                  Q&amp;A with Ravinder
                </li>
                <li>
                  <i className="fas fa-check" />
                  Session recording
                </li>
              </ul>
              <button
                type="button"
                className="btn-gold"
                onClick={() => scrollTo("contact")}
                data-ocid="mentorship.item.1"
              >
                Book Now
              </button>
            </div>

            <div className="package-card featured">
              <div className="popular-badge">&#9734; Most Popular</div>
              <div className="package-name">Monthly Mentor</div>
              <div className="package-price">&#8377;9,999</div>
              <div className="package-freq">Per month</div>
              <div className="package-divider" />
              <ul className="package-features">
                <li>
                  <i className="fas fa-check" />4 &times; 60-minute sessions
                </li>
                <li>
                  <i className="fas fa-check" />
                  Resume review
                </li>
                <li>
                  <i className="fas fa-check" />
                  LinkedIn profile audit
                </li>
                <li>
                  <i className="fas fa-check" />
                  Negotiation templates
                </li>
                <li>
                  <i className="fas fa-check" />
                  Priority WhatsApp access
                </li>
              </ul>
              <button
                type="button"
                className="btn-gold"
                onClick={() => scrollTo("contact")}
                data-ocid="mentorship.item.2"
              >
                Book Now
              </button>
            </div>

            <div className="package-card">
              <div className="package-name">Deep Dive Program</div>
              <div className="package-price">&#8377;24,999</div>
              <div className="package-freq">3-month program</div>
              <div className="package-divider" />
              <ul className="package-features">
                <li>
                  <i className="fas fa-check" />
                  Weekly coaching calls
                </li>
                <li>
                  <i className="fas fa-check" />
                  Full career mentorship
                </li>
                <li>
                  <i className="fas fa-check" />
                  Contract review support
                </li>
                <li>
                  <i className="fas fa-check" />
                  Interview preparation
                </li>
                <li>
                  <i className="fas fa-check" />
                  Lifetime community access
                </li>
              </ul>
              <button
                type="button"
                className="btn-gold"
                onClick={() => scrollTo("contact")}
                data-ocid="mentorship.item.3"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading light">What Mentees Say</h2>
            <div className="gold-underline" />
          </div>
          <div className="testimonials-grid">
            {[
              {
                name: "Arjun Mehta",
                role: "Procurement Executive, FMCG",
                quote:
                  "Ravinder\u2019s guidance helped me crack my first \u20b910Cr negotiation. His frameworks are practical and battle-tested \u2014 no theory, just real-world strategies that work.",
              },
              {
                name: "Priya Sharma",
                role: "Supply Chain Manager, Pharma",
                quote:
                  "The mentorship sessions transformed how I approach vendor contracts. I achieved a 40% better deal in my last negotiation using exactly what Ravinder taught me.",
              },
              {
                name: "Rohit Gupta",
                role: "Procurement Analyst, IT Services",
                quote:
                  "From career roadmap to interview prep \u2014 Ravinder covered it all. Best investment in my professional growth. Worth every rupee and then some.",
              },
            ].map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <i key={n} className="fas fa-star" />
                  ))}
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section">
        <div className="container">
          <h2 className="section-heading">Procurement Insights</h2>
          <div className="gold-underline" />
          <div className="blog-grid">
            {[
              {
                tag: "Negotiation",
                title: "5 Negotiation Mistakes Fresh Graduates Make",
                excerpt:
                  "Most fresh procurement grads walk into negotiations without leverage, preparation, or a BATNA. Here\u2019s what I\u2019ve seen go wrong in 37 years \u2014 and how to avoid every one of these traps.",
                icon: "fa-handshake",
              },
              {
                tag: "Contracts",
                title: "How to Read a Contract Like a Pro",
                excerpt:
                  "A supplier contract isn\u2019t just a document \u2014 it\u2019s a map of your risk. Learn the 7 clauses that matter most and the red flags that have cost companies crores in hidden liabilities.",
                icon: "fa-file-contract",
              },
              {
                tag: "Career",
                title: "Building a Procurement Career from Scratch",
                excerpt:
                  "Procurement wasn\u2019t on anyone\u2019s dream career list a decade ago. That\u2019s changed. Here\u2019s a step-by-step roadmap for turning a procurement role into a six-figure leadership career.",
                icon: "fa-chart-line",
              },
            ].map((b) => (
              <div key={b.title} className="blog-card">
                <div className="blog-img">
                  <i className={`fas ${b.icon}`} />
                </div>
                <div className="blog-content">
                  <div className="blog-tag">{b.tag}</div>
                  <div className="blog-title">{b.title}</div>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <button type="button" className="read-more-btn">
                    Read More <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-heading">Let&apos;s Connect</h2>
              <div className="gold-underline" />
              <p className="section-sub">
                Whether you want to discuss mentorship, the book, or a speaking
                engagement &mdash; I&apos;d love to hear from you.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-val">
                      ravinder@ravinderkapoor.com
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <div>
                    <div className="contact-item-label">WhatsApp</div>
                    <div className="contact-item-val">+91 98184 69795</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-globe" />
                  </div>
                  <div>
                    <div className="contact-item-label">Website</div>
                    <div className="contact-item-val">ravinderkapoor.com</div>
                  </div>
                </div>
              </div>
              <div className="social-row" style={{ marginTop: "32px" }}>
                <a
                  href="https://linkedin.com/in/ravinderkapoor"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                  data-ocid="contact.link"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="https://facebook.com/ProcurementWala"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                  data-ocid="contact.link"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://instagram.com/ProcurementWala"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                  data-ocid="contact.link"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              data-ocid="contact.modal"
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name" className="form-label">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    required
                    data-ocid="contact.input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email" className="form-label">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  className="form-select"
                  data-ocid="contact.select"
                >
                  <option>Mentorship Enquiry</option>
                  <option>Book</option>
                  <option>Speaking</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="contact-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Tell me how I can help..."
                  required
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="btn-gold form-submit"
                data-ocid="contact.submit_button"
              >
                <i className="fas fa-paper-plane" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo">
                Procurement <span>Wala</span>
              </div>
              <p className="footer-tagline">
                37 Years of Hard-Won Wisdom in Procurement, Negotiation &amp;
                Contracts. Mentoring the next generation of procurement leaders.
              </p>
              <div className="footer-socials">
                <a
                  href="https://linkedin.com/in/ravinderkapoor"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                  data-ocid="footer.link"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="https://facebook.com/ProcurementWala"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                  data-ocid="footer.link"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://instagram.com/ProcurementWala"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                  data-ocid="footer.link"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div>
              <div className="footer-heading">Quick Links</div>
              <ul className="footer-links">
                {NAV_IDS.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-heading">Contact</div>
              <ul className="footer-links">
                <li>
                  <a href="mailto:ravinder@ravinderkapoor.com">
                    ravinder@ravinderkapoor.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravinderkapoor.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ravinderkapoor.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/ravinderkapoor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ProcurementWala
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              &copy; {new Date().getFullYear()} Procurement Wala With Ravinder
              Kapoor. All Rights Reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noreferrer"
            >
              Built with &#10084;&#65039; using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
