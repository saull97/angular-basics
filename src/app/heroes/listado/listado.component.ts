import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroeborrado :string=' ';
  heroes: string[]=['spiderman','iroman','hulk'];
   borraritem():void {
    console.log('eliminando');
      this.heroeborrado= this.heroes.shift() || '';
    
  }
}

