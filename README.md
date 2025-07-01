# Clerk Authentication with Next.js 15

A modern authentication solution using Clerk with Next.js 15, featuring protected routes, responsive design, and a clean user interface.

## Features

- **Secure Authentication**: Implement sign-in and sign-up flows using Clerk
- **Protected Routes**: Secure dashboard and other private pages
- **Responsive UI**: Built with Tailwind CSS and shadcn/ui components
- **App Router**: Leverages Next.js 15's app directory structure
- **Type Safety**: Fully typed with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/Rdrudra99/clerk-nextjs15-setup.git
cd clerk-nextjs15-setup
```

2. Install dependencies

```bash
pnpm install
# or
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-publishable-key
CLERK_SECRET_KEY=sk_test_your-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

4. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
clerk-auth/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (auth)/          # Authentication routes (sign-in, sign-up)
│   │   ├── dashboard/       # Protected dashboard page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # UI components
│   │   ├── sections/        # Page sections
│   │   └── ui/              # UI components
│   ├── lib/                 # Utility functions
│   └── middleware.ts        # Clerk middleware for route protection
├── .env.local               # Environment variables
├── components.json          # shadcn/ui configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration
```

## Authentication Flow

1. Users can sign up or sign in using the Clerk-provided UI
2. After authentication, users are redirected to the dashboard
3. Protected routes check for authentication status via middleware
4. Unauthenticated users are redirected to sign-in

## User Data

Access user data in server components:

```tsx
import { currentUser } from '@clerk/nextjs/server';

export default async function Page() {
  const user = await currentUser();
  
  return <div>Welcome, {user?.firstName}!</div>;
}
```

For client components, use the useUser hook:

```tsx
import { useUser } from '@clerk/nextjs';

export default function UserProfile() {
  const { user } = useUser();
  
  return <div>Email: {user?.primaryEmailAddress?.emailAddress}</div>;
}
```

## Deployment

Deploy your application to Vercel:

```bash
vercel
```

## License

MIT

## Author

[Rudra Narayan Boitei](https://github.com/Rdrudra99)

---

Feel free to contribute by opening issues or submitting PRs!
