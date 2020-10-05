import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import Thumbnail from '../src/components/thumbnail/thumbnail'

function App(props) {
  const [openModal, setOpenModal] = useState(false);
  const [query, setQuery] = useState("");
  const [application, setApplication] = useState([]);

  useEffect(() => {
    // the action we want useEffect to do is make an api call to get our product data
    const url = "https://api.giphy.com/v1/gifs/search?api_key=5VHD8krqyXl6NCnL26GYoLw8yxwc9NH8&q=beychella&limit=30&offset=0&rating=g&lang=en"
    axios.get(url)
    .then(res => {
      setApplication(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
    
  }, []);

  return (
    <div className="App">
      <p>Girlfriends</p>
      <Thumbnail nameProps={{name:["beyonce", "rihanna"]}} openModal={openModal} setOpenModal={setOpenModal} application={application}/>
    </div>
  );
}

export default App;
