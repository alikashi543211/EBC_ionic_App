import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ExampleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
