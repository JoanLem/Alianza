import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clientForm!: FormGroup;
  clients: any = [];
  titleTable: string = 'Clients';
  closeResult: string = '';
  mensajeBusqueda: string = '';

  constructor(
    private fb: FormBuilder,
    public clientsService: ClientsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    (this.clientForm = this.fb.group({
      sharedKey: [''],
      name: ['', [Validators.required, Validators.pattern(/^\S[a-z ]{5,16}$/)]],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      dataAdded: [''],
    })),
      this.getAllClients();
  }

  getAllClients() {
    try {
      this.clientsService.getAllClients().subscribe(
        (resp) => {
          this.clients = resp.data;
          if (resp.data.length >= 0) {
            this.mensajeBusqueda =
              'Registra un cliente pulsando en el boton "New"';
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } catch (error) {
      console.error('error try' + error);
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  save(): void {
    this.clientsService.saveClient(this.clientForm.value).subscribe(
      (resp) => {
        this.clientForm.reset();
        this.clients.push(resp.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  findBySharedKey(sharedKey: string) {
    this.clientsService.findBySharedKey(sharedKey).subscribe(
      (resp) => {
        this.clients = resp.data;
        if (resp.data.length == 0) {
          this.mensajeBusqueda = resp.message;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
