import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
// import 'rxjs/Rx'
import { SWAPIInterface } from "../model/SWAPI-interface";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private _quotesURL = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
	constructor(private http: HttpClient) { }

	getQuote(): Observable<SWAPIInterface> {
		return this.http.get<SWAPIInterface>(this._quotesURL)
			
	}

}
