import { useState } from "react";
import styles from "./image_transformer.module.css";
import api from "haru-service-api";

export function ImageTransformer({name,parent,list,onExit,getViewEndPoint}){
  console.log("----ImageViewer------");

  const [flags,setFlags] = useState(
    {
      isRotationOpen: false,
      isGaussinBlurOpen: false,
      isMedianBlurOpen: false,
      isBilateralOpen: false,
    }
  );
  const [remoteUrl,setRemoteUrl] = useState(getViewEndPoint(name));
  // const [isRotationOpen, setIsRotationOpen] = useState(false);
  // const [isGaussinBlurOpen, setIsGaussinBlurOpen] = useState(false);
  // const [isMedianBlurOpen, setIsMedianBlurOpen] = useState(false);
  // const [isBilateralOpen, setIsBilateralOpen] = useState(false);
  const [angle, setAngle] = useState(0);
  const [sigmaX, setSigmaX] = useState(0);
  const [sigmaY, setSigmaY] = useState(0);
  const [ksize, setKsize] = useState(1);
  const [diameter, setDiameter] = useState(5);
  const [sigmaColor, setSigmaColor] = useState(5);
  const [sigmaSpace, setSigmaSpace] = useState(5);

  const handleRotation = async (event) => {
    setFlags(
      {
        isRotationOpen: true,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
      }
    );
  };
  const handleRotationChange = (event) => {
    console.log("handleRotationChange-angle=" + event.target.value);
    setAngle(event.target.value);
    setRemoteUrl(api.transform_rotation(name,event.target.value));
  }

  const handleSigmaXChange = (event) => {
    console.log("handleSigmaXChange-sigmaX=" + event.target.value);
    setSigmaX(event.target.value);
    setRemoteUrl(api.transform_gaussinblur(name,event.target.value,sigmaY));
  }
  const handleSigmaYChange = (event) => {
    console.log("handleSigmaYChange-sigmaY=" + event.target.value);
    setSigmaY(event.target.value);
    setRemoteUrl(api.transform_gaussinblur(name,sigmaX,event.target.value));
  }
  const handleKsizeChange = (event) => {
    console.log("handleKsizeChange-ksize=" + event.target.value);
    setKsize(event.target.value);
    setRemoteUrl(api.transform_medianblur(name,event.target.value));
  }
  const handleDiameterChange = (event) => {
    console.log("handleDiameterChange-d=" + event.target.value);
    setDiameter(event.target.value);
    setRemoteUrl(api.transform_bilateral(name,event.target.value,sigmaColor,sigmaSpace));
  }
  const handleSigmaColorChange = (event) => {
    console.log("handleSigmaSpaceChange-sigmaColor=" + event.target.value);
    setSigmaColor(event.target.value);
    setRemoteUrl(api.transform_bilateral(name,diameter,event.target.value,sigmaSpace));
  }
  const handleSigmaSpaceChange = (event) => {
    console.log("handleSigmaSpaceChange-sigmaSpace=" + event.target.value);
    setSigmaSpace(event.target.value);
    setRemoteUrl(api.transform_bilateral(name,diameter,sigmaColor,event.target.value));
  }
  const handleRotationSave = (event) => {
    api.transform_rotation_save(name,angle);
  }

  const handleGrey = async (event) => {
    setRemoteUrl(api.transform_grey(name));
  };
  const handleGreySave = async (event) => {
    api.transform_grey_save(name);
  };

  const handleBlur = async (event) => {
    console.log("handleBlur..." + api.transform_blur(name))
    setRemoteUrl(api.transform_blur(name));
  };
  const handleBlurSave = async (event) => {
    api.transform_blur_save(name);
  };

  const handleGaussinBlur = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: true,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
      }
    )
  };
  const handleMedianBlur = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: true,
        isBilateralOpen: false,
      }
    )
  };
  const handleBilateral = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: true,
      }
    )
  };
  const handleVerticalFlip = async (event) => {
      setRemoteUrl(api.transform_flip(name,0));
  };
  const handleHorizentalFlip = async (event) => {
      setRemoteUrl(api.transform_flip(name,1));
  };
  const handleGaussinBlurSave = async (event) => {
    api.transform_gaussinblur_save(name);
  };

  const handleScaleUp = async (event) => {
    document.getElementById("img_container").width = document.getElementById("img_container").width + 100;
  };
  const handleScaleDown = async (event) => {
    document.getElementById("img_container").width = document.getElementById("img_container").width - 100;
  };
  return (
    <div className={styles.image_block_container}>
      <div className={styles.image_cmd_container}>
        <div className={styles.image_cmd}>
            <button className={styles.action_btn} onClick={handleScaleUp}>+</button>
            <button className={styles.action_btn} onClick={handleScaleDown}>-</button>
            <button className={styles.action_btn} onClick={handleRotation}>Rotation</button>
            <button className={styles.action_btn} onClick={handleGrey}>Grey</button>
            <button className={styles.action_btn} onClick={handleGreySave}>Save Grey</button>
            <button className={styles.action_btn} onClick={handleBlur}>Blur</button>
            <button className={styles.action_btn} onClick={handleBlurSave}>Save Blur</button>
            <button className={styles.action_btn} onClick={handleGaussinBlur}>Gaussin Blur</button>
            <button className={styles.action_btn} onClick={handleGaussinBlurSave}>Save Gaussin Blur</button>
            <button className={styles.action_btn} onClick={handleMedianBlur}>Median Blur</button>
            <button className={styles.action_btn} onClick={handleBilateral}>Bilateral</button>
            <button className={styles.action_btn} onClick={handleVerticalFlip}>Vertical Flip</button>
            <button className={styles.action_btn} onClick={handleHorizentalFlip}>Horizental Flip</button>
        </div>
        <div className={styles.image_cmd}>
            {flags.isRotationOpen &&
              <div class={styles.transform_rotation}>
                <div>
                  <label for="angle">Angle : </label>
                  <input type="number" id="angle" name="quantity" min="1" max="180" step="1" onChange={handleRotationChange}></input>
                  <button className={styles.action_btn} onClick={handleRotationSave}>Save</button>
                </div>
              </div>  
            }
            {flags.isGaussinBlurOpen &&
              <div class={styles.transform_rotation}>
                <div>
                  <label for="sigmaX">SimaX : </label>
                  <input type="number" id="sigmaX" name="sigmaX" min="0" max="50" step="1" onChange={handleSigmaXChange}></input>
                  <label for="sigmaY">SimaY : </label>
                  <input type="number" id="sigmaY" name="sigmaY" min="0" max="50" step="1" onChange={handleSigmaYChange}></input>
                  <button className={styles.action_btn} onClick={handleRotationSave}>Save</button>
                </div>
              </div>  
            }
            {flags.isMedianBlurOpen &&
              <div class={styles.transform_rotation}>
                <div>
                  <label for="ksize">ksize : </label>
                  <input type="number" id="ksize" name="ksize" min="1" max="11" step="2" onChange={handleKsizeChange}></input>
                </div>
              </div>  
            }
            {flags.isBilateralOpen &&
              <div class={styles.transform_rotation}>
                <div>
                  <label for="diameter">Diameter : </label>
                  <input type="number" id="diameter" name="diameter" min="5" max="50" step="1" onChange={handleDiameterChange}></input>
                  <label for="sigmaColor">Sigma Color : </label>
                  <input type="number" id="sigmaColor" name="sigmaColor" min="10" max="100" step="1" onChange={handleSigmaColorChange}></input>
                  <label for="sigmaSpace">Sigma Space : </label>
                  <input type="number" id="sigmaSpace" name="sigmaSpace" min="10" max="100" step="1" onChange={handleSigmaSpaceChange}></input>
                </div>
              </div>  
            }
        </div>
      </div>
      <div className={styles.image_container}>
        <img id="img_container" className={styles.image} src={remoteUrl} width="500"></img>
      </div>
    </div>
  );
}

export default ImageTransformer;