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
* 💫 **Wishlist & Reviews** — Save favorites and share your experience
* 🎟️ **Smart Coupons** — Personalized discounts and offers
* 🔐 **Secure Auth & Payments** — Auth.js + Stripe integration
* 📊 **Analytics Dashboard** — Track performance metrics
* 🔔 **Smart Notifications** — Real-time updates on orders
* 🎨 **Modern UI/UX** — Built with TailwindCSS, Shadcn/UI, and Magic UI
* 🧠 **Advanced Admin Panel** — Manage orders, users, inventory, and analytics

---

## 🧱 Tech Stack

| Layer          | Tech                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Frontend       | [Next.js (App Router)](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)                                                                         |
| UI             | [TailwindCSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/), [Magic UI](https://magicui.design/), [Framer Motion](https://www.framer.com/motion/) |
| Authentication | [Auth.js](https://authjs.dev/) + Prisma Adapter                                                                                                          |
| Database       | [PostgreSQL](https://www.postgresql.org/) + [Prisma ORM](https://www.prisma.io/)                                                                                    |
| Caching       | [Redis](https://redis.io/)                                                                                                                                         |
| Payments       | [Stripe](https://stripe.com/)                                                                                                                                      |
| Hosting        | [Vercel](https://vercel.com/) *(recommended)*                                                                                                                      |
| File Uploads   | [Cloudinary](https://cloudinary.com/), [UploadThing](https://uploadthing.com/) *(optional)*                                                                        |

---

## 📁 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   ├── (dashboard)/     # Admin dashboard
│   ├── (shop)/         # Main shopping interface
│   └── globals.css
├── components/          # Reusable UI components
├── lib/                 # Core utilities
├── hooks/              # Custom React hooks
├── store/              # State management
├── types/              # TypeScript definitions
└── utils/              # Helper functions
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
# or
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/groceryq"
AUTH_URL="http://localhost:3000"
AUTH_SECRET="your-secret-key"

STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

REDIS_URL="redis://localhost:6379"
```

### 4. Run the Dev Server

```bash
npm run dev
# or
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

* Auth.js
* PostgreSQL + Prisma
* Redis
* Stripe
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