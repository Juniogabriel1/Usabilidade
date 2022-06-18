import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {CadastroComponent} from './cadastro.component'

export class LeaveCadastroGuard implements CanDeactivate<CadastroComponent> {

  canDeactivate(cadastroComponent: CadastroComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {
      if (!cadastroComponent.isCadastroCompleted()){
          return window.confirm('Deseja sair do cadastro / Cadastro está completo?')
      }      
      else{
        return true
      }
  }

}
