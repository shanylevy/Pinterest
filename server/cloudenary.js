
import cloudinary from 'cloudinary'

CLOUDINARY_URL= 'cloudinary://253576945129978:pHJqPIHmlqKWTxMMYLgezpq5I-c@pinterestcp'

cloudinary.config({  
cloud_name: 'pinterestcp', 
api_key: '253576945129978', 
api_secret: 'pHJqPIHmlqKWTxMMYLgezpq5I-c'

})
module.exports = cloudinary;