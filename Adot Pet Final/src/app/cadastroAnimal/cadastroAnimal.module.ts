import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {CadastroAnimalComponent} from './cadastroAnimal.component'

import {LeaveCadastroAnimalGuard} from './leave-cadastroAnimal.guard'

const ROUTES: Routes = [
  {path: '', component: CadastroAnimalComponent, canDeactivate: [LeaveCadastroAnimalGuard]}
]

@NgModule({
  declarations: [CadastroAnimalComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class CadastroAnimalModule {}
