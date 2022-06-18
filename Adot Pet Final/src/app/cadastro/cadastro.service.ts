import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Cadastro} from './cadastro.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class CadastroService {

  constructor(private http: HttpClient){}


}
