> ⚠️ *Currently under active development. Contributions, feedback, and stars are always appreciated!*
---

# 🛒 GroceryQ — Your Groceries, Instantly

**The lightning-fast grocery delivery platform designed for modern, urban lifestyles. Get essentials at your door in just 10–15 minutes.**

---

## 🚀 Overview

**GroceryQ** is a next-gen Q-Commerce (Quick Commerce) application engineered for speed, scale, and simplicity. With hyper-local dark stores, smart inventory, and real-time logistics, GroceryQ delivers a sleek online shopping experience — from tap to doorstep, faster than ever.

---

## ✨ Features

* ⚡ **10–15 Minute Delivery** — Ultra-fast order fulfillment from local dark stores
* 🧭 **Intelligent Store Matching** — Automatically connects users to the nearest fulfillment center
* 🚚 **Real-Time Order Tracking** — Monitor your delivery every step of the way
* 🛍️ **Dynamic Smart Catalog** — Inventory-aware product listings with live availability
* 🔐 **Secure Auth & Payments** — Powered by Supabase Auth + Stripe/Razorpay integration
* 🎨 **Modern UI/UX** — Built with TailwindCSS, Shadcn/UI, and Magic UI
* 🧠 **Admin Dashboard** *(coming soon)* — Manage orders, users, and inventory efficiently

---

## 🧱 Tech Stack

| Layer          | Tech                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Frontend       | [Next.js (App Router)](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)                                                                         |
| UI             | [TailwindCSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/), [Magic UI](https://magicui.design/), [Framer Motion](https://www.framer.com/motion/) |
| Authentication | [Supabase Auth](https://supabase.com/)                                                                                                                             |
| Payments       | [Stripe](https://stripe.com/), [Razorpay](https://razorpay.com/)                                                                                                   |
| Database       | [MongoDB](https://www.mongodb.com/) via [Prisma](https://www.prisma.io/) & Mongoose                                                                                |
| Hosting        | [Vercel](https://vercel.com/) *(recommended)*                                                                                                                      |
| File Uploads   | [Cloudinary](https://cloudinary.com/), [UploadThing](https://uploadthing.com/) *(optional)*                                                                        |

---

## 📁 Project Structure (Simplified)

```bash
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

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/therandomuser03/groceryq.git
cd groceryq
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

DATABASE_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/groceryq
JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Run the Dev Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Scripts

| Command          | Description               |
| ---------------- | ------------------------- |
| `npm run dev`    | Start development server  |
| `npm run build`  | Build for production      |
| `npm run start`  | Start production server   |
| `npm run lint`   | Run ESLint                |
| `npm run format` | Format code with Prettier |

---

## 🧑‍💻 Contributing

We welcome community contributions! Here's how to get started:

1. ⭐ Star the project
2. 🍴 Fork the repo
3. 🛠️ Create your branch: `git checkout -b feature/your-feature`
4. 📤 Commit & push: `git commit -am 'Add feature' && git push`
5. 🔁 Open a Pull Request

> Please follow [Conventional Commits](https://www.conventionalcommits.org/) and ensure your code passes lint and formatting checks.

---

## 📜 License

MIT

---

## 🙌 Acknowledgements

* Supabase Auth
* Stripe & Razorpay
* MongoDB + Prisma
* Shadcn UI & Magic UI
* Cloudinary / UploadThing

---

## 📬 Contact

Feel free to connect with me:

GitHub: [@therandomuser03](https://github.com/therandomuser03)

Twitter: [@TheRandomUser03](https://x.com/TheRandomUser03)


---

> GroceryQ — Built for the speed of modern life <br>
> Built with ❤️ by Anubhab