import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
  animations: [
    trigger('blink', [
      state('red, orange', style({ opacity: 1 })),
      transition('* => *', [
        animate('1s ease-in-out', style({ opacity: 0.3 })),
        animate('1s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class StatusIndicatorComponent {
  @Input() status: 'green' | 'orange' | 'red' = 'green';
  @Input() label: string = '';
}