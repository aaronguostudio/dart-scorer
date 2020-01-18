import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const prodConfig = {
  apiKey: 'AIzaSyC8FnKDamb1jcXrXjVd4te74wb8_d55Rxs',
  authDomain: 'dartscore-c2276.firebaseapp.com',
  databaseURL: 'https://dartscore-c2276.firebaseio.com',
  projectId: 'dartscore-c2276',
  storageBucket: 'dartscore-c2276.appspot.com',
  messagingSenderId: '468010043601',
}

const devConfig = {
  apiKey: 'AIzaSyC8FnKDamb1jcXrXjVd4te74wb8_d55Rxs',
  authDomain: 'dartscore-c2276.firebaseapp.com',
  databaseURL: 'https://dartscore-c2276.firebaseio.com',
  projectId: 'dartscore-c2276',
  storageBucket: 'dartscore-c2276.appspot.com',
  messagingSenderId: '468010043601',
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

class Firebase {
  constructor () {
    app.initializeApp(config)
    this.auth = app.auth()
    this.firestore = app.firestore()
  }

  // openGame () {
  //   return app.
  // }
}

export default Firebase;
