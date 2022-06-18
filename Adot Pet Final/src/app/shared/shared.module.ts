import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {InputComponent} from './input/input.component'

import {CadastroService} from '../cadastro/cadastro.service'
import {AnimaisService} from '../animais/animais.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import {NotificationService} from './messages/notification.service'
import {LoginService} from '../security/login/login.service'

import {LoggedInGuard} from '../security/loggedin.guard'
import {LeaveCadastroGuard} from '../cadastro/leave-cadastro.guard'
import {AuthInterceptor} from '../security/auth.interceptor'
import { CadastroAnimalService } from 'app/cadastroAnimal/cadastroAnimal.service'
import { LeaveCadastroAnimalGuard } from 'app/cadastroAnimal/leave-cadastroAnimal.guard'

@NgModule({
  declarations: [InputComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, SnackbarComponent,CommonModule,
            FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AnimaisService,
                 CadastroService,
                 CadastroAnimalService,
                 NotificationService,
                 LoginService,
                 LoggedInGuard,
                 LeaveCadastroGuard,
                 LeaveCadastroAnimalGuard,
                 {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
                ]
    }
  }
}
