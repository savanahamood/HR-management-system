"use strict";

function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
}

let Ghazi = new Employee(1000,"Ghazi Samer", "Administration", "Senior", "./img/img1.jpg");
let Lana = new Employee(1001,"Lana Ali", "Finance", "Senior", "./img/img2f.jpg");
let Tamara = new Employee(1002,"Tamara Ayoub", "Marketing", "Senior", "./img/img3f.jpg");
let Safi = new Employee(1003,"Safi Walid", "Administration", "Midsenior", "./img/img5.jpg");
let Omar = new Employee(1004,"Omar Zaid", "Development", "Senior", "./img/img6.jpg");
let Rana = new Employee(1005,"Rana Saleh", "Development", "Junior", "./img/img4f.jpg");
let Hadi = new Employee(1006,"Hadi Ahmad", "Finance", "Midsenior", "./img/img7.jpg");

//console.log(Ghazi);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Employee.prototype.netSalary = function (min, max) {

    if (this.Level == "Senior") {
        this.Salary =  getRndInteger(1500, 2000)
       
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
       var a=getRndInteger(1500, 2000)
        this.Salary = a - (0.075 * a);
    } else if (this.Level == "Midsenior") {
        var a=getRndInteger(1000, 1500)
        this.Salary = a - (0.075 * a);

    } else if (this.Level == "Junior") {
        var a=getRndInteger(1000, 1500)
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

Employee.prototype.render = function () {
    console.log(`The Employee Name: ${this.FullName} and his salary is ${this.Salary}`)
document.write(`<h4> The Employee Name: ${this.FullName} and his salary is ${this.Salary}</h4>`)
}
Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();