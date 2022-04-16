import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  bird='Peacock';
  image:string="assets/images/bird1.jpg";

  btnStatus:boolean=false;
  username="";
  str="";
  change(){
     this.str='This is Event Binding';
    }
}
