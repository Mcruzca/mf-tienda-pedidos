import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  template: `
    <section>
      <small>REPOSITORIO 4 · código servido desde localhost:4203</small>
      <h2>Soy el microfrontend de pedidos</h2>
      <p>Pedido #001 — Cuaderno</p><button (click)="confirmado.set(!confirmado())">{{ confirmado() ? "Volver a pendiente" : "Confirmar pedido" }}</button><p aria-live="polite">Estado: {{ confirmado() ? "Confirmado" : "Pendiente" }}</p>
      <p>Este estado pertenece al microfrontend y se reinicia al salir de la pantalla.</p>
    </section>
  `,
  styles: [`section { border: 2px solid #7e22ce; background: #faf5ff; padding: 24px; border-radius: 12px; }
    button { background: #7e22ce; color: white; border: 0; border-radius: 6px; padding: 12px 18px; cursor: pointer; }`],
})
export class PedidosComponent {
  confirmado = signal(false);
}
