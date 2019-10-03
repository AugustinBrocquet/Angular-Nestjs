import { ProjectService } from './../../../../shared/services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    mode: 'external',
    actions: {
      position: 'left',
    },
    columns: {
      title: {
        title: 'Titre',
        type: 'text',
      },
      content: {
        title: 'Description',
        type: 'text',
      },
    },
  };

  public projects: any[] = [];

  constructor(private router: Router, private readonly projectService: ProjectService, private route: ActivatedRoute) { }

  goToViewProject(event): void {
    console.log(event);
    this.router.navigate([`/admin/project/${event.data.projectId}`]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event: any): void {
    console.log('On create', event);
  }

  onEdit(event: any): void {
    console.log('On edit', event);
  }

  onDelete(event: any): void {
    console.log('On delete', event);
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: any) => {

      this.projects = data.map((elem) => {
        return {
          projectId: elem._id,
          ...elem
        };
      });
      console.log(this.projects);
    });
  }

}
