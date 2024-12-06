import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../services/usuario.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-actualizar-usuario",
    templateUrl: "./actualizar-usuario.component.html",
    styleUrls: ["./actualizar-usuario.component.css"],
})
export class ActualizarUsuarioComponent implements OnInit {
    usuario = {
        cedula: "",
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        clave: "",
        email: "",
        estado: 1,
        empresa: {
            nit: "",
            nombre: "",
            estado: 1,
        },
        rol: {
            id: 0,
            rol: "",
            estado: 1,
            descripcion: "",
        },
    };
    usuarioId: any;

    constructor(
        private usuarioServicio: UsuarioService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // Obtener el ID del usuario de la URL para editar
        this.usuarioId = this.route.snapshot.paramMap.get("id")!;
        this.cargarUsuario();
    }

    cargarUsuario() {
        // Aquí debes llamar al servicio para obtener el usuario por ID (no mostrado en el ejemplo, pero puedes hacerlo similar a cómo se actualiza)
        this.usuarioServicio
            .getUsuario(this.usuarioId)
            .subscribe((data) => {
                this.usuario = data;
            });
    }

    actualizarUsuario() {
        this.usuarioServicio
            .actualizarUsuario(+this.usuario.cedula, this.usuario)
            .subscribe(
                (data) => {
                    console.log("Usuario actualizado:", data);
                    this.irAListaUsuarios();
                },
                (error) => {
                    console.log("Error al actualizar el usuario:", error);
                }
            );
    }

    irAListaUsuarios() {
        this.router.navigate(["/usuarios"]);
    }

    onSubmit() {
        this.actualizarUsuario();
    }
}
