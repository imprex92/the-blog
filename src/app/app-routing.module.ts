import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';;
import { LoginComponent } from './login/login.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { PreviewArticleComponent } from './preview-article/preview-article.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'all-article', component: AllArticlesComponent},
  { path: 'preview-articles', component: PreviewArticleComponent},
  { path: 'new-article', component: NewArticleComponent},
  { path: 'login', component: LoginComponent}, { path: '404-page', component: PageNotFoundComponent},
  // otherwise redirect to 404-page
  { path: '**', redirectTo: '404-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
