import { Injectable, inject } from '@angular/core';
import { GlobalVerifyConnectionService } from './check-connection.service';

@Injectable({
  providedIn: 'root',
})
export abstract class CheckDataConnectionComponent {

  private cnx = inject(GlobalVerifyConnectionService);

  checkConnection(): void {
    this.cnx.getConnection().subscribe((x: Event) => {
      if (x.type === 'offline') {
        console.log('Disconnected');
      }
      if (x.type === 'online') {
        console.log('OnLine');
      }
    });
  }
}
