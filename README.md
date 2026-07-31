~~~
Name: Ritesh DP
Register Number: 212225040339
~~~
# Ex02 Commercial Website
## Date:27/7/2026

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ProKick Sports</title>
    <meta
      name="description"
      content="A responsive football and cricket accessories website built with CSS Flexbox."
    />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="site.webmanifest" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="topbar">
      <nav class="navbar container">
        <div class="brand-group">
          <a href="#" class="brand">ProKick Sports</a>
          <div class="brand-profile">
            <img src="RM.jpg" alt="ProKick Sports profile image" />
          </div>
        </div>
        <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
        <div class="nav-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section class="hero-section container">
        <div class="hero-copy">
          <p class="eyebrow">Football · Cricket · Teamwear</p>
          <h1>Equip your game with premium gear that plays as hard as you do.</h1>
          <p>
            Discover performance accessories for every player, from the pitch
            to the crease. Fast shipping, expert service, and standout design.
          </p>
          <div class="hero-actions">
            <a href="#products" class="btn btn-primary">Shop Bestsellers</a>
            <a href="#categories" class="btn btn-secondary">Browse Categories</a>
          </div>
          <div class="hero-highlights">
            <div>
              <strong>4.9/5</strong>
              <span>Customer satisfaction</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>Top-quality accessories</span>
            </div>
            <div>
              <strong>Next-day</strong>
              <span>Delivery available</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-label="Sports gear and accessory showcase">
          <div class="split-images">
            <img src="Ronaldo.jpg" alt="Football player Cristiano Ronaldo holding trophy" class="hero-player" loading="lazy"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'" />
            <img src="Dhoni.jpg" alt="Cricket player MS Dhoni celebrating with trophy" class="hero-player" loading="lazy"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80'" />
          </div>
          <div class="hero-badge">Season essentials for teams and athletes</div>
        </div>
      </section>
    </header>

    <main>
      <section id="about" class="about-section container">
        <div class="about-copy">
          <p class="eyebrow">About ProKick Sports</p>
          <h2>Gear for athletes who demand performance, durability, and style.</h2>
          <p>
            ProKick Sports brings together top football and cricket accessories
            with modern design and expert craftsmanship. Whether you are shopping
            for training, match day, or team orders, we make it easier to find
            equipment built to win.
          </p>
        </div>
        <div class="about-stats">
          <div>
            <strong>250+</strong>
            <span>Products curated</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Customer satisfaction</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Support available</span>
          </div>
        </div>
      </section>

      <section class="gallery-section container">
        <h2>Featured Gear</h2>
        <div class="gallery-grid">
          <article class="gallery-card">
            <img src="images.jpg" alt="Football boots and ball set" />
            <p>Elite football sets for match day impact.</p>
          </article>
          <article class="gallery-card">
            <img src="images (1).jpg" alt="Cricket bat and helmet" />
            <p>Professional cricket accessories that last season after season.</p>
          </article>
          <article class="gallery-card">
            <img src="images (2).jpg" alt="Sport equipment and teamwear" />
            <p>Team-ready pieces crafted for comfort and style.</p>
          </article>
          <article class="gallery-card">
            <img src="images (3).jpg" alt="Athletic performance accessories" />
            <p>Performance gear designed for speed and comfort.</p>
          </article>
          <article class="gallery-card">
            <img src="images (4).jpg" alt="Football and cricket accessories" />
            <p>Essential accessories for every training session.</p>
          </article>
          <article class="gallery-card">
            <img src="images (5).jpg" alt="Stylish teamwear" />
            <p>Bold teamwear built for group cohesion and comfort.</p>
          </article>
          <article class="gallery-card">
            <img src="images (6).jpg" alt="Sport equipment showcase" />
            <p>Modern equipment for competitive players.</p>
          </article>
          <article class="gallery-card">
            <img src="61f-HHbw5AL._AC_SY355_.jpg" alt="Football stadium gear collection" />
            <p>Signature pieces for the ultimate match day experience.</p>
          </article>
          <article class="gallery-card">
            <img src="complete-cricket-kit-15-21years-full-size-20-ic-sports-20-original-imahmgzvg6zxnc7y.webp" alt="Complete cricket kit" />
            <p>Complete cricket kits for players of all ages.</p>
          </article>
          <article class="gallery-card">
            <img src="IMG_8219_2.webp" alt="Sports apparel layout" />
            <p>Fresh designs for team uniforms and training wear.</p>
          </article>
          <article class="gallery-card">
            <img src="phoenix-cricket-set-_yellow_-men-size-web-images-1.webp" alt="Yellow cricket set" />
            <p>Standout cricket sets that perform in every match.</p>
          </article>
          <article class="gallery-card">
            <img src="pngtree-ronaldo-soccer-cleats-football-gold-bracelet-sports-equipment-accessories-png-image_19292862.webp" alt="Football cleats and gear" />
            <p>Elite football cleats for precision and momentum.</p>
          </article>
          <article class="gallery-card">
            <img src="RP_shield_Updated.webp" alt="Sports protection gear" />
            <p>Protective gear built for contact and collision sports.</p>
          </article>
          <article class="gallery-card">
            <img src="Untitleddesign-2025-07-09T114542.933.webp" alt="Fan favorite sports design" />
            <p>Fan favorite sports collections with modern flair.</p>
          </article>
          <article class="gallery-card">
            <img src="WhatsAppImage2025-01-27at1.04.04PM_7.webp" alt="Match-ready sports setup" />
            <p>Match-ready setups that look and feel premium.</p>
          </article>
          <article class="gallery-card">
            <img src="assets/hero-image.jpg" alt="Training and boots collection" />
            <p>High-performance training essentials for athletes.</p>
          </article>
        </div>
      </section>

      <section id="categories" class="category-section container">
        <article class="category-card">
          <h3>Football Essentials</h3>
          <p>Boots, balls, gloves, and protective wear for every position.</p>
        </article>
        <article class="category-card">
          <h3>Cricket Gear</h3>
          <p>Bats, pads, gloves, and training accessories built to perform.</p>
        </article>
        <article class="category-card">
          <h3>Training Kits</h3>
          <p>Improve speed, control, and endurance with support gear.</p>
        </article>
        <article class="category-card">
          <h3>Teamwear</h3>
          <p>Customizable uniforms and accessories for squads of any size.</p>
        </article>
      </section>

      <section class="feature-section container">
        <div class="feature-copy">
          <p class="eyebrow">Why Choose Us</p>
          <h2>Built for players who want function, style, and fast delivery.</h2>
          <p>
            We curate gear that balances comfort and performance. Whether you’re
            training for the next tournament or updating your club kit, find
            accessories engineered to last.
          </p>
          <ul class="feature-list">
            <li>Sport-specific products with premium materials</li>
            <li>Flexible delivery and team order support</li>
            <li>Responsive service from sports equipment experts</li>
          </ul>
        </div>
      </section>

      <section id="products" class="products-section container">
        <div class="section-heading">
          <p class="eyebrow">Shop the Essentials</p>
          <h2>Top-rated football and cricket accessories.</h2>
        </div>

        <div class="product-toolbar">
          <select id="categoryFilter" aria-label="Filter products by category">
            <option value="all">All Categories</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="training">Training</option>
            <option value="teamwear">Teamwear</option>
          </select>
          <span id="productCount">Showing 0 products</span>
        </div>

        <div id="productGrid" class="product-grid"></div>
      </section>

      <div id="productModal" class="product-modal hidden" aria-hidden="true">
        <div class="modal-overlay"></div>
        <div class="modal-panel">
          <button type="button" class="modal-close" aria-label="Close product details">×</button>
          <div class="modal-hero">
            <div class="modal-image" id="modalImage"></div>
            <div class="modal-copy">
              <p class="eyebrow" id="modalCategory">CATEGORY</p>
              <h2 id="modalTitle">Product title</h2>
              <p id="modalDescription">Product description goes here.</p>
              <div class="modal-meta">
                <span class="modal-price" id="modalPrice">$0</span>
                <a id="modalOrderLink" href="#" class="btn btn-primary">Place Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="newsletter-section container">
        <div class="newsletter-card">
          <div>
            <p class="eyebrow">Stay in the Game</p>
            <h2>Get exclusive access to new arrivals and match-ready offers.</h2>
          </div>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </section>

      <section id="contact" class="contact-section container">
        <div class="contact-card">
          <p class="eyebrow">Contact Us</p>
          <h2>Reach out to ProKick Sports</h2>
          <p>For orders, custom teamwear, or support, get in touch with us directly.</p>
          <div class="contact-details">
            <p><strong>Phone:</strong> <a href="tel:8825743549">8825743549</a></p>
            <p><strong>Email:</strong> <a href="mailto:dpritesh2008@gmail.com">dpritesh2008@gmail.com</a></p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <div>
          <h3>ProKick Sports</h3>
          <p>Premium football and cricket accessories for players at every level.</p>
        </div>
        <div class="footer-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </div>
        <p class="footer-note">© <span id="year"></span> ProKick Sports. All rights reserved.</p>
      </div>
    </footer>
    <script src="app.js"></script>
  </body>
