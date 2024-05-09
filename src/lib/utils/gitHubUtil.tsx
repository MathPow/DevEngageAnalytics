export function getBasicInformation() {
  if (inputRef.current) {
    axios
      .get("https://api.github.com/users/" + inputRef.current.value)
      .then((response: any) => {
        // setInfo(response.data);
        console.error("Success:", response.data);
        setAvatar(response.data.avatar_url);
        setInfo({
          public_repos: response.data.public_repos,
          followers: response.data.followers,
          following: response.data.following,
          avatar_url: response.data.avatar_url,
          id: response.data.id,
          login: response.data.login,
          name: response.data.name,
          bio: response.data.bio,
          location: response.data.location,
          created_at: response.data.created_at,
        });
      })
      .catch((error: any) => {
        console.error("Error:", error);
      });
  }
}
