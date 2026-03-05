import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { ErreurComponent } from './erreur/erreur.component';

export const routes: Routes = [
    {
        path: 'comp1',
        component: Comp1Component
    },
    {
        path: 'comp2',
        component: Comp2Component
    },
    {
        path: 'cinema',
        component: ListeFilmsComponent
    },
    {
        path: '',
        redirectTo: 'cinema',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErreurComponent
    }
];
