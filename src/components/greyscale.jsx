import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const GreyScale = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [alphaBlue,setAlphaBlue] = useState(0.1);  
  const [alphaGreen,setAlphaGreen] = useState(0.1);  
  const [alphaRed,setAlphaRed] = useState(0.1);  

  const handleAlphaBlueChange = async (event) => {
    setAlphaBlue(event.target.value);
    setRemoteUrl(api.transform_greyscale(name,event.target.value,alphaGreen,alphaRed));
  };
  const handleAlphaGreenChange = async (event) => {
    setAlphaGreen(event.target.value);
    setRemoteUrl(api.transform_greyscale(name,alphaBlue,event.target.value,alphaRed));
  };
  const handleAlphaRedChange = async (event) => {
    setAlphaRed(event.target.value);
    setRemoteUrl(api.transform_greyscale(name,alphaBlue,alphaGreen,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
          <label for="alphaBlue">Blue : </label>
          <input type="number" id="alphaBlue" name="alphaBlue" min="0" max="1" step="0.1" onChange={handleAlphaBlueChange}></input>
        </div>
        <div>
          <label for="alphaGreen">Green : </label>
          <input type="number" id="alphaGreen" name="alphaGreen" min="0" max="1" step="0.1" onChange={handleAlphaGreenChange}></input>
        </div>
        <div>
          <label for="alphaRed">Red : </label>
          <input type="number" id="alphaRed" name="alphaRed" min="0" max="1" step="0.1" onChange={handleAlphaRedChange}></input>
        </div>
        <div>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default GreyScale;