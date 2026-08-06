export class Student {
    private name: string;
    private grade1: number;
    private grade2: number;

    public constructor(name: string, grade1: number, grade2: number) {
        this.name = name
        this.grade1 = grade1
        this.grade2 = grade2
    }

    public calculateAvarage(): number {
        const calculation: number = (this.grade1 + this.grade2) / 2
        console.log('students total score:', calculation);
        return calculation;
    }

    public approved(): void {
        if(this.calculateAvarage() >= 7) {
            console.log('Approved');
        } else {
            console.log('Reproved');
        }
    }
}