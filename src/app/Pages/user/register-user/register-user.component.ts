import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  organizationData = false;

  constructor() { 
  }
  
  
  ngOnInit(): void {
    document.getElementById('dataOrganization')?.classList.add('notShow'); 
  }

  cambio(value: any){
    if (value == 'Organizacion') {
      document.getElementById('dataOrganization')?.classList.remove('notShow'); 
      this.organizationData = true;
    }else{
      document.getElementById('dataOrganization')?.classList.add('notShow'); 
      this.organizationData = false;
    }
  }

}
