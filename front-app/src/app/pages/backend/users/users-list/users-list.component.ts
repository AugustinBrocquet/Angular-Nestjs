import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

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
      username: {
        title: 'Utilisateur',
        type: 'text',
      },
      email: {
        title: 'E-mail',
        type: 'text',
      },
      role: {
        title: 'Rôle',
        type: 'text'
      }
    },
  };

  public users: any[] = [];

  constructor(private router: Router, private usersService: UsersService) {

  }

  goToViewUser(event): void {
    console.log(event);
    console.log(`user/${event.data.userId}`);
    this.router.navigate([`/admin/user/${event.data.userId}`]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event: any): void {
    console.log('On create' ,event);
  }

  onEdit(event: any): void {
    console.log('On edit', event);
  }

  onDelete(event: any): void {
    console.log('On delete', event);
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: any) => {

      this.users = data.map((elem) => {
        return {
          userId: elem._id,
          ...elem
        };
      });
      console.log(this.users);
    });
  }

}
