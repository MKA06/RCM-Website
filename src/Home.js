import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

  
function Homes(props) {

  return (
    <div>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded" id="cards">
      
      <div className="card-body" >
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text" class="textcolor">{props.text}</p>
        <a href={props.href} class="btn btn-danger">See</a>
      </div>
      </div>
      </div>
  )
} 

function Home () {
    
    const [value, onChange] = useState(new Date());

    return (
    <div className="container">
    
    <div  className="row mt-5">
      <div className="col-sm-4" id="calendar">
      <Calendar  onChange={onChange} value={value} />

      </div>

      <div className="col-sm-3"> 
          <Homes id text="Awesome place for sharing ideas" title="New exotic book" href="ExoticBook"/>
      

      </div>
      
      <div className="col-sm-4">
        <Homes  text="2. Dünya savaşında milyonları katlettiler, peki her şey nasıl başlayıp bitti?" title="Faşizimin yükselişi ve çöküşü" href="/News"/>
      </div>
      <hr className="row mt-3"/>
    </div>
      <div  className="row mt-5">
          <div className="col-sm-4">
          <Homes text="It's powered by AI to polish, edit english sentences, find new english words" title="Releasing ExoLanguage Tools" href="/LanguageTools"/>
          </div>
      </div>
        
      <div >
          <div className="col-sm-4">
          <Homes text="2. Dünya savaşında milyonları katlettiler, peki her şey nasıl başlayıp bitti?" title="Faşizimin yükselişi ve çöküşü"/>
          </div>
      </div>
    </div>

    
    );
}

export default Home;