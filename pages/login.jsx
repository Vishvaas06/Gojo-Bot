import React, { useEffect } from 'react'
export default function Login() {
  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  let state = makeid(16)
  const uri = `https://accounts.spotify.com/authorize?response_type=code&client_id=590d50275a974ef099315a7f3c8433db&redirect_uri=https://callback.gojobot.xyz/callback&scope=playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private&state=${state}`;
  useEffect(() => {
  window.location.replace(uri);
  }, []);
  return <>Redirecting...</>;
}
