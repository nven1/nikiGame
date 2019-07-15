import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'niki';
  columns = [
    {
      id:0,
      count:0
    },
    {
      id:1,
      count:9
    },
    {
      id:2,
      count:0
    },
  ];
  targetTile;
  moves = 0;
  startCol;


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
      column: 1
    },
  ];

selectStartColumn(col) {
  if (this.targetTile == undefined) {
    for(let i=0; i<this.objects.length; i++) {
      if (this.objects[i].column == col) {
        this.targetTile = i;
        this.startCol = col;
        break;
      }
    }
  }
  else if (this.targetTile != undefined) {
    for(let i=0; i<this.objects.length; i++) {
      if(this.columns[col].count==0) {
        this.move(col);
      }
      else if(this.objects[i].column == col) {
        if (this.targetTile<i) {
          this.move(col);
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
move(col) {
  this.objects[this.targetTile].column=col;
  this.targetTile = undefined;
  this.columns[col].count++;
  this.columns[this.startCol].count--;
  this.moves++;
}

reset() {
  this.objects.forEach(i => {
    i.column=1;
  });
  this.columns[0].count=0;
  this.columns[1].count=9;
  this.columns[2].count=0;
  this.moves = 0;
}

setWidth(i) {
  console.log(i);
  let style = {
    'width':(20+i*10)+'%',
    'background-color': 'rgb(150, '+30*i+', 300 )'
  };
  console.log(style);
  return style;
  
}

}
