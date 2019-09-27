import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/backend/backend.module')
      .then(m => m.BackendModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/frontend/frontend.module')
      .then(m => m.FrontendModule),
  },
  {
    path: 'admin/auth', loadChildren: () => import('./pages/backend/auth/auth.module')
      .then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
