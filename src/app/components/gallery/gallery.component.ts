import { ImageService } from './../../services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
   image: any = [];
  constructor(private imageservice: ImageService) { }

  ngOnInit(): void {
  }
  getImage(){
   this.image = this.imageservice.getImage();
   console.log(this.image);
}
}
