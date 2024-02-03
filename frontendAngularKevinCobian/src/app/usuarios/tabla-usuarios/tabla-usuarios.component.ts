import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    
    const options = { headers: headers };
    
    this.http.get<any[]>('http://127.0.0.1:8000/users-with-domicilios', options)
      .subscribe(
        (data) => {
          this.usuarios = data;
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }
}