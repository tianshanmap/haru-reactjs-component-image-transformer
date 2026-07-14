import { useState } from "react";
import styles from "./image_transformer.module.css";
import api from "haru-service-api";
import GreyScale from "./components/greyscale";
import EdgePreserving from "./components/edge_preserving";
import DetailEnhance from "./components/detail_enhance";
import Contrast from "./components/contrast";
import Normalize from "./components/normalize";
import Bilateral from "./components/bilateral";
import MedianBlur from "./components/median_blur";
import GaussinBlur from "./components/gaussin_blur";
import Rotation from "./components/rotation";
import Sketch from "./components/sketch";
import Flip from "./components/flip";
import Grey from "./components/grey";
import Blur from "./components/blur";
import Stylization from "./components/stylization";
import VideoPlayer from "./components/video";

export function ImageTransformer({name,onExit}){
  const totalButtons = 16;
  const [remoteUrl,setRemoteUrl] = useState(api.getViewEndPoint(name));
  const [isImageContainer,setIsImageContainer] = useState(true);
  const [flags,setFlags] = useState(
    {
      isRotationOpen: false,
      isGaussinBlurOpen: false,
      isMedianBlurOpen: false,
      isBilateralOpen: false,
      isNormalizeOpen: false,
      isContrastOpen: false,
      isDetailEnhanceOpen: false,
      isGreenscaleOpen: false,
      isEdgePreservingOpen: false,
      isSketchOpen: false,
      isFlipOpen: false,
      isGreyOpen: false,
      isBlurOpen: false,
      isStyleOpen: false,
      isVideoOpen: false,
    }
  );
  const performDisable = (id,value) => {
    document.getElementById(id + "").disabled = value;
  }
  const disableButton = (id) => {
    const current_index = parseInt(id);
    for (let i = 3; i <= totalButtons; i++) {
      if (i != current_index)
        performDisable(i,true)
    }  
  }
  const enableButton = () => {
    for (let i = 1; i <= totalButtons; i++) {
      performDisable(i,false);
    }  
  }

  const handleScaleUp = async (event) => {
    document.getElementById("img_container").width = document.getElementById("img_container").width + 100;
  };
  const handleScaleDown = async (event) => {
    document.getElementById("img_container").width = document.getElementById("img_container").width - 100;
  };
  const handleRotation = async (event) => {
    setFlags(
      {
        isRotationOpen: true,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
      }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleGaussinBlur = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: true,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
    }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleMedianBlur = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: true,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
    }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleBilateral = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: true,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
   }
   );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleNormalize = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: true,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleContrast = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: true,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleDetailEnhance = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: true,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
   }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleEdgePreserving = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: true,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
    }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleGreyscale = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: true,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
   }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleSketch = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: true,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleFlip = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: true,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
   }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleGrey = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: true,
        isBlurOpen: false,
        isStyleOpen: false,
      isVideoOpen: false,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleBlur = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: true,
        isStyleOpen: false,
      isVideoOpen: false,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleStyle = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: true,
      isVideoOpen: false,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };
  const handleVideo = async (event) => {
    setFlags(
      {
        isRotationOpen: false,
        isGaussinBlurOpen: false,
        isMedianBlurOpen: false,
        isBilateralOpen: false,
        isNormalizeOpen: false,
        isContrastOpen: false,
        isDetailEnhanceOpen: false,
        isEdgePreservingOpen: false,
        isGreenscaleOpen: false,
        isSketchOpen: false,
        isFlipOpen: false,
        isGreyOpen: false,
        isBlurOpen: false,
        isStyleOpen: false,
        isVideoOpen: true,
     }
    );
    disableButton(event.target.getAttribute("id"));
    setIsImageContainer(false);
  };

  const handleSketchExit = (event) => {
    setFlags(
      {
        ...flags,
        isSketchOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleFlipExit = (event) => {
    setFlags(
      {
        ...flags,
        isFlipOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleGreyScaleExit = (event) => {
    setFlags(
      {
        ...flags,
        isGreenscaleOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleEdgeProcessingExit = (event) => {
    setFlags(
      {
        ...flags,
        isEdgePreservingOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleDetailEnhanceExit = (event) => {
    setFlags(
      {
        ...flags,
        isDetailEnhanceOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleContrastExit = (event) => {
    setFlags(
      {
        ...flags,
        isContrastOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleNormalizeExit = (event) => {
    setFlags(
      {
        ...flags,
        isNormalizeOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleBilateralExit = (event) => {
    setFlags(
      {
        ...flags,
        isBilateralOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleMedianExit = (event) => {
    setFlags(
      {
        ...flags,
        isMedianBlurOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleGaussinExit = (event) => {
    setFlags(
      {
        ...flags,
        isGaussinBlurOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleRotationExit = (event) => {
    setFlags(
      {
        ...flags,
        isRotationOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleGreyExit = (event) => {
    setFlags(
      {
        ...flags,
        isGreyOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleBlurExit = (event) => {
    setFlags(
      {
        ...flags,
        isBlurOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleStyleExit = (event) => {
    setFlags(
      {
        ...flags,
        isStyleOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }
  const handleVideoExit = (event) => {
    setFlags(
      {
        ...flags,
        isVideoOpen: false,
     }
    )
    setIsImageContainer(true);
    enableButton();
  }

  return (
    <div className={styles.image_block_container}>
      <div className={styles.image_cmd_container}>
        <div className={styles.image_cmd}>
            <button id="1" className={styles.action_btn} onClick={handleScaleUp}>+</button>
            <button id="2" className={styles.action_btn} onClick={handleScaleDown}>-</button>
            <button id="3" className={styles.action_btn} onClick={handleRotation}>Rotation</button>
            <button id="4" className={styles.action_btn} onClick={handleGrey}>Grey</button>
            <button id="5" className={styles.action_btn} onClick={handleGreyscale}>Grey Scale</button>
            <button id="6" className={styles.action_btn} onClick={handleBlur}>Blur</button>
            <button id="7" className={styles.action_btn} onClick={handleGaussinBlur}>Gaussin Blur</button>
            <button id="8" className={styles.action_btn} onClick={handleMedianBlur}>Median Blur</button>
            <button id="9" className={styles.action_btn} onClick={handleBilateral}>Bilateral</button>
            <button id="10" className={styles.action_btn} onClick={handleFlip}>Flip</button>
            <button id="11" className={styles.action_btn} onClick={handleNormalize}>Normalize</button>
            <button id="12" className={styles.action_btn} onClick={handleContrast}>Contrast</button>
            <button id="13" className={styles.action_btn} onClick={handleDetailEnhance}>Detail Enhance</button>
            <button id="14" className={styles.action_btn} onClick={handleEdgePreserving}>Edge Preserving</button>
            <button id="15" className={styles.action_btn} onClick={handleSketch}>Sketch</button>
            <button id="16" className={styles.action_btn} onClick={handleStyle}>Stylization</button>
            <button id="17" className={styles.action_btn} onClick={handleVideo}>Video</button>
        </div>
        <div className={styles.transform_component}>
            {flags.isRotationOpen &&
              <Rotation name={name} url={remoteUrl} onExit={handleRotationExit}></Rotation>
            }
            {flags.isGaussinBlurOpen &&
              <GaussinBlur name={name} url={remoteUrl} onExit={handleGaussinExit}></GaussinBlur>
            }
            {flags.isMedianBlurOpen &&
              <MedianBlur name={name} url={remoteUrl} onExit={handleMedianExit}></MedianBlur>
            }
            {flags.isBilateralOpen &&
              <Bilateral name={name} url={remoteUrl} onExit={handleBilateralExit}></Bilateral>
            }
            {flags.isNormalizeOpen &&
              <Normalize name={name} url={remoteUrl} onExit={handleNormalizeExit}></Normalize>
            }
            {flags.isContrastOpen &&
              <Contrast name={name} url={remoteUrl} onExit={handleContrastExit}></Contrast>
            }
            {flags.isDetailEnhanceOpen &&
              <DetailEnhance name={name} url={remoteUrl} onExit={handleDetailEnhanceExit}></DetailEnhance>
            }
            {flags.isEdgePreservingOpen &&
              <EdgePreserving name={name} url={remoteUrl} onExit={handleEdgeProcessingExit}></EdgePreserving>
            }
            {flags.isGreenscaleOpen &&
              <GreyScale name={name} url={remoteUrl} onExit={handleGreyScaleExit}></GreyScale>
            }
            {flags.isSketchOpen &&
              <Sketch name={name} url={remoteUrl} onExit={handleSketchExit}></Sketch>
            }
            {flags.isFlipOpen &&
              <Flip name={name} url={remoteUrl} onExit={handleFlipExit}></Flip>
            }
            {flags.isGreyOpen &&
              <Grey name={name} url={remoteUrl} onExit={handleGreyExit}></Grey>
            }
            {flags.isBlurOpen &&
              <Blur name={name} url={remoteUrl} onExit={handleBlurExit}></Blur>
            }
            {flags.isStyleOpen &&
              <Stylization name={name} url={remoteUrl} onExit={handleStyleExit}></Stylization>
            }
            {flags.isVideoOpen &&
              <VideoPlayer onExit={handleVideoExit}></VideoPlayer>
            }
        </div>
      </div>
      {isImageContainer &&
        <div className={styles.image_container}>
          <img id="img_container" className={styles.image} src={remoteUrl} width="500"></img>
        </div>
      }
    </div>
  );
}

export default ImageTransformer;