import type { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { testRoutes } from './test/test-routing';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...testRoutes, // main
      { path: '**', redirectTo: 'main' },
    ],
  },
];
