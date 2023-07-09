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
  
    getHtmlString() {
      let html = "<table class='table table-striped'>";
      html += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";
  
      this.employees.forEach((employee) => {
        html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
      });
  
      html += '</table>';
  
      return html;
    }
  
    renderHtml() {
      const container = document.getElementById("table-container");
      container.innerHTML = this.getHtmlString();
    }
  }
  
  let bankEmployees = [
    new Employee("Denis", "Senior WEB", 5000),
    new Employee("Serhiy", "Midle WEB", 4000),
    new Employee("Sofia", "Junior WEB", 3000),
  ];
  
  class StyleEmpTable extends EmpTable {
    constructor(employees, styles) {
      super(employees);
      this.styles = styles;
    }
  
    addStyle(style) {
      this.styles.push(style);
    }
  
    getStyles() {
      let str = '';
      this.styles.forEach((styleElem) => {
        str += `${styleElem.key}: ${styleElem.value};`;
      });
      return str;
    }
  
    getHtmlString() {
      let html = super.getHtmlString();
      html = html.replace("<table", `<table style="${this.getStyles()}"`);
      return html;
    }
    getHtmlString() {
        let html = super.getHtmlString();
        html = html.replace("<table", `<table style="${this.getStyles()}"`);
        return html;
      }
  
    renderHtml() {
      const container = document.getElementById("table-container");
      container.innerHTML = this.getHtmlString();
    }
  }
  
  let styledEmpTable = new StyleEmpTable(bankEmployees, [
    {key: "font-size", value:"25px"},
    { key: "border-collapse", value: "collapse" },

  ]);
  styledEmpTable.renderHtml();