</html>

~~~
~~~
style.css
:root {
  --bg: #121212;
  --panel: rgba(18,18,18,0.96);
  --text: #FFFFFF;
  --muted: #BDBDBD;
  --accent: #E53935;
  --accent-dark: #B71C1C;
  --accent-soft: rgba(229, 57, 53, 0.18);
  --success: #4CAF50;
  --offer: #FFC107;
  --panel-bg: rgba(18,18,18,0.96);
  --panel-text: #FFFFFF;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", "Segoe UI", sans-serif;
  color: var(--text);
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 18%),
    linear-gradient(180deg, var(--bg) 0%, #0d0d0d 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Central dark content panel with subtle glow */
.container {
  width: min(1180px, 94%);
  margin: 24px auto;
  background: rgba(24, 24, 24, 0.98);
  color: var(--text);
  border-radius: 12px;
  box-shadow: 0 18px 60px rgba(0,0,0,0.55);
  padding: 28px 32px;
  position: relative;
  z-index: 1;
}

/* hero section on dark theme */
.hero-section {
  background: rgba(18, 18, 18, 0.96);
  color: var(--text) !important;
  border-radius: 36px;
  padding: 70px 0 110px;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 32px 90px rgba(0,0,0,0.36);
}

.hero-copy h1,
.hero-copy p,
.hero-copy .eyebrow { color: var(--text) !important; }

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at 20% 10%, rgba(212, 175, 55, 0.08), transparent 16%),
    radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.07), transparent 18%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02), transparent 40%, rgba(255, 255, 255, 0.02) 60%, transparent 100%);
  pointer-events: none;
  mix-blend-mode: soft-light;
}


