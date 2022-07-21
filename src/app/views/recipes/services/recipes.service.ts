import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataRecipe, Recipe, ParamsRecipe } from '../model/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }
  private readonly SPOONACULARAPI = environment.spoonacularApi;
  private readonly APIKEY = environment.APIKEY;

  public getRecipes(): Observable<DataRecipe> {
    return this.http.get<DataRecipe>(`${this.SPOONACULARAPI}/random?apiKey=${this.APIKEY}&number=12`).pipe(take(1));
  }

  public getRecipeById(recipeId: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.SPOONACULARAPI}/${recipeId}/information?apiKey=${this.APIKEY}`).pipe(take(1));
  }

  public getNotFoundImage(): string{
    return '../../../../assets/img/imgNotFound.jpg';
  }
}
