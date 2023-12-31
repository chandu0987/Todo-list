import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  // loginForm : FormGroup;
  constructor(private testService: TestService, public fb: FormBuilder){

  }
  
  // loginFormInitialisation(){
  //   this.loginForm = this.fb.group(
  //     {
  //       fullName :[''],
  //       Mail:['']
  //     }
  //   )
  // }

  ngOnInit(){
    this.getApiData();
    // this.loginFormInitialisation()
  }
  getApiData(){
    this.testService.getData().subscribe((res)=>{
console.log(res)
    })
  }

}
