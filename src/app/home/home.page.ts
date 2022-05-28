import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    value= '0';
    oldvalue= '0';
    lastoperator='';
    virgule=false;
    readyForNewInput= true;
    numberGroups=[[7,8,9,'c'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    [0,'x','.','/']];

  onButtonPress(num){
    console.log(num)
    if ( typeof num =='number') {

       if ( this.readyForNewInput)
         this.value=''+ num;
        else
          this.value += '' + num;
          this.readyForNewInput=false;

    }
    else if (num =='.') {
      if(!this.virgule) this.value += '' + num;
      this.virgule=true;
      this.readyForNewInput=false;

    }
    else if(num=='c'){
       this.value='0';
       this.readyForNewInput= true;
       this.virgule=false
    }
    else if(num=='='){
      this.virgule=false
       if(this.lastoperator=='x')
       this.value=''+(parseFloat(this.oldvalue)*parseFloat(this.value));
       if(this.lastoperator=='-')
       this.value=''+(parseFloat(this.oldvalue)-parseFloat(this.value));
       if(this.lastoperator=='+')
       this.value=''+(parseFloat(this.oldvalue)+parseFloat(this.value));
       if(this.lastoperator=='/')
       this.value=''+(parseFloat(this.oldvalue)/parseFloat(this.value));
       this.readyForNewInput= true;
    }
    else{///operator
      this.readyForNewInput= true;
      this.oldvalue= this.value;
      this.lastoperator=num;
      this.virgule=false
    }
  }

}
