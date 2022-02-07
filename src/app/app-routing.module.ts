import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'maturita-content',
    loadChildren: () => import('./maturita-content/maturita-content.module').then( m => m.MaturitaContentPageModule),
    canActivate: [AuthGuard],
    data:{
      role: 'USER'
    }
  },
  {
    path: 'maturita-content2',
    loadChildren: () => import('./maturita-content2/maturita-content2.module').then( m => m.MaturitaContent2PageModule),
    canActivate: [AuthGuard],
    data:{
      role: 'USER'
    }

     /**
    data:{
      role: 'USER'
    }
    */

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
