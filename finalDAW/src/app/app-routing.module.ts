import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'menu-fotos',
    loadChildren: () => import('./menu-fotos/menu-fotos.module').then( m => m.MenuFotosPageModule)
  },
  {
    path: 'informazioa',
    loadChildren: () => import('./informazioa/informazioa.module').then( m => m.InformazioaPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'new-post',
    loadChildren: () => import('./new-post/new-post.module').then( m => m.NewPostPageModule)
  },

  {
    path: 'post/:id',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'update-post/:id',
    loadChildren: () => import('./update-post/update-post.module').then( m => m.UpdatePostPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
