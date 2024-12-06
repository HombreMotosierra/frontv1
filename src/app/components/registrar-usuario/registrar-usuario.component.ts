import { Component, OnInit } from "@angular/core";
import { Usuario, UsuarioService } from "../../services/usuario.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-registrar-usuario",
    templateUrl: "./registrar-usuario.component.html",
    styleUrls: ["./registrar-usuario.component.css"],
})
export class RegistrarUsuarioComponent implements OnInit {
    // Inicializa las propiedades de usuario, incluyendo los objetos anidados
    usuario: Usuario = {
        cedula: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        clave: '',
        email: '',
        estado: 1,
        empresa: {
            nit: '',
            nombre: '',
            estado: 1
        },
        rol: {
            id: 0,
            rol: '',
            estado: 1,
            descripcion: ''
        }
    };

    constructor(
        private usuarioServicio: UsuarioService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    guardarUsuario() {
        this.usuarioServicio.registerUsuario(this.usuario).subscribe(
            (dato) => {
                console.log(dato);
                this.irAListaUsuarios(); // Redirige a la lista de usuarios después de guardar
            },
            (error) => {
                console.log(error);
            }
        );
    }

    irAListaUsuarios() {
        this.router.navigate(["/usuarios"]);
    }

    onSubmit() {
        console.log(this.usuario); // Para ver qué datos se están enviando
        this.guardarUsuario(); // Llamar a la función para guardar el usuario
    }
}
