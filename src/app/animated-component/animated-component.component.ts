import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animated-component',
  templateUrl: './animated-component.component.html',
  styleUrls: ['./animated-component.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class AnimatedComponent {
  // Aquí puedes agregar la lógica del componente
}
