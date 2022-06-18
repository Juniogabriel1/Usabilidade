import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'

import {Router} from '@angular/router'
import {CadastroService} from './cadastro.service'
import {Cadastro} from './cadastro.model'
import { LeaveCadastroGuard } from './leave-cadastro.guard';

import 'rxjs/add/operator/do'

@Component({
  selector: 'mt-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  cadastroForm: FormGroup

  cadastroId: string


  constructor(private cadastroService: CadastroService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern), Validators.minLength(11), Validators.maxLength(11)]),
      dataNasc: this.formBuilder.control('', [Validators.required])
    }, {validator: CadastroComponent.equalsTo})
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
  
  isCadastroCompleted(): boolean {
    return this.cadastroId !== undefined
  }

  checkCadastro(){
    return true
  }

}
