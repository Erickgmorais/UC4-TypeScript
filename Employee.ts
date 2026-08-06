export class Employee {
    private name: string
    private salary: number

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
    }

    public increaseSalary(percent: number): void {
        this.salary = this.salary * (1 + percent / 100);
        console.log('New salary:', this.salary);

    }

    public showInformation(): void { 
        console.log('employee:', this.name, '\nSalary:', this.salary);
    }

}