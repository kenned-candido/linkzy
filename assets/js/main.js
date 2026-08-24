/* Config */
const useGithubAvatar = false; // true = GitHub avatar | false = local image
const githubUsername = "kenned-candido";
const localImagePath = "assets/images/profile.png";

/* Profile picture */
const profilePicture = document.getElementById("profile-picture");

if (profilePicture) {
    profilePicture.src = useGithubAvatar
        ? `https://github.com/${githubUsername}.png`
        : localImagePath;
}

/* Donate modal */
const donateBtn = document.getElementById("donate-btn");
const donateModal = document.getElementById("donate-modal");
const closeBtn = document.querySelector(".close");

function openModal() {
    if (donateModal) donateModal.style.display = "flex";
}

function closeModal() {
    if (donateModal) donateModal.style.display = "none";
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

    /* Auto-open modal if URL contains #donate-modal */
    if (window.location.hash === "#donate-modal") {
        openModal();
    }
}

/* Subtle Interactive Tilt Effect for Desktop Devices */
const container = document.querySelector('.container');
if (container && window.matchMedia('(pointer: fine)').matches) {
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 6;
        const rotateY = (x / rect.width) * 6;
        container.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        container.style.transition = 'transform 0.5s ease';
    });

    container.addEventListener('mouseenter', () => {
        container.style.transition = 'transform 0.1s ease-out';
    });
}