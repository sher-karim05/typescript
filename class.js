var Employee = /** @class */ (function () {
    //Constructor
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var emp = new Employee(19, "Steve");
emp.getSalary();
