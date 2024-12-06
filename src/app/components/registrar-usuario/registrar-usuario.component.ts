import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.usuario);
  }
}
