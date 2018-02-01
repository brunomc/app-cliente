import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ClientesService } from './clientes.service';
import {
  MatSortModule,
  MatDialogModule,
  MatChipsModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatButtonModule
}


  from '@angular/material';

import { NewEditClienteComponent } from './new-edit-cliente/new-edit-cliente.component';
import { DelClienteComponent } from './del-cliente/del-cliente.component'
@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    NewEditClienteComponent,
    DelClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    NoopAnimationsModule,
    HttpModule,
    MatIconModule,
    MatChipsModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,

  ],
  providers: [ClientesService,MatDialogModule],
  bootstrap: [AppComponent],
  entryComponents: [NewEditClienteComponent]
})
export class AppModule { }
