import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const Contrast = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [alpha,setAlpha] = useState(1);  
  const [beta,setBeta] = useState(1);  

  const handleAlphaChange = async (event) => {
    setAlpha(event.target.value);
    setRemoteUrl(api.transform_contrast(name,event.target.value,beta));
  };
  const handleBetaChange = async (event) => {
    setBeta(event.target.value);
    setRemoteUrl(api.transform_contrast(name,alpha,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_controller}>
        <div>
            <label for="alpha">Alpha : </label>
            <input type="number" id="alpha" name="alpha" min="0" max="1000" step="1" onChange={handleAlphaChange}></input>
        </div>
        <div>
            <label for="beta">Beta : </label>
            <input type="number" id="beta" name="beta" min="0" max="1000" step="1" onChange={handleBetaChange}></input>
        </div>
        <div>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
    </div>  
  );
}

export default Contrast;