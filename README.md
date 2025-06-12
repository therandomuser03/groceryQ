# 🛒 GroceryQ — Your Groceries, Instantly.

**GroceryQ** is a high-speed grocery delivery web application built to fulfill daily essentials within **10–15 minutes**. Powered by hyper-local dark stores and intelligent logistics, it leverages modern web technologies to deliver a seamless and lightning-fast online shopping experience.

---

## ⚡️ Project Overview

GroceryQ is a Quick Commerce (Q-Commerce) platform designed as a full-stack web solution. It aims to redefine how users shop for groceries online by combining real-time order tracking, smart inventory, and hyper-local delivery networks — all accessible through a fast, responsive, and elegant interface.

---

## ✨ Features

- ⚡ **10–15 Minute Delivery** — Built for speed with ultra-fast fulfillment workflows.
- 🧭 **Dark Store Matching** — Auto-matches users with the nearest fulfillment center.
- 🚚 **Real-Time Order Tracking** — End-to-end tracking from order placement to doorstep.
- 🛍️ **Smart Catalog & Inventory** — Dynamic listing of grocery items with real-time availability.
- 🧾 **Secure Auth & Payments** — User authentication with Supabase and integration with secure payment gateways (Stripe/Razorpay).
- 🎨 **Modern UI/UX** — Built with Shadcn UI, Magic UI, and Tailwind CSS for a sleek, accessible experience.
- 🧠 **Admin Dashboard** *(coming soon)* — Manage inventory, orders, and store operations.

---

## 🧱 Tech Stack

### 🔹 Frontend
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Magic UI](https://magicui.design/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)

### 🔹 Backend & Services
- [MongoDB](https://www.mongodb.com/) (via Mongoose & Prisma)
- [Supabase](https://supabase.com/) (for Auth & file storage)
- [NextAuth.js](https://next-auth.js.org/) *(optional auth layer)*
- [Stripe](https://stripe.com/) / [Razorpay](https://razorpay.com/) (payment integration)
- [Cloudinary](https://cloudinary.com/) / [UploadThing](https://uploadthing.com/) *(optional image/file handling)*

---

## 🛠️ Installation & Setup

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js (LTS)
- Git
- MongoDB (local or Atlas)
- Supabase project setup
- Stripe/Razorpay account (optional)
- `.env` file configured

---

### 📦 Clone the Repository

```bash
git clone https://github.com/your-username/groceryq.git
cd groceryq
```


---

⚙️ Environment Variables

Create a .env.local file in the root and add the following:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/groceryq
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```


---

📦 Install Dependencies

```
npm install
```
or
```
yarn install
```


---

▶️ Run the Dev Server

```
npm run dev
```
or
```
yarn dev
```

Visit http://localhost:3000 to view the app locally.


---

🧪 Scripts

Command	Description

```
npm run dev	Start development server
npm run build	Build for production
npm run start	Start production server
npm run lint	Run ESLint
npm run format	Format with Prettier
```



---

🧩 Folder Structure (Simplified)

```
groceryq/
├── app/                  # Next.js App Router
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Reusable UI components
├── lib/                  # Helpers & utilities (db, auth, API wrappers)
├── hooks/                # Custom React hooks
├── styles/               # Tailwind and global styles
├── public/               # Static assets
├── prisma/               # Prisma schema (if using Prisma with MongoDB)
├── .env.local            # Environment config
└── README.md
```


---

🤝 Contributing

We welcome community contributions! Here's how to get started:

1. Fork the repository


2. Create a new branch:

git checkout -b feature/your-feature


3. Commit your changes:

git commit -m "feat: add some cool feature"


4. Push and open a Pull Request:

git push origin feature/your-feature



> Please follow Conventional Commits and ensure your code passes linting and formatting.




---

📝 License

This project is licensed under the MIT License.


---

<!---
📞 Contact

Maintainer: [Your Name / Organization]

Email: support@groceryq.com

Website: www.groceryq.com (Optional)




---
-->

> GroceryQ – Built for the speed of modern life.
