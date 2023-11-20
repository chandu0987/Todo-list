import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoItems: string = ''
  todoItemsCollection: any[] =[];
  firstName = this.route.snapshot.paramMap.get('firstName')
  lastName =  this.route.snapshot.paramMap.get('lastName')
  constructor( public  route: ActivatedRoute){
   
  }

  ngOnInit(): void {
   
  }
  onTodoitemsSubmit(){
  this.todoItemsCollection.push(this.todoItems)
  }

  onTodoitemsClear(){
    this.todoItems = ''
  }

}
