import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Thamsanqa Dreem",
  DESCRIPTION: "Welcome to my codex of ideas and experiences",
  AUTHOR: "Thamsanqa Dreem",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "thamsanqa.dev@gmail.com",
    HREF: "mailto:thamsanqa.dev@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "dr-33-m",
    HREF: "https://github.com/dr-33-m",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Thamsanqa Ncube",
    HREF: "https://linkedin.com/in/thamsanqa-j-31171b1a5",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "dr_33_m",
    HREF: "https://twitter.com/dr_33_m",
  },
];
