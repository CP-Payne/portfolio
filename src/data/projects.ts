
const projectList = [
    {
    title: "WonderPicAI",
    description: "WonderPicAI is a server-side rendered web app that lets users generate AI images using customizable prompts. It delegates image generation to an external service and receives results asynchronously via webhook, following clean architecture for flexibility and maintainability.",
    // image: "landing-part-2.png",
    image: "gen-page.png",
    stack: ["Golang", "PostgreSQL","HTMX", "TailwindCSS", "Stripe" ],
    link: "https://github.com/CP-Payne/WonderPicAI"
    },
  {
    title: "StockTech",
    description: "A fullstack portfolio tracker that lets users search stocks, view detailed financial data, and manage a personal watchlist.It features secure authentication, portfolio management, and a commenting system - all structured using clean architecture.",
    image: "homepage-image.png",
    stack: ["C#", "ASP.NET Core", "React", "TypeScript", "Tailwindcss"],
    link: "https://github.com/CP-Payne/StockTech",
  },
     {
    title: "ComfyLite",
    description: "A lightweight API service that enables asynchronous AI image generation through a clean interface. It abstracts complex ComfyUI workflows and delivers results via webhooks, supporting dynamic templates, prompt tracking, and flexible workflow configuration.",
    image: "comfylite.png",
    stack: ["Golang", "ComfyUI"],
    link: "https://github.com/CP-Payne/ComfyLite",
  },


]

export default projectList;