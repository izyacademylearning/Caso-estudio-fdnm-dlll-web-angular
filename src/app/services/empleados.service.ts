export class empleados {
  public id: string
  public name: string
  public lastName: string
  public adress: string
  public phone: string
  public department: string
  public email: string
  constructor(id:string, nombre: string, lastName: string, adress: string, phone: string, department: string, email: string) {
      this.id=id
      this.name = nombre;
      this.lastName= lastName;
      this.adress= adress;
      this.phone= phone;
      this.department= department;
      this.email= email;
  }
}