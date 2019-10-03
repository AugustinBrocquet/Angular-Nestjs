import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/projects`, { headers });
  }

  getProject(projectId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/projects/${projectId}`, { headers });
  }

  createProject(project: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    return this.http.post(`${environment.url_api}/api/projects`, project, { headers });

  }

  updateProject(project: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post(`${environment.url_api}/api/projects/update`, project, { headers });
  }

  deleteProject(name: string, projectId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`${environment.url_api}/api/projects/delete/${name}/${projectId}`, { headers });
  }

}
