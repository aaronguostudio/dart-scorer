import app from 'firebase/app'

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
  }
}

export default Firebase
