import { Injectable } from '@angular/core';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    { id: 1, nombre: 'Laptop Lenovo', categoria: 'Tecnología', precio: 2500, stock: 10 },
    { id: 2, nombre: 'Mouse Logitech', categoria: 'Accesorios', precio: 80, stock: 25 },
    { id: 3, nombre: 'Teclado Mecánico', categoria: 'Accesorios', precio: 150, stock: 15 },
    { id: 4, nombre: 'Monitor Samsung', categoria: 'Tecnología', precio: 900, stock: 8 },
    { id: 5, nombre: 'Impresora HP', categoria: 'Oficina', precio: 650, stock: 12 }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  actualizarProducto(producto: Producto): void {
    const indice = this.productos.findIndex(p => p.id === producto.id);
    if (indice !== -1) {
      this.productos[indice] = producto;
    }
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}