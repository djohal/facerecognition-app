import React from 'react';
import './facerecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='center ma'>
      <div className="absolute mt2">
        <img id='inputImage' alt='' src={imageUrl} max-width='500px' height='auto'/>
        <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>  
    </div>
  );
}
export default FaceRecognition;