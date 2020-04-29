import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'greeting',
    component: GreetingComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        pathMatch: 'full',
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'office-workout',
    loadChildren: () => import('./pages/major/major.module').then(m => m.MajorModule),
  },
  {
    path: '',
    redirectTo: '/greeting/sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
