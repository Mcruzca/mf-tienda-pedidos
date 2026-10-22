import { Component } from '@angular/core';
import { PedidosComponent } from './pedidos.component';

@Component({
  selector: 'app-root',
  imports: [PedidosComponent],
  template: '<h1>Pedidos funciona por separado</h1><app-pedidos />',
})
export class App {}

