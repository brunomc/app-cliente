import { Component, OnInit, Inject, EventEmitter, ViewChild } from '@angular/core';
import { Cliente } from '../cliente';
import { Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ClientesService } from '../clientes.service';
import { Output } from '@angular/core/src/metadata/directives';
import { FormControl, Validators } from '@angular/forms';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-new-edit-cliente',
  templateUrl: './new-edit-cliente.component.html',
  styleUrls: ['./new-edit-cliente.component.css']
})
export class NewEditClienteComponent implements OnInit {
  cliente: Cliente;
  private lista:ListaClientesComponent;

  constructor(
    public dialogRef: MatDialogRef<NewEditClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
    ,private clientService:ClientesService
    ) { 
      if(!data){
        data = {
        
        }
      }
         this.cliente=data;
      
  }



  ngOnInit() {
  }
  nome = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.nome.hasError('required') ? 'O valor é obrigatório' :'';
  }
  
  salvar(){
    if(this.cliente.id){
      
      this.clientService.save(this.cliente).then(result =>{
        this.closeModal();
      });

    }else{
      this.clientService.saveNew(this.cliente).then(result =>{
        this.closeModal();
      });
    }
    
    
    
  }
 
  closeModal(){
    
    this.dialogRef.close();

  }
  
 
}
