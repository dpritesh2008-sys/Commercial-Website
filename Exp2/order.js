const yearLabel = document.getElementById('year');
const orderTitle = document.getElementById('orderTitle');
const orderDescription = document.getElementById('orderDescription');
const orderProduct = document.getElementById('orderProduct');
const orderPrice = document.getElementById('orderPrice');
const orderForm = document.getElementById('orderForm');

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

const params = new URLSearchParams(window.location.search);
const productName = params.get('product') || 'Selected Product';
const productPrice = params.get('price') || 'N/A';

if (orderTitle) {
  orderTitle.textContent = `Order: ${productName}`;
}

if (orderDescription) {
  orderDescription.textContent = `You are placing an order for ${productName}. Complete the form below to confirm your purchase.`;
}

if (orderProduct) {
  orderProduct.textContent = productName;
}

if (orderPrice) {
  orderPrice.textContent = productPrice;
}

const orderProductInput = document.getElementById('orderProductInput');
const orderPriceInput = document.getElementById('orderPriceInput');
const orderSuccess = document.getElementById('orderSuccess');

if (orderProductInput) {
  orderProductInput.value = productName;
}

if (orderPriceInput) {
  orderPriceInput.value = productPrice;
}

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      return;
    }

    const formData = new FormData(orderForm);
    const userName = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const street = formData.get('street');
    const cityStateZip = formData.get('cityStateZip');
    const country = formData.get('country');
    const cardNumber = formData.get('cardNumber');

    if (orderSuccess) {
      orderSuccess.classList.add('show');
    }
    orderForm.classList.add('hidden');
    if (orderTitle) {
      orderTitle.textContent = `Thanks, ${userName}!`;
    }
    if (orderDescription) {
      orderDescription.textContent = `Your order request for ${productName} is ready. We will reach out shortly at ${email} or ${phone}.`; 
    }
  });
}
