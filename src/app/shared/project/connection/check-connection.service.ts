import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalVerifyConnectionService {
  getConnection(): Observable<Event> {
    return merge(fromEvent(window, 'online'), fromEvent(window, 'offline'));
  }
}
