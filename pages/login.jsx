export default function Login() {
  useEffect(() => {
  const state = generateRandomString(16);
  window.location.replace('https://accounts.spotify.com/authorize?response_type=code&client_id=a47de44f66a74e27ac5db06119628b2e&redirect_uri=http://gojobot.xyz/callback&scope=playlist-read-private%20playlist-read-collaborative&state=' + ${state});
  return (
    <>Redirecting...</>
  );
}
