class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        document.write("<table>");
        document.write("<tr><th>Name</th><th>Position</th><th>Salary</th></tr>");

        this.employees.forEach((employee) => {
            document.write(`<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`);
        });

        document.write('</table>');
    }
}

let bankEmployees = [
    new Employee("Denis", "Senior WEB", 5000),
    new Employee("Serhiy", "Midle WEB", 4000),
    new Employee("Sofia", "Junior WEB", 3000),
];

// let empTable = new EmpTable(bankEmployees);
// empTable.getHtml();

class StyledEmpTable extends EmpTable{
    getStyles(){
        return "<style>table { border-collapse: collapse; } th{color: rgb(185, 3, 3)} th, td { border: 1px solid #000; padding: 8px;} tr:nth-child(even) {background-color: #b1adad;}  tr:nth-child(odd) {background-color: #f1f1f1;} </style>";
    }
    getHtml() {
        document.write("<style>table { border-collapse: collapse; } th{color: rgb(185, 3, 3)} th, td { border: 1px solid #000; padding: 8px;} tr:nth-child(even) {background-color: #b1adad;}  tr:nth-child(odd) {background-color: #f1f1f1;} </style>")
        
        document.write("<table>");
        document.write("<tr><th>Name</th><th>Position</th><th>Salary</th></tr>");

        this.employees.forEach((employee) => {
            document.write(`<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`);
        });

        document.write('</table>');
    }
}
let result = new StyledEmpTable(bankEmployees)
result.getHtml()