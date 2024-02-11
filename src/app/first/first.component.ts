import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  counter = 0

  countFunc(type: string){
    if(type == 'minus'){
      this.counter--
    }else if(type == 'plus')
    {
      this.counter++
    }else if(type == 'reset'){
      this.counter = 0
    }
  }

}
