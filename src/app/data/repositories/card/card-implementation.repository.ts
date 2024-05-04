import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { getHeader } from '@base/header/header';
import { Card } from '@domain/models/card/card.models';
import { CardRepository } from '@domain/repositories/card/card.repository';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CardImplementationsRepository extends CardRepository<Card> {
 
  private http = inject(HttpClient);

  getInitialData(): Observable<HttpResponse<Card>> {
    const httpOptions = {
      headers: getHeader(),
    };

    return this.http.get<Card>(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
      {
        observe: 'response',
      }
    );
  }
}
