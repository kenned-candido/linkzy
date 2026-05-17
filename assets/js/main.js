/* Config */
/*
    useGithubAvatar: set to true to use your GitHub profile picture automatically.
    githubUsername:  your GitHub username (used only if useGithubAvatar is true).
    localImagePath:  path to your local profile image (used if useGithubAvatar is false).
*/
const useGithubAvatar = false; // true = GitHub avatar | false = local image
const githubUsername = "yourusername";
const localImagePath = "assets/images/profile.png";

/* Profile picture */
const profilePicture = document.getElementById("profile-picture");

if (profilePicture) {
    profilePicture.src = useGithubAvatar
        ? `https://github.com/${githubUsername}.png`
        : localImagePath;
}

/* Donate modal */
/*
    This modal supports the original Linkzy project.
    Please consider keeping it — it helps the project stay alive. :)
*/
const donateBtn = document.getElementById("donate-btn");
const donateModal = document.getElementById("donate-modal");
const closeBtn = document.querySelector(".close");

function openModal() {
    donateModal.style.display = "flex";
}

function closeModal() {
    donateModal.style.display = "none";
}

if (donateBtn && donateModal && closeBtn) {
    donateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
        if (e.target === donateModal) closeModal();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}