import * as faceapi from 'face-api.js';

const loadModels = async (uri = '/models') => {
  await faceapi.nets.tinyFaceDetector.loadFromUri(uri);
  await faceapi.nets.faceRecognitionNet.loadFromUri(uri);
  await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
};

const getEmbedding = async (videoElement) => {
  const detection = await faceapi
    .detectSingleFace(videoElement, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  return detection ? detection.descriptor : null;
};

const compareEmbeddings = (embedding1, embedding2, threshold = 0.6) => {
  const distance = faceapi.euclideanDistance(embedding1, embedding2);
  return distance < threshold;
};

const detectFaceInImage = async (imageElement) => {
    const detections = await faceapi.detectAllFaces(imageElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
    return detections.length > 0;
  };


module.exports = {
  loadModels,
  getEmbedding,
  compareEmbeddings,
  detectFaceInImage
};