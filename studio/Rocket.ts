import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';



export class Rocket {
    name: string
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astranauts: Astronaut[] = [];
    constructor(name:string, totalCapacityKg: number){
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
        
    }
    sumMass (items: Payload[] ): number{
        let totalMassKg: number = 0
        for(let i=0; i<items.length; i++){
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    }

    currentMassKg(): number{
        
        return this.sumMass(this.cargoItems) + this.sumMass(this.astranauts);

    }
    canAdd (item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;     
    }  
    addCargo (cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else return false;
           
    }
    addAstronaut (astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)){
            this.astranauts.push(astronaut);
            return true;
        } else return false;
    }    
}


