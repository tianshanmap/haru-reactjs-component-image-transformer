# Install dependencies for the project 
```
npm install
```
# Run the reactjs project
```
npm run dev
```
# Install a new dependency
```
npm install react-router-dom
```
# Create an importable reactjs component in github
## create a index.js to contain your component
### Make sure the name of the file must be index.js, other name will not work.
```
  index.js can contain only one export component and has to be the deault component.  
  export default ImageViewer;
``` 
## use the component from other component
### npm install github repo
```
https://github.com/tianshanmap/haru-reactjs-component-imageViewer
```
### import the component in the code
```
import ImageViewerOne from "haru-reactjs-component-imageViewer";

```  
### Make sure not to have .git as part of the repo name in both npm install and import in the code.
npm install https://github.com/tianshanmap/haru-service-api