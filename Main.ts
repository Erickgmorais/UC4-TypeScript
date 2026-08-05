import { Person} from "./Person";
import { Car} from "./Car";
import { BankAccount } from "./BankAccount";
import { Product } from "./Product";


//Crie duas pessoas.
const Erick: Person = new Person('Erick', 20);
const Emanuel: Person = new Person('Emanuel', 17);

//Exiba suas informações.
Erick.introduce();
Emanuel.introduce();

//Altere a idade de uma delas utilizando o setter.
Emanuel.setAge(31);

//Exiba novamente.
Emanuel.introduce();


//Crie um carro.
const car: Car = new Car('Chevrolet', 'Cruze', 2022);

//Acelere algumas vezes.
car.accelerate(20);
car.accelerate(40);
car.accelerate(60);
car.accelerate(80);

//Freie.
car.break(25);

// Mostre os dados do carro.
car.showInformation();

//Crie uma conta.
const AccountErick: BankAccount = new BankAccount('Erick', 0);

//Faça depósitos.
AccountErick.deposit(150);
AccountErick.deposit(120);
AccountErick.deposit(200);

//Faça saques. 
AccountErick.withdraw(100);
AccountErick.withdraw(33);
AccountErick.withdraw(58);

//Tente sacar um valor maior que o saldo.
AccountErick.withdraw(500);
AccountErick.withdraw(250);



//Cadastre três produtos.
const mouse: Product = new Product('Mouse gamer Logitech G703', 129.90, 20);
const keybord: Product = new Product('Teclado gamer Logitech G PRO X', 999.90, 5);
const mousepad: Product = new Product('Mousepad gamer Logitech G840', 79.99, 32);


//Adicione estoque.
mouse.addStock(15);
mousepad.addStock(12);

//Remova estoque.
mouse.removeStock(2);
keybord.removeStock(6);

//Mostre todas as informações.
mouse.showProduct();
keybord.showProduct();
mousepad.showProduct();

//Mostrar para o Léo essa lógica. 
mouse.setPrice(149.90);
