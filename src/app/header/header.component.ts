import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerMenuClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect = function(selectedFeature: string) {
    this.headerMenuClicked.emit(selectedFeature);
  }

}
