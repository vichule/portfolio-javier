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
    title: "Nexus Commerce",
    description: "A modern e-commerce platform built for high-performance online retail. Features real-time inventory management, advanced analytics dashboard, and seamless payment integration. Designed to handle thousands of concurrent users with sub-second response times.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Nexus Commerce e-commerce platform mockup",
    stack: [
        { name: "Next.js", icon: <Workflow className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "Stripe", icon: <Zap className="w-4 h-4" /> },
      ],
      links: [
        { label: "Live Demo", href: "#", icon: <Globe className="w-4 h-4" /> },
        { label: "GitHub", href: "#", icon: <GitBranch className="w-4 h-4" /> },
      ],
      reverse: false,
    },
    {
      title: "Vision Dashboard",
      description: "Comprehensive analytics dashboard for data-driven decision making. Real-time data visualization, custom report generation, and predictive analytics. Built with modern React architecture and optimized for large datasets with instant filtering and search capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      imageAlt: "Vision Dashboard analytics interface",
      stack: [
        { name: "React", icon: <Workflow className="w-4 h-4" /> },
        { name: "Node.js", icon: <Zap className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "D3.js", icon: <Code2 className="w-4 h-4" /> },
      ],
      links: [
        { label: "Live Demo", href: "#", icon: <Globe className="w-4 h-4" /> },
        { label: "GitHub", href: "#", icon: <GitBranch className="w-4 h-4" /> },
        { label: "Case Study", href: "#", icon: <ExternalLink className="w-4 h-4" /> },
      ],
      reverse: true,
    },
    {
      title: "Flux Analytics",
      description: "Mobile-first analytics application for field service teams. Real-time GPS tracking, automated reporting, and team collaboration features. Built with React Native for cross-platform compatibility and offline-first architecture for remote work scenarios.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&crop=center",
      imageAlt: "Flux Analytics mobile app interface",
      stack: [
        { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Firebase", icon: <Database className="w-4 h-4" /> },
        { name: "Express.js", icon: <Zap className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
      ],
      links: [
        { label: "App Store", href: "#", icon: <Smartphone className="w-4 h-4" /> },
        { label: "GitHub", href: "#", icon: <GitBranch className="w-4 h-4" /> },
      ],
      reverse: false,
    },
];