# ngrx-base-app
This is a base app to build upon with ngrx implemented, contains a toolbar and sidenav and a basic layout. It also uses lazy loading to load the reports part.

To install just do an 

    npm install
    
To run

    ng serve -o

The implementation is based on the original example app from ngrx https://github.com/ngrx/platform/tree/master/projects/example-app

To use the redux devtools in chrome download and install: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

I've added TODO markers to indicate which places probably still need updates inside the core.

Updating packages and doing an audit with github causes issues with angular-devkit/build-angular

Solution:

    npm uninstall @angular-devkit/build-angular
    
Then
    
    npm install @angular-devkit/build-angular@0.13.0
