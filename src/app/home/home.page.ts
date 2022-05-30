import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = '0';
  cmp = '0';
  oldvalue = '0';
  lastoperator = '';
  virgule = false;
  readyForNewInput = true;
  numberGroups = [[7, 8, 9, 'c'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, 'x', '.', '/']];

  onButtonPress(num) {
    console.log(num)
    if (typeof num == 'number') {

      if (this.readyForNewInput) {
        this.value = '' + num;
        this.cmp = '' + num;
        if (this.lastoperator == 'x')
        this.cmp = '' + (parseFloat(this.oldvalue) * parseFloat(this.value));
      if (this.lastoperator == '-')
        this.cmp = '' + (parseFloat(this.oldvalue) - parseFloat(this.value));
      if (this.lastoperator == '+')
        this.cmp = '' + (parseFloat(this.oldvalue) + parseFloat(this.value));
      if (this.lastoperator == '/')
        this.cmp = '' + (parseFloat(this.oldvalue) / parseFloat(this.value));
      }
      else {
        this.value += '' + num;
        this.cmp += '' + num;
        this.cmp = '' + (parseFloat(this.oldvalue) + parseFloat(this.value));
      }
      this.readyForNewInput = false;

    }
    else if (num == '.') {
      if (!this.virgule) this.value += '' + num;
      this.virgule = true;
      this.readyForNewInput = false;

    }
    else if (num == 'c') {
      this.value = '0';
      this.cmp = '0';
      this.oldvalue = '0';
      this.lastoperator = '';
      this.readyForNewInput = true;
      this.virgule = false
    }
    else if (num == '=') {
      this.virgule = false
      this.value = '' + this.cmp;
      // if (this.lastoperator == 'x')
      //   this.value = '' + (parseFloat(this.oldvalue) * parseFloat(this.value));
      // if (this.lastoperator == '-')
      //   this.value = '' + (parseFloat(this.oldvalue) - parseFloat(this.value));
      // if (this.lastoperator == '+')
      //   this.value = '' + (parseFloat(this.oldvalue) + parseFloat(this.value));
      // if (this.lastoperator == '/')
      //   this.value = '' + (parseFloat(this.oldvalue) / parseFloat(this.value));
      this.readyForNewInput = true;
    }
    else {///operator
      this.readyForNewInput = true;
      this.oldvalue = this.cmp;
      this.lastoperator = num;
      this.virgule = false
    }
  }

}
