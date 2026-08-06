export class Book {
    private title: string;
    private author: string;
    private pages: number;
    private available: number;
    private borrowed: boolean;

    public constructor(title: string, author: string, pages: number, available: number) {
        this.title = title
        this.author = author
        this.pages = pages
        this.available = available
        this.borrowed = false
    }

    public borrow(): void {
        if(this.borrowed) {
            console.log('book currently on loan');
        } else {
            this.borrowed = true
            console.log('borrowed book');
        }
    } 

    public returnBook(): void {
        if(this.borrowed) {
            this.borrowed = false
            console.log('Book successfully returned');
        }
    }

    public showInformation(): void {
        console.log('Title:', this.title, '\nAuthor:', this.author, '\nPages:', this.pages, '\nAvailable:', this.available);
    }
}