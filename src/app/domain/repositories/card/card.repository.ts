import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export abstract class CardRepository<T> {
  abstract getInitialData(): Observable<HttpResponse<T>>;  
}

