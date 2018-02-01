import { Component, ViewChild } from '@angular/core';
import { Cliente } from './cliente';
import { NewEditClienteComponent } from './new-edit-cliente/new-edit-cliente.component';
import { MatDialog } from '@angular/material';
import { ClientesService } from './clientes.service';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  constructor(public dialog: MatDialog, private clienteService:ClientesService){

  }
  @ViewChild(ListaClientesComponent) listaClientes:ListaClientesComponent;
  @ViewChild(ListaClientesComponent) child:ListaClientesComponent;
  openDialog(cliente:Cliente): void {
    let dialogRef = this.dialog.open(NewEditClienteComponent, {
      width: '80%',
      height: '90%',
      data: cliente
    });
   
    dialogRef.afterClosed().subscribe(result => {
       this.child.listAll();
    });
  }
  editarCliente(cliente:Cliente){

    this.openDialog(cliente);
    console.log(cliente);
     
  }
  novo(){
    this.openDialog({});
  }
  deletar(cliente:Cliente){
    this.clienteService.deletar(cliente).then(result =>{
      this.child.listAll();
    });
;
  }
}
