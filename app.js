"use strict";
let employeesSectionEl = document.getElementById('employeesSection');
let myForm = document.getElementById('employeesForm');
let employees = [];
function Employee(FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = 0;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
    employees.push(this);

}

myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let fullName = event.target.FullName.value;
    let administration = event.target.Administration.checked;
   /*  if (administration) {
        this.Department = "administration";
    } */
    let marketing = event.target.Marketing.checked;
    /* if (marketing) {
        this.Department = "marketing";
    } */
    let development = event.target.Development.checked;
    /* if (development) {
        this.Department = "development";
    } */
    let finance = event.target.Finance.checked;
   /*  if (finance) {
        this.Department = "finance";
    } */
    let junior = event.target.Junior.checked;
    /* if (junior) {
        this.Level = "junior";
    } */
    let midSenior = event.target.MidSenior.checked;
   /*  if (midSenior) {
        this.Level = "midSenior";
    } */
    let senior = event.target.Senior.checked;
    /* if (senior) {
        this.Level = "senior";
    } */
    let image = event.target.image.value;

    // let Lana = new Employee("Lana Ali", "Finance", "Senior", "./img/img2f.jpg");

    let newemployee = new Employee(fullName, administration, marketing, development, finance, junior, midSenior, senior, image)
newemployee.calculateID(1000,9999);
newemployee.render();


}
/* function headerRender(){
    const h1El=document.createElement("h1");
let header = document.getElementById("myHeader");
h1El.textContent='Employee Data';
header.appendChild(h1El);
}
 */
/* let Ghazi = new Employee("Ghazi Samer", "Administration", "Senior", "./img/img1.jpg");
let Lana = new Employee("Lana Ali", "Finance", "Senior", "./img/img2f.jpg");
let Tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "./img/img3f.jpg");
let Safi = new Employee("Safi Walid", "Administration", "Midsenior", "./img/img5.jpg");
let Omar = new Employee("Omar Zaid", "Development", "Senior", "./img/img6.jpg");
let Rana = new Employee("Rana Saleh", "Development", "Junior", "./img/img4f.jpg");
let Hadi = new Employee("Hadi Ahmad", "Finance", "Midsenior", "./img/img7.jpg");
 */
//console.log(Ghazi);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Employee.prototype.netSalary = function (min, max) {

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
Hadi.netSalary()

Employee.prototype.netSalarytax = function (min, max) {
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
Hadi.netSalarytax()

Employee.prototype.calculateID = function (min, max) {
    this.EmployeeID = Math.floor(Math.random() * (max - min)) + min;
}
function headerRender() {

}
Employee.prototype.render = function () {
    //console.log(`The Employee Name: ${this.FullName} and his salary is ${this.Salary}`)
    // document.write(`<h4> The Employee Name: ${this.FullName} and his salary is ${this.Salary} and ${this.EmployeeID}</h4>`)

    const imgEl = document.createElement('img');
    imgEl.src = this.ImageURL;
    employeesSectionEl.appendChild(imgEl);

    const employeesNameEl = document.createElement('h3');
    employeesNameEl.textContent = `Name:${this.FullName}`;
    employeesSectionEl.appendChild(employeesNameEl);

    const employeeIDEl = document.createElement('p');
    employeeIDEl.textContent = `ID:${this.EmployeeID}`;
    employeesSectionEl.appendChild(employeeIDEl);

    const departmentEl = document.createElement('p');
    departmentEl.textContent = `Department:${this.Department}`;
    employeesSectionEl.appendChild(departmentEl);

    const levelEl = document.createElement('p');
    levelEl.textContent = `Level:${this.Level}`;
    employeesSectionEl.appendChild(levelEl);

    /*  const salaryEl=document.createElement('p');
     salaryEl.textContent=this.Salary;
     employeesSectionEl.appendChild(salaryEl); */


}

headerRender();

/* Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render(); */
for (let i = 0; i < employees.length; i++) {
    employees[i].calculateID(1000, 9999);
    employees[i].netSalarytax();
    employees[i].render();
}