"use strict";
let employeesSectionEl = document.getElementById('employeesSection');
let myForm = document.getElementById('employeesForm');
let employees = [];
function Employee( EmployeeID,FullName, Department, Level, ImageURL,) {
    console.log(`name:${FullName}`);
    this.EmployeeID = 0;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    //this.Salary = Salary;
    employees.push(this);

}

myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {

    event.preventDefault();
    console.log(event.target);
    let fullName = event.target.FullName.value;
    let department = event.target.Department.value;
    let level = event.target.Level.value;
    let image = event.target.Image.value;


    
//
    let newemployee = new Employee(this.EmployeeID, fullName, department, level,image);
    newemployee.calculateID(1000,9999);
    console.log(newemployee);
newemployee.render();

}


let Ghazi = new Employee("1000","Ghazi Samer", "Administration", "Senior", "assest/img1.jpg");
let Lana = new Employee("1001","Lana Ali", "Finance", "Senior", "assest/img2f.jpg");
let Tamara = new Employee("1002","Tamara Ayoub", "Marketing", "Senior", "assest/img4f.jpg");
let Safi = new Employee("1003","Safi Walid", "Administration", "Midsenior", "assest/img5.jpg");
let Omar = new Employee("1004","Omar Zaid", "Development", "Senior", "assest/img6.jpg");
let Rana = new Employee("1005","Rana Saleh", "Development", "Junior", "assest/img3f.jpg");
let Hadi = new Employee("1006","Hadi Ahmad", "Finance", "Midsenior", "assest/img7.jpg");

//console.log(Ghazi);
/* function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} */
/* Employee.prototype.netSalary = function (min, max) {

    if (this.Level == "Senior") {
        this.Salary = getRndInteger(1500, 2000)

    } else if (this.Level == "Midsenior") {
        this.Salary = getRndInteger(1000, 1500)


    } else if (this.Level == "Junior") {
        this.Salary = getRndInteger(500, 1000)
    }
}

Ghazi.netSalary()
Lana.netSalary()
Tamara.netSalary()
Safi.netSalary()
Omar.netSalary()
Rana.netSalary()
Hadi.netSalary() */

/* Employee.prototype.netSalarytax = function (min, max) {
    if (this.Level == "Senior") {
        var a = getRndInteger(1500, 2000)
        this.Salary = a - (0.075 * a);
    } else if (this.Level == "Midsenior") {
        var a = getRndInteger(1000, 1500)
        this.Salary = a - (0.075 * a);

    } else if (this.Level == "Junior") {
        var a = getRndInteger(1000, 1500)
        this.Salary = a - (0.075 * a);
    }
}
Ghazi.netSalarytax()
Lana.netSalarytax()
Tamara.netSalarytax()
Safi.netSalarytax()
Omar.netSalarytax()
Rana.netSalarytax()
Hadi.netSalarytax() */

Employee.prototype.calculateID = function (min, max) {
    this.EmployeeID = Math.floor(Math.random() * (max - min)) + min;
}

Employee.prototype.render = function () {
    //console.log(`The Employee Name: ${this.FullName} and his salary is ${this.Salary}`)
    // document.write(`<h4> The Employee Name: ${this.FullName} and his salary is ${this.Salary} and ${this.EmployeeID}</h4>`)
    
   
    let card = document.createElement('div1');
    employeesSectionEl.appendChild(card);
let card2 =document.createElement("div2");
card.appendChild(card2);
    let imgEl = document.createElement('img');
    imgEl.src = this.ImageURL;
   
    card2.appendChild(imgEl);

    let employeesNameEl = document.createElement('p');
    employeesNameEl.textContent = `Name:${this.FullName}-ID: ${this.EmployeeID}`;
    card.appendChild(employeesNameEl);

    /* const employeeIDEl = document.createElement('p');
    employeeIDEl.textContent = `ID:${this.EmployeeID}`;
    employeesSectionEl.appendChild(employeeIDEl);

    const departmentEl = document.createElement('p');
    departmentEl.textContent = `Department:${this.Department}`;
    employeesSectionEl.appendChild(departmentEl);

    const levelEl = document.createElement('p');
    levelEl.textContent = `Level:${this.Level}`;
    employeesSectionEl.appendChild(levelEl); */


    /*  const salaryEl=document.createElement('p');
     salaryEl.textContent=this.Salary;
     employeesSectionEl.appendChild(salaryEl); */
     let par = document.createElement('p');

     par.textContent = ` Department: ${this.Department} \n - Level: ${this.Level}`;
     card.appendChild(par);

}
console.log(this.Department);

//headerRender();

/* Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render(); */
for (let i = 0; i < employees.length; i++) {
    employees[i].calculateID(1000, 9999);
    //employees[i].netSalarytax();
    employees[i].render();
}