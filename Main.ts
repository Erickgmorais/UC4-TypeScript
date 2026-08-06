// import { Person} from "./Person";

// //Crie duas pessoas.
// const Erick: Person = new Person('Erick', 20);
// const Emanuel: Person = new Person('Emanuel', 17);

// //Exiba suas informações.
// Erick.introduce();
// Emanuel.introduce();

// //Altere a idade de uma delas utilizando o setter.
// Emanuel.setAge(31);

// //Exiba novamente.
// Emanuel.introduce();

// import { Car} from "./Car";

// //Crie um carro.
// const car: Car = new Car('Chevrolet', 'Cruze', 2022);

// //Acelere algumas vezes.
// car.accelerate(20);
// car.accelerate(40);
// car.accelerate(60);
// car.accelerate(80);

// //Freie.
// car.break(25);

// // Mostre os dados do carro.
// car.showInformation();

//import { BankAccount } from "./BankAccount";

// //Crie uma conta.
// const AccountErick: BankAccount = new BankAccount('Erick', 0);

// //Faça depósitos.
// AccountErick.deposit(150);
// AccountErick.deposit(120);
// AccountErick.deposit(200);

// //Faça saques. 
// AccountErick.withdraw(100);
// AccountErick.withdraw(33);
// AccountErick.withdraw(58);

// //Tente sacar um valor maior que o saldo.
// AccountErick.withdraw(500);
// AccountErick.withdraw(250);

// import { Product } from "./Product";

// //Cadastre três produtos.
// const mouse: Product = new Product('Mouse gamer Logitech G703', 129.90, 20);
// const keybord: Product = new Product('Teclado gamer Logitech G PRO X', 999.90, 5);
// const mousepad: Product = new Product('Mousepad gamer Logitech G840', 79.99, 32);


// //Adicione estoque.
// mouse.addStock(15);
// mousepad.addStock(12);

// //Remova estoque.
// mouse.removeStock(2);
// keybord.removeStock(6);

// //Mostre todas as informações.
// mouse.showProduct();
// keybord.showProduct();
// mousepad.showProduct();

// //Mostrar para o Léo essa lógica. 
// mouse.setPrice(149.90);


// import { Book } from "./Book";


// //Crie dois livros.
// const vidasSecas: Book = new Book('Vidas Secas', 'Graciliano Ramos', 192, 5);
// const pequenoPrincipe: Book = new Book('O Pequeno Principe', 'Antoine de Saint-Exupéry', 100, 5);
// const senhorDosAneis: Book = new Book('Senhor dos Aneis', 'J. R. R. Tolkien', 200, 4);

// //Faça empréstimos.
// vidasSecas.borrow();
// pequenoPrincipe.borrow();
// vidasSecas.borrow();
// senhorDosAneis.borrow();

// //Faça devoluções.
// senhorDosAneis.returnBook();
// vidasSecas.returnBook();

// //Exiba as informações.
// senhorDosAneis.showInformation();
// vidasSecas.showInformation();


// import { Student } from "./Student";

// //Cadastre três alunos.
// const Erick: Student = new Student('Erick', 10, 5);
// const Emanuel: Student = new Student('Emanuel', 7, 8);
// const Antony: Student = new Student('Antony', 1, 9);

// //Mostre a média.
// Erick.calculateAvarage();
// Emanuel.calculateAvarage();
// Antony.calculateAvarage();

// //Informe se cada aluno foi aprovado.
// Erick.approved();
// Emanuel.approved();
// Antony.approved();


// import { Employee } from "./Employee";

// //Cadastre dois funcionários.
// const Ricardo: Employee = new Employee('Ricardo', 2000);
// const Julia: Employee = new Employee('Julia', 15000);  

// //Exiba os salários antes e depois.
// Ricardo.showInformation();
// Julia.showInformation();

// //Aplique aumentos.
// Ricardo.increaseSalary(20);
// Julia.increaseSalary(10);

// //Exiba os salários antes e depois.
// Ricardo.showInformation();
// Julia.showInformation();

// import { Movie } from "./Movie";

// //Cadastre três filmes.
// const toyStory: Movie = new Movie('Toy Story', 81, 5);
// const theFastAndFurious: Movie = new Movie('The Fast and Furious', 106, 5);
// const semTempoParaMorrer: Movie = new Movie(' 007 - Sem Tempo para Morrer', 163, 5);

// //Altere suas notas.
// toyStory.changeRating(10);
// semTempoParaMorrer.changeRating(11);

// //Exiba todas as informações.
// theFastAndFurious.showMovie();
// toyStory.showMovie();

import { Smartphone } from "./Smartphone";

//Crie um celular.
const phoneErick: Smartphone = new Smartphone('Apple', 'Iphone 11');


//Utilize por alguns minutos.
phoneErick.use(2);
phoneErick.use(7);
phoneErick.use(12);
phoneErick.use(1);

//Recarregue.
phoneErick.charge();

//Exiba os dados.
phoneErick.showInformation();

// import { LibraryMember } from "./LibraryMember";

// const Erick: LibraryMember = new LibraryMember('Erick');
// const Antony: LibraryMember = new LibraryMember('Antony');

// //Faça empréstimos.
// Erick.borrowBook();
// Antony.borrowBook();

// //Tente ultrapassar o limite.
// Erick.borrowBook();
// Erick.borrowBook();
// Erick.borrowBook();
// Erick.borrowBook();

// //Faça devoluções.
// Erick.returnBook();
// Antony.returnBook();
// Antony.returnBook();

// //Exiba as informações finais.
// Erick.showInformation();
// Antony.showInformation();