import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { PostCat1Component } from './components/post-cat1/post-cat1.component';
import { JovenezComponent } from './components/jovenez/jovenez.component';
import { AllComponent } from './components/all/all.component'
import { PublicacionComponent } from './components/publicacion/publicacion.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: '/post1',
    pathMatch: 'full'
  },
  {
    path: 'post1',
    component: PostCat1Component
  },
  {
    path: 'jovenes',
    component: JovenezComponent
  },
  {
    path: 'publicacion',
    component: PublicacionComponent
  },
  {
    path: 'all',
    component: AllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
