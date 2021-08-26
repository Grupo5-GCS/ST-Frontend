import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationBean } from 'src/app/Beans/OrganizationBean';
import { SharedService } from 'src/app/services/shared.service';

import swal from 'sweetalert2'

@Component({
  selector: 'app-form-organization',
  templateUrl: './form-organization.component.html',
  styleUrls: ['./form-organization.component.scss']
})
export class FormOrganizationComponent implements OnInit {

  @Input() organizationBean: OrganizationBean;
  formRegisterOrganization: FormGroup;
  organization: OrganizationBean;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.organization = new OrganizationBean();
    this.formRegisterOrganization = this.formBuilder.group({
      nameOrganization: new FormControl('', Validators.compose([Validators.required])),
      ruc: new FormControl('', Validators.compose([Validators.required])),
      direction: new FormControl('', Validators.compose([Validators.required])),
      managerName: new FormControl('', Validators.compose([Validators.required])),
      managerPhone: new FormControl('', Validators.compose([Validators.required])),
      managerEmail: new FormControl('', Validators.compose([Validators.required])),
      phone: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  public save(formRegisterOrganization: any){
    if(formRegisterOrganization.valid){
      this.organization.name = formRegisterOrganization.value.name;
      this.organization.ruc = formRegisterOrganization.value.ruc;
      this.organization.direction = formRegisterOrganization.value.direction;
      this.organization.phone = formRegisterOrganization.value.phone;
      this.organization.responsablePaymentName = formRegisterOrganization.value.managerName;
      this.organization.responsablePaymentPhone = formRegisterOrganization.value.managerPhone;
      this.organization.responsablePaymentEmail = formRegisterOrganization.value.managerEmail;
    
      this.sharedService.sendOrRecieveData('/oc/so', this.organization, true)
            .subscribe( resp => {
              // Se registro la nueva org
              // Mensaje de confirmacion
              setTimeout(() => {
                    swal.fire(
                      'Se ha registrado correctamente!',
                      'Con éxito!',
                      'success'
                      )
                  
              }, 1000);
            })
    }
  }

}
