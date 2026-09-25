export interface Curso {
  // crudcrud asigna este campo automáticamente al crear el registro
  _id?: string;
  nombre: string;
  descripcion: string;
  instructor: string;
  categoria: string;
  duracionHoras: number;
  precio: number;
}
