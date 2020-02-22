const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');

// @route     POST /api/url/shorten
// @desc      Create short URL
router.post('/shorten', async (req, res) => {
  console.log("Posting bhupesh again");
  console.log("Posting API");
  console.log(req.body)
  const { longUrl, customShortUrl } = req.body;
  
  //check if custom short url is already used or not
  if (customShortUrl) {
    const customShortUrlDetails =await Url.findOne({ urlCode: customShortUrl });
    if (customShortUrlDetails) {
      return res.status(500).send(JSON.stringify( { status:"failure", message: "Custom short Url is already in Use, please select some other url" }));
    }
  }
  const baseUrl = config.get('baseUrl');

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(500).send(JSON.stringify( { status:"failure", message: "Invalid base url" }));
  }

  // Create url code
  let urlCode = shortid.generate();
  if (customShortUrl) urlCode = customShortUrl;


  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.send(JSON.stringify( { status:"success", message: url.shortUrl }));
      } else {
        const shortUrl = baseUrl + '/' + urlCode;
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: today,
          expiryDate: tomorrow
        });

        await url.save();
        res.send(JSON.stringify( { status:"success", message: url.shortUrl }));

      }
    } catch (err) {
      res.status(500).send(JSON.stringify( { status:"failure", message: "Server error" }));
    }
  } else {
    res.status(500).send(JSON.stringify( { status:"failure", message: "Invalid long url" }));
  }
});





module.exports = router;
