# RENTE CONFORT - Event Architecture & Luxury Furniture Website

## Overview
Luxury event rental website for "RENTE CONFORT" (León, Gto., Mexico). High-end UI with royal blue/gold palette, interactive inventory, and intelligent concierge.

## Recent Changes (January 06, 2026)
- **UI Refinement**: Implemented expanding sidebar navigation with gold metallic gradients and entry animation.
- **Santiago Chatbot v2**: Added input validation (garbage text/repeated chars detection), 360° conversation flows, and personalized responses.
- **Lead Scoring**: Implemented behavioral tracking to prioritize high-intent users and offer direct WhatsApp VIP access.
- **Project Restructuring**: Moved core production files to the root directory for optimized deployment and configured Vite for broader host accessibility.

## Next Steps: Transmuting to Angular
To scale the platform and reach the buyer persona more effectively, the following roadmap is proposed:
1. **Componentization**: Migrate current vanilla logic to Angular Components (Inventory, Chatbot, Testimonials) for better state management.
2. **Dynamic Data**: Integrate Replit Postgres to manage live inventory and store leads captured by Santiago.
3. **Advanced Lead Scoring**: Use Angular's reactive forms and services to implement more complex user profiling and automated follow-ups.
4. **SEO & Performance**: Leverage Angular Universal (SSR) to ensure the luxury collection ranks for high-intent keywords in León and surrounding areas.
5. **A/B Testing**: Implement experiments on conversion points (WhatsApp vs. Form) to optimize ROI for the target buyer persona.

## System Architecture
### Frontend Stack
- **Build Tool**: Vite 5.4.8
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Boxicons, Font Awesome
- **Logic**: Vanilla JS (Target: Angular migration)