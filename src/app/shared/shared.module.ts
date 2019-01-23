import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [RouterModule],
  declarations: [NavigationComponent],
  providers: [],
  exports: [NavigationComponent],
})
export class SharedModule {}
