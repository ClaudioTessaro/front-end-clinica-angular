import { HomeComponent } from './private/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./private/private.module').then(m => m.PrivateModule), canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
