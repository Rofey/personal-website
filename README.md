# Rofeyy - Personal Website

A production-ready personal website for a backend-focused software engineer and automation specialist. Built with Next.js 14, TypeScript, and Tailwind CSS, optimized for SEO and performance.

## 🚀 Features

- **SEO Optimized**: Complete metadata, structured data, sitemap, and robots.txt
- **Performance Focused**: Server Components, optimized fonts, lazy loading
- **Modern Design**: Clean, professional dark theme
- **Fully Responsive**: Works seamlessly on all devices
- **Production Ready**: Deployable on Vercel with minimal configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── robots.ts           # Robots.txt
│   ├── sitemap.ts          # Sitemap generation
│   ├── about/
│   ├── services/
│   ├── systems-work/
│   └── contact/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AnimatedHero.tsx
│   ├── HowIThink.tsx
│   ├── Differentiator.tsx
│   ├── SystemWorkCard.tsx
│   ├── InteractivePrompt.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   └── ContactForm.tsx
└── lib/
    └── seo.tsx             # Structured data utilities
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Rofeyy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 🚢 Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Environment Variables

No environment variables are required for basic functionality. If you want to add:
- Google Analytics
- Contact form backend
- Other third-party services

Add them in the Vercel dashboard under Project Settings → Environment Variables.

## 📝 Customization

### Update Contact Form

The contact form is currently a placeholder. To make it functional:

1. **Option A: Use a service like Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update `components/ContactForm.tsx` to POST to your Formspree endpoint

2. **Option B: Build a custom API route**
   - Create `app/api/contact/route.ts`
   - Use services like SendGrid, Resend, or Nodemailer
   - Update the form to POST to `/api/contact`

3. **Option C: Use Calendly**
   - Replace the contact form with a Calendly embed
   - Update `app/contact/page.tsx`

### Update Social Links

Edit the following files to update GitHub and LinkedIn links:
- `app/layout.tsx` (metadata)
- `components/Footer.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `lib/seo.tsx` (structured data)

### Update Content

All content is in the page files:
- `app/page.tsx` - Homepage content
- `app/services/page.tsx` - Services descriptions
- `app/systems-work/page.tsx` - Systems & Work case studies
- `app/about/page.tsx` - About section

### Update Domain

1. Update `app/layout.tsx` - Change `metadataBase` URL
2. Update `app/sitemap.ts` - Change `baseUrl`
3. Update `app/robots.ts` - Change sitemap URL
4. Update domain in Vercel project settings

## 🔍 SEO Checklist

- ✅ Metadata for all pages
- ✅ OpenGraph and Twitter cards
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Proper heading hierarchy (H1 → H3)
- ✅ Internal linking
- ✅ Canonical URLs (via metadataBase)

### Additional SEO Steps

1. **Google Search Console**
   - Add your domain
   - Submit sitemap: `https://rofeyy.com/sitemap.xml`
   - Add verification code to `app/layout.tsx` metadata

2. **Google Analytics** (optional)
   - Add GA4 script to `app/layout.tsx`
   - Or use Next.js Analytics on Vercel

3. **Performance Monitoring**
   - Use Vercel Analytics
   - Monitor Core Web Vitals

## 🎨 Design Customization

The design uses Tailwind CSS. Key customization points:

- **Colors**: Edit `app/globals.css` CSS variables
- **Fonts**: Update `app/layout.tsx` font import
- **Spacing**: Modify Tailwind classes in components
- **Theme**: Adjust colors in `tailwind.config.ts`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or issues, contact via:
- Website: [rofeyy.com](https://rofeyy.com)
- GitHub: [github.com/rofey](https://github.com/rofey)
- LinkedIn: [linkedin.com/in/rofey](https://linkedin.com/in/rofey)

---

Built with ❤️ by Rofeyy

