import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Define la interfaz para estructurar los datos
export interface Empresa {
    nit: string;
    nombre: string;
    estado: number;
}

export interface Rol {
    id: number;
    rol: string;
    estado: number;
    descripcion: string;
}

export class Usuario {
    cedula: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    clave: string;
    email: string;
    empresa: Empresa;
    rol: Rol;
    estado: number;
}

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    private apiUrl = "http://localhost:8080/api/usuarios"; // URL base de la API

    constructor(private http: HttpClient) {}

    // Obtener un usuario por cédula
    getUsuario(cedula: string): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/${cedula}`);
    }

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiUrl}`);
    }


}
