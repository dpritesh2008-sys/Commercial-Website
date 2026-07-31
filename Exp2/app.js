const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearLabel = document.getElementById('year');

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

const products = [
  {
    title: 'Pro Cricket Bat',
    description: 'Powerful willow bat for precise shot-making and excellent balance.',
    price: '$159',
    category: 'cricket',
    image: 'images (1).jpg',
  },
  {
    title: 'Match Football',
    description: 'Designed for true flight and sharp response in competitive play.',
    price: '$79',
    category: 'football',
    image: 'images (2).jpg',
  },
  {
    title: 'Goalkeeper Gloves',
    description: 'Secure grip and flexible protection for confident saves.',
    price: '$64',
    category: 'football',
    image: 'images (3).jpg',
  },
  {
    title: 'Strike Trainer',
    description: 'Training gear to improve ball control and shot accuracy.',
    price: '$48',
    category: 'training',
    image: 'images (4).jpg',
  },
  {
    title: 'Club Team Jersey',
    description: 'Custom teamwear in breathable material for peak performance.',
    price: '$34',
    category: 'teamwear',
    image: 'images (5).jpg',
  },
  {
    title: 'Grip Batting Gloves',
    description: 'Lightweight gloves that offer superior feel and protection.',
    price: '$42',
    category: 'cricket',
    image: 'images (6).jpg',
  },
  {
    title: 'Training Cone Set',
    description: 'Durable cones for agility drills and field layout.',
    price: '$27',
    category: 'training',
    image: 'images.jpg',
  },
  {
    title: 'Pro Shin Guards',
    description: 'Comfortable protection for intense football matches.',
    price: '$45',
    category: 'football',
    image: '61f-HHbw5AL._AC_SY355_.jpg',
  },
  {
    title: 'Performance Track Pants',
    description: 'Lightweight teamwear pants built for training and recovery.',
    price: '$39',
    category: 'teamwear',
    image: 'Pant.jpg',
  },
  {
    title: 'Elite Sports Water Bottle',
    description: 'Keep hydrated with a durable bottle for daily practice.',
    price: '$22',
    category: 'training',
    image: 'Bottle.jpg',
  },
];

const productGrid = document.getElementById('productGrid');
const productCount = document.getElementById('productCount');
const categoryFilter = document.getElementById('categoryFilter');

function renderProducts(filter = 'all') {
  if (!productGrid || !productCount) return;
  const visibleProducts = filter === 'all'
    ? products
    : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const index = products.findIndex((item) => item.title === product.title);
      return `
      <article class="product-card">
        <div class="product-thumb" style="background-image: url('${encodeURI(product.image)}');"></div>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="product-card-meta">
          <span>${product.price}</span>
          <button type="button" class="card-link product-detail" data-index="${index}">View Details</button>
        </div>
      </article>
    `;
    })
    .join('');

  productCount.textContent = `Showing ${visibleProducts.length} products`;
  bindProductDetailButtons();
}

function openProductModal(product) {
  const productModal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');
  const modalCategory = document.getElementById('modalCategory');
  const modalOrderLink = document.getElementById('modalOrderLink');

  if (!productModal || !modalImage || !modalTitle || !modalDescription || !modalPrice || !modalCategory || !modalOrderLink) return;

  productModal.classList.add('visible');
  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden', 'false');
  modalImage.style.backgroundImage = `url('${encodeURI(product.image)}')`;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;
  modalCategory.textContent = product.category.toUpperCase();
  modalOrderLink.href = `order.html?product=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}`;
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const productModal = document.getElementById('productModal');
  if (!productModal) return;
  productModal.classList.remove('visible');
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindProductDetailButtons() {
  document.querySelectorAll('.product-detail').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      const product = products[index];
      if (product) openProductModal(product);
    });
  });
}

const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
if (modalClose) modalClose.addEventListener('click', closeProductModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeProductModal);

if (categoryFilter) {
  categoryFilter.addEventListener('change', (event) => {
    renderProducts(event.target.value);
  });
}

renderProducts();

const revealSections = document.querySelectorAll('section, .hero-section');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealSections.forEach((section) => revealObserver.observe(section));
