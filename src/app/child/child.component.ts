import { Component, OnInit, ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() parentFunction :EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
 sendData(){
    let obj={name:'Anziya',age:28}
    this.parentFunction.emit(obj);
  }
}