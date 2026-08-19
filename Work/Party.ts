import { Character } from "./Character"

export class Party {
    private name: string;
    protected members: Character[];

    constructor(name: string, members: Character[]) {
        this.name = name
        this.members = members
    }

    public getName(): string {
        return this.name
    }

    public setName(newName: string): void {
        this.name = newName
    } 

    public addMember(character: Character): string {
        this.members.push(character)
        return 'Member added' + '\nCurrent members: ' + this.members
    }

    public removeMember(character: Character): boolean {
        for(let i = 0; i < this.members.length; i++) {
            if(this.members[i] === character) {
                this.members.splice(i, 1)
                return true
            }  
        } 
        return false
    }

    public showMembers(): void {
        console.log('\n==============================' + '\n' + this.name + '\n==============================' + '\n')
        for(let i = 0; i < this.members.length; i++) {
            console.log(i + 1 + '. ' + this.members[i].getName() + ' - ' + this.members[i].getLevel())
        }
        
    }
}