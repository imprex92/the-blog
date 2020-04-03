import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { APIService } from "../services/API.service";
import { SWAPIInterface } from "../model/SWAPI-interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  quote:SWAPIInterface;
  constructor(private apiService: APIService, private storageService: StorageService) {}

  getQuote(): void{
    const handleQuote = (data: SWAPIInterface) => {
      this.quote = data;
    }
    this.apiService.getQuote().subscribe(handleQuote)
    }
  ngOnInit(): void {
    this.getQuote()
  }

  login() {
    this.storageService.login();
  }
}
