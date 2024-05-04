import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { GlobalVerifyConnectionService } from './check-connection.service';

@Injectable({
  providedIn: 'root',
})
export abstract class CheckDataConnectionComponent {
  private messageService = inject(MessageService);
  private cnx = inject(GlobalVerifyConnectionService);

  checkConnection(): void {
    this.cnx.getConnection().subscribe((x: Event) => {
      if (x.type === 'offline') {
        this.messageService.add({
          key: 'cx',
          sticky: true,
          closable: false,
          severity: 'warn',
          summary: 'Sem conexão!',
          detail: 'Você ficou sem internet.',
        });
      }
      if (x.type === 'online') {
        this.messageService.clear('cx');
        this.messageService.add({
          key: 'cx',
          severity: 'success',
          summary: 'Conexão restabelecida!',
          detail: 'Internet conectada.',
        });
      }
    });
  }
}
