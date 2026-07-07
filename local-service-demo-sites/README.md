# Local Service Demo Sites

A Next.js portfolio project with three polished lead-generation website demos for local service businesses. The demos are designed for a local business growth agency to send to HVAC, plumbing, and electrical contractors as realistic examples of conversion-focused service websites.

## Project Overview

The project includes a simple landing page plus three industry-specific demo websites:

- **Elite Comfort HVAC**: `/hvac`
- **Precision Flow Plumbing**: `/plumbing`
- **BrightLine Electric**: `/electrical`

Each demo uses shared components and data-driven content while keeping the visuals, services, calls-to-action, reviews, FAQs, and trust signals specific to the trade.

## Features

- Responsive Next.js App Router project
- Homepage linking to all three demos
- Industry-specific hero sections with local service positioning
- Services, why choose us, reviews, FAQ, contact, and Google review growth sections
- Online quote request form for pricing/help requests
- Appointment request flow with selectable service times
- Floating **Call Now** button
- Interactive AI chat widget mockup with close and reopen states
- Lead-generation sales features:
  - Request a Free Quote
  - Book Service Online
  - 24/7 AI Assistant
  - Instant Lead Notifications
  - Google Review Automation
  - Local SEO Ready
  - Mobile-First Design
- Local image assets stored in `public/images`

## Local Setup

Requirements:

- Node.js
- npm

Install dependencies and start the development server:

```bash
cd local-service-demo-sites
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful local routes:

- `http://localhost:3000`
- `http://localhost:3000/hvac`
- `http://localhost:3000/plumbing`
- `http://localhost:3000/electrical`

## Development Commands

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run build
```

Creates a production build and verifies the app compiles successfully.

```bash
npm run start
```

Starts the production server after a successful build.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Use the default Next.js framework settings.
5. Confirm the project root is `local-service-demo-sites` if the GitHub repository contains this parent folder.
6. Deploy.

Vercel will install dependencies and run the production build automatically.

## Folder Structure

```text
local-service-demo-sites/
├── app/
│   ├── electrical/
│   ├── hvac/
│   ├── plumbing/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AppointmentRequest.tsx
│   ├── DemoPage.tsx
│   ├── FloatingActions.tsx
│   └── QuoteForm.tsx
├── data/
│   └── demos.ts
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── .gitignore
├── eslint.config.mjs
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Customizing a Demo

Most client-specific content lives in `data/demos.ts`. Update the business name, phone number, service areas, service list, reviews, FAQs, and calls-to-action there.

Hero images live in `public/images`. Replace the demo images with real owner, team, truck, or jobsite photos for stronger local trust.

Shared page structure lives in `components/DemoPage.tsx`. The quote form, appointment request form, and floating call/chat controls are split into focused reusable components.

Global styling lives in `styles/globals.css`. Each industry theme is controlled by CSS variables on `.theme-hvac`, `.theme-plumbing`, and `.theme-electrical`.

## Security Notes

This project does not require API keys, secrets, or environment variables. Do not commit `.env` files or credentials. The `.gitignore` excludes common local environment files by default.

## License

No open-source license is currently included. Add a license before distributing this project as open-source software.
