import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'

import {Router} from '@angular/router'
import {CadastroAnimalService} from './cadastroAnimal.service'
import {CadastroAnimal} from './cadastroAnimal.model'

import 'rxjs/add/operator/do'

@Component({
  selector: 'mt-cadastroAnimal',
  templateUrl: './cadastroAnimal.component.html'
})
export class CadastroAnimalComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  cadastroAnimalForm: FormGroup

  cadastroAnimalId: string


  constructor(private cadastroAnimalService: CadastroAnimalService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastroAnimalForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern), Validators.minLength(11), Validators.maxLength(11)]),
      age: this.formBuilder.control('', [Validators.required]),
      image: this.formBuilder.control('', [Validators.required]),
      about: this.formBuilder.control('', [Validators.required])
    }, {validator: CadastroAnimalComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation){
      return undefined
    }
    if (email.value !== emailConfirmation.value){
      return {emailsNotMatch: true}
    }
    return undefined
  }
  
  isCadastroAnimalCompleted(): boolean {
    if(this.cadastroAnimalForm.valid){
      return true
    }
    else{
      return false
    }

  }

}
