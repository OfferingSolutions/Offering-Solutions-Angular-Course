import { Routes } from '@angular/router';

import { DashboardComponent } from './home/components/dashboard/dashboard.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    // { path: 'angularstart', component: AboutComponent },

    // { path: 'products', component: ProductComponent },
    // { path: 'product/:id', component: ProductDetailsComponent },
    // {
    //     path: 'withChildren/:id', component: WithChildrenComponent,
    //     children: [
    //         { path: '', component: WithChildrenOverviewComponent },
    //         { path: 'recipe', component: WithChildrenRecipeComponent }
    //     ]
    // }
];
