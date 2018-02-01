import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Cliente } from './cliente';
@Injectable()
export class ClientesService {

  constructor(private http:Http) { }

  findAll(){
   return this.http.get('http://test.portalpostal.com.br:8083/secure/customers/')
    .map(response =>response.json())
    .toPromise()
}
saveNew(cliente:Cliente){
  return this.http.post('http://test.portalpostal.com.br:8083/secure/customer/',cliente)
   .map(response =>response.json())
   .toPromise()
}
save(cliente:Cliente){
  return this.http.put('http://test.portalpostal.com.br:8083/secure/customer/',cliente)
   .map(response =>response.json())
   .toPromise()
}
deletar(cliente:Cliente){
  return this.http.delete(`http://test.portalpostal.com.br:8083/secure/customer/${cliente.id}`)
   .map(response =>response.json())
   .toPromise()
}



}
