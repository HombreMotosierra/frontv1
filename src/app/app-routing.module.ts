import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import {RegistrarUsuarioComponent} from "./components/registrar-usuario/registrar-usuario.component";

const routes: Routes = [
  {path: 'usuarios', component:ListaUsuarioComponent },
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: 'registrar-usuario',component:RegistrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
