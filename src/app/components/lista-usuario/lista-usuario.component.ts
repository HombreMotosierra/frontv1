import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Usuario[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data; // Almacena los usuarios en la lista
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
      },
    });
  }

  eliminarUsuario(cedula: string): void {
    this.usuarioService.deleteUsuario(cedula).subscribe({
      next: () => {
        this.obtenerUsuarios(); // Actualiza la lista después de eliminar un usuario
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
      },
    });
  }

  // Método para editar el usuario
  

}
