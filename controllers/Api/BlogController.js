const cloudinary = require('cloudinary').v2;

const BlogModel = require("../../models/Blog");

cloudinary.config({ 
    cloud_name: 'dqowaxfln', 
    api_key: '456697836426261', 
    api_secret: 'Fnb8mKrkYZrTaeS71e-YpnssgDo',
    secure: true
  });


class BlogController {
  static blogs = async (req, res) => {
    try {
      const blogs = await BlogModel.find();
      res.status(200).json({
        success: true,
        blogs,
      });
    } catch (err) {
      console.log(err);
    }
  };

  static BlogInsert = async (req, res) => {
    // console.log(req.body);
    // console.log(req.files);
    const Blogimages = req.files.image;
    // console.log(imagefile);
    const BlogImage_upload = await cloudinary.uploader.upload(Blogimages.tempFilePath,
      {
        folder: "blog_images",
        width: 400,
      })

    try {
      const result = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: BlogImage_upload.public_id,
          url: BlogImage_upload.secure_url,
        },
      });
      //saving data
      await result.save();
      res.status(201).send({
        status: "success",
        message: "Registration Successfully 😃🍻",
        Image: BlogImage_upload.secure_url,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = BlogController;
