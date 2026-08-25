import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { ListaComponent } from './components/lista/lista';
import { FormularioComponent } from './components/formulario/formulario';
import { Producto } from './producto';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ListaComponent, FormularioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  mostrarFormulario = false;
  productoEditar: Producto | null = null;

  constructor(private productoService: ProductoService) {}

  abrirFormulario() {
    this.productoEditar = null;
    this.mostrarFormulario = true;
  }

  editarProducto(producto: Producto) {
    this.productoEditar = { ...producto };
    this.mostrarFormulario = true;
  }

  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.productoEditar = null;
  }

  guardarProducto(producto: Producto) {
    if (producto.id === 0) {
      const productos = this.productoService.obtenerProductos();
      const nuevoId = Math.max(...productos.map(p => p.id)) + 1;

      this.productoService.agregarProducto({
        ...producto,
        id: nuevoId
      });

    } else {
      this.productoService.actualizarProducto(producto);
    }

    this.cerrarFormulario();
  }
}