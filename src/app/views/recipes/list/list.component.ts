import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipes.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public readonly IMGNOTFOUND = this._recipesService.getNotFoundImage()
  public recipes: Recipe[] = [];
  public loading: boolean = false;
  public error: boolean = false;

  constructor(private _recipesService: RecipesService) { }

  ngOnInit() {
    this.getRecipeList()
  }

  public getRecipeList() {
    this.loading = true;
    this.error = !this.loading;
    this._recipesService.getRecipes().subscribe({
      next: recipe => {
        this.recipes.push(...recipe['recipes']);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = !this.loading;
      }
    });
  }
}
