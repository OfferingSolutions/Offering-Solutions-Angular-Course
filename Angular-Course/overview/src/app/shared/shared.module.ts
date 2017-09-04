import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
    imports: [CommonModule],
    exports: [
        NavigationComponent,
        FooterComponent
    ],
    declarations: [
        NavigationComponent,
        FooterComponent
    ],
    providers: [],
})

export class SharedModule { }
