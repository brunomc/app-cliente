export interface Cliente {
    id?:number;
    name?:string;
    federalId?:string;
    registration?:string;
    phone?:string;
    phone2?:string;
    email?:string;
    emailCollection?:string;
    residentialPhone?:string;
    commercialPhone?:string;
    emergencyContact?:string;
    emergencyPhone?:string;
    birthday?:Date;
    gender?:'M'|'F';
    federalIdType?: 'Physical'|'Juridical';
    commercialAddress?:string;
    residentialAddress?:string;
    active?:boolean;


}
