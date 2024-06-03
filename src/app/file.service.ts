import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files = [
    { name: 'Documento1_Analista1.xlsx' },
    { name: 'Documento1_Analista2.xlsx' },
    { name: 'Documento2_Analista2.xlsx' },
    { name: 'Documento1_Analista3.xlsx' },
    { name: 'Documento2_Analista3.xlsx' },
    { name: 'Documento3_Analista3.xlsx' },
    { name: 'Documento1_JP1.xlsx' }
  ];

  constructor() { }

  getFiles() {
    return this.files;
  }

  getFilteredFiles() {
    return this.files.filter(file =>
      file.name === 'Documento1_Analista2.xlsx' || file.name === 'Documento2_Analista2.xlsx'
    );
  }
}
