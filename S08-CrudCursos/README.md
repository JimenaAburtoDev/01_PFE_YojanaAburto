# Gestión de Cursos — CRUD en Angular

Control S08 (EE2): aplicación Angular que administra la entidad maestra **Cursos**
consumiendo una API REST pública mediante `HttpClient` (GET, POST, PUT, DELETE).

## 1. Obtener tu API REST pública (crudcrud.com)

1. Entra a https://crudcrud.com/
2. Copia el endpoint único que te genera (algo como
   `https://crudcrud.com/api/3f9a1c2b8e4d4a...`).
3. Abre `src/app/services/curso.service.ts` y reemplaza `TU_ENDPOINT_AQUI`
   dentro de `baseUrl` por tu endpoint.

> ⚠️ El endpoint gratuito de crudcrud expira a las 24 horas o al llegar a
> 100 registros en el recurso `cursos`. Si deja de responder, genera uno
> nuevo y vuelve a pegarlo en el servicio.

## 2. Instalar dependencias

```bash
npm install
```

## 3. Ejecutar en desarrollo

```bash
npm start
```

Abre `http://localhost:4200`.

## 4. Estructura del proyecto

```
src/app/
├── models/curso.model.ts              # Interfaz Curso
├── services/curso.service.ts          # Las 4 operaciones CRUD (HttpClient)
├── components/
│   ├── curso-form/                    # Formulario reactivo (crear/editar)
│   └── curso-list/                    # Tabla de cursos con acciones
└── app.component.ts                   # Orquesta estado, carga y errores
```

## 5. Operaciones CRUD implementadas

| Operación  | Método HTTP | Dónde |
|---|---|---|
| Consultar  | GET    | `CursoService.listar()`, se ejecuta en `ngOnInit` |
| Registrar  | POST   | `CursoService.crear()`, desde el formulario |
| Actualizar | PUT    | `CursoService.actualizar()`, botón "Editar" + guardar |
| Eliminar   | DELETE | `CursoService.eliminar()`, botón "Eliminar" con confirmación |

## 6. Campos de la entidad Curso

`nombre`, `descripcion`, `instructor`, `categoria`, `duracionHoras`, `precio`
(más el `_id` que crudcrud asigna automáticamente).
