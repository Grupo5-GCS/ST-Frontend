import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationBean } from 'src/app/Beans/OrganizationBean';
import { FormOrganizationComponent } from '../form-organization/form-organization.component';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  organizationBean: OrganizationBean;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.organizationBean = new OrganizationBean();
  }

  public openModal() {
    const modalRef = this.modalService.open(FormOrganizationComponent);
    //modalRef.componentInstance.organizationBean = this.organizationBean;
  }

}
