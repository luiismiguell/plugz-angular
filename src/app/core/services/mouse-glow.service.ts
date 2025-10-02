import { Injectable } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

interface Position {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class MouseGlowService {
  position$: Observable<Position>;

  constructor() {
    // Captura o evento de movimento do mouse em todo o navegador
    this.position$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
      map(event => ({
        x: event.clientX,
        y: event.clientY
      }))
    );
  }
}
