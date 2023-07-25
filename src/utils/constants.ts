import { ICoffeeMakerRecipeGroup, Project } from "./types";
import CRecipesLogo from "../assets/constantinrecipeslogo.png";
import CoffeeLogo from "../assets/coffeelogo.jpg";

const v60Recipes: ICoffeeMakerRecipeGroup = {
  name: "v60",
  recipes: [
    {
      yields: 1,
      description: "A simple and repeatable way to make a single cup V60",
      steps: [
        {
          start: "00:00",
          end: "00:10",
          description: "Pour 50g of water to bloom",
        },
        {
          start: "00:10",
          end: "00:15",
          description: "Gently Swirl",
        },
        {
          start: "00:45",
          end: "01:00",
          description: "Pour to 100g total",
        },
        {
          start: "01:10",
          end: "01:20",
          description: "Pour to 150g total",
        },
        {
          start: "01:30",
          end: "01:40",
          description: "Pour to 200g total",
        },
        {
          start: "01:50",
          end: "02:00",
          description: "Pour to 250g total",
        },
        {
          start: "02:00",
          end: "02:05",
          description: "Gently Swirl",
        },
      ],
      reference: {
        name: "James Hoffman",
        link: "https://www.youtube.com/watch?v=1oB1oDrDkHM",
      },
    },
    {
      yields: 2,
      description: "PLACEHOLDER A simple and repeatable way to make a single cup V60",
      steps: [
        {
          start: "00:00",
          end: "00:10",
          description: "Pour 50g of water to bloom",
        },
        {
          start: "00:10",
          end: "00:15",
          description: "Gently Swirl",
        },
        {
          start: "00:45",
          end: "01:00",
          description: "Pour to 100g total",
        },
        {
          start: "01:10",
          end: "01:20",
          description: "Pour to 150g total",
        },
        {
          start: "01:30",
          end: "01:40",
          description: "Pour to 200g total",
        },
        {
          start: "01:50",
          end: "02:00",
          description: "Pour to 250g total",
        },
        {
          start: "02:00",
          end: "02:05",
          description: "Gently Swirl",
        },
      ],
      reference: {
        name: "James Hoffman",
        link: "https://www.youtube.com/watch?v=1oB1oDrDkHM",
      },
    },
  ],
};

export const coffeeRecipeGroups: ICoffeeMakerRecipeGroup[] = [
  v60Recipes,
  { ...v60Recipes, name: "PHaeropress" },
  { ...v60Recipes, name: "PHPercolator" },
];

export const projects: Project[] = [
  {
    title: "Constantin Recipes",
    description:
      "Web app for collecting and sharing prized Constantin family recipes",
    link: "https://www.constantinrecipes.com/all",
    logo: CRecipesLogo,
  },
  {
    title: "Coffee Reference",
    description:
      "A small collection of some of my favorite coffee recipes and techniques",
    link: "/coffee",
    logo: CoffeeLogo,
  },
];