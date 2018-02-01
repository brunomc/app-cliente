import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Cliente } from '../cliente';
import { MatTableDataSource, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  cliente: Cliente;

  dataSource: MatTableDataSource<Element>;

  @Input() clientes: Cliente[];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private clienteService: ClientesService) {

    this.listAll();
  }
  displayedColumns = ['name', 'federalId','email', 'phone', 'city', 'status', 'edit', 'delete'];

  ngAfterViewInit() {
   
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  @Output() onEdit: EventEmitter<Cliente> = new EventEmitter();
  @Output() onDelete: EventEmitter<Cliente> = new EventEmitter();


  editarCliente(cliente: Cliente) {
    this.onEdit.emit(cliente);
    console.log(cliente);
  }
  deletar(cliente:Cliente){
    this.onDelete.emit(cliente);
  }
  listAll(){
    this.clienteService.findAll().then(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource(response.data.customerList);
      this.dataSource.sort = this.sort;

    }
    ).catch(

      )

  }
  
  setDataSource(){
    this.dataSource._renderChangesSubscription;
    }
  }



}