img {
  max-width: 100%;
  display: block;
}

/* Ensure readable text for dark sections inside the main layout */
.container {
  width: min(1180px, 94%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
  color: var(--panel-text) !important;
}

/* Force common content elements inside white panels to dark for readability */
.container :is(h1,h2,h3,h4,h5,p,span,a,label,strong,li,small) {
  color: var(--panel-text) !important;
}

/* Keep interactive buttons white even inside panels */
.container .btn,
.container .btn * {
  color: var(--text) !important;
}

/* Preserve white text for hero, gallery and feature sections that use dark backgrounds */
.hero-section,
.hero-section *,
.gallery-card,
.gallery-card *,
.feature-section,
.feature-section * {
  color: var(--text) !important;
}

/* Apply dark text only to specific white panels (avoid overriding dark sections) */
.product-card,
.order-card,
.contact-card,
.newsletter-card,
.category-card,
.product-card *,
.order-card *,
.contact-card *,
.newsletter-card * {
  color: var(--panel-text) !important;
}

/* Keep hero band and its children white */
.hero-section,
.hero-section * {
  color: var(--text) !important;
}

/* Ensure button text stays white */
.btn, .btn * {
  color: var(--text) !important;
}

section,
.hero-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}

.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

section h2 {
  position: relative;
}

