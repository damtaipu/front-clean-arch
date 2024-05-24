import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { UseCase } from '@base/usecase/usecase';
import { Card } from '@domain/models/card/card.models';
import { CardRepository } from '@domain/repositories/card/card.repository';

@Injectable({
  providedIn: 'root',
})
export class CardUseCase implements UseCase<void, Card> {
  
  private cardRepository = inject(CardRepository);

  execute(): Observable<HttpResponse<Card>> {
    return this.cardRepository.getInitialData();
  }
}
