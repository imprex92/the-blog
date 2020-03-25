import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { BlogPost } from '../model/blog-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthorized: boolean = false;
  blogPost: BlogPost;
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.isAuthorized = this.storageService.isLoggedIn();
    this.getMostRecentArticle();
  }
  
  // Tilldelar article objektet med den senaste artikeln
  getMostRecentArticle() {
    this.blogPost = this.storageService.getRecentArticle();
  }
  
  // Tar bort en specifik artikel och tar sedan nästa i "kö" som senaste article
  onRemoveArticle(blogPost) {
    this.storageService.removeArticle(blogPost);
    // Uppdaterar article objektet efter att en artikel blivit borttagen
    this.getMostRecentArticle();
    alert('ARTIKEL HAR RADERATS!!!! :)\n\n');
  }
}