import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FileService } from '../file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {
  files: any[] = [];

  constructor(private location: Location, private fileService: FileService) { }

  ngOnInit() {
    this.files = this.fileService.getFiles();
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