section h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.8rem;
  width: 5rem;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), rgba(255, 255, 255, 0.3));
}

.topbar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: rgba(18,18,18,0.98);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 24px 0;
}

.topbar .container {
  background: transparent;
  padding: 0;
  box-shadow: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* Header adaptive text colors and controls */
.topbar,
.topbar a,
.topbar .brand,
.topbar .nav-links a,
.topbar .menu-toggle {
  color: var(--text);
}

.nav-links a:hover {
  color: var(--accent);
}

.menu-toggle {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.18);
  color: var(--text);
  padding: 6px 10px;
  border-radius: 6px;
}

.brand-profile img {
  display: block;
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand {
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.brand-profile {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(216, 185, 86, 0.45);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.brand-profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  font-weight: 700;
  position: relative;
  padding: 4px 0;
  transition: color 0.22s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.28s ease;
  border-radius: 999px;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--accent);
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
}

.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  padding: 70px 0 110px;
  overflow: hidden;
  border-radius: 36px;
  background: var(--panel-bg);
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
}

.hero-section::before {
  content: "";
  position: absolute;
  top: -24px;
  right: -80px;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(229, 57, 53, 0.08), transparent 50%);
  filter: blur(44px);
}

.hero-section::after {
  content: "";
  position: absolute;
  bottom: -44px;
  left: -64px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.7), transparent 56%);
  filter: blur(34px);
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  align-items: center;
  padding: 60px 0;
}

.about-copy,
.about-stats {
  flex: 1 1 360px;
}

.about-copy h2,
.about-copy p,
.about-stats div strong,
.about-stats div span {
  color: white;
}

.about-copy h2 {
  font-size: clamp(2.2rem, 3vw, 3rem);
  margin-top: 16px;
  line-height: 1.05;
}

.about-copy p {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  max-width: 560px;
}

.hero-visual {
  background: transparent !important;
}

.hero-visual .split-images img.hero-player {
  box-shadow: none !important;
  border-radius: 0 !important;
  outline: none !important;
}

/* ensure hero badge is subtle on white */
.hero-badge {
  background: rgba(0,0,0,0.06) !important;
  color: var(--panel-text) !important;
}

.about-stats {
  display: grid;
  gap: 18px;
  padding: 28px 28px;
  background: rgba(18,18,18,0.96);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 32px;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.24);
}

.about-stats div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about-stats div strong {
  font-size: 1.9rem;
  color: var(--accent);
}

.about-stats div span {
  color: rgba(255, 255, 255, 0.75);
}

.hero-copy {
  flex: 1.05;
  max-width: 620px;
}

.hero-copy .eyebrow {
  color: var(--accent);
  letter-spacing: 0.24em;
  margin-bottom: 18px;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 4.4rem);
  line-height: 1.02;
  color: white;
  margin-bottom: 20px;
}

.hero-copy p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.05rem;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 32px 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 30px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, color 0.22s ease;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(8px);
}

.btn-primary {
  background: var(--accent);
  color: var(--text);
  box-shadow: 0 18px 40px rgba(229, 57, 53, 0.22);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--accent);
}

.btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.48);
}

