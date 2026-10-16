# Vinillia Landing Page

Next.js App Router implementation for the Vinillia Beauty & Skincare bundle page.

## Requirements
- Node.js 20.9 or later
- npm

## Local development
\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000.

## Main files
- \`app/page.tsx\` — interactive landing page
- \`app/globals.css\` — brand styling and responsive layout
- \`app/layout.tsx\` — French metadata and root layout
- \`app/api/orders/route.ts\` — order validation endpoint placeholder

## Brand palette
- Gold: \`#BE985E\`
- Rose: \`#C97F91\`
- Sage: \`#7E8C77\`
- Black: \`#000000\`
- White: \`#FFFFFF\`

## Before publishing
1. Replace the six product placeholders and temporary Unsplash images with real product/campaign photography.
2. Replace the Before/After lifestyle placeholders with authentic, authorized images or disable the section.
3. Update business contact details and footer policies.
4. Configure \`app/api/orders/route.ts\` to save orders to a database or send them to an authorized order-management provider. The current route validates input but deliberately returns HTTP 503 because persistence is not configured; no order is saved or sent yet.
5. Test the order form, mobile layout, and production build before launching.

Bundle price: 1,400 MAD for six products, including exactly two products offered free.
