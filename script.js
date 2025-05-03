// const cart = {};

// // Add item to cart
// function addToCart(product, price) {
//   if (cart[product]) {
//     cart[product].quantity += 1;
//   } else {
//     cart[product] = {
//       price: price,
//       quantity: 1
//     };
//   }

//   updateCartDisplay();
// }

// // Show cart in dropdown and update total
// function updateCartDisplay() {
//   const cartCount = document.getElementById('cart-count');
//   const cartList = document.getElementById('cart-list');
//   const cartTotal = document.getElementById('cart-total');

//   let totalItems = 0;
//   let totalPrice = 0;
//   cartList.innerHTML = '';

//   for (let item in cart) {
//     const quantity = cart[item].quantity;
//     const price = cart[item].price;
//     totalItems += quantity;
//     totalPrice += quantity * price;

//     // Update Cart in Navbar
//     const li = document.createElement('li');
//     li.textContent = `${item} x${quantity} - ₹${quantity * price}`;
//     cartList.appendChild(li);
//   }

//   cartCount.textContent = totalItems;
//   cartTotal.textContent = `Total: ₹${totalPrice}`;
// }

// // Toggle dropdown
// function toggleCartDropdown() {
//   const dropdown = document.getElementById('cart-dropdown');
//   dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// }

// // Show checkout modal
// function showCheckoutModal() {
//   const modal = document.getElementById('checkout-modal');
//   modal.style.display = 'block';
// }

// // Close the modal
// function closeModal() {
//   const modal = document.getElementById('checkout-modal');
//   modal.style.display = 'none';
// }

// // Checkout form submission
// function submitOrder(event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value.trim();
//   const address = document.getElementById('address').value.trim();
//   const phone = document.getElementById('phone').value.trim();

//   if (!Object.keys(cart).length) {
//     alert('Your cart is empty!');
//     return;
//   }

//   const orderSummary = Object.entries(cart).map(([product, item]) => {
//     return `${product} x${item.quantity} = ₹${item.quantity * item.price}`;
//   }).join('\n');

//   alert(
//     `✅ Order placed successfully!\n\n🧾 Order Summary:\n${orderSummary}\n\n👤 Name: ${name}\n🏠 Address: ${address}\n📞 Phone: ${phone}`
//   );

//   // Initialize EmailJS
// emailjs.init("Au3hIVFidZQzP3KAk"); // Replace with your EmailJS user ID

// // // Checkout form submission
// // function submitOrder(event) {
// //   event.preventDefault();

// //   const name = document.getElementById('name').value.trim();
// //   const address = document.getElementById('address').value.trim();
// //   const phone = document.getElementById('phone').value.trim();
// //   const email = document.getElementById('email').value.trim(); // Customer's email address

// //   if (!Object.keys(cart).length) {
// //     alert('Your cart is empty!');
// //     return;
// //   }

// //   // Generate the order summary
// //   const orderSummary = Object.entries(cart).map(([product, item]) => {
// //     return `${product} x${item.quantity} = ₹${item.quantity * item.price}`;
// //   }).join('\n');

// //   // Prepare the order data for the email template
// //   const orderData = {
// //     name: name,
// //     address: address,
// //     phone: phone,
// //     orderSummary: orderSummary,
// //     email: email,  // Customer's email for the confirmation email
// //   };

// //   // Send email to the customer
// //   emailjs.send('YOUR_SERVICE_ID', 'YOUR_CUSTOMER_TEMPLATE_ID', orderData)
// //     .then(function(response) {
// //       console.log('Sent email to customer:', response);
// //       alert('Order placed successfully! A confirmation email has been sent.');
// //     }, function(error) {
// //       console.log('Error sending email to customer:', error);
// //       alert('There was an error sending the confirmation email. Please try again.');
// //     });

// //   // Send email to the owner (to notify about the new order)
// //   emailjs.send('YOUR_SERVICE_ID', 'YOUR_OWNER_TEMPLATE_ID', orderData)
// //     .then(function(response) {
// //       console.log('Sent email to owner:', response);
// //       alert('The owner has been notified about your order.');
// //     }, function(error) {
// //       console.log('Error sending email to owner:', error);
// //       alert('There was an error sending the order email to the owner. Please try again.');
// //     });

// //   // Reset cart and form
// //   Object.keys(cart).forEach(key => delete cart[key]);
// //   updateCartDisplay();
// //   document.getElementById('checkout-form').reset();
// //   closeModal();
// // }


