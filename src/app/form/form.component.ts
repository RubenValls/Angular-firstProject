import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
    name:string = 'John';
    surname:string = 'Doe';

    setParams(name:string, surname:string){
      this.name = name;
      this.surname = surname;
    }

    changeParams(){
      let nameForm;
      let surnnameForm;
      if(document.querySelector('#fname')){
        nameForm = (<HTMLInputElement>document.getElementById('fname')).value;
      }
      if(document.querySelector('#lname')){
        surnnameForm = (<HTMLInputElement>document.getElementById('lname')).value;
      }
      this.setParams(nameForm, surnnameForm);
    }
}
