import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const Rotation = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [angle,setAngle] = useState(0);  

  const handleRotationChange = async (event) => {
    setAngle(event.target.value);
    setRemoteUrl(api.transform_rotation(name,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
            <label for="angle">Angle : </label>
            <input type="number" id="angle" name="quantity" min="1" max="180" step="1" onChange={handleRotationChange}></input>
        </div>
        <div>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default Rotation;