.hero-highlights {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.hero-highlights div {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  padding: 18px 20px;
  min-width: 160px;
  box-shadow: inset 0 0 12px rgba(255,255,255,0.04);
}

.hero-highlights strong {
  color: var(--text);
}

.hero-highlights span {
  color: var(--muted);
}

.hero-highlights strong {
  display: block;
  font-size: 1.2rem;
  color: white;
}

.hero-highlights span {
  color: rgba(255, 255, 255, 0.72);
  margin-top: 6px;
  display: block;
}

.hero-visual {
  flex: 0.95;
  max-width: 540px;
  position: relative;
}

.hero-visual img {
  width: 100%;
  border-radius: 32px;
  box-shadow: 0 42px 90px rgba(8, 14, 36, 0.45);
  height: auto;
  transform: translateZ(0);
}

.hero-badge {
  position: absolute;
  bottom: 22px;
  left: 22px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  padding: 14px 18px;
  border-radius: 999px;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

.gallery-section,
.category-section,
.products-section,
.newsletter-section,
.feature-section,
.footer {
  padding-top: 56px;
}

.gallery-section h2 {
  color: white;
  margin-bottom: 28px;
  font-size: 2rem;
}

/* When gallery sits inside the white content panel, make the section heading dark */
.container .gallery-section h2,
.container .feature-section h2,
.container .about-section h2 {
  color: var(--panel-text);
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
}

.gallery-card {
  border-radius: 34px;
  overflow: hidden;
  background: rgba(18,18,18,0.96);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);
  min-height: 360px;
  display: flex;
  flex-direction: column;
  flex: 1 1 min(320px, 100%);
  max-width: 330px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.gallery-card:hover {
  transform: translateY(-9px);
  box-shadow: 0 32px 76px rgba(0, 0, 0, 0.28);
  border-color: rgba(229, 57, 53, 0.18);
}

.gallery-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.gallery-card:hover img {
  transform: scale(1.03);
}

.gallery-card p {
  padding: 18px 20px;
  color: var(--text); /* keep captions light on dark card backgrounds */
  font-weight: 600;
  text-align: center;
}

.category-section {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
}

.category-card {
  background: rgba(18,18,18,0.96);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 28px;
  padding: 34px;
  color: var(--text);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1 1 240px;
  max-width: 300px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 55px rgba(0, 0, 0, 0.2);
}

.category-card h3 {
  font-size: 1.25rem;
  margin-bottom: 14px;
}

.category-card p {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

.feature-section {
  display: flex;
  align-items: center;
  gap: 36px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.feature-media,
.feature-copy {
  flex: 1 1 320px;
}

.feature-copy .eyebrow {
  color: var(--accent);
}

.feature-copy h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin: 18px 0;
  color: white;
  text-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
}

.feature-copy p {
  color: rgba(255, 255, 255, 0.82);
  max-width: 540px;
}

.feature-list {
  margin-top: 24px;
  display: grid;
  gap: 12px;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 18px;
}

.feature-list li {
  position: relative;
  padding-left: 18px;
}

.feature-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.8rem;
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
}

.products-section .section-heading {
  color: var(--panel-text);
}

.products-section .eyebrow {
  color: var(--muted);
}

.products-section h2 {
  color: var(--panel-text);
  margin-top: 10px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.product-card {
  position: relative;
  overflow: hidden;
  background: var(--panel-bg);
  border-radius: 8px;
  padding: 18px;
  min-height: 320px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0,0,0,0.06);
  color: var(--panel-text);
  flex: 1 1 min(240px, 100%);
  max-width: 300px;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card::before {
  display: none;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.10);
  border-color: var(--accent);
}

.product-card h3 {
  color: var(--panel-text);
}
.product-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
}

.product-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.product-modal.visible {
  opacity: 1;
  pointer-events: auto;
}

.product-modal.hidden {
  opacity: 0;
  pointer-events: none;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(18, 18, 18, 0.92);
  backdrop-filter: blur(6px);
}

.modal-panel {
  position: relative;
  width: min(940px, 100%);
  max-width: 940px;
  background: rgba(18, 18, 18, 0.98);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 32px;
  box-shadow: 0 42px 120px rgba(0, 0, 0, 0.45);
  padding: 34px;
  z-index: 1;
}

.modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-hero {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.modal-image {
  width: 100%;
  max-width: 420px;
  min-height: 320px;
  border-radius: 28px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
}

.modal-copy {
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-copy h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 2.6vw, 2.8rem);
  line-height: 1.05;
}

.modal-copy p {
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.8;
  margin-bottom: 24px;
}

.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.modal-price {
  font-size: 1.55rem;
  color: var(--accent);
  font-weight: 900;
  background: rgba(255, 255, 255, 0.05);
  padding: 14px 20px;
  border-radius: 18px;
}

.modal-panel .btn {
  min-width: 180px;
}

@media (max-width: 900px) {
  .modal-hero {
    flex-direction: column;
  }

  .modal-image {
    max-width: 100%;
  }

  .modal-copy {
    width: 100%;
  }
}
.product-card p {
  color: rgba(255, 255, 255, 0.82);
  margin: 14px 0;
}

.card-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(229, 57, 53, 0.18), rgba(255, 255, 255, 0.08));
  border: 1px solid rgba(229, 57, 53, 0.25);
  color: var(--text);
  font-weight: 700;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.card-link:hover {
  background: linear-gradient(135deg, rgba(229, 57, 53, 0.32), rgba(255, 255, 255, 0.12));
  transform: translateY(-2px);
  box-shadow: 0 18px 35px rgba(229, 57, 53, 0.24);
}

