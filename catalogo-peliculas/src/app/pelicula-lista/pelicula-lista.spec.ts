// @ts-ignore: Angular testing se resuelve mediante la configuración de pruebas.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculaLista } from './pelicula-lista';

declare function describe(description: string, specDefinitions: () => void): void;
declare function beforeEach(action: () => void | Promise<void>): void;
declare function it(description: string, testFunction: () => void): void;
declare function expect(actual: unknown): {
  toBeTruthy(): void;
  toBeGreaterThan(expected: number): void;
};

describe('PeliculaLista', () => {
  let component: PeliculaLista;
  let fixture: ComponentFixture<PeliculaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaLista]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculaLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar películas desde el servicio al inicializar', () => {
    expect(component.peliculas.length).toBeGreaterThan(0);
  });
});