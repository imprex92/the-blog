import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { BlogPost } from '../model/blog-interface';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  isAuthorized: boolean = false;
  blogPosts: BlogPost[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.isAuthorized = this.storageService.isLoggedIn();
    this.getAllArticles();
  }

  // Tilldelar articles object array med ursprunglig article array
  getAllArticles() {
    this.blogPosts = this.storageService.getArticles();
  }

  // Radera en viss article
  onRemoveArticle(blogPost) {
    this.storageService.removeArticle(blogPost);
    // Uppdaterar articles objekt array efter att en artikel blivit borttagen
    this.getAllArticles();
    alert('ARTIKEL HAR RADERATS!! :)\n\n');
  }
}
