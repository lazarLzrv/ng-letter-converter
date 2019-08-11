import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    letters:string;
    resultNumbers :number = 0; 

    numbers:number; 
    numbersInst:number; 
    multiplier:number = 26; 
    resultLetters:string='';  
    tempVar:number = 1;

    convertToNumber = () => {  
        this.resultNumbers=0; 
        for (let i = 0; this.letters.length > i ; i++) {
    
            this.resultNumbers += (this.letters.toUpperCase().charCodeAt(i) - 64) * Math.pow(26, this.letters.length - i - 1); 
        }    
    } 

    convertToLetter = () => {  
        this.resultLetters='';  

        this.numbersInst = this.numbers;
        for (this.tempVar=1 , this.multiplier=26; (this.numbersInst -= this.tempVar) >= 0; this.tempVar = this.multiplier, this.multiplier *= 26) {
            this.resultLetters = String.fromCharCode(((this.numbersInst % this.multiplier) / this.tempVar) + 65) + this.resultLetters;
        }  
    }
   
}
