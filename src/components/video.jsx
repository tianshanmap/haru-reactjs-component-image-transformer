import { useState,useEffect } from "react";
import styles from "./greyscale.module.css";
import api from "haru-service-api";

const VideoPlayer = ({name,url,onExit}) => {
  const [remoteUrl,setRemoteUrl] = useState(url);
  const [captureDirectory,setCaptureDirectory] = useState("");

  useEffect(() => {
    // 1. Declare the inner async function
    const fetchData = async () => {
      try {
        const result = await api.capture_directory();
        const directory = result.filepath;
        setCaptureDirectory(directory);
        console.log("VideoPlayer=directory=" + directory);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    };
    // 2. Invoke the function immediately
    fetchData();
  }, []); 

  const getFilename = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return captureDirectory + "/" + `image_${timestamp}.jpeg`;    

  }
  const handlePlay = async (event) => {
    const video = document.getElementById('myVideo');
    const canvas = document.createElement('canvas');

    // Match canvas size to the video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
    console.log(imageDataUrl);
    const request = {
      filename: getFilename(),
      payload: imageDataUrl,
    }
    await api.captureImage(request);
  };

  return (
    <div class={styles.greyscale_container}>
      <div class={styles.greyscale_image}>
          <video id="myVideo"  crossorigin="anonymous" className={styles.video_source} width="1024" height="768" controls onClick={handlePlay}>
             <source src="http://localhost:9082/media/video/play?id=/Users/developer/T9/document/seijin/japan-movie.mp4" type="video/mp4"/>
          </video>
      </div>
      <div class={styles.greyscale_controller}>
        <div>
          <button className={styles.action_btn} onClick={handlePlay}>Capture</button>
          <button className={styles.action_btn} onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>  
  );
}

export default VideoPlayer;