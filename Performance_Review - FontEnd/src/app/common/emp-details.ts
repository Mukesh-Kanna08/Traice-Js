import { Employee } from './employee';

export class EmpDetails {

    id: string;
    name: string;
    password: string;
    username: string;
    quantity: number;
    email: string;
    status:number;

    constructor(employee: Employee) {
        this.id = employee.id;
        this.name = employee.name;
        this.password = employee.password;
        this.username = employee.username;
        this.quantity = 1;
        this.email = employee.email;
        this.status=employee.status;
    }
}