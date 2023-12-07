import { ICoffeeMakerRecipeGroup, Project } from "./types";
import CRecipesLogo from "../assets/constantinrecipeslogo.png";
import CoffeeLogo from "../assets/coffeelogo.jpg";

const v60Recipes: ICoffeeMakerRecipeGroup = {
  name: "v60",
  recipes: [
    {
      yields: 1,
      description:
        "A simple and repeatable way to make a single cup V60. Use 15g of medium to finely ground coffee. The darker the roast, the coarser you may want to go and slightly cooler water. ",
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
      description:
        "A simple and repeatable way to make a two cup V60. Use 30g of medium to finely ground coffee. The darker the roast, the coarser you may want to go and slightly cooler water.",
      steps: [
        {
          start: "00:00",
          end: "00:10",
          description: "Pour 60g of water to bloom. Give it a few swirls.",
        },
        {
          start: "00:10",
          end: "00:15",
          description:
            "At 45 second mark, pour until the scale reads 300g. Aim to finish at 1:15 mark.",
        },
        {
          start: "00:45",
          end: "01:00",
          description:
            "At 1:15 mark, pour until the scale reads 500g. Aim to finish at the 1:45 mark. Note this is slightly slower than the previous pour",
        },
        {
          start: "01:10",
          end: "01:20",
          description: "Give it a few swirls as it drains. Enjoy!",
        },
      ],
      reference: {
        name: "James Hoffman",
        link: "https://www.youtube.com/watch?v=AI4ynXzkSQo",
      },
    },
  ],
};

const aeropressRecipes: ICoffeeMakerRecipeGroup = {
  name: "aeropress",
  recipes: [
    {
      yields: 1,
      description: "Inverted Aeropress recipe. Use 15g of coffee.",
      steps: [
        {
          description: "Invert Aeropress and add 15g of coffee",
        },
        {
          description: "Add 50g of water, give a swirl to wet the grounds.",
        },
        {
          description: "Start timer and add water until scale reads 250g.",
        },
        {
          description:
            "At 2:00, flip the Aeropress over your cup, do a 30 second press, and enjoy!",
        },
      ],
      reference: {
        name: "James Hoffman",
        link: "https://www.youtube.com/watch?v=j6VlT_jUVPc",
      },
    },
  ],
};

const percolatorRecipes: ICoffeeMakerRecipeGroup = {
  name: "percolator",
  recipes: [
    {
      yields: 6,
      description:
        "Simple 6 cup recipes for percolator. Use 57g coarsely ground coffee",
      steps: [
        {
          description:
            "Fill percolator to 6 cup line. Wet the metal filter and add coffee.",
        },
        {
          description:
            "Turn on stove to high heat until it starts to bubble over and water starts to change color.",
        },
        {
          description:
            "Turn on stove to low heat and start timer for 7 minutes",
        },
        {
          description: "Turn off heat and enjoy!",
        },
      ],
      reference: {
        name: "producedinLA",
        link: "https://www.youtube.com/watch?v=qb4K1EwUDpo",
      },
    },
    {
      yields: 9,
      description: "Simple 9 cup recipes for percolator. Use 89g coffee",
      steps: [
        {
          description:
            "Fill percolator to 9 cup line. Wet the metal filter and add coffee.",
        },
        {
          description:
            "Turn on stove to high heat until it starts to bubble over and water starts to change color.",
        },
        {
          description:
            "Turn on stove to low heat and start timer for 7 minutes",
        },
        {
          description: "Turn off heat and enjoy!",
        },
      ],
      reference: {
        name: "producedinLA",
        link: "https://www.youtube.com/watch?v=qb4K1EwUDpo",
      },
    },
  ],
};

export const coffeeRecipeGroups: ICoffeeMakerRecipeGroup[] = [
  v60Recipes,
  aeropressRecipes,
  percolatorRecipes,
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
