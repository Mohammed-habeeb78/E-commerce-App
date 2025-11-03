🛍️ Full-Stack MERN E-Commerce Website

🌟 Overview

A complete E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
It delivers a smooth online shopping experience with all essential and advanced features like cart management, real payments, and admin control panels.

The website supports Stripe and Razorpay payment gateways for secure and fast checkout, and includes both User and Admin dashboards for full system management.

⚙️ Tech Stack

Frontend: React.js · Context API · Tailwind CSS · Axios · React Router

Backend: Node.js · Express.js · MongoDB

Auth & Security: JWT · bcryptjs · dotenv · CORS

Payments: Stripe API · Razorpay API

Media & Tools: Cloudinary · Multer · Nodemon



🚀 Core Features

👤 User Side

✅ Secure Login & Signup with JWT Authentication

✅ View & Filter Products by Category, Price, and Rating

✅ Add, Remove, or Update Cart Items Instantly

✅ Responsive Design for Desktop and Mobile

✅ Real-time Order Tracking

✅ Multiple Payment Options

 💳 Stripe – Card payments (global)
 
 
 💸 Razorpay – UPI, cards, and net banking (India)

 
 📦 Cash on Delivery (optional)


✅ Delivery Address & Order Summary before Payment


🧑‍💼 Admin Side

🛠️ Add, Edit, and Delete Products

📦 Manage All Orders and View Payment Details

🔄 Update Order Status (Pending → Shipped → Delivered)

📊 Track Sales, Inventory, and Active Orders

🖼️ Upload Product Images using Cloudinary


💳 Payment Integrations:

Stripe

⚡ Seamless checkout experience with automatic redirects

🔐 Secure card processing and payment confirmation

🌎 Ideal for global transactions

Razorpay

🇮🇳 Fast, reliable, and widely used in India

💰 Supports UPI, Net Banking, Cards, and Wallets

🧾 Secure Order API verification on backend

🧠 Backend Overview

Built with Express.js, the backend handles authentication, product and order management, and secure API endpoints.
It includes:


Middleware for user and admin access

Order verification logic for both Stripe and Razorpay

Proper error handling and token-based user identification

🗂️ Project Structure


📁 Client (Frontend)

– React Components

– Context for State Management

– Pages (Home, Cart, Checkout, Orders, Admin Dashboard)

📁 Server (Backend)

– Models (User, Product, Order)

– Routes (Auth, Product, Payment, Order)

– Controllers for Business Logic

– Middleware for Auth & Error Handling


⚙️ Environment Setup

All environment variables are managed using .env files.

Example variables include:

MONGODB_URI

JWT_SECRET

STRIPE_SECRET_KEY

RAZORPAY_KEY_ID

RAZORPAY_KEY_SECRET

FRONTEND_URL

BACKEND_URL

(These are stored securely and never committed to GitHub.)

🧪 Testing Mode

Both Stripe and Razorpay have Test Mode for development:
🧩 Use test API keys to simulate transactions safely before switching to Live Mode.

🛠️ How the App Works

1️⃣ User browses products and adds them to cart.

2️⃣ Checkout page calculates total including delivery fee.

3️⃣ User selects payment method (Stripe, Razorpay, or COD).

4️⃣ Payment is securely processed.

5️⃣ Order details are saved in MongoDB.

6️⃣ Admin can view and update order status from dashboard.



🧩 Future Enhancements

✨ Wishlist & Favorites

✨ Product Reviews & Ratings

✨ Email Notifications for Orders

✨ Discount Codes & Coupons

✨ Live Shipment Tracking


👨‍💻 Author

Name: Mohammed Habeeb Rehman

GitHub: Mohammed-habeeb78

LinkedIn:mohammedhabeeburrehman

🧾 License

Licensed under the MIT License — feel free to use and modify.
