import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'AngularDemo';
  name :any='anu';
  disabled=true;
  show='green';
  array=['anu','ram','tony']
  getVal(val){
console.warn(val);

  }
  enableBox(){
    this.disabled=false
    
  }
  list :any={
name :'litta',
age:23
  }
  parentFunction(data){
    console.warn(data);
    
  }
}