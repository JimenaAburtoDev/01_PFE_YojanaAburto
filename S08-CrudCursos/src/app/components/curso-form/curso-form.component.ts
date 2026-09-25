import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.css',
})
export class CursoFormComponent implements OnChanges {
  @Input() curso: Curso | null = null;
  @Output() guardar = new EventEmitter<Curso>();
  @Output() cancelar = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      instructor: ['', Validators.required],
      categoria: ['', Validators.required],
      duracionHoras: [null, [Validators.required, Validators.min(1)]],
      precio: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['curso']) {
      if (this.curso) {
        this.form.patchValue(this.curso);
      } else {
        this.form.reset();
      }
    }
  }

  get editando(): boolean {
    return !!this.curso?._id;
  }

  campoInvalido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const cursoAGuardar: Curso = {
      ...this.form.value,
      _id: this.curso?._id,
    };
    this.guardar.emit(cursoAGuardar);
    this.form.reset();
  }

  onCancelar(): void {
    this.form.reset();
    this.cancelar.emit();
  }
}
