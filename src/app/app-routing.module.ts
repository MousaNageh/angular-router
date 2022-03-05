import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AuthGuard } from './auth.guard';
import { canDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    canDeactivate: [canDeactivateGuard],
    data: {
      val: 'this router data',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
