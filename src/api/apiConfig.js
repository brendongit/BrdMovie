const apiConfig = {
  baseUrl: "http://api.themoviedb.org/3/",
  apiKey: "6ed4a19a68a5433a5b2f1ac76e56df9c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
