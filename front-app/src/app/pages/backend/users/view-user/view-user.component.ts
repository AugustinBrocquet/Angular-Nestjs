import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public starRate = 2;
  public heartRate = 4;
  public radioGroupValue = 'This is value 2';
  public editorConfig: AngularEditorConfig;

  constructor(protected location: Location) {
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: `${environment.url_api}/api/upload/editor`,
      sanitize: true,
      toolbarPosition: 'top',
    };
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
    return false;
  }

}
