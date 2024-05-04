import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { CardImplementationsRepository } from '@data/repositories/card/card-implementation.repository';
import { UseCase } from '@base/usecase/usecase';
import { Card } from '@domain/models/card/card.models';


@Injectable({
  providedIn: 'root',
})
export class CardUseCase implements UseCase<void, Card> {
  
  private cardRepository = inject(CardImplementationsRepository);

  execute(): Observable<HttpResponse<Card>> {
    return this.cardRepository.getInitialData()
  }
}
