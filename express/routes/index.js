const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// @route     GET /:code
// @desc      Redirect to long/original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      let expiryDate=url.expiryDate;
      if(expiryDate) {
        expiryDate=new Date(expiryDate)
        if(expiryDate < new Date()) return res.status(404).json('short url expired');
      }
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});



router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




module.exports = router;
