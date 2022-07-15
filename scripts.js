//social icon hijinks
let iconBox = document.getElementById('icon-container');

let linkedin = document.getElementById('linkedin');
let github = document.getElementById('github');
let generalAssembly = document.getElementById('generalAssembly');
let email = document.getElementById('email');
let resume = document.getElementById('resume');

iconBox.addEventListener('mouseover', () => {
	linkedin.setAttribute('src', 'images/linkedin.png');
	github.setAttribute('src', 'images/icons/github.png');
	// generalAssembly.setAttribute('src', 'images/icons/ga-logo.png');
	email.setAttribute('src', '');
	resume.setAttribute('src', 'images/icons/004-profile.png');
});

iconBox.addEventListener('mouseout', () => {
	linkedin.setAttribute('src', 'images/linkedin.png');
	github.setAttribute('src', '/images/github.png');
	generalAssembly.setAttribute('src', '');
	email.setAttribute('src', 'images/inbox photo.jpg');
	resume.setAttribute('src', 'images/icons/005-profile-1.png');
});