import { Injectable } from '@angular/core';
import { BlogPost } from '../model/blog-interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  dummyArticles: BlogPost[] = [
    {
      title: 'Regnar igen...',
      author: 'Gandalf den Grå',
      content: 'Kära dagbok. Idag när jag kollade ut genom fönstert så såg jag att det regnade ännu en dag här i Göteborg, brr...',
      timeToRead: 1,
    },
    {
      title: 'dark night poem',
      author: '',
      content: 'they say that nothing is wasted: either that or - it all is',
      timeToRead: 2,
    },
    {
      title: 'Hemska dag!',
      author: 'Darth Vader',
      content: 'Idag slog mamma mig, med stekpannan... Tur att det inte var varm i alla fall, bara för att inte åt upp spenaten på tallriken! Jävkla kärring',
      timeToRead: 2,
    },
    {
      title: 'ho ho ho',
      author: 'Angular',
      content: 'Idag har jag skapat ytterligare förvirring hos nys studenter som tror dom kan förstå sig på en så komple varelse som mig själv!',
      timeToRead: 1,
    },
    {
      title: 'Bacon sandwitch',
      author: 'Greta Gris',
      content: 'Hello World, som barn var livet så vacket.. Idag lever jag enbart för benzo... åhh grymma värld.',
      timeToRead: 9,
    },
    {
      title: 'alone',
      author: 'yolo',
      content: 'you said you were afraid to lose me - and then you faced your fears and left',
      timeToRead: 2,
    }
  ];
  isLogIn: boolean = false;
  authSubject = new Subject();

  constructor() {
  }

  storeItem(articles){
    this.dummyArticles = articles;
  }

  // Retunerar den först funna artikeln sorterat på titel
  getArticleByTitle(title: string) {
    let articles = this.getArticles();
    let item = articles.find(article => {
      return article.title == title;
    });
    return item;
  }
  // Returnerar alla articles
  getArticles() {
    return JSON.parse(JSON.stringify(this.dummyArticles));
  }

  // Returnera status på Auth
  isLoggedIn() {
    return this.isLogIn;
  }
  
  // Ändrar status på Auth till True och publicerar ändringen till observable
  login() {
    this.isLogIn = true;
    this.authSubject.next(this.isLogIn);
  }

 // Ändrar status på Auth till True och publicerar ändringen till observable
  logOut() {
    this.isLogIn = false;
    this.authSubject.next(this.isLogIn);
  }
  // Retunerar en observable som kan användas för att prenumerera på att observera förändring
  isAuthorizedObserver(): Observable<any> {
    return this.authSubject.asObservable();
  }

  // Lägg till en article till article listan
  addArticle(article: BlogPost){
    let articles = this.getArticles();
    articles.push(article);
    this.storeItem(articles);
  }

  // Ta bort en viss article
  removeArticle(article: BlogPost) {
    let articles = this.getArticles();
    // retunera index där articles titel matchar så den kan bli borttagen från arrayn 
    const index = articles.findIndex(x => x.title === article.title)
    // Om index == -1 hittas inte article
    if (index > -1) {
      articles.splice(index, 1);
    }
    this.storeItem(articles);
  }

   // Hämta alla artiklar
   getAllArticles() {
    let articles = this.getArticles();
    return articles;
  }

  // Hämta alla nyaste artiklar
  getAllRecentArticles() {
    let articles = this.getArticles();
     // Sortera article listan baklänges, så den visar nyast till äldst.
    articles =  articles.reverse();
    return articles;
  }

  // Hämta visst antal av senaste articles
  getRecentArticles(size) {
    let articles = this.getArticles();
     // sortera article listan baklänges, så den visar nyast till äldst.
    articles =  articles.reverse();
    let items = articles.slice(0, size);
    return items;
  }

  // Hämta den senast tillagda artikeln
  getRecentArticle() {
    let articles = this.getArticles();
     // sortera article listan baklänges, så den visar nyast till äldst.
    articles =  articles.reverse();
    let recentArticle = articles[0];
    return recentArticle;
  }

 
}
