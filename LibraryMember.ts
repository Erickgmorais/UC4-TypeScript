export class LibraryMember {
    private name: string;
    private borrowedBook: number;

    constructor(name: string) {
        this.name = name
        this.borrowedBook = 0
    }

    public borrowBook(): void {
        if(this.borrowedBook > 3) {
            console.log('Book limit reached');
        } else {
            this.borrowedBook++
            console.log('borrowed book');
        }
    }

    public returnBook(): void {
        if(this.borrowedBook <= 0) {
            console.log('no borrowed books');
        } else {
            this.borrowedBook -= 1
            console.log('book returned');
        }
    }

    public showInformation(): void {
        console.log('Book:', this.name, 'Borrowed:', this.borrowedBook);
    }
}