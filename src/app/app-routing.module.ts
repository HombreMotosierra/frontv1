import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaUsuarioComponent } from "./components/lista-usuario/lista-usuario.component";
import { RegistrarUsuarioComponent } from "./components/registrar-usuario/registrar-usuario.component";
import { ActualizarUsuarioComponent } from "./components/actualizar-usuario/actualizar-usuario.component";

const routes: Routes = [
    { path: "usuarios", component: ListaUsuarioComponent },
    { path: "", redirectTo: "/usuarios", pathMatch: "full" },
    { path: "registrar-usuario", component: RegistrarUsuarioComponent },
    { path: "actualizar-usuario/:id", component:ActualizarUsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
