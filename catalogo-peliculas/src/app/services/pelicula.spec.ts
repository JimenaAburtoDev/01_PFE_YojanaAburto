import { TestBed } from '@angular/core/testing';
import { PeliculaService } from './pelicula';

describe('PeliculaService', () => {
  let service: PeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaService);
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('obtenerPeliculas() debería devolver un arreglo con datos', () => {
    const peliculas = service.obtenerPeliculas();
    expect(Array.isArray(peliculas)).toBe(true);
    expect(peliculas.length).toBeGreaterThan(0);
  });

  it('cada película debería tener título, género, año y calificación', () => {
    const [primera] = service.obtenerPeliculas();
    expect(primera.titulo).toBeDefined();
    expect(primera.genero).toBeDefined();
    expect(primera.anio).toBeDefined();
    expect(primera.calificacion).toBeDefined();
  });
});