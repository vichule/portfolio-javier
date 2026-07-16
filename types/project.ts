import React from "react";

export interface TechBadge {
  name: string;
  icon?: React.ReactNode;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: TechBadge[];
  links: ProjectLink[];
  reverse?: boolean;
  imagePosition?: "center" | "top" | "bottom" | "left" | "right";
}