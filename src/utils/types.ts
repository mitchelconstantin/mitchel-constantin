export interface ICoffeeRecipe {
  yields: number;
  description?: string;
  steps?: {start: string, end: string, description: string}[];
  reference?: {name: string, link: string};
}

export interface ICoffeeMakerRecipeGroup {
  name: string;
  recipes: ICoffeeRecipe[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  logo: any;
}
