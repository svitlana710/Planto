const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['./src/assets/img/.{jpg,jpeg,png}'], {
    destination: 'build/static/media',
    plugins: [
      imageminWebp({ quality: 80 }) 
    ]
  });
})();