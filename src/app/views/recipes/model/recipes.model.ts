export class Recipe {
  id?: number;
  title?: string;
  image?: string;
  summary?: string;
}

export interface DataRecipe {
  recipes: Recipe[];
}

export interface ParamsRecipe {
  id?: number;
  number?: number;
}
