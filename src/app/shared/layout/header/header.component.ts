import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;
  subscription: Subscription;
  constructor(private storageService: StorageService, private router: Router) {
    /** 
    * Prenumererar på authSubject som en observer. I filen storage.service.ts i funktionen isAuthorizedObserver() 
    * så ser man att authSubjects retuneras som en observable. Den observeras genom att man prenumererar på den.
    *
    * Koden nedan skriven utan arrowfuntion: this.subscription = this.storageService.isAuthorizedObserver().subscribe(function (loginStatus) {this.isAuth = loginStatus;}.bind(this));
    */
    this.subscription = this.storageService.isAuthorizedObserver().subscribe((loginStatus) => {
      this.isAuth = loginStatus;
    });
  }

  ngOnInit(): void {
  }

  // Ändrar Auth status till False

  clickLogout() {
    this.storageService.logOut();
    this.router.navigate(['/home']);
  }

}
