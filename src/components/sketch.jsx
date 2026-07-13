import { useState } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const Sketch = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [sigmaS,setSigmaS] = useState(60);  
  const [sigmaR,setSigmaR] = useState(0.07);  
  const [shadeFactor,setShadeFactor] = useState(0.02);  
  const [kind,setKind] = useState("grey");  

  const handleSigmaSChange = async (event) => {
    setSigmaS(event.target.value);
    setRemoteUrl(api.transform_sketch(name,kind,event.target.value,sigmaR,shadeFactor));
  };
  const handleSigmaRChange = async (event) => {
    setSigmaR(event.target.value);
    setRemoteUrl(api.transform_sketch(name,kind,sigmaS,event.target.value,shadeFactor));
  };
  const handleShadeFactorChange = async (event) => {
    setShadeFactor(event.target.value);
    setRemoteUrl(api.transform_sketch(name,kind,sigmaS,sigmaR,event.target.value));
  };
  const handleGrey = async (event) => {
    setKind("grey");
    setRemoteUrl(api.transform_sketch(name,"grey",sigmaS,sigmaR,shadeFactor));
  };
  const handleColor = async (event) => {
    setKind("color");
    setRemoteUrl(api.transform_sketch(name,"color",sigmaS,sigmaR,shadeFactor));
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_controller}>
        <div>
            <label for="sigmaS">SigmaS(0-200) : </label>
            <input type="number" id="sigmaS" name="sigmaS" min="0" max="200" step="1" onChange={handleSigmaSChange}></input>
        </div>
        <div>
            <label for="sigmaR">SigmaR(0-1) : </label>
            <input type="number" id="sigmaR" name="sigmaR" min="0" max="1" step="0.01" onChange={handleSigmaRChange}></input>
        </div>
        <div>
            <label for="shadeFactor">shade(0-0.1) : </label>
            <input type="number" id="sigmaR" name="sigmaR" min="0" max="0.1" step="0.01" onChange={handleShadeFactorChange}></input>
        </div>
        <div>
          <button className={styles.action_btn} onClick={handleGrey}>Grey</button>
          <button className={styles.action_btn} onClick={handleColor}>Color</button>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
      <div class={styles.greyscale_image}>
        <img id="img_container" src={remoteUrl} width="500"></img>
      </div>
    </div>  
  );
}

export default Sketch;