import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'tagline',
    'image_url',
    'abv'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
