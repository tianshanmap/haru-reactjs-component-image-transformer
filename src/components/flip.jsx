import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const Flip = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);

  const handleVertical = async (event) => {
      setRemoteUrl(api.transform_flip(name,0));
  };
  const handleHorizental = async (event) => {
      setRemoteUrl(api.transform_flip(name,1));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
          <button className={styles.action_btn} onClick={handleVertical}>Vertical</button>
          <button className={styles.action_btn} onClick={handleHorizental}>Horizental</button>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default Flip;