import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  serverId='delllllll';
 serverStatus=true;
 getServerStatus()
 {
   return this.serverStatus;
 }
  constructor() { }

  ngOnInit() {
  }

  onStatusChange()
  {
    this.serverId='status changed';
  }
}
