import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
 nombre:string= 'iro man';
 edad: number=3;
 
get capitalizar(){
    return this.nombre.toUpperCase();
}

 obtenerNombre():string{
    return`${this.nombre}-${this.edad}`;
 }
 cambiarnombre():void{
    this.nombre ='spider man';
  

 }
 cambiaredad():void{
   
    this.edad=5;

 }
}