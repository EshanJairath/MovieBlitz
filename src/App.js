import React, { useState } from 'react';

import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from "./requests";
import InstagramEmbed from 'react-instagram-embed';


function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
    <Header/>

    <Nav setSelectedOption = {setSelectedOption}/>

    <Results 
    selectedOption = {selectedOption}/>
    <h1 className = "instaDevProfife developerh1">👇Developer👇</h1>
    <InstagramEmbed
    
      className ="instaDevProfife"
      url='https://www.instagram.com/p/Bd2PLONngVI/?utm_source=ig_web_copy_link'
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
/>
    </div>
  );
}

export default App;
