"use strict";

/* let tableEl=document.getElementById('accTable');
Employee.prototype.renderTable=function(){
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    let td */

function Accounting(Department, NumberOfEmployees, SalaryAvg, SalaryTotal) {
    this.Department = Department;
    this.NumberOfEmployees = NumberOfEmployees;
    this.SalaryAvg = SalaryAvg;
    this.SalaryTotal = SalaryTotal;
}

let finance ;
let administration;
let development;
let marketing;
let allDep;

function getDataFromLocalStorge() {
    var MarketingTeam = { employeesTotal: 0, salaryTotal: 0, salaryAvg: 0 , department: "Marketing"};
    var AdministrationTeam = { employeesTotal: 0, salaryTotal: 0, salaryAvg: 0, department: "Administration" };
    var FinanceTeam = { employeesTotal: 0, salaryTotal: 0, salaryAvg: 0, department: "Finance" };
    var DevelopmentTeam = { employeesTotal: 0, salaryTotal: 0, salaryAvg: 0, department: "Development" };
    var allDepTeam = { employeesTotal: 0, salaryTotal: 0, salaryAvg: 0, department: "All" };

    let retrievedData = localStorage.getItem("employees") || [];

    let arrayData = JSON.parse(retrievedData)
    arrayData.map(emp => {
        if (emp.Department == "Marketing") {
            MarketingTeam.employeesTotal += 1
            MarketingTeam.salaryTotal += emp.Salary
            MarketingTeam.salaryAvg = MarketingTeam.salaryTotal / MarketingTeam.employeesTotal
        } else if (emp.Department == "Finance") {
            FinanceTeam.employeesTotal += 1
            FinanceTeam.salaryTotal += emp.Salary
            FinanceTeam.salaryAvg = FinanceTeam.salaryTotal / FinanceTeam.employeesTotal
        } else if (emp.Department == "Development") {
            DevelopmentTeam.employeesTotal += 1
            DevelopmentTeam.salaryTotal += emp.Salary
            DevelopmentTeam.salaryAvg = DevelopmentTeam.salaryTotal / DevelopmentTeam.employeesTotal
        }

        else if (emp.Department == "Administration") {
            AdministrationTeam.employeesTotal += 1
            AdministrationTeam.salaryTotal += emp.Salary
            AdministrationTeam.salaryAvg = AdministrationTeam.salaryTotal / AdministrationTeam.employeesTotal
        }
        allDepTeam.employeesTotal += 1
        allDepTeam.salaryTotal += emp.Salary
        allDepTeam.salaryAvg = allDepTeam.salaryTotal / allDepTeam.employeesTotal
    })
    console.log(AdministrationTeam, "AdministrationTeam")
console.log(DevelopmentTeam, "DevelopmentTeam")
console.log(MarketingTeam, "MarketingTeam")
console.log(FinanceTeam, "FinanceTeam")
 marketing = new Accounting(MarketingTeam.department,MarketingTeam.employeesTotal,parseInt( MarketingTeam.salaryAvg),parseInt( MarketingTeam.salaryTotal ));
 development = new Accounting(DevelopmentTeam.department,DevelopmentTeam.employeesTotal,parseInt( DevelopmentTeam.salaryAvg),parseInt( DevelopmentTeam.salaryTotal ));
 administration = new Accounting(AdministrationTeam.department,AdministrationTeam.employeesTotal,parseInt( AdministrationTeam.salaryAvg),parseInt( AdministrationTeam.salaryTotal) );
 finance = new Accounting(FinanceTeam.department,FinanceTeam.employeesTotal,parseInt( FinanceTeam.salaryAvg),parseInt( FinanceTeam.salaryTotal) );
 allDep = new Accounting(allDepTeam.department,allDepTeam.employeesTotal, parseInt( allDepTeam.salaryAvg), parseInt( allDepTeam.salaryTotal) );
}
getDataFromLocalStorge();

Accounting.prototype.render = function () {
    
    let mySection = document.getElementById("accTable");
    let tr = document.createElement("tr");
    mySection.appendChild(tr)
    let divEl = document.createElement("td");
    let divE2 = document.createElement("td");
    let divE3 = document.createElement("td");
    let divE4 = document.createElement("td");
    tr.appendChild(divEl);
    tr.appendChild(divE2);
    tr.appendChild(divE3);
    tr.appendChild(divE4);
    
    divEl.textContent = this.Department;
    divE2.textContent = this.NumberOfEmployees;
    divE3.textContent = this.SalaryAvg;
    divE4.textContent = this.SalaryTotal;
}


marketing.render();
administration.render();
finance.render();
development.render();
allDep.render()

