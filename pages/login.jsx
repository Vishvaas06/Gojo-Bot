import React, { useEffect } from 'react'
import window from 'global'
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
  const state = makeid(16)
  const uri = 'https://accounts.spotify.com/authorize?response_type=code&client_id=a47de44f66a74e27ac5db06119628b2e&redirect_uri=http://gojobot.xyz/callback&scope=playlist-read-private%20playlist-read-collaborative&state=' + {state};
  useEffect(() => {
  window.location.replace(uri);
  }, []);
  return <>Redirecting...</>;
}
