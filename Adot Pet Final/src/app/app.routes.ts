import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AnimaisComponent} from './animais/animais.component'
import {AnimalDetailComponent} from './animal-detail/animal-detail.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {LoginComponent} from './security/login/login.component'
import {LoggedInGuard} from './security/loggedin.guard'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'animais/:id', component: AnimalDetailComponent},
  {path: 'animais', component: AnimaisComponent},
  {path: 'cadastroanimal', loadChildren: './cadastroAnimal/cadastroAnimal.module#CadastroAnimalModule',
  canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  {path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
