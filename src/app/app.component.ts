import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardUseCase } from '@domain/usecases/card/card.usecase';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clean-arch';

  private getCard = inject(CardUseCase)

  constructor(){
    this.getCard.execute().subscribe(e => {
      console.log(e)
    })
  }
}
