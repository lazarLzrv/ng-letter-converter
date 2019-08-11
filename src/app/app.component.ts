import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    letters:string;
    resultNumbers :number = 0;
 
 

    convertToNumber = () =>{  
        for (var i = 0; i < this.letters.length; i++) {
            this.resultNumbers += (this.letters.charCodeAt(i) - 64) * Math.pow(26, this.letters.length - i - 1);
        }  
        console.log(this.resultNumbers); 
    } 

    convertToLetter = () =>{
        
    }
}
