import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../model/blog-interface';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  blogPost: BlogPost = null;
  isAuthorized: boolean = false;
  constructor(private storageService: StorageService, private router: Router) {
    /*
    * Om inte Authorized så navigera tillbaka till home componenten
    * Om Authorized så initiera article till tomt article object
    */
    this.isAuthorized = this.storageService.isLoggedIn();
    if (this.isAuthorized == false) {
      // Navigera till home komponenten
      this.router.navigate(['/home']);
    } else {
      //initiera article till tomt article object
      this.blogPost = new BlogPost();
    }
  }

  ngOnInit(): void {}

  // Lägg till en artikel
  onSubmit() {
      this.storageService.addArticle(this.blogPost);
      alert('Ditt inlägg har skickats!! :)\n\n');
      this.router.navigate(['/all-article']);
  }
}
