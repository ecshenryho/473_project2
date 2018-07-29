import React, { Component } from 'react';
import Login from './Login';
import * as firebase from 'firebase';
import App from './App';
import ChatNavigation from './ChatNavigation';

function CheckAuthState(){
  var page = null;
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    page = <div><App /> <ChatNavigation /></div>;
  } else {
    // No user is signed in.
    page =  <Login />;
  }
  return page;
}
class StartApp extends Component {

  render() {

    return (

      <div id="check">
      <CheckAuthState />
      </div>
    );
  }
}
 

export default StartApp;
