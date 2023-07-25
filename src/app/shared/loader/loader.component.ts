import { Subject } from 'rxjs';
import { LoaderService } from './../../services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {}
  isLoading: Subject<boolean> = this.loaderService.isLoading

}
