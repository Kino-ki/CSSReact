import React from "react";
import './style.scss';
import FaStar from "./Components/FaStar";

function App () {



  return(
    <div>
      <div className ='firstContainer'>
        <img src='src\assets\a1113539546_10.jpg' alt='komachi' className="albumPic"/>
        <div className="albumTitle">
          <h2>Meitei</h2>
          <h3>Komachi</h3>
          <h3>(2019)</h3>
        </div>
      </div>
      <div className="review">
          <p>Rate this album</p>
          <div className='stars'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
      </div>
    </div>
  )


}

export default App;