import * as faceapi from 'face-api.js';

const initializeFaceApi = async (uri = '/models') => {
  await faceapi.nets.tinyFaceDetector.loadFromUri(uri);
  await faceapi.nets.faceRecognitionNet.loadFromUri(uri);
  await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
};

module.exports = initializeFaceApi
