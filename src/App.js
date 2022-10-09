import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import DogImage from './components/DogImage';
import Header from './components/Header';

function App() {

  const [getImg, setImg] = useState({});

  const handleSubmit = async () => {
    const getImg = "https://dog.ceo/api/breeds/image/random"

    let response = await fetch(getImg)
    let json = await response.json()
    console.log("img url", json.message)
    setImg(json)
  }

  return (
    <div className='App'>
      <Header />
      <Button handleSubmitFromApp={handleSubmit} />
      {getImg.message ? <DogImage getImg={getImg}/> : 
      <h2>Pull random dog images</h2>}
      
    </div>
  );
}

export default App;
