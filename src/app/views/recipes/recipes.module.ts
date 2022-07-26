import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { ErrorModule } from '../../shared/components/error/error.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesService } from './services/recipes.service';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule,
    LoadingModule,
    ButtonModule,
    ErrorModule
  ],
  exports: [
    ListComponent,
    DetailComponent
  ],
  providers: [
    RecipesService
  ]
})
export class RecipesModule { }
