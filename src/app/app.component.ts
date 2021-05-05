import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password ='';
  useSymbols = false;
  useNumbers = false;
  useLetters = false;
  length=0

  onChangeLength(value: string){
    let parsedValue = parseInt(value);
    console.log(value);
    
    if(!isNaN(parsedValue)){
      this.length= parsedValue
    }
  }

  onChangeSymbol(){
    this.useSymbols=!this.useSymbols
    console.log('symbol'+this.useSymbols);
    
  }
  onChangeNumber(){
    this.useNumbers=!this.useNumbers
    console.log('Number '+this.useNumbers);
  }

  onChangeLetters(){
    this.useLetters=!this.useLetters
    console.log('useLetters '+this.useLetters);
  }

  onButtonClick(){
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    let symbols = '!@#$%^&*()';

    let validCharSet='';
    if(this.useLetters) validCharSet+=letters;
    if(this.useNumbers) validCharSet+=numbers;
    if(this.useSymbols) validCharSet+=symbols;

    console.log(validCharSet);
    
    let generatedPwd=''
    // for(let i=0;i<this.length;i++){
    //   const index= Math.floor(Math.random()*validCharSet.length)
    //   generatedPwd+=validCharSet.charAt(index)
    // }
    let i =0;
    while(i<this.length){
      if(this.useLetters && i<this.length){
              const index= Math.floor(Math.random()*letters.length)
              generatedPwd+=letters.charAt(index)
              i++;
      }
      if(this.useNumbers && i<this.length){
              const index= Math.floor(Math.random()*numbers.length)
              generatedPwd+=numbers.charAt(index)
              i++;
      }
      if(this.useSymbols && i<this.length){
              const index= Math.floor(Math.random()*symbols.length)
              generatedPwd+=symbols.charAt(index)
              i++;
      }
    }

    this.password=generatedPwd
  }

  getMyPassword(){
    return this.password
  }
}
