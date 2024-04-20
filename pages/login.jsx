export default function Login() {
  const state = generateRandomString(16);
  return (
    <Redirect to=`https://accounts.spotify.com/authorize?response_type=code&client_id=a47de44f66a74e27ac5db06119628b2e&redirect_uri=http://gojobot.xyz/callback&scope=playlist-read-private%20playlist-read-collaborative&state={state}`  />
  );
}
