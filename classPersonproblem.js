// 3. Write a “person” class to hold all the details.


class Person{
    static Company="Microsoft";//static Member Variable
    constructor(name,age,address,mobile){
        //set the values for 3 properties
        this.name=name;
        this.age=age;
        this.address=address;
        this.mobile=mobile;
    }
//instance method
    getData(){
        let personData=`
        Name:${this.name}
        Age:${this.age}
        Address:${this.address}
        Mobile:${this.mobile}
        `
        console.log(personData);
    } 
//static method
    static getCompanyName(){
        console.log(Person.Company);//Microsoft
    }
}

class Employee extends Person{
    static companyNew="Google";
    constructor(name,age,address,mobile,designation,salary){
        super(name,age,address,mobile);
        this.designation=designation;
        this.salary=salary;
    }

//instance method
    getData(){
        let employeeData=`
        Name:${this.name}   
        Age:${this.age}
        Address:${this.address}
        Mobile:${this.mobile}
        Designation:${this.designation}
        Salary:${this.salary}
        `
        console.log(employeeData);
    }
//static method
    static getCompanyName(){
        console.log(Employee.companyNew);//Google
    }

}

//create an Object of Employee
let employee1=new Employee("Sai",23,"Bangalore","8095XXXXXX","Front End Developer","7 LPA");

employee1.getData();//access of instance method
Employee.getCompanyName();//access of static method

//create an Object of Person
let person1=new Person("Chakri",25,"Chennai","9552XXXXX");
person1.getData();//access of instance method
Person.getCompanyName();//access of static method

//Output
// Name:Sai
// Age:23
// Address:Bangalore
// Mobile:8095XXXXXX
// Designation:Front End Developer
// Salary:7 LPA

// Google

// Name:Chakri
// Age:25
// Address:Chennai
// Mobile:9552XXXXX

// Microsoft