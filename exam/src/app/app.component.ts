import { Component } from '@angular/core';
// import { ApiConnectionService } from './api-connection.service';
import { ServiceService } from './service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';

  data:any;
  constructor(private server: ServiceService){

  }
  ngOnInit(){
    // this.data = this.server.getUsers()
    console.log(this.data)
    this.server.getUsers().subscribe(res=>{
      this.data = res;
    })
  }
}
