# Eli's Cuisine - Next.js Portfolio

A modern, responsive portfolio website for Chef Eli, specializing in Japanese Regional Cuisine. Built with Next.js, Tailwind CSS, and GSAP.

## Features

-   **Modern Tech Stack**: Next.js 14+ (App Router), React, TypeScript.
-   **Styling**: Tailwind CSS with a Semantic Color System (`globals.css`).
-   **Animations**: Advanced scroll animations using GSAP & ScrollTrigger.
-   **Components**:
    -   **Lightbox**: Reusable component for Gallery and Portfolio detailed views.
    -   **Resume**: Downloadable PDF integration.
    -   **Responsiveness**: Mobile-first design adaptations (e.g., hidden content on small screens).
-   **Data-Driven**: Content is centralized in `app/data/sections.ts` and `app/data/content.ts` for easy updates.

## Getting Started

### Prerequisites

-   Node.js 18+ installed.

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder.
2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

-   `app/components`: Reusable UI components (Hero, About, Portfolio, etc.).
-   `app/data`: Static content files (`sections.ts` for text, `content.ts` for lists/arrays).
-   `app/globals.css`: Global styles and Tailwind semantic variable definitions.
-   `public/`: Static assets (images, documents).

## Customization

-   **Colors**: Edit `app/globals.css` to change the semantic color variables (`--color-gold`, `--color-primary`, etc.).
-   **Content**: Update `app/data/sections.ts` to modify text without touching components.
-   **Images**: Place new images in `public/images` and update references in `app/data/content.ts`.
