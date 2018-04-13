import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';

export const router: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'about', component: AboutComponent },
    {path: 'products', component: ProductsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);