import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {CadastroAnimalComponent} from './cadastroAnimal.component'

export class LeaveCadastroAnimalGuard implements CanDeactivate<CadastroAnimalComponent> {

  canDeactivate(cadastroAnimalComponent: CadastroAnimalComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {
      if (!cadastroAnimalComponent.isCadastroAnimalCompleted()){
        return window.confirm('Deseja sair do cadastro / Cadastro está completo?')
      }else{
        return true
      }
  }

}
