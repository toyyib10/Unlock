import * as faceapi from 'face-api.js';

const matchFace = (embedding1, embedding2, threshold = 0.6) => {
  const distance = faceapi.euclideanDistance(embedding1, embedding2);
  return distance < threshold;
};

module.exports = matchFace;
