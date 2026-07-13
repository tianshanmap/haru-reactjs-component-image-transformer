import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const Blur = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);

  const handleBlur = async (event) => {
      setRemoteUrl(api.transform_blur(name));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
          <button className={styles.action_btn} onClick={handleBlur}>Blur</button>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default Blur;