import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const GaussinBlur = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [sigmaX,setSigmaX] = useState(1);  
  const [sigmaY,setSigmaY] = useState(1);  

  const handleSigmaXChange = async (event) => {
    setSigmaX(event.target.value);
    setRemoteUrl(api.transform_gaussinblur(name,event.target.value,sigmaY));
  };
  const handleSigmaYChange = async (event) => {
    setSigmaY(event.target.value);
    setRemoteUrl(api.transform_detail_enhance(name,sigmaX,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_controller}>
        <div>
            <label for="sigmaX">SimaX : </label>
            <input type="number" id="sigmaX" name="sigmaX" min="0" max="50" step="1" onChange={handleSigmaXChange}></input>
        </div>
        <div>
            <label for="sigmaY">SimaY : </label>
            <input type="number" id="sigmaY" name="sigmaY" min="0" max="50" step="1" onChange={handleSigmaYChange}></input>
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

export default GaussinBlur;