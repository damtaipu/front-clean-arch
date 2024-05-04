import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UseCase<S, T> {
  execute(params?: S): Observable<HttpResponse<T>>;
}
