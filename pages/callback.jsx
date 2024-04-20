import React, { useEffect } from 'react';
import express from 'express';
import fetch from 'node-fetch';
export default function Callback() {
  app.get('/callback', function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
  }
  });
    const webhook = new Webhook("")
    webhook.send(
    [
    {
        title: "Auth",
        color: "#5865F2",
        description: "",
        timestamp: new Date(),
    }
    ]
    )
  return <>Authorized Successfully</>;
}
