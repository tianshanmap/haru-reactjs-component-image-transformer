import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const MedianBlur = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [ksize,setKsize] = useState(1);  

  const handleKsizeChange = async (event) => {
    setKsize(event.target.value);
    setRemoteUrl(api.transform_medianblur(name,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_controller}>
        <div>
            <label for="ksize">ksize : </label>
            <input type="number" id="ksize" name="ksize" min="1" max="11" step="2" onChange={handleKsizeChange}></input>
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

export default MedianBlur;