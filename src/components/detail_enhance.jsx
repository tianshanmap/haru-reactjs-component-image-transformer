import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const DetailEnhance = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [sigmaS,setSigmaS] = useState(1);  
  const [sigmaR,setSigmaR] = useState(1);  

  const handleSigmaSChange = async (event) => {
    setSigmaS(event.target.value);
    setRemoteUrl(api.transform_detail_enhance(name,event.target.value,sigmaR));
  };
  const handleSigmaRChange = async (event) => {
    setSigmaR(event.target.value);
    setRemoteUrl(api.transform_detail_enhance(name,sigmaS,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
            <label for="sigmaS">SigmaS : </label>
            <input type="number" id="sigmaS" name="sigmaS" min="0" max="50" step="1" onChange={handleSigmaSChange}></input>
        </div>
        <div>
            <label for="sigmaR">SigmaR : </label>
            <input type="number" id="sigmaR" name="sigmaR" min="0" max="50" step="1" onChange={handleSigmaRChange}></input>
        </div>
        <div>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default DetailEnhance;