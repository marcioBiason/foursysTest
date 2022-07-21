import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [ErrorComponent],
  exports: [ErrorComponent]
})
export class ErrorModule {}
