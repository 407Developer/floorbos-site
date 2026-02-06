# FLOOR BOSS ng

A professional e-commerce catalog for FLOOR BOSS ng, a flooring company based in Abuja, Nigeria. Built with Astro and Tailwind CSS. This application allows customers to browse flooring products, add them to a cart, and submit an order via WhatsApp.

## Features

*   **Product Catalog**: Browse a wide range of flooring products across different categories.
*   **Featured Products**: Homepage highlights a curated selection of products (5 Vinyl : 3 SPC : 1 Accessory).
*   **Dynamic Category Pages**: Navigate to dedicated pages for each product category (e.g., /vinyl, /spc, /accessories).
*   **Interactive Shopping Cart**: Add products to a client-side cart, adjust quantities, and remove items. Cart state persists using `localStorage`.
*   **WhatsApp Ordering**: Easily confirm orders directly via WhatsApp with a pre-filled message, including product details and total price.
*   **Global Call-to-Action**: Floating buttons for quick access to the shopping cart and direct phone calls.
*   **Mobile-Friendly Design**: Responsive UI with a hamburger menu for seamless navigation on all devices.
*   **Enhanced SEO**: Dynamically generated meta tags, Open Graph data, and Schema.org structured data for better search engine visibility and social media sharing.
*   **Modern UI**: Clean, luxury-style interface with toast notifications for user feedback.

## Technologies Used

*   **Astro**: A modern static site builder for lightning-fast websites.
*   **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling.
*   **Standard JavaScript**: All interactive elements and cart logic are implemented using vanilla JavaScript, ensuring high performance and minimal overhead.

## Setup and Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/407Developer/floorbos-site.git
    cd floorbos-site
    ```
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```
3.  **Start the development server**:
    ```bash
    pnpm run dev
    ```
    The site will be available at `http://localhost:4321/` (or another port if 4321 is in use).

## Important Configuration

*   **WhatsApp Number**: In `src/layouts/MainLayout.astro` and `src/pages/cart.astro`, update `WHATSAPP_NUMBER` with your actual WhatsApp contact number.
*   **Phone Number**: In `src/layouts/MainLayout.astro`, update `PHONE_NUMBER` with your actual phone contact number for the floating call button.
*   **Open Graph Image**: Place your preferred `floorboss-og.jpg` image in the `public/images/` directory for optimal social media sharing previews.

## Deployment

This application is built as a static site and is highly optimized for deployment on platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [Cloudflare Pages](https://pages.cloudflare.com/).

To deploy:

1.  Push your code to a Git repository (e.g., GitHub).
2.  Connect your repository to your preferred hosting provider.
3.  Configure the build settings (they usually auto-detect Astro):
    *   **Build Command**: `pnpm run build`
    *   **Output Directory**: `dist`
4.  Deploy!

---

**FLOOR BOSS ng** - *Your Trusted Partner for Quality Floors in Abuja & Beyond.*