//   // Reset cart and form
//   Object.keys(cart).forEach(key => delete cart[key]);
//   updateCartDisplay();
//   document.getElementById('checkout-form').reset();
//   closeModal();
// }

// // Add event listeners to "Add to Cart" buttons
// document.querySelectorAll('.add-to-cart').forEach(button => {
//   button.addEventListener('click', function() {
//     const product = this.getAttribute('data-product');
//     const price = parseInt(this.getAttribute('data-price'));
//     addToCart(product, price);
//   });
// });

// Initialize EmailJS with your User ID (replace with your actual User ID)
emailjs.init("Au3hIVFidZQzP3KAk"); // Replace with your EmailJS user ID

// Global cart object to hold cart items
let cart = {};

// Function to add items to the cart
function addToCart(productName, price) {
  // If product doesn't exist in the cart, add it, otherwise increase quantity
  if (!cart[productName]) {
    cart[productName] = { price: price, quantity: 1 };
  } else {
    cart[productName].quantity++;
  }
  
  // Update cart display
  updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
  let cartContainer = document.getElementById('cart');
  let cartContent = Object.entries(cart).map(([product, item]) => {
    return `<p>${product}: ₹${item.price} x ${item.quantity}</p>`;
  }).join('');
  
  // Display the cart content and total amount
  let totalAmount = Object.entries(cart).reduce((total, [product, item]) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  cartContainer.innerHTML = `
    <h3>Your Cart:</h3>
    ${cartContent}
    <hr>
    <strong>Total: ₹${totalAmount}</strong>
    <br>
    <button onclick="checkout()">Checkout</button>
  `;
}

// Function to handle checkout (Place Order)
function checkout() {
  // Open modal or redirect to checkout form (you can customize as needed)
  let modal = document.getElementById('checkoutModal');
  modal.style.display = 'block'; // Make checkout modal visible
}

// Function to submit the order
function submitOrder(event) {
  event.preventDefault();

  // Collect user data from form inputs
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim(); // Customer's email address

  // Check if cart is empty
  if (!Object.keys(cart).length) {
    alert('Your cart is empty!');
    return;
  }

  // Generate the order summary
  const orderSummary = Object.entries(cart).map(([product, item]) => {
    return `${product} x${item.quantity} = ₹${item.quantity * item.price}`;
  }).join('\n');

  // Prepare order data for the email template
  const orderData = {
    name: name,
    address: address,
    phone: phone,
    orderSummary: orderSummary,
    email: email,  // Customer's email for the confirmation email
  };

  // Send email to the customer (replace 'YOUR_SERVICE_ID' and 'YOUR_CUSTOMER_TEMPLATE_ID' with actual values)
  emailjs.send('service_fqtcqds', 'template_puhk4rf', orderData)
    .then(function(response) {
      console.log('Sent email to customer:', response);
      alert('Order placed successfully! A confirmation email has been sent.');
    }, function(error) {
      console.log('Error sending email to customer:', error);
      alert('There was an error sending the confirmation email. Please try again.');
    });

  // Send email to the owner (to notify about the new order)
  emailjs.send('service_fqtcqds', 'template_puhk4rf', orderData)
    .then(function(response) {
      console.log('Sent email to owner:', response);
      alert('The owner has been notified about your order.');
    }, function(error) {
      console.log('Error sending email to owner:', error);
      alert('There was an error sending the order email to the owner. Please try again.');
    });

  // Reset cart and form
  Object.keys(cart).forEach(key => delete cart[key]); // Empty the cart
  updateCartDisplay(); // Update the cart display after emptying it
  document.getElementById('checkout-form').reset(); // Reset the checkout form
  closeModal(); // Close the modal after submission (if using a modal)
}

// Function to close the checkout modal
function closeModal() {
  let modal = document.getElementById('checkoutModal');
  modal.style.display = 'none'; // Hide checkout modal
}

// Example function to populate a cart with items
// (This should be linked to Add to Cart buttons in your HTML)
document.getElementById('addRice').addEventListener('click', function() {
  addToCart('Rice', 50); // Add Rice to cart with price ₹50
});
document.getElementById('addWheat').addEventListener('click', function() {
  addToCart('Wheat', 40); // Add Wheat to cart with price ₹40
});
document.getElementById('addOil').addEventListener('click', function() {
  addToCart('Oil', 120); // Add Oil to cart with price ₹120
});

