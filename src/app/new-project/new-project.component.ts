import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }

  submitNewProject(newTitle: string, newName: string, newType: string, newDescription: string, newSnippet: string, newGoal: string, newOffer: string, newImage: string) {
    // var newProject: Project = new Project(newTitle, newName, newType, newDescription, newSnippet, 0, 0, newOffer, newImage);
  }

}
