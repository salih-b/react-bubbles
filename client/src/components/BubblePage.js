import React, { useState, useEffect } from "react";
import axios from "axios";

import {axiosWithAuth} from '../utils/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts (useEffect)
  // set that data to the colorList state property
  console.log("we'ved reached bubblepage");
  useEffect(()=>{
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        console.log('successful get request in bubblepage:',res);
        setColorList(res.data);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
