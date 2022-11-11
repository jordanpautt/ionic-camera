import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photo: any;
  constructor(private camera: Camera) { }

  public takePicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
    };
    this.camera.getPicture(options)
      .then((data) => {
        this.photo = 'data:image/jpeg;base64,' + data;
      })
      .catch((err) => console.log(err)
      );
  }

}
