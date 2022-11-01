const cloudinary = require("cloudinary").v2;

const BlogModel = require("../../models/Blog");

cloudinary.config({
  cloud_name: "dqowaxfln",
  api_key: "456697836426261",
  api_secret: "Fnb8mKrkYZrTaeS71e-YpnssgDo",
  secure: true,
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
    const BlogImage_upload = await cloudinary.uploader.upload(
      Blogimages.tempFilePath,
      {
        folder: "blog_images",
        width: 400,
      }
    );

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

  static blogview = async (req, res) => {
    try {
      const viewdata = await BlogModel.findById(req.params.id);
      res.status(200).json({
        success: true,
        viewdata,
      });
    } catch (err) {
      console.log(err);
    }
  };

  static blogupdate = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      const imageId = data.image.public_id;
      // console.log(imageId);
      await cloudinary.uploader.destroy(imageId); //Delete image

      const Blogimages = req.files.image;
      // console.log(imagefile);
      const BlogImage_upload = await cloudinary.uploader.upload(
        Blogimages.tempFilePath,
        {
          folder: "blog_images",
          width: 400,
        }
      );
      const update = await BlogModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: BlogImage_upload.public_id,
          url: BlogImage_upload.secure_url,
        },
      });
      //saving data
      await update.save();
      res.status(202).send({
        //update http code = 202
        status: "success",
        message: "Update Successfully 😃🍻",
        Image: BlogImage_upload.secure_url,
      });

    } catch (err) {
      console.log(err);
    }
  };

  static blogdelete = async (req, res) => {
    try {
      const user = await BlogModel.findById(req.params.id);
      const image_id = user.image.public_id;
      // console.log(image_id);
      await cloudinary.uploader.destroy(image_id);
      const result = await BlogModel.findByIdAndDelete(req.params.id);

      //saving data
      await result.save();
      res.status(200).send({
        status: "success",
        message: "Delete Successfully 😃🍻"
      });
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = BlogController;
