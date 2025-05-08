import * as faceapi from 'face-api.js';

// Load models from a URL or local directory
export const loadModels = async (uri = '/models') => {
  await faceapi.nets.tinyFaceDetector.loadFromUri(uri);
  await faceapi.nets.faceRecognitionNet.loadFromUri(uri);
  await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
};

// Get face embedding from a video element
export const getEmbedding = async (videoElement) => {
  const detection = await faceapi
    .detectSingleFace(videoElement, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  return detection ? detection.descriptor : null;
};

export const compareEmbeddings = (embedding1, embedding2, threshold = 0.6) => {
  const distance = faceapi.euclideanDistance(embedding1, embedding2);
  return distance < threshold;
};



