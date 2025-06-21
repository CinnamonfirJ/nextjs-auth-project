````markdown
# 🔐 Next.js Auth Starter

A simple authentication starter using **Next.js App Router**, **Auth.js**, **ShadCN UI**, and **Google OAuth** with support for credentials login.

## 🚀 Features

- Email & password login (hardcoded for testing)
- Google OAuth login
- Auth.js with App Router support
- Styled using ShadCN UI and TailwindCSS
- Ready for PostgreSQL + Prisma

## 📦 Getting Started

```bash
git clone https://github.com/your-repo/nextjs-auth-starter
cd nextjs-auth-starter
npm install
npm run dev
```
````

## 🛠️ Environment Variables

Create a `.env` file in the root of the project:

```env
NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET=your-random-secret-here
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
AUTH_TRUST_HOST=true
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

## 🔑 How to Get These Values

- `AUTH_SECRET`: Generate with `npx auth secret`
- `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`: Create a new project and OAuth app in [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- `DATABASE_URL`: Get from your PostgreSQL provider
- `NEXTAUTH_URL`: Usually `http://localhost:3000` in development

## 👤 Test Credentials (for Dev Only)

Use these to test the credentials login:

- **Email**: `test@example.com`
- **Password**: `secret123`

⚠️ These credentials are hardcoded for testing only.

## 📁 Project Structure

```bash
/app
  /auth/login         → Login page
  /auth/signup        → Signup page
  /api/auth/[...nextauth].ts      → Auth.js route
/components      → Reusable UI components
/lib         →  Execute Actions
.env       → Environment config
```

## 🖼 UI Stack

- ShadCN UI
- Tailwind CSS
- React Icons

## 📄 License

MIT – Free to use and modify. Please create a new branch for new features or updates then ensure to make a pull request.

## 🙌 Credits

- Next.js
- Auth.js
- ShadCN UI
- Prisma

```

```
