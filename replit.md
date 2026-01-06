# RENTE CONFORT - Event Architecture & Luxury Furniture Website

## Overview

This is a luxury event rental company website for "RENTE CONFORT" based in León, Guanajuato, Mexico. The site showcases premium event services including structural tents, luxury furniture, and event logistics. It features a quote/pricing calculator system that allows customers to browse inventory and build custom event packages.

The project is a static frontend website built with vanilla HTML, CSS, and JavaScript, using Vite as the development server and build tool. Multiple HTML files exist as design iterations (index.html through index7.html), with the main implementation in index.html.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack
- **Build Tool**: Vite 5.4.8 for development server with hot module replacement (HMR)
- **Styling**: Tailwind CSS loaded via CDN with custom theme configuration
- **Typography**: Google Fonts (Playfair Display for headings, Inter/Lato for body text)
- **Icons**: Boxicons and Font Awesome via CDN
- **JavaScript**: Vanilla JS for interactivity (no framework)

### Design System
The site uses a luxury-focused design language with:
- **Color Palette**: Royal blue (#001b3d, #001229) and metallic gold gradients (#BF953F, #FCF6BA, #B38728)
- **Visual Effects**: Glassmorphism navigation, smooth animations (fade-up, float), custom scrollbars
- **Typography**: Serif fonts for elegance, sans-serif for readability

### Application Features
1. **Quote Calculator**: JavaScript-based inventory system in script.js allowing users to:
   - Browse rental items by category (Carpas/Tents, furniture, etc.)
   - Add items to a shopping cart
   - View pricing with collapsible cart on mobile

2. **Responsive Design**: Mobile-first approach with viewport restrictions (`maximum-scale=1.0, user-scalable=no`)

### File Structure
- `index.html` - Main production page
- `index2-7.html` - Design iterations/alternatives with different font and color schemes
- `style.css` - Custom CSS including luxury card effects, metallic text gradients, glass navigation
- `script.js` - Cart functionality and inventory management
- `vite.config.js` - Development server configuration

### Tailwind Configuration
Custom theme extensions are defined inline in each HTML file's `<script>` tag, including:
- Custom font families
- Extended color palette (royal blues, metallic golds)
- Custom animations (fadeUp, float, pulse-slow)

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - Utility-first CSS framework
- **Google Fonts**: Playfair Display, Inter, Lato, Cinzel, Cormorant Garamond, Manrope
- **Boxicons**: `https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css` - Icon library
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` - Icon library
- **Transparent Textures**: Background patterns for visual depth

### NPM Dependencies
- **vite**: ^5.4.8 - Development server and build tool

### Third-Party Integrations
- **WhatsApp**: The site includes WhatsApp integration (color defined as #25D366) for customer contact, suggesting a floating WhatsApp button or contact links