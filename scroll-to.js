const scrollToFirstProjectButton = document.querySelector('.projects-button');
const projectSections = document.querySelectorAll('.project-section');

const scrollToProject = function (index) {
  projectSections[index].scrollIntoView({ behavior: 'smooth' });
};

scrollToFirstProjectButton.addEventListener('click', () => scrollToProject(0));
