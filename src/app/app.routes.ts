import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: '/cards', pathMatch: 'full',
    },
    {
        path: 'cards',
        // component: AboutComponent,
        loadComponent: () => import('./word-cards/word-cards.component').then(x => x.WordCardsComponent)
      },
];
