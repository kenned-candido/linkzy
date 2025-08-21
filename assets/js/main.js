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

// Modal Donate
const donateBtn = document.getElementById("donate-btn");
const donateModal = document.getElementById("donate-modal");
const closeModal = document.querySelector(".close");

if (donateBtn && donateModal && closeModal) {
    donateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        donateModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        donateModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === donateModal) {
            donateModal.style.display = "none";
        }
    });
}