.nav-links a {
  color: var(--panel-text);
  text-decoration: none;
  margin-left: 18px;
  font-weight: 700;
  font-size: 0.95rem;
}
.product-thumb {
  height: 180px;
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.18), rgba(255, 255, 255, 0.08)),
    center / cover no-repeat;
  margin-bottom: 22px;
  background-size: cover;
  background-position: center;
}

.product-card span {
  color: var(--accent);
  font-size: 1rem;
}

.newsletter-section {
  padding: 0;
}

.newsletter-card {
  background: rgba(18,18,18,0.96);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 34px;
  padding: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
}

.newsletter-card h2 {
  color: var(--text);
  margin: 0;
  max-width: 600px;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.newsletter-form input {
  padding: 16px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  min-width: 280px;
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.65);
}

.newsletter-form button {
  min-width: 160px;
}

.order-section {
  padding: 70px 0 90px;
  opacity: 1;
  transform: none;
}

.order-card {
  background: linear-gradient(180deg, rgba(17, 12, 43, 0.96), rgba(10, 8, 28, 0.96));
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 34px;
  padding: 42px;
  box-shadow: 0 36px 100px rgba(0, 0, 0, 0.28);
  max-width: 860px;
  margin: 0 auto;
}

.order-card .eyebrow {
  color: var(--accent);
}

.order-card h2 {
  margin: 18px 0 18px;
  color: white;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.order-card p {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
  margin-bottom: 24px;
}

.order-info {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  margin-bottom: 28px;
}

.order-info strong {
  display: block;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 8px;
}

.order-info p {
  color: white;
  font-weight: 700;
}

.order-form {
  display: grid;
  gap: 28px;
}

.form-section {
  border: 1px solid rgba(212, 175, 55, 0.16);
  padding: 24px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.04);
}

.form-section h3 {
  margin: 0 0 18px;
  color: white;
  font-size: 1.25rem;
}

