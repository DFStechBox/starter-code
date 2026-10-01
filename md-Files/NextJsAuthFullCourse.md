# NextJS Auth Full Course with Better Auth

<div align="center">
  <br />
  <a href="https://youtu.be/LMUsWY5alY0" target="_blank">
    <img width="1280" height="720" alt="NextJS Auth Full Course with Better Auth" src="./banner.png" />
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Better%20Auth-00D4AA?style=for-the-badge&logo=better-auth&logoColor=white" alt="Better Auth" />
    <img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </div>
  <h3 align="center">Build a Complete Authentication System with Next.js & Better Auth</h3>
  <div align="center">
    Follow the full video tutorial on 
    <a href="https://youtu.be/LMUsWY5alY0" target="_blank"><b>YouTube</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Quick Start](#-quick-start)
5. [Project Structure](#-project-structure)
6. [Environment Setup](#-environment-setup)
7. [Database Setup](#-database-setup)
8. [Screenshots](#-screenshots)
9. [Deployment](#-deployment)
10. [Useful Links](#-useful-links)

---

## 🚀 Introduction

In this comprehensive tutorial, you'll build a **production-ready authentication system** using **Next.js 15** and **Better Auth**. We cover everything from basic email/password authentication to social logins with Google and GitHub, session management, protected routes, and a complete dashboard interface.

Better Auth is a modern, type-safe authentication library that provides a seamless developer experience with built-in support for multiple authentication methods, database adapters, and security best practices.

🎥 Watch the full tutorial: [YouTube](https://youtu.be/LMUsWY5alY0)

---

## ⚙️ Tech Stack

- **Next.js 15** – App Router with server and client components
- **Better Auth** – Modern, type-safe authentication library
- **Prisma** – Type-safe database ORM with PostgreSQL
- **PostgreSQL** – Robust relational database
- **TailwindCSS** – Utility-first CSS framework
- **TypeScript** – Type-safe development experience
- **Vercel** – Recommended hosting & serverless deployment

---

## ⚡️ Features

- 🔐 **Email/Password Authentication** — Secure sign-up and sign-in
- 🌐 **Social Authentication** — Google and GitHub OAuth integration
- 👤 **User Management** — Complete user profile and session handling
- 🛡️ **Protected Routes** — Middleware-based route protection
- 📱 **Responsive UI** — Mobile-first design with Tailwind CSS
- 🔒 **Session Management** — Secure session handling with cookies
- 🎨 **Modern Dashboard** — Clean, professional user interface
- ✅ **Production Ready** — Environment configuration and deployment ready
- 🚀 **Type Safety** — Full TypeScript support throughout

---

## 👌 Quick Start

### Prerequisites

- [Node.js (v18+)](https://nodejs.org/)
- [PostgreSQL database](https://www.postgresql.org/) (or use [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or [Railway](https://railway.app/))
- [Google OAuth credentials](https://console.developers.google.com/)
- [GitHub OAuth credentials](https://github.com/settings/developers)
- [Vercel account](https://vercel.com/) for deployment

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-better-auth.git
cd nextjs-better-auth

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/better_auth_db"

# Better Auth Secret (generate a random string)
BETTER_AUTH_SECRET="your-super-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Database Setup

1. **Create your PostgreSQL database** (locally or using a cloud provider)

2. **Run Prisma migrations:**

```bash
npx prisma migrate dev --name init
```

3. **Generate Prisma client:**

```bash
npx prisma generate
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
nextjs-better-auth/
├── app/
│   ├── api/auth/[...all]/route.ts    # Better Auth API routes
│   ├── auth/
│   │   ├── auth-client.tsx           # Authentication UI component
│   │   └── page.tsx                  # Auth page
│   ├── dashboard/
│   │   ├── dashboard-client.tsx      # Dashboard UI component
│   │   └── page.tsx                  # Protected dashboard page
│   ├── components/
│   │   └── Navigation.tsx            # Navigation component
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Home page
├── lib/
│   ├── actions/
│   │   └── auth-actions.ts           # Server actions for auth
│   ├── auth.ts                       # Better Auth configuration
│   └── generated/prisma/             # Generated Prisma client
├── prisma/
│   ├── migrations/                   # Database migrations
│   └── schema.prisma                 # Database schema
├── public/                           # Static assets
└── package.json
```

---

## 🔧 Environment Setup

### 1. Database Configuration

The project uses Prisma with PostgreSQL. Update your `DATABASE_URL` in `.env.local`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/better_auth_db"
```

### 2. Better Auth Secret

Generate a secure secret for Better Auth:

```bash
# Generate a random secret
openssl rand -base64 32
```

### 3. OAuth Provider Setup

#### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

#### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL:
   - `http://localhost:3000/api/auth/callback/github` (development)
   - `https://yourdomain.com/api/auth/callback/github` (production)

---

## 🗄️ Database Setup

The project includes a complete Prisma schema with the following models:

- **User** - User accounts and profiles
- **Session** - User sessions and tokens
- **Account** - OAuth provider accounts
- **Verification** - Email verification tokens

### Database Schema

```prisma
model User {
  id            String    @id
  name          String
  email         String
  emailVerified Boolean
  image         String?
  createdAt     DateTime
  updatedAt     DateTime
  sessions      Session[]
  accounts      Account[]

  @@unique([email])
  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String
  createdAt DateTime
  updatedAt DateTime
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime
  updatedAt             DateTime

  @@map("account")
}

model Verification {
  id         String    @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime?
  updatedAt  DateTime?

  @@map("verification")
}
```

---

## 🖼️ Screenshots

### Authentication Page

<img width="998" height="850" alt="Authentication Page" src="https://github.com/user-attachments/assets/placeholder" />

### Dashboard

<img width="958" height="840" alt="Dashboard" src="https://github.com/user-attachments/assets/placeholder" />

### Social Login Options

<img width="1811" height="924" alt="Social Login" src="https://github.com/user-attachments/assets/placeholder" />

---

## ☁️ Deployment

### Deploy on Vercel

1. **Push your code to GitHub**

2. **Connect to Vercel:**

   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Configure environment variables

3. **Set Environment Variables in Vercel:**

   ```
   DATABASE_URL=your-production-database-url
   BETTER_AUTH_SECRET=your-production-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. **Update OAuth Redirect URLs:**

   - Update your Google OAuth app with production callback URL
   - Update your GitHub OAuth app with production callback URL

5. **Deploy:**
   - Click "Deploy" in Vercel
   - Your app will be live at `https://your-app.vercel.app`

### Database Migration in Production

```bash
# Run migrations in production
npx prisma migrate deploy
```

---

## 🔗 Useful Links

- [Better Auth Documentation](https://www.better-auth.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Setup](https://docs.github.com/en/developers/apps/building-oauth-apps)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Better Auth](https://www.better-auth.com/) for the amazing authentication library
- [Next.js](https://nextjs.org/) team for the incredible React framework
- [Prisma](https://www.prisma.io/) for the excellent database toolkit
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

If you found this project helpful, please give it a ⭐ and consider subscribing to the [YouTube channel](https://youtube.com/@pedrotechnologies) for more tutorials!
