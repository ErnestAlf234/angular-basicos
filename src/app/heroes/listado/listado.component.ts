import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Iron Man','Moon Knight','Ghost Rider','Hyperion','Doctor Voodo','Mr Fantastic','Black Panther','Namor','Spider-man','Hulk'];
  heroeBorrado: string='';

  borrarHeroe(){
   this.heroeBorrado= this.heroes.pop() || '';
  
  }
  
}



