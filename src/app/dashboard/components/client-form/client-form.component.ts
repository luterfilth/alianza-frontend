import { Client } from './../../../shared/models/client';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/shared/services/client-service.service';



@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  client: Client = new Client();

  constructor(private dialogRef: MatDialogRef<ClientFormComponent>,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
  }

  onSubmint(ngForm: NgForm) {
    console.log("Validación de formulario")
    if (ngForm.valid) {
      console.log("Envia la petición de guardado")
      this.clientService.createClient(ngForm.value).subscribe((client: Client) => {
        this.client = client;
        if (client.id != null) {
          console.log("Registro creado")
          this.dialogRef.close();
        } 
      }, (error) => {
        console.error(error);
        alert("Error al guardar el registro")
      })
    }
  }

}
