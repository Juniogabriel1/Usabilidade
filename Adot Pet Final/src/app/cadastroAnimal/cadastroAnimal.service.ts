import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {CadastroAnimal} from './cadastroAnimal.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class CadastroAnimalService {

  checkCadastroAnimal(cadastroAnimal: CadastroAnimal): Observable<string> {
    return this.http.post<CadastroAnimal>(`${MEAT_API}/cadastroanimal`, cadastroAnimal)
                    .map(cadastroAnimal => cadastroAnimal.id)
  }

  constructor(private http: HttpClient){}


}
