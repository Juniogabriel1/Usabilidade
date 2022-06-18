import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Animal} from './animal/animal.model'
import {MEAT_API} from '../app.api'

@Injectable()
export class AnimaisService {

    constructor(private http: HttpClient) {}

    animais(search?: string): Observable<Animal[]> {
      let params: HttpParams = undefined
      if (search) {
        params = new HttpParams().append('q', search)
      }
      return this.http.get<Animal[]>(`${MEAT_API}/animais`, {params: params})
    }

    animaisById(id: string): Observable<Animal> {
      return this.http.get<Animal>(`${MEAT_API}/animais/${id}`)
    }
}
