import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

  reloadPage(){
    this.router.navigate(['server'], {relativeTo : this.route});// Absolute path if we write /server and Relative Path when written just server
    
    console.log(this.router.navigate(['server']));
  }
}
