import { AccountUser } from "./AccountUser";

const prompt = require('readline-sync');
const logger = console.log;
const clear = console.clear;

const arrayUsers: AccountUser[] = [];
let createUser: undefined | AccountUser
let id: number = 0;

let init: boolean = false;
logger('Welcome for account verification!');
while(!init) {
    
    logger('\n[1]- Create account' + '\n[2]- Log in' + '\n[0]- Exit');
    const option: number = Number(prompt.question('Choose option: '));

    if(option === 1) {

        clear();
        const userName: string = prompt.question('Create user name: ');
        const userEmail: string = prompt.question('Insert e-mail: ').toLowerCase();
        const userPassword: string = prompt.question('Create password: ');
        id++;
        
        const registeredEmail = (array: AccountUser[]) => {
            for(let i = 0; i < arrayUsers.length; i++) {
                if(array[i].email === userEmail) {
                    return false;
                }
            }
            const createUser: AccountUser = {
                id: id,
                user: userName,
                email: userEmail,
                password: userPassword,
    
            }
            arrayUsers.push(createUser);
            return true;
        }
        clear();
        logger(registeredEmail(arrayUsers) ? 'Create account successfully.' : 'E-mail already registered.');

    } else if(option === 2) {
        
        clear();
        const verifyEmail: string = prompt.question('Insert your e-mail: ');
        const verifyPassword: string = prompt.question('Insert your password: ');
        
        const verifyAccount = (array: AccountUser[]) => {
            for(let i = 0; i < arrayUsers.length; i++) {
                if(array[i].email === verifyEmail && array[i].password === verifyPassword) {
                    return true;
                }
            }
            return false;
        }

        clear();
        logger(verifyAccount(arrayUsers) ? 'Login successfully registered.' : 'E-mail ou Password incorrect.');

    } else if(option === 0) {
        clear();
        logger('Exiting...');
        init = true;
    } else {
        clear();
        logger('Invalid option. Select again.');
        continue;
    }
}