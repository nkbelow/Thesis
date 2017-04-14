const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'djzaih6fz', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const get = function(name) {
  return cloudinary.image(name + '.jpg')
}

const upload = function(name) {
  cloudinary.uploader.upload("my_picture.jpg", function(result) { 
    cloudinary.uploader.rename(result.public_id, name)
  });
}

module.exports = {
  get: get,
  upload: upload
}