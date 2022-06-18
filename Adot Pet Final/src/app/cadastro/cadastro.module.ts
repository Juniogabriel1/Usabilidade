import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {CadastroComponent} from './cadastro.component'

import {LeaveCadastroGuard} from './leave-cadastro.guard'

const ROUTES: Routes = [
  {path: '', component: CadastroComponent, canDeactivate: [LeaveCadastroGuard]}
]

@NgModule({
  declarations: [CadastroComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class CadastroModule {}
