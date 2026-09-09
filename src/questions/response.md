Para responder no seu projeto

 Por que não podemos fazer new Repairable()?
--Não podemos instânciar uma interface. Elas não possuem "contructor".

 Por que uma interface não deve ser utilizada para criar objetos?
-- Não conseguimos instânciar interfaces, pois não temos o "constructor". Interfaces são contratos.

 Qual é a diferença entre interface CombatCapable e class Fighter? Explique com suas próprias palavras.
--Interface serve para definir atributos e métodos sem executa-los e a classe para instanciarmos objetos. 

----------------------------------------------------------------------------------------------------------------
 interface SpacecraftInfo {
     id: number;
     name: string;
 }

 class Fighter implements SpacecraftInfo {
     private id: number;
     private name: string;
 }
 
 O TypeScript apresentará um erro. Explique por que isso acontece — e depois altere a solução para que a classe continue utilizando encapsulamento. Uma possibilidade é utilizar métodos:
-- Aponta erro pois os atributos da minha classe são privados e na minha interface são publicos. Isso gera um conflito entre interface e classe.

 TypeScript
 interface SpacecraftInfo {
     getId(): number;
     getName(): string;
 }

Pergunta

Qual é a vantagem de a interface exigir getId(): number em vez de id: number? Explique com suas próprias palavras.
 A vantagem é que consigo ter os meus atributos na classe privados, limitando o acesso.

Para responder

Por que isso é útil? Por que function startCombat(ship: CombatCapable, target: Spacecraft) é mais flexível do que 
function startCombat(ship: Fighter, target: Spacecraft)?

-- Como "CombatCapable" é uma interface, consigo definir atráves dela várias classes. Se usarmos "Fighter" estáremos falando que só
-- aceitará aquela classe em específico.