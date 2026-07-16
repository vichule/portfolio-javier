import { Project } from "@/types/project";

import {
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Globe,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";

export const projects: Project[] = [
  {
    title: "Hotel Miranda",
    description: "Hotel booking platform developed with Laravel and MySQL. Features room reservations, availability management, responsive layouts and customer-facing booking workflows. Built following a mobile-first approach.",
    image: "/images/projects/hotel-laravel.jpg",
    imageAlt: "Hotel Miranda booking interface",
    stack: [
      { name: "Laravel", icon: <Workflow className="w-4 h-4" /> },
      { name: "PHP", icon: <Code2 className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Mobile-First", icon: <Smartphone className="w-4 h-4" /> },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/vichule/HotelMiranda-laravel", icon: <GitBranch className="w-4 h-4" /> },
    ],
    reverse: false,
  },
  {
    title: "Travl Dashboard",
    description: "Administrative dashboard built for hotel management. Includes booking control, room management, customer records and operational workflows. Developed with React and progressively migrated from JavaScript to TypeScript.",
    image: "/images/projects/dashboard.jpg",
    imageAlt: "Travl Dashboard interface",
    stack: [
      { name: "React", icon: <Workflow className="w-4 h-4" /> },
      { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "REST API", icon: <Zap className="w-4 h-4" /> },
      { name: "Responsive UI", icon: <Smartphone className="w-4 h-4" /> },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/vichule/dashboard-miranda", icon: <GitBranch className="w-4 h-4" /> },
    ],
    reverse: true,
    imagePosition: "left",
  },
  {
    title: "Oxygen Shop",
    description: "Modern e-commerce landing page developed with HTML, CSS and JavaScript. Focused on responsive design, user experience and conversion-oriented layouts using a mobile-first approach.",
    image: "/images/projects/oxygen.jpg",
    imageAlt: "Oxygen Shop e-commerce interface",
    stack: [
      { name: "HTML5", icon: <Code2 className="w-4 h-4" /> },
      { name: "CSS3", icon: <Workflow className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Zap className="w-4 h-4" /> },
      { name: "Mobile-First", icon: <Smartphone className="w-4 h-4" /> },
    ],
    links: [
      { label: "Live Demo", href: "https://vichule.github.io/oxygenShop/", icon: <Globe className="w-4 h-4" /> },
      { label: "GitHub", href: "https://github.com/vichule/oxygenShop", icon: <GitBranch className="w-4 h-4" /> },
    ],
    reverse: false,
  },
  {
    title: "CoolPic React App",
    description: "Image discovery application powered by the Unsplash API. Features search, favorites, image downloads and responsive navigation. Built with React, Redux and external API integration.",
    image: "/images/projects/coolpic.jpg",
    imageAlt: "CoolPic image discovery interface",
    stack: [
      { name: "React", icon: <Workflow className="w-4 h-4" /> },
      { name: "Redux", icon: <Database className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "Unsplash API", icon: <Zap className="w-4 h-4" /> },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/vichule/CoolPic_ReactApp", icon: <GitBranch className="w-4 h-4" /> },
    ],
    reverse: true,
  },
];