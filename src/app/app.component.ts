import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private switch=true;
private names=["apple","Mango","Banana","Pine"];
onclick(){
  this.switch=!this.switch;

}
}
