# Pyssla Bead Shop — Setup

## Prerequisites
- Node.js 18+ (download from nodejs.org)
- An Anthropic API key (console.anthropic.com)

## Quick Start

```bash
cd pyssla-bead-shop

# 1. Install dependencies
npm install

# 2. Configure environment
# Edit .env.local and fill in:
#   NEXTAUTH_SECRET  — run: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
#   ANTHROPIC_API_KEY — from console.anthropic.com

# 3. Create the database + tables
npx prisma db push

# 4. Seed with sample data + admin user
npm run db:seed

# 5. Start the dev server
npm run dev
```

Open http://localhost:3000

## Admin access
Email:    admin@pyssla.shop  (set in .env.local)
Password: ChangeMe123!       (set in .env.local)

## Key pages
| URL               | Description                          |
|-------------------|--------------------------------------|
| /                 | Homepage with featured designs       |
| /browse           | Browse all public designs            |
| /design/new       | Interactive bead design builder      |
| /design/[id]      | Design detail — ordering page        |
| /profile          | Saved designs + order history        |
| /admin            | Admin dashboard                      |
| /login            | Sign in                              |
| /signup           | Create account                       |
