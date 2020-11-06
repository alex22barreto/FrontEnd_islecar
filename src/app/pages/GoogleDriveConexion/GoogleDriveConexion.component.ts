import { Component, OnInit } from '@angular/core';

declare var gapi: any;
declare var google: any;

@Component({
  selector: 'app-GoogleDriveConexion',
  templateUrl: './GoogleDriveConexion.component.html',
  styleUrls: ['./GoogleDriveConexion.component.scss']
})
export class GoogleDriveConexionComponent implements OnInit {

  constructor() {  }

  ngOnInit() { }



  developerKey = 'AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE';
  clientId = "351197940319-60vnm0dm6dc9tlv33k2r01k5lurohk3c.apps.googleusercontent.com"
  scope = ['https://www.googleapis.com/auth/drive.file'];
  pickerApiLoaded = false;
  oauthToken?: any;

  loadGoogleDrive() {
    gapi.load('auth', { 'callback': this.onAuthApiLoad.bind(this) });
    gapi.load('picker', { 'callback': this.onPickerApiLoad.bind(this) });
  }

  onAuthApiLoad() {
    gapi.auth.authorize(
      {
        'client_id': this.clientId,
        'scope': this.scope,
        'immediate': false
      },
      this.handleAuthResult);
  }

  onPickerApiLoad() {
    this.pickerApiLoaded = true;
  }

  handleAuthResult(authResult) {
    let src;
    console.log(authResult);
    if (authResult && !authResult.error) {
      if (authResult.access_token) {
        let uploadView = new google.picker.DocsUploadView().setParent('1fRmnL_VcwinrDyNo8uHZtEzTLSUXo7SV');
        let view = new google.picker.DocsView(google.picker.ViewId.DOCS)
        .setIncludeFolders(true);
        
        

        let pickerBuilder = new google.picker.PickerBuilder();
        let picker = pickerBuilder.
          enableFeature(google.picker.Feature.MULTISELECT_ENABLED).
          setOAuthToken(authResult.access_token).
          addView(uploadView).
          addView(view).
          setAppId("351197940319").
          setDeveloperKey("AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE").
          setCallback(function (e) {
            if (e[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
              let doc = e[google.picker.Response.DOCUMENTS][0];
              src = doc[google.picker.Document.URL];
              console.log("Document selected is", doc,"and URL is ",src)
              window.open(src, '_blank');
            }
          }).
          build();
        picker.setVisible(true);
      }
    }
  }

}
