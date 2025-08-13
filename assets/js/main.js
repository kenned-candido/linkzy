const useGithubAvatar = false; // true = use GitHub | false = use local image
const githubUsername = "kenned-candido"; // GitHub User
const localImagePath = "assets/images/profile.png"; // Local image path

// Select profile picture
const profilePicture = document.getElementById("profile-picture");

// Sets the image based on the choice
if (profilePicture) {
    if (useGithubAvatar) {
        profilePicture.src = `https://github.com/${githubUsername}.png`;
    } else {
        profilePicture.src = localImagePath;
    }
}
