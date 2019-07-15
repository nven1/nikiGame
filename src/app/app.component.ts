import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'niki';
  columns = [0,1,2];
  targetTile;
  biggest;


  objects = [
    {
      size: 1,
      column: 1
    },
    {
      size: 2,
      column: 1
    },
    {
      size: 3,
      column: 1
    },
    {
      size: 4,
      column: 1
    },
    {
      size: 5,
      column: 1
    },
    {
      size: 6,
      column: 1
    },
    {
      size: 7,
      column: 1
    },
    {
      size: 8,
      column: 1
    },
    {
      size: 9,
      column: 0
    },
  ];

selectStartColumn(col) {
  if (this.targetTile == undefined) {
    for(let i=0; i<this.objects.length; i++) {
      //console.log('col: '+col+' col2:'+this.objects[i].column);
      if (this.objects[i].column == col) {
        this.targetTile = i;
        console.log(this.targetTile);
        break;
      }
    }
  }
  else if (this.targetTile != undefined) {
    for(let i=0; i<this.objects.length; i++) {
      
      if(this.objects[i].column == col) {
        console.log(i)
        if (this.targetTile<i) {
          console.log(this.targetTile+'  '+i)
          this.objects[this.targetTile].column=col;
          this.targetTile = undefined;
          break;
        }
        else {
          this.targetTile = undefined;
          break;
        }
      }
    }
  }
}

}
