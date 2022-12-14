
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './footer';
import { useState } from 'react';
import Layout from './layout';
import { React } from 'react';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Yatirim from './yatirim';
import Liste from './liste';
import $ from 'jquery'

import { doc, updateDoc,  setDoc, getFirestore} from "firebase/firestore";
import {Form, Button, Card, Container} from 'react-bootstrap'
import {auth} from './firebase'

import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, signOut} from "firebase/auth"

import Popup from 'reactjs-popup';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



$(document).ready(function () {
  if (localStorage.getItem("i")%2==0){
    $("body").css("background-color","white");
    $("#fasbas").css("color","black");
    $(".ntext").css("color","black");
    $("p").css("color","black !important");
  }
  if (localStorage.getItem("i")%2==1){
    $("body").css("background-color","black");
    $("#fasbas").css("color","white");
    $(".ntext").css("color","white");
    $("p").css("color","white !important");
    
  }

})







// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhBNPlioOtPa2OrMDojQa6dMGzxLDD6cA",
  authDomain: "rcminvestor.firebaseapp.com",
  projectId: "rcminvestor",
  storageBucket: "rcminvestor.appspot.com",
  messagingSenderId: "722687463912",
  appId: "1:722687463912:web:5a970446db433a1afe145d",
  measurementId: "G-TDHWZF4BD5"
};



function Documentation(){

  return(
      <div className="container width-80">
          <h1 class="nexotitle">Powerful English Tools For Students</h1>
          <br/>
          <p class="nexotool">ExoLanguage AI helps students to improve their writing, also reinforcing their vocabulary.
            Tools are sentence rephraser, word finder, similar looking word finder, synoym finder, paragraph polisher.
          </p >
          <br/>
          <h2 class="nexotitle2">1. Sentence Rephraser</h2>
          <br/>
          <p class="nexotool">
            Helps students to imrove their sentence structure, while avoiding unnecessary words and common phrases. For example, lets use this tool to rephrase the first pharagraph:
          </p >
          <p class="examples">
            Input:<br />
            ExoLanguage AI helps students to improve their writing, also reinforcing their vocabulary.
            Tools are sentence rephraser, word finder, similar looking word finder, synoym finder, paragraph polisher.
            <br/>
            Output:<br />
            ExoLanguage AI helps students improve their writing skills by reinforcing their vocabulary. The AI-powered tools such as sentence rephraser, word finder, similar looking word finder, and synonym finder help students write better paragraphs.
          
          </p>
          <p class="nexotool">
            As can be seen from exmple, sentence rephraser performs well on generating fluent sentences.
          </p >
          <br/>
          <h2 class="nexotitle2">2. word finder</h2>
          <br/>
          <p class="nexotool">
            Finds words according to the description provided.
          </p >
          <p class="examples">
            Input:<br />
            he couldn't wait single second to start
            <br/>
            Output:<br />
            eager, anxious, excited, anticipate
          
          </p>
      </div>
  )
}







// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);













