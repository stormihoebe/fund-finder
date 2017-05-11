import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-discovery',
  templateUrl: './project-discovery.component.html',
  styleUrls: ['./project-discovery.component.css'],
  providers: []
})
export class ProjectDiscoveryComponent implements OnInit {
  projects;
  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
