import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {AnimaisService} from '../animais/animais.service'

import {Animal} from '../animais/animal/animal.model'

@Component({
  selector: 'mt-animal-detail',
  templateUrl: './animal-detail.component.html'
})
export class AnimalDetailComponent implements OnInit {

  animal: Animal

  constructor(private animaisService: AnimaisService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.animaisService.animaisById(this.route.snapshot.params['id'])
      .subscribe(animal => this.animal = animal)
  }

}
