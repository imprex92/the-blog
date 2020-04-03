import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { StorageService } from './services/storage.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';
import { PreviewArticleComponent } from './preview-article/preview-article.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      HomeComponent,
      AllArticlesComponent,
      LoginComponent,
      NewArticleComponent,
      PreviewArticleComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      StorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
