import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from "file-saver";
import * as JsonToXML from "js2xmlparser";
import { Item } from '../_models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  title = 'Inventory List';
  items: Item[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Item[]>('https://localhost:5001/api/Inventory/GetInventoryList').subscribe({
      next: response => this.items = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    });
  }

  exportToXML() {
    return saveAs(
      new Blob([JsonToXML.parse("items", this.items)], { type: 'XML' }), 'sample.xml'
    )
  }
}
