import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const Bilateral = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [diameter,setDiameter] = useState(5);  
  const [sigmaColor,setSigmaColor] = useState(10);  
  const [sigmaSpace,setSigmaSpace] = useState(10);  

  const handleDiameterChange = async (event) => {
    setDiameter(event.target.value);
    setRemoteUrl(api.transform_bilateral(name,event.target.value,sigmaColor,sigmaSpace));
  };
  const handleSigmaColorChange = async (event) => {
    setSigmaColor(event.target.value);
    setRemoteUrl(api.transform_bilateral(name,diameter,event.target.value,sigmaSpace));
  };
  const handleSigmaSpaceChange = async (event) => {
    setSigmaSpace(event.target.value);
    setRemoteUrl(api.transform_bilateral(name,diameter,sigmaColor,event.target.value));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
              <label for="diameter">Diameter : </label>
              <input type="number" id="diameter" name="diameter" min="5" max="50" step="1" onChange={handleDiameterChange}></input>
        </div>
        <div>
              <label for="sigmaColor">Sigma Color : </label>
              <input type="number" id="sigmaColor" name="sigmaColor" min="10" max="100" step="1" onChange={handleSigmaColorChange}></input>
        </div>
        <div>
              <label for="sigmaSpace">Sigma Space : </label>
              <input type="number" id="sigmaSpace" name="sigmaSpace" min="10" max="100" step="1" onChange={handleSigmaSpaceChange}></input>
        </div>
        <div>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default Bilateral;