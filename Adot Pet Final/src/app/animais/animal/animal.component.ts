import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import {Animal} from './animal.model'

@Component({
  selector: 'mt-animal',
  templateUrl: './animal.component.html',
  animations: [
    trigger('animalAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AnimalComponent implements OnInit {

  animalState = 'ready'

  @Input() animal: Animal

  constructor() { }

  ngOnInit() {
  }

}
