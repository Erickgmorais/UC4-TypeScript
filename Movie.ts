export class Movie {
    private title: string
    private duration: number
    private rating: number

    constructor(title: string, duration: number, rating: number) {
        this.title = title
        this.duration = duration
        this.rating = rating
    }

    public changeRating(newRating: number): void {
        if(newRating < 0 || newRating > 10) {
            console.log('The rating must be between 0 and 10.');
        } else {
            this.rating = newRating;
            console.log('New rating:', this.rating);
        }
    } 
    
    public showMovie(): void {
        console.log('Title:', this.title, '\nDuration:', this.duration, '\nRating:', this.rating);
    }
}