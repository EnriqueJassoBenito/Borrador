import { Component, OnInit } from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {PersonalService} from "../../service/personal.service";

@Component({
  selector: 'add-personal',
  templateUrl: './add-personal.component.ts'
})

export class AddPersonalComponent implements OnInit {
  person: Personal ={
    id: 0,
    name: '',
    surname: '',
    lastname: '',
    birthday: '',
    salary: 0,
    position: {}
  };
  positions: any[]=[];
constructor(public modal: DialogRef<AddPersonalComponent>,
private personalService: PersonalService) {

}

ngOnInit(): void {
    this.getPosition();
}

getPosition(){
    this.personalService.findAllPosition()
      .subscribe((response)=>{
        this.personalService.setIsLoading=false;
        this.positions = response;
      })
}

savePerson(){
    this.personalService.save(this.person)
      .subscribe((response) => {
        this.personalService.setIsLoading = false;
        this.person = {id: 0...};
        this.modal.close();
        this.personalService.findAll();
        //Cerrar el modal
        //

      });
}

}
