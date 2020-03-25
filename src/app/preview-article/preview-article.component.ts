import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../model/blog-interface';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.css']
})
export class PreviewArticleComponent implements OnInit {
  isAuthorized: boolean = false;
  blogPosts: BlogPost[] = [];
  //  Avgör hur många inlägg som visas i preview
  DefaultNumberOfArticles: number = 5;
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.isAuthorized = this.storageService.isLoggedIn();
    this.getCertainNumberOfArticles(this.DefaultNumberOfArticles);
  }

  // Tilldelar article object array med visst antal senaste inlägg, se ovan för hur många som visas
  getCertainNumberOfArticles(numberOfArticles: number) {
    this.blogPosts = this.storageService.getRecentArticles(numberOfArticles);
  }

  //Tar bort en specifik artikel
  onRemoveArticle(blogPost) {
    this.storageService.removeArticle(blogPost);
    //Uppdaterar artikelns object array efter en artikel blivit borttagen.
    this.getCertainNumberOfArticles(this.DefaultNumberOfArticles);
    alert('ARTIKEL HAR RADERATS!!!! :)\n\n');
  }
}