function App() {
  const [InUser, setInuser] = useState(localStorage.getItem("usermail"))
  
  function Signup() {
    
    const db = getFirestore(app)
    if (InUser === null) {
      onAuthStateChanged(auth, (currentUser)=>{
        localStorage.setItem("usermail", currentUser.email)
        setInuser(currentUser.email)
        console.log(InUser)
      })
    }
    const [user, setUser] = useState("")
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordconfirm, setPasswordconfirm] = useState("")
    const [page, setPage] = useState("Sign up")
    const [counter, setCounter] = useState(0)
    
    
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e){
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(passwordconfirm)
        if (password == passwordconfirm){
            setLoading(true)
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password).then((user) => {return user.user})
                console.log(user)
                const db = getFirestore(app)
                await setDoc(doc(db, "users", String(user.email)), {
                  money: 10000,
                  brands: []
                  
                });
                

                const actionCodeSettings = {
                  // URL you want to redirect back to. The domain (www.example.com) for this
                  // URL must be in the authorized domains list in the Firebase Console.
                  url: 'https://exotic-news.com/finishSignUp?cartId=1234',
                  // This must be true.
                  handleCodeInApp: true,
                  
                  
                  dynamicLinkDomain: 'exotic-news.com',
                };
                
                
                sendSignInLinkToEmail(auth, email, actionCodeSettings)
                  .then(() => {
                    
                    window.localStorage.setItem('emailForSignIn', email);
                    // ...
                  })

            } 
            catch (e) {window.alert(e.message)}
        }
        else {
            window.alert("Passwords do not match")
        }
  
        setLoading(false)
    }
    return(
        
    
    <div className="container align-items-center justify-content-center" style={{minHeight: '100vh', minWidth: '200px'}}>
  
        <card>
            <Card.Body>
                <h2 className="text-center mb-4" >{page}</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label class="ntext">Email</Form.Label>
                        <Form.Control type="email" value={email} placeholder="example@example.com" onChange={(e)=>{setEmail(e.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label class="ntext">Create password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="at least 6 characters" onChange={(e)=>{setPassword(e.target.value)}} required ></Form.Control>
                    </Form.Group>
                    <Form.Group id="passwordagain">
                        <Form.Label class="ntext">confirm password</Form.Label>
                        <Form.Control type="password" value={passwordconfirm} onChange={(e)=>{setPasswordconfirm(e.target.value)}}  required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 btn btn-danger mt-2"  type="submit" onClick={handleSubmit}>Sign up</Button>
                </Form>
                { InUser && <div class="row justify-content-md-center"><div className=" mt-3 text-center alert alert-success w-75 h-40px align-items-center justify-content-center" aria-label="Close" role="alert">Successfully signed up as {InUser}</div>  </div>}
            </Card.Body>
            

            
            
            
        </card>
        <div className="w-100 text-center mt-2">
            Already have an account? <a href="/login" >Login</a>
        </div>
        
    </div>
    )
  
  }

  function Logout() {
    signOut(auth).then(() => {
       setInuser(null);
       localStorage.setItem("usermail", "Not logged in");
    }).catch((error) => {
      // An error happened.
    });
    return(
      <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
    )
  }


  function Login () {
    const db = getFirestore(app)
    
    onAuthStateChanged(auth, (currentUser)=>{
      localStorage.setItem("usermail", currentUser.email)
      setInuser(currentUser.email)
      console.log(InUser)
    })
    const [user, setUser] = useState("")
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordconfirm, setPasswordconfirm] = useState("")
    const [page, setPage] = useState("Sign up")
    const [counter, setCounter] = useState(0)
    
    
    const [loading, setLoading] = useState(false)
  
    async function handleLogin(e){
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(passwordconfirm)
        if (1){
            setLoading(true)
            try {
                const user = await signInWithEmailAndPassword(auth, email, password).then((user) => {return user.user})
                console.log(user)
                const db = getFirestore(app)
                onAuthStateChanged(auth, (currentUser)=>{
                  localStorage.setItem("usermail", currentUser.email)
                  setInuser(currentUser.email)
                  console.log(InUser)
                })
            } 
            catch (e) {window.alert("password is wrong")}
        }
        else {
            window.alert("")
        }
  
        setLoading(false)
    }
    return(
        
    
    <div className="container align-items-center justify-content-center" style={{minHeight: '100vh', minWidth: '200px'}}>
  
        <card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} placeholder="example@example.com" onChange={(e)=>{setEmail(e.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="at least 6 characters" onChange={(e)=>{setPassword(e.target.value)}} required ></Form.Control>
                    </Form.Group>
                    
                    <Button disabled={loading} className="w-100 btn btn-danger mt-2"  type="submit" onClick={handleLogin}>Login</Button>
                </Form>
                { InUser && <div class="row justify-content-md-center"><div className="mt-3 text-center alert alert-success w-75 h-30px align-items-center justify-content-center" aria-label="Close" role="alert">Successfully logged in as  {InUser}</div>  </div>}
            </Card.Body>
        </card>
        
        
    </div>
    )
  }
  return (
    
    <div className="app">
      <Layout active={InUser}/>
      <BrowserRouter>
      <Routes>
        
        
     
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/yatirim" element={<Yatirim user={InUser}/>} />
        <Route path="/liderliktablosu" element={<Liste/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
