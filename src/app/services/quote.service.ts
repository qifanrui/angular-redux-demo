import { Quote } from './../domain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient) {
  }

  getQuote(): Observable<Quote> {
    const uri = `http://localhost:3000/quotes/${Math.floor(Math.random() * 10)}`;
    return this.http.get<Quote>(uri);
  }

}
