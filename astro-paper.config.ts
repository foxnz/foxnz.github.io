import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://foxnz.github.io/",
    title: "Mingming Zhang",
    description:
      "AI engineer and PhD researcher in Auckland, building LLM applications and real-time computer vision systems.",
    author: "Mingming Zhang",
    profile: "https://foxnz.github.io/about",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Pacific/Auckland",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/foxnz" },
    { name: "linkedin", url: "https://www.linkedin.com/in/mingming-zhangg/" },
    { name: "mail", url: "mailto:itsmingmingzhang@gmail.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
