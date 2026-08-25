import { Resident } from "./Resident";

const prompt = require('readline-sync');
const logger = console.log;
const clear = console.clear;
const ask = prompt.question;

const array: Resident[] = [];

while(true) {
    logger('\n======================' + '\nVAULT 101' + '\n======================\n' );
    logger('[1] Cadastrar morador' + '\n[2] Listar moradores' + '\n[3] Cadastrar salas' + '\n[4] Listar salas' + '\n[5] Alocar morador' + '\n[6] Remover morador da sala' + '\n[7] Ver moradores de uma sala', '\n[0] Sair');

    const option: string = ask('Choose: ');

    switch(option) {
        
        case '1': 
            clear();
            const insertName: string = ask('Insert the name of the resident: '); 
            const insertAge: number = ask('\nInsert your age: ');
            const objectResident: Resident = new Resident(insertName, insertAge);
            array.push(objectResident);
            break;
        
        case '2': 
            clear();
            logger('List of resident');
            console.log(array);

    }
}


