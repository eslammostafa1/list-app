import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list app'
  todo = ''
  todos :string[] = []
  
  addTask( value : string){
    this.todos.push(value) 
    
  }
  
  deleteTask(index:number){
    this.todos.splice(index, 1);
  }
}
