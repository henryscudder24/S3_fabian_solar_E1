import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FileService } from '../file.service';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.page.html',
  styleUrls: ['./myspace.page.scss'],
})
export class MyspacePage implements OnInit {
  filteredFiles: any[] = [];

  constructor(private location: Location, private fileService: FileService) { }

  ngOnInit() {
    this.filteredFiles = this.fileService.getFilteredFiles();
  }

  shareFile(file: any) {
    console.log('Compartir archivo:', file.name);
  }

  DownloadFile(file: any) {
    console.log('Descargar archivo:', file.name);
  }

  goBack() {
    this.location.back();
  }
}
