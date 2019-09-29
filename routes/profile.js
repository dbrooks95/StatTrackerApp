const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:gamertag', async (req, res) => {
  
    try {
        // Aunthentication for your Tracker Network app
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }
        
        // load peramaters into variables
        const { platform, gamertag} = req.params;

        // variable to store requested data
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {
            headers
        });

        // Convert response to json data
        const data = await response.json();

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({
                message: 'Profile Not Found'
            });
        }

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
});

module.exports = router;