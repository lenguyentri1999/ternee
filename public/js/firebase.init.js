angular.module('firebaseConfig', ['firebase'])

.run(function(){

    // Initialize Firebase
   var config = {
     apiKey: "AIzaSyA4I0Hvqorb4ZCkN8ohP2080hm32oIxDqE",
     authDomain: "xpiri-49a18.firebaseapp.com",
     databaseURL: "https://xpiri-49a18.firebaseio.com",
     projectId: "xpiri-49a18",
     storageBucket: "xpiri-49a18.appspot.com",
     messagingSenderId: "257388376589"
   };
   firebase.initializeApp(config);

});
