import type { Project } from "~/types";

export const projects: Project[] = [
  {
    id: 1,
    documentId: "swiss-romande-hikes",
    title: "Swiss Romande Hikes",
    description:
      "CS50W Capstone project — a personal hiking guide and trail explorer for the French-speaking region of Switzerland. Built with Django and JavaScript, featuring an interactive Mapbox map, trail filtering, live weather data from Open-Meteo API, and a comment system with real-time updates.",
    image:
      "https://res.cloudinary.com/dtkasvfyn/image/upload/v1762889328/cs50w_swiss_romande_e69f05f00b.png",
    url: "https://capstone-jaq1.onrender.com",
    repo: "https://github.com/Maz-hub/capstone",
    date: "2025-02-01",
    category: "CS50W",
    featured: true,
    tech: ["Django", "JavaScript", "SCSS", "Mapbox GL JS", "Open-Meteo"],
  },
  {
    id: 2,
    documentId: "ribe-photo-portfolio",
    title: "Ribe Photo Portfolio",
    description:
      "A responsive photography portfolio built for a professional photographer. Developed with Flask and Jinja templates, styled using SCSS and Bootstrap 5, integrated with Cloudinary for image delivery, and deployed on Heroku.",
    image:
      "https://res.cloudinary.com/dtkasvfyn/image/upload/v1762889343/ribe_photo_portfolio_611c834271.png",
    url: "https://ribe.photo",
    repo: "https://github.com/Maz-hub/ribe_photo",
    date: "2024-11-16",
    category: "Freelance",
    featured: true,
    tech: ["Python", "Flask", "Bootstrap 5", "Cloudinary", "Heroku"],
  },
  {
    id: 3,
    documentId: "aqua-inventory-hub",
    title: "Aqua Inventory Hub",
    description:
      "Full-stack internal web application built for World Aquatics to replace manual spreadsheet-based inventory tracking. Features role-based access (admin and staff), a full audit trail for every stock movement, category-based inventory modules, and a dedicated admin panel for managing products, stock adjustments, and transaction history",
    image: "/images/aqua-inventory-hub.png",
    url: "",
    repo: "https://github.com/Maz-hub/aqua-inventory-hub",
    date: "2025-01-01",
    category: "Professional",
    featured: true,
    tech: ["Django", "React", "PostgreSQL", "Azure", "JWT"],
  },
];
