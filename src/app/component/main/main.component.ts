import { AfterViewInit, Component, SimpleChanges, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface } from 'angular-gridster2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  @ViewChild('gridsterItem') gridItem!: GridsterItemComponent;
  
  public options: GridsterConfig;
  public unitHeight: number;
  public item1: GridsterItem;
  public item2: GridsterItem;
 
  constructor() {
    this.unitHeight = 0;
    this.item1 = { x: 0, y: 0, rows: 6, cols: 12 };
    this.item2 = { x: 0, y: 0, rows: 7, cols: 12 };
 
    this.options = {
      itemResizeCallback: this.itemResize.bind(this),
      displayGrid: 'onDrag&Resize',
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 12,
      fixedRowHeight: 120,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      
      enableEmptyCellDrop: true,
      enableEmptyCellClick: true,
      enableEmptyCellContextMenu: true,
      enableEmptyCellDrag: true,
      enableEmptyCellResize: true,
      enableOccupiedCellDrop: true,
      responsiveOptions:[
        
      
    ],
      resizable: {
        enabled: false
      },
      draggable: {
        enabled: false
      },
    };
  }
  public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
  

    if (itemComponent.gridster.curRowHeight > 1) {
      
      this.unitHeight = itemComponent.gridster.curRowHeight;
      
    }
    
    itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
  }


}
