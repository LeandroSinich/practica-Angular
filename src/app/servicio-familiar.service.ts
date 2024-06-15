import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  constructor() { }

  saludar(nombre: string){
    console.log(`hola, mi nombre es ${nombre}`)
  }
  mascotear(nombre: string){
    console.log(`Tu mascota se llama ${nombre}`)
  }
}
