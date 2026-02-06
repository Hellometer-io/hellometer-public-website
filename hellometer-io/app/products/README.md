# Product Pages Documentation

This directory contains individual product pages for Hellometer's 4 main products.

## Structure

Each product has its own subdirectory with a `page.tsx` file following Next.js 13+ App Router conventions:

```
products/
├── drive-thru-timer/
│   └── page.tsx
├── lobby-timer/
│   └── page.tsx
├── loss-prevention/
│   └── page.tsx
└── kitchen-monitoring/
    └── page.tsx
```

## Product Pages

### 1. Drive-Thru Timer (`/products/drive-thru-timer`)
- **Focus**: Optimize drive-thru operations
- **Key Features**: Real-time tracking, performance analytics, multi-location support
- **Target Audience**: QSR restaurants with drive-thru service

### 2. Lobby Timer (`/products/lobby-timer`)
- **Focus**: Perfect in-restaurant dining experience
- **Key Features**: Door-to-dine tracking, wait time monitoring, service insights
- **Target Audience**: Restaurants with dine-in service

### 3. Loss Prevention (`/products/loss-prevention`)
- **Focus**: Security and monitoring
- **Key Features**: HD video monitoring, advanced analytics, multi-location access
- **Target Audience**: Multi-location restaurant chains

### 4. Kitchen Monitoring (`/products/kitchen-monitoring`)
- **Focus**: Back of house operations
- **Key Features**: Food prep monitoring, safety compliance, efficiency insights
- **Target Audience**: Restaurants focused on quality and compliance

## Page Template Structure

All product pages follow the same 3-section structure for consistency:

### 1. Hero Section
- Dark background with diagonal bottom edge (clip-path)
- Centered layout with product headline
- Brief product description
- "Schedule a Demo" CTA button
- Uses white text on dark background for contrast

### 2. Features Section
- Section header: "Key Features"
- 3 features displayed in a responsive grid:
  - 1 column on mobile
  - 2 columns on tablet
  - 3 columns on desktop
- Each feature includes:
  - Blue dot bullet point
  - Feature name (h4)
  - Feature description

### 3. Bottom CTA Section
- Centered layout
- "Ready to Get Started?" headline
- Product-specific supporting text
- "Schedule a Demo" button
- Encourages conversion after learning about features

## Styling Conventions

### Colors
- Background: `bg-slate-900` (dark sections)
- Text: `text-slate-100` (light text), `text-slate-400` (secondary), `text-slate-500` (body)
- Accents: `bg-blue-600`, `text-blue-600` (primary brand color)
- Hover: `hover:bg-blue-700`

### Typography
- Headlines: `font-inter` with `font-bold`
- Subheadings: `font-playfair-display` (serif for elegance)
- Body text: Default `font-inter`

### Spacing
- Section padding: `py-12 md:py-20`
- Container: `max-w-6xl mx-auto px-4 sm:px-6`
- Top padding for hero: `pt-32 pb-20 md:pt-40 md:pb-44` (accounts for fixed header)

### Responsive Breakpoints
- Mobile: default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

## Navigation Integration

Product pages are accessible via:

1. **Header dropdown menu** (`Products` > Select product)
2. **Home page products section** (Click "Learn More" on any product card)
3. **Direct URL**: `/products/[product-slug]`

## Customization Guide

### To Add a New Product:

1. Create new directory: `app/products/new-product-name/`
2. Copy any existing `page.tsx` as template
3. Update metadata (title, description)
4. Update content:
   - Hero headline and description
   - 3 key features with descriptions
   - Bottom CTA text
5. Add to header dropdown in `components/ui/header.tsx`
6. Add to products section in `components/features-blocks.tsx`

### To Customize Existing Pages:

- **Update content**: Edit text within the page.tsx file
- **Add images**: Import and add images to hero or features sections
- **Add more features**: Duplicate feature blocks in the grid
- **Change layout**: Modify grid classes (e.g., `md:grid-cols-2` to `md:grid-cols-4`)

## SEO Best Practices

Each page includes:
- Unique `title` metadata
- Descriptive `description` metadata
- Semantic HTML structure (h1, h2, h3)
- Accessible link text
- Clear hierarchy

## Dependencies

- **Next.js**: App Router (v13+)
- **React**: v18+
- **Tailwind CSS**: v4.x for styling
- **Link component**: From `next/link` for client-side navigation

## Future Enhancements

Consider adding:
- Product-specific images/videos
- Customer testimonials
- Detailed feature comparisons
- Pricing information
- FAQ sections
- Integration examples
- Case studies
- Demo videos

## Maintenance

When updating:
1. Keep all 4 pages structurally consistent
2. Test responsive behavior on mobile/tablet/desktop
3. Verify all "Schedule a Demo" links point to `/schedule-demo`
4. Ensure product names match across:
   - Page content
   - Header dropdown
   - Home page products section
   - URL slugs
