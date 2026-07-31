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
index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nova Commerce</title>
    <meta
      name="description"
      content="A responsive commercial website built with CSS Flexbox."
    />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="site.webmanifest" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="topbar">
      <nav class="navbar container">
        <a href="#" class="brand">Nova Commerce</a>
        <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
        <div class="nav-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section class="hero container">
        <div class="hero-content">
          <p class="eyebrow">Smart Tech • Premium Quality</p>
          <h1>Upgrade your workspace with modern essentials.</h1>
          <p>
            Discover elegant, high-performance products that help your brand
            look polished and professional.
          </p>
          <div class="hero-actions">
            <a href="#products" class="btn">Explore Collection</a>
            <a href="#about" class="btn btn-secondary">Why Choose Us</a>
          </div>
        </div>
        <div class="hero-visual" aria-label="Modern commercial workspace">
          <img src="assets/hero-image.svg" alt="Modern workspace with premium office products" />
          <div class="hero-badge">Trusted by 10k+ growing brands</div>
        </div>
      </section>
    </header>

    <main>
      <section id="about" class="info-section container">
        <div class="info-card">
          <h3>Flexible Design</h3>
          <p>
            The layout responds smoothly across phones, tablets, and desktops.
          </p>
        </div>
        <div class="info-card">
          <h3>Easy Navigation</h3>
          <p>
            Clear menus and grouped content keep the experience intuitive.
          </p>
        </div>
        <div class="info-card">
          <h3>Customer Focus</h3>
          <p>
            Every section is arranged to highlight products and calls to action.
          </p>
        </div>
      </section>

      <section id="services" class="services-section container">
        <div class="section-heading">
          <p class="eyebrow">Our Services</p>
          <h2>Everything you need to build a standout business presence</h2>
        </div>

        <div class="service-grid">
          <article class="service-card">
            <h3>Premium Curation</h3>
            <p>We carefully select products that balance style, durability, and value.</p>
          </article>
          <article class="service-card">
            <h3>Fast Delivery</h3>
            <p>Reliable shipping and easy ordering keep your experience smooth and efficient.</p>
          </article>
          <article class="service-card">
            <h3>Dedicated Support</h3>
            <p>Our team is always ready to guide you before, during, and after purchase.</p>
          </article>
        </div>
      </section>

      <section class="feature-section container">
        <div class="feature-content">
          <p class="eyebrow">Why Nova Commerce</p>
          <h2>Built for modern brands that value experience.</h2>
          <p>
            We combine thoughtful design, dependable service, and premium
            product selection to make every interaction feel effortless and
            trustworthy.
          </p>
          <ul class="feature-list">
            <li>Handpicked products for performance and style</li>
            <li>Flexible delivery options for local and global customers</li>
            <li>Friendly expert support whenever you need it</li>
          </ul>
        </div>
        <div class="feature-media">
          <img src="assets/feature-image.svg" alt="Professional team collaborating in a stylish office" />
        </div>
      </section>

      <section id="products" class="products-section container">
        <div class="section-heading">
          <p class="eyebrow">Popular Picks</p>
          <h2>Best-selling solutions</h2>
        </div>

        <div class="product-grid">
          <article class="product-card">
            <h3>Studio Kit</h3>
            <p>Everything needed to launch a polished brand experience.</p>
            <span>$129</span>
            <a href="#contact" class="card-link">Buy Now</a>
          </article>
          <article class="product-card">
            <h3>Smart Sync</h3>
            <p>Automation tools that keep workflows efficient and simple.</p>
            <span>$89</span>
            <a href="#contact" class="card-link">Buy Now</a>
          </article>
          <article class="product-card">
            <h3>Glow Lamp</h3>
            <p>Modern lighting that adds warmth to any modern workspace.</p>
            <span>$54</span>
            <a href="#contact" class="card-link">Buy Now</a>
          </article>
          <article class="product-card">
            <h3>Travel Tote</h3>
            <p>Durable and stylish storage for professionals on the move.</p>
            <span>$72</span>
            <a href="#contact" class="card-link">Buy Now</a>
          </article>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="container footer-content">
        <div>
          <h3>Nova Commerce</h3>
          <p>Design-forward products for ambitious teams.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <p class="footer-note">© <span id="year"></span> Nova Commerce. All rights reserved.</p>
      </div>
    </footer>
    <script src="app.js"></script>
  </body>
</html>
~~~
~~~
style.css
:root {
  --bg: #07111f;
  --panel: #ffffff;
  --text: #12304a;
  --muted: #5f6f82;
  --accent: #2563eb;
  --accent-dark: #1d4ed8;
  --accent-soft: #dbeafe;
  --shadow: 0 16px 40px rgba(7, 17, 31, 0.12);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  color: var(--text);
  background: linear-gradient(135deg, #f7fbff 0%, #eef4ff 100%);
  line-height: 1.6;
}

img {
  max-width: 100%;
}

.container {
  width: min(1120px, 92%);
  margin: 0 auto;
}

.topbar {
  background: linear-gradient(135deg, var(--bg), #183b6f);
  color: white;
  padding-bottom: 48px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
}

.brand {
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);
  color: white;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
}

.nav-links a,
.footer a {
  color: white;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.nav-links a:hover,
.footer a:hover {
  opacity: 0.8;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 45px 0 20px;
}

.hero-content {
  flex: 1.2;
}

.hero-visual {
  flex: 0.8;
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.hero-visual img {
  display: block;
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.hero-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(7, 17, 31, 0.8);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: var(--accent-soft);
  margin-bottom: 8px;
}

.hero h1 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 12px;
  line-height: 1.2;
}

.hero-content p {
  color: #e2e8f0;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.btn {
  display: inline-block;
  background: white;
  color: var(--accent);
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  background: #f8fafc;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.4);
}

.info-section,
.services-section,
.products-section,
.feature-section {
  padding: 58px 0;
}

.info-section {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.info-card,
.product-card {
  background: var(--panel);
  padding: 24px;
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.info-card {
  flex: 1 1 220px;
}

.info-card h3,
.product-card h3 {
  margin-bottom: 8px;
  color: var(--accent-dark);
}

.section-heading {
  margin-bottom: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card span {
  display: inline-block;
  margin-top: 6px;
  font-weight: 700;
  color: var(--accent);
}

.card-link {
  margin-top: auto;
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}

.service-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.service-card {
  background: var(--panel);
  padding: 24px;
  border-radius: 18px;
  box-shadow: var(--shadow);
  flex: 1 1 220px;
}

.feature-section {
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
}

.feature-content {
  flex: 1 1 320px;
}

.feature-media {
  flex: 1 1 320px;
}

.feature-media img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.feature-list {
  margin-top: 12px;
  padding-left: 20px;
  color: var(--muted);
}

.feature-list li {
  margin-bottom: 8px;
}

.footer {
  background: var(--bg);
  color: white;
  padding: 32px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer h4 {
  margin-bottom: 8px;
}

.footer-content div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-note {
  color: #cbd5e1;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .navbar,
  .hero,
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-toggle {
    display: inline-block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding-top: 10px;
  }

  .nav-links.active {
    display: flex;
  }

  .hero-visual {
    width: 100%;
  }

  .feature-section {
    gap: 20px;
  }
}
~~~

## OUTPUT
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/e1ada936-53d8-490e-862c-b5cd9f78cb97" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/93f86b03-a73c-4a21-8b38-5627cfb08e94" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/294409cf-a392-48ea-afc3-b7c117edf9f8" />


## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
