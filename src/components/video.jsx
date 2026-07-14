import { useState,useEffect } from "react";
import styles from "./video.module.css";
import api from "haru-service-api";

const VideoPlayer = ({onExit}) => {
  const [captureDirectory,setCaptureDirectory] = useState("");
  const [isVideoListOpen,setIsVideoListOpen] = useState(true);
  const [isPlayerOpen,setIsPlayerOpen] = useState(false);
  const [data,setData] = useState({files:[]});
  const [current,setCurrent] = useState("");

  useEffect(() => {
    // 1. Declare the inner async function
    const fetchData = async () => {
      try {
        const result = await api.capture_directory();
        const directory = result.filepath;
        setCaptureDirectory(directory);
        console.log("VideoPlayer=directory=" + directory);
        const response = await api.getDirectory(directory);
        setData(response);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    };
    // 2. Invoke the function immediately
    fetchData();
  }, []); 

  const to_mb = (bytes) => {
    const mb = bytes / (1024 ** 2);
    return mb.toFixed(2) + ' MB';
  } 
  const MB_PER_MINUTE = 300/15.38; 
  const estimateMinutes = (bytes) => {
    const mb = bytes / (1024 ** 2);
    if (mb <= 0) return 0;
    return (mb / MB_PER_MINUTE).toFixed(2);
  }

  const getFilename = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return captureDirectory + "/capture/" + `image_${timestamp}.jpeg`;    

  }
  const handleCapture = async (event) => {
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

  const handlePlay = async (event) => {
    const name = event.target.getAttribute("name");
    setCurrent(name);
    setIsPlayerOpen(true);
    setIsVideoListOpen(false);
  }

  const handleBack = async (event) => {
    setIsPlayerOpen(false);
    setIsVideoListOpen(true);
  }

  return (
    <>
      {isVideoListOpen &&
        <div className={styles.video_list_container}>
          <table className={styles.video_table}>
            <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  </tr>
            </thead>
            <tbody>
                {/* 2. Use .map() to loop through the array and return table rows */}
                {data.files.map((item) => (
                <tr>
                    <td>
                      <button name={item.path} parent={item.parent_path} onClick={handlePlay} className={styles.link_button}>Play :: {item.name}</button>
                    </td>
                    <td>{to_mb(item.size)}</td>
                    <td>{estimateMinutes(item.size)}Min</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      }
      {isPlayerOpen &&
        <div class={styles.greyscale_container}>
          <div class={styles.greyscale_image}>
              <video id="myVideo"  crossorigin="anonymous" className={styles.video_source} width="1024" height="768" controls onClick={handleCapture}>
                <source src={api.getViewEndPoint(current)} type="video/mp4"/>
              </video>
          </div>
          <div class={styles.greyscale_controller}>
            <div>
              <button className={styles.action_btn} onClick={handleCapture}>Capture</button>
              <button className={styles.action_btn} onClick={handleBack}>Back To List</button>
              <button className={styles.action_btn} onClick={onExit}>Exit</button>
            </div>
          </div>
        </div>  
      }
    </>
  );
}

export default VideoPlayer;