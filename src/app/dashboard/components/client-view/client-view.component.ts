import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/shared/services/client-service.service';
import { ClientFormComponent } from '../client-form/client-form.component';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  client: Client = new Client();
  clients: Array<Client> = new Array<Client>();
  displayedColumns: string[] = ['shared', 'bussines', 'email', 'phone', 'created', 'actions'];
  dataSource = new MatTableDataSource<Client>();

  formSearch: boolean = false;

  constructor(private dialog: MatDialog, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    console.log("Consulta los datos de los clientes")
    this.clientService.getClients().subscribe((clients: Array<Client>) => {
      console.log("Actualiza la lista de datos")
      this.clients = clients;
      this.dataSource.data = this.clients;
    })
  }

  applyFilter(event: any) {
    console.log("Filtro inteligente")
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    console.log("Abre el formulario para crear registro de cliente")
    const dialogRef = this.dialog.open(ClientFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getClients();
    });
  }
}
