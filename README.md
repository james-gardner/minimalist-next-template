# Minimalist Next.js Template

A production-ready, minimalist Next.js template with TypeScript, Tailwind CSS, and essential security features.

## Features

- **Next.js 16** - Latest version with App Router
- **TypeScript** - Strict mode enabled for type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Security Headers** - Pre-configured security headers including CSP, HSTS, and more
- **Error Handling** - Built-in error boundaries and 404 page
- **ESLint** - Code quality and consistency
- **Production Ready** - Optimized build configuration

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/james-gardner/minimalist-next-template.git
cd minimalist-next-template
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/                # Static files
├── .env.example           # Environment variables template
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind configuration (if exists)
└── package.json           # Dependencies
```

## Security Features

This template includes several security best practices:

- **Strict-Transport-Security** - Enforces HTTPS
- **X-Frame-Options** - Prevents clickjacking
- **X-Content-Type-Options** - Prevents MIME sniffing
- **X-XSS-Protection** - Enables browser XSS protection
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts browser features

## Customization

### Metadata

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};
```

### Environment Variables

Add environment variables to `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Public variables must be prefixed with `NEXT_PUBLIC_`.

## Deployment

This template can be deployed to any platform that supports Next.js:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- Self-hosted with Node.js

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

