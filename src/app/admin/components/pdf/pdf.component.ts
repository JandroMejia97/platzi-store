import { Component, OnInit } from '@angular/core';
// import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  template: `
    <h1>PDF</h1>
    <button mat-raised-button (click)="generatePDF()">BUILD PDF</button>
  `,
  styles: ['']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePDF() {
    // const doc = new jsPDF();
    // doc.text('Hello, World!', 10, 10);
    // doc.save('a4.pdf');
    // Generate with Backend
  }

}
