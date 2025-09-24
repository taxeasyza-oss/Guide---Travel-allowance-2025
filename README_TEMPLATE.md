# TaxEasy_ZA Landing Page Template System

This template system allows you to quickly create professional landing pages for different TaxEasy_ZA tax guides by simply updating configuration files.

## How to Use the Template

### 1. For New Tax Guides

1. **Create a new configuration file** in `src/configs/` (e.g., `homeOfficeConfig.js`)
2. **Copy the structure** from `exampleFutureGuideConfig.js`
3. **Customize the content** for your specific guide
4. **Update the main App.jsx** to use your new config
5. **Test and deploy**

### 2. Configuration Structure

Each configuration file should include:

```javascript
export const yourGuideConfig = {
  // Product Information
  productName: "Your Guide Name",
  productYear: "2025",
  payhipUrl: "https://payhip.com/b/YOUR_PRODUCT_ID",
  
  // Content Sections
  heroTitle: "Your Hero Title",
  heroSubtitle: "Your hero subtitle...",
  
  // Features (3 cards)
  features: [
    {
      icon: IconComponent, // Import from lucide-react
      title: "Feature Title",
      description: "Feature description",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"]
    }
    // ... 2 more features
  ],
  
  // Key topics covered
  keyTopics: [
    "Topic 1",
    "Topic 2",
    // ... more topics
  ],
  
  // Package items for purchase section
  packageItems: [
    "Item 1",
    "Item 2",
    // ... more items
  ]
}
```

### 3. Quick Setup for New Guide

1. **Duplicate** `travelAllowanceConfig.js`
2. **Rename** to your guide name (e.g., `homeOfficeConfig.js`)
3. **Update** all text content to match your guide
4. **Change** the `payhipUrl` to your product's Payhip URL
5. **Modify** `App.jsx` to import and use your new config:

```javascript
import { yourGuideConfig } from './configs/yourGuideConfig.js'
import LandingPageTemplate from './LandingPageTemplate.jsx'

function App() {
  return <LandingPageTemplate config={yourGuideConfig} />
}
```

### 4. Fixed Elements (No Changes Needed)

The following elements remain consistent across all guides:
- Header with TaxEasy_ZA branding
- Footer with contact links and social media
- Color scheme (#27AE60 green, #F1C40F gold, etc.)
- Overall layout and structure
- Navigation and smooth scrolling

### 5. Customizable Elements

You can customize:
- All text content
- Product-specific features and benefits
- Key topics covered
- Package contents
- Payhip purchase URL
- Number of pages in guide
- Specific compliance requirements

### 6. Deployment

1. **Test locally**: `pnpm run dev`
2. **Build**: `pnpm run build`
3. **Deploy**: Upload `dist/` folder to your hosting provider

### 7. Example Guides You Can Create

- Home Office Deductions Guide
- Medical Expenses Guide
- Investment Income Guide
- Rental Property Guide
- Small Business Tax Guide
- Retirement Fund Contributions Guide

### 8. Brand Consistency

All guides maintain TaxEasy_ZA brand consistency:
- **Colors**: Primary Green (#27AE60), Gold (#F1C40F), Black (#000000)
- **Tagline**: "Simplify SARS. Maximize Refunds."
- **Professional tone** throughout
- **SARS compliance** emphasis
- **South African tax focus**

### 9. File Structure

```
src/
├── configs/
│   ├── travelAllowanceConfig.js    # Current guide
│   ├── exampleFutureGuideConfig.js # Template for new guides
│   └── yourNewGuideConfig.js       # Your new guide config
├── components/
│   └── ui/                         # Shadcn/ui components
├── LandingPageTemplate.jsx         # Main template component
├── App.jsx                         # Main app (update this)
└── App.css                         # Styles (no changes needed)
```

This system allows you to create new landing pages in minutes rather than hours, while maintaining professional quality and brand consistency across all TaxEasy_ZA products.

