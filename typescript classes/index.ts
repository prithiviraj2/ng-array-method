

//sample class

class User {
    id:number

    constructor(data:number){
this.id = data
    }
}

 const userobject = new User(10);

 console.log(userobject.id);

 //interface

 interface PersonInterface {
    id:number
    name:string
 }

 interface Address{
    city:string
 }

 //class implements interface

 class Person implements PersonInterface,Address {

    id:number
    name:string
    city:string
    constructor(num:number,name:string,city:string) {
        this.id = num
        this.name = name
        this.city = city
    }

    getname =() => {
        return this.name
    }
 }

 let person = new Person (10,'Raj','thanjai')
 console.log(person.name);
 console.log(person.getname);
 
 
 //extends

 class Student extends Person{
    studentid:number = 24

    print(){
        console.log(`name is ${this.name} and id is ${this.studentid}`);
        
    }
 }

 let student = new Student(24,'Sri','thirchy')

 student.print()