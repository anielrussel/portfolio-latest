import restcountries from "../assets/rest-countries-api.png";
import todoapp from "../assets/todo-app.png";
import weatherapi from "../assets/weather-api.png";
import shorteningurl from "../assets/shortening-url.png";
import spacetourism from "../assets/space-tourism.png";
import blogrlandingpage from "../assets/blogr-landingpage.png";
import inventorysystem from "../assets/inventory-system.png";

interface Project {
  id: number;
  image: string;
  name: String;
  demo: String;
  github: String;
  tools: string;
  description: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    image: inventorysystem,
    name: "Fullstack Inventory System",
    demo: "https://inventory-system-mernapp.vercel.app/",
    github: "https://github.com/anielrussel/Inventory-System-MERNAPP",
    tools: "NodeJs, ExpressJs, MongoDB, JWT, bcrypt, React + Vite, Typescript, TailwindCSS, Antd, Axios, React-Toastify",
    description:
      "A Fullstack Inventory System created using MERN stack, the server side is created using Node and Express framework, the data is stored in the MongoDB database that is being fetched in the frontend using axios. The user can create an account and can start making it's own inventory.(Logging in might be slow because I'm only using free hosting platforms.😊)",
  },
  {
    id: 2,
    image: restcountries,
    name: "REST Countries API",
    demo: "https://rest-countries-api-aniel-portfolio.vercel.app/",
    github: "https://github.com/anielrussel/REST-Countries-API",
    tools: "Vite, TailwindCSS, REST Countries API, local storage API, Axios",
    description:
      "This project is a lists of countries around the world alongside with their corresponding information or details that are fetched using axios from REST Countries. It has search functionality where you can search countries by name and select functionality where you can filter by Region/Continent.",
  },
  {
    id: 3,
    image: todoapp,
    name: "Todo App",
    demo: "https://todo-app-aniel.vercel.app/",
    github: "https://github.com/anielrussel/Todo-App",
    tools: "Vite, TailwindCSS, Framer Motion",
    description:
      "An app that has basic CRUD functionalities where you can Create, Update, Delete, and Display todos. You can also filter todos based on active todos and completed todos. It has also light and dark mode theme.",
  },
  {
    id: 4,
    image: weatherapi,
    name: "Current Weather App",
    demo: "https://current-weather-api-aniel.vercel.app/",
    github: "https://github.com/anielrussel/current-weather-api",
    tools: "NextJs, Typescript, TailwindCSS, OpenWeatherMap API, Axios",
    description:
      "Displays current weather and forecast for the rest of the day. The data is fetched from OpenWeatherMap API using Axios. I has search functionality where you can search a specific city in any country and it will display it's current weather.",
  },
  {
    id: 5,
    image: shorteningurl,
    name: "Shortening Links",
    demo: "https://url-shortening-api-landing-page-aniel.vercel.app/",
    github: "https://github.com/anielrussel/URL-shortening-API-landing-page",
    tools: "Vite, TailwindCSS, shrtcode API, local storage API, Framer Motion",
    description:
      "A landingpage that has a great functionality that can shorten links/url's in an instant. This project uses shrtcode API and called by a 'post' method. It has also local storage functionality where the data is stored where the shortened links will not disappear even the browser is refreshed.",
  },
  {
    id: 6,
    image: spacetourism,
    name: "Space Tourism",
    demo: "https://space-tourism-react-blush.vercel.app/",
    github: "https://github.com/anielrussel/space-tourism-react",
    tools: "Vite, Framer Motion, SwiperJs",
    description:
      "A simple webpage that has routing functionality using react-router-dom, each page has specific data that fetched and map in order display in it's corresponding pages.",
  },
  {
    id: 7,
    image: blogrlandingpage,
    name: "Blogr landingpage",
    demo: "https://blogr-landingpage-aniel.vercel.app/",
    github: "https://github.com/anielrussel/Blogr-landingpage",
    tools: "Vite, TailwindCSS",
    description:
      "This project is a simple landingpage and a mobile responsive with the help of TailwindCSS.",
  },
];

export default projectsData;