.order-form label {
  display: grid;
  gap: 10px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.order-form input,
.order-form textarea {
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid rgba(212, 175, 55, 0.18);
  background: rgba(255, 255, 255, 0.07);
  color: white;
  font: inherit;
}

.order-form textarea {
  min-height: 140px;
  resize: vertical;
}

.order-form input::placeholder,
.order-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.order-success {
  display: none;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 24px;
  padding: 26px;
  margin-top: 24px;
}

.order-success.show {
  display: block;
}

.order-success h3 {
  margin: 0 0 12px;
  color: white;
}

.order-success p {
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.75;
  margin-bottom: 18px;
}

.order-note {
  margin-top: 22px;
  color: rgba(255, 255, 255, 0.7);
}

.contact-section {
  padding: 56px 0;
}

.contact-card {
  background: linear-gradient(180deg, rgba(12, 18, 45, 0.95), rgba(8, 12, 30, 0.95));
  border: 1px solid rgba(216, 185, 86, 0.22);
  border-radius: 36px;
  padding: 42px;
  color: white;
  max-width: 820px;
  box-shadow: 0 32px 92px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(18px);
}

.contact-card .eyebrow {
  color: var(--accent);
}

.contact-card h2 {
  margin: 18px 0 12px;
  font-size: clamp(2rem, 3vw, 2.7rem);
}

.contact-card p {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.8;
}

/* Split hero images for cricket and football player visuals */
.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
}

.hero-visual .split-images {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.hero-visual .split-images img.hero-player {
  width: 48%;
  max-width: 520px;
  height: auto;
  border-radius: 0; /* flat corners */
  box-shadow: none; /* remove depth for flat look */
  object-fit: cover;
}

@media (max-width: 860px) {
  .hero-visual .split-images {
    flex-direction: column;
  }
  .hero-visual .split-images img.hero-player {
    width: 100%;
  }
}

.contact-details {
  margin-top: 22px;
  display: grid;
  gap: 12px;
}

.contact-details a {
  color: var(--accent);
  text-decoration: none;
}

.contact-details strong {
  color: white;
}

.footer {
  padding: 40px 0 24px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 28px;
  align-items: center;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
}

.footer h3 {
  color: white;
}

.footer p {
  color: rgba(255, 255, 255, 0.92);
}

.footer-note {
  width: 100%;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 14px;
}

@media (max-width: 980px) {
  .hero-section,
  .feature-section {
    flex-direction: column;
  }

  .hero-copy,
  .hero-visual {
    width: 100%;
  }

  .hero-copy {
    text-align: center;
    align-items: center;
  }

  .hero-copy h1,
  .hero-copy p {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .product-grid,
  .category-section,
  .gallery-grid {
    flex-direction: column;
    align-items: center;
  }

  .product-card,
  .category-card,
  .gallery-card {
    max-width: 520px;
  }
}

@media (max-width: 720px) {
  .topbar {
    padding: 24px 0 16px;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    padding-top: 12px;
  }

  .nav-links.active {
    display: flex;
  }

  .hero-section {
    padding-top: 24px;
  }

  .hero-copy h1 {
    font-size: 2.4rem;
  }

  .gallery-grid,
  .product-grid,
  .category-section {
    flex-direction: column;
    align-items: center;
  }

  .gallery-card img {
    height: 220px;
  }

  .newsletter-card {
    padding: 28px;
  }

  .footer-content {
    align-items: flex-start;
  }
}
~~~

## OUTPUT
<img width="1917" height="1021" alt="image" src="https://github.com/user-attachments/assets/358265d7-84f5-49cb-81bb-49d714498b30" />
<img width="1917" height="1015" alt="image" src="https://github.com/user-attachments/assets/b4109546-e291-4957-9296-164bc6a9053e" />
<img width="1918" height="1015" alt="image" src="https://github.com/user-attachments/assets/c9d15c2a-b53a-4c59-b3c1-5f9f95d69545" />
<img width="1918" height="1006" alt="image" src="https://github.com/user-attachments/assets/08490117-2612-40d2-89b6-bffd6e6d0788" />
<img width="1917" height="1006" alt="image" src="https://github.com/user-attachments/assets/93337275-8644-4089-8110-81206c3e3513" />
<img width="1918" height="1002" alt="image" src="https://github.com/user-attachments/assets/8ad59169-ae8c-4464-a998-24007662a23f" />


## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
