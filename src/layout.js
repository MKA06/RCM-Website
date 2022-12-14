import { Nav, Navbar } from 'react-bootstrap'

import { initializeApp } from "firebase/app"


import { useState, useEffect} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth"






function Layout(props) {


    var logstate = "Kayıt ol"
    console.log(logstate)
    var loghref = "/signup"
    console.log(props.active)
    if (props.active !== null && props.active !== "Not logged in") {
        logstate= "Çıkış yap"
        loghref = "/logout"

    }
    console.log(logstate)

    return (
        
        <div>
 
            <Navbar id="NAV" bg="dark" variant="dark" sticky="top" expand="sm">
                <Navbar.Brand id="brand">
                
                       RCM ligi
                </Navbar.Brand>
                
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/">Oyuncu listesi</Nav.Link>
                    <Nav.Link href="/yatirim">Yatırım yap</Nav.Link>
                   
                    
                    
                  
                </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Navbar.Text>{props.active}</Navbar.Text>
                    <Nav.Link href={loghref}>{logstate}</Nav.Link>
                    <Nav.Link href="/Settings"><img id="logonav" src="http://cdn.onlinewebfonts.com/svg/img_271739.png"/></Nav.Link>
                    
                </Nav>

            </Navbar>

            <Navbar >

            </Navbar>
   
            
            </div>
    );
}

export default Layout;