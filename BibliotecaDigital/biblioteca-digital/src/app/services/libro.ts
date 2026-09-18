import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private http = inject(HttpClient);

  private apiUrl = 'https://openlibrary.org/search.json';

  obtenerLibros(): Observable<Libro[]> {

    return this.http.get<any>(
      `${this.apiUrl}?q=don+quijote`
    ).pipe(

      map(respuesta => {

        return respuesta.docs.slice(0, 10).map((libro: any) => {

          return {
            titulo: libro.title || 'Sin título',

            autor: libro.author_name
              ? libro.author_name[0]
              : 'Autor desconocido',

            anio: libro.first_publish_year || 0,

            genero: libro.subject
              ? libro.subject[0]
              : 'Sin género'
          };

        });

      })

    );
  }

  registrarLibro(libro: Libro): Observable<Libro> {

    return new Observable(observer => {

      observer.next(libro);

      observer.complete();

    });

  }

}