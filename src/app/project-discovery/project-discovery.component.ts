import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-discovery',
  templateUrl: './project-discovery.component.html',
  styleUrls: ['./project-discovery.component.css'],
  providers: []
})
export class ProjectDiscoveryComponent implements OnInit {
  projects;
  constructor(public projectService: ProjectService, public router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  goToDetailPage(clickedProject: Project) {
      this.router.navigate(['projects', 0]);
    }
}
