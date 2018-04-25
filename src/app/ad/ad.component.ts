import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  videoURL = 'blob:https://www.youtube.com/57dae7a3-b44e-415b-999f-02d305438556';

  constructor() { }

  ngOnInit() {
  }

}
