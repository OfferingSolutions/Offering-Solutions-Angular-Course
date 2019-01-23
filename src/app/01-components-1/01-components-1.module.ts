;
import { MyFirstComponent } from './start/my-first/my-first.component'import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 01Components1RoutingModule } from './01-components-1-routing.module';

@NgModule({
  declarations: [MyFirstComponent],
  imports: [
    CommonModule,
    01Components1RoutingModule
  ]
})
export class 01Components1Module { }
