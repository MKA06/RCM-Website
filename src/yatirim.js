

import { initializeApp } from "firebase/app"

import React from "react";
import { useState, useEffect} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth"

import {Form, Button, Card, Container} from 'react-bootstrap'
import { doc, updateDoc,  setDoc, getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDhBNPlioOtPa2OrMDojQa6dMGzxLDD6cA",
    authDomain: "rcminvestor.firebaseapp.com",
    projectId: "rcminvestor",
    storageBucket: "rcminvestor.appspot.com",
    messagingSenderId: "722687463912",
    appId: "1:722687463912:web:5a970446db433a1afe145d",
    measurementId: "G-TDHWZF4BD5"
  };
  const app = initializeApp(firebaseConfig)

function Yatirim(props) {
    const db = getFirestore(app)
    const [yatirim, setYatirim] = useState("")
    const [miktar, setMiktar] = useState("")


    if (props.user !== null && props.user !=="Not logged in") {
        var userRef = doc(db, "users", props.user)

        console.log(1)
    } else {
        var userRef = false
        
    }

    function handleSubmit(e){
        e.preventDefault()
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '68be1804bdmshd1a554d4b415837p1a763bjsnb8270169140d',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };
        
        fetch('https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol='+yatirim+'&outputsize=compact&datatype=json', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

   
    return (
        
        <div>
            
             <Form>
                    <Form.Group >
                        <Form.Label >Şirket</Form.Label>
                        <Form.Control  value={yatirim} placeholder="AAPL" onChange={(e)=>{setYatirim(e.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Yatırılan miktar</Form.Label>
                        <Form.Control value={miktar} onChange={(e)=>{setMiktar(e.target.value)}} required ></Form.Control>
                    </Form.Group>
                    <Button type="submit" onClick={handleSubmit}>Satın al</Button>
                </Form>
            
            </div>
    );
}

export default Yatirim;