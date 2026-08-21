import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nombre = 'Yojana Aburto';

  profesion = 'Estudiante de Análisis de Sistemas';

  descripcion =
    'Soy estudiante de Análisis de Sistemas interesada en el desarrollo de aplicaciones web y en la creación de soluciones tecnológicas.';

  correo = 'yojana.aburto@vallegrande.edu.pe';

  ubicacion = 'Lima, Perú';

  habilidades = [
    'Angular',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SQL',
    'Node.js'
  ];

  proyectos = [

    {
      nombre: 'Sistema de Gestión de Inventario',

      descripcion:
        'Sistema web para gestionar productos, inventario y registro de operaciones de una carniceria.',

      enlace:
        'https://github.com/anafelix21/ASE251S2_T12_wp'
    },

    {
      nombre: 'Sistema de Veterinaria',

      descripcion:
        'CRUD para gestionar clientes, mascotas y servicios de una veterinaria.',

      enlace:
        'https://github.com/JimenaAburtoDev/veterinariaJimenaAburto.git'
    },

    {
      nombre: 'Sistema de Control de Tareas',

      descripcion:
        'Sistema de control de tareas para gestionar proyectos y tareas de manera eficiente.',

      enlace:
        'https://github.com/JimenaAburtoDev/SistemaDeControlDeTareas-YojanaJimenaAburtoRodriguez.git'
    }

  ];

}