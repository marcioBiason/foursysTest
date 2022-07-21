import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../model/recipes.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public readonly IMGNOTFOUND = this._recipesService.getNotFoundImage();
  public loading: boolean = false;
  public error: boolean = false;
  public recipe: Recipe = {
    title: undefined,
    image: '',
    summary: undefined,
  };

  constructor(private _recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.error = false;
    this.route.params.subscribe(params => {
      if (params['id']) {
        this._recipesService.getRecipeById(params['id'].trim()).subscribe({
          next: recipe => {
            this.recipe.title = recipe['title'];
            this.recipe.image = recipe['image'];
            this.recipe.summary = recipe['summary'];
            this.loading = false;
          },
          error: () => {
            this.loading = false;
            this.error = true;
          }
        });
      }
    });
  }

  public backTogallery() {
    this.router.navigateByUrl('');
  }
}
