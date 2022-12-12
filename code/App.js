const modal_container = document.getElementsByClassName("modal-container")[0];
const x_buttons = document.getElementsByClassName("x-button");
const about_button = document.getElementById('about-button');
const about_modal = document.getElementById('about-modal');
const skills_button = document.getElementById('skills-button');
const skills_modal = document.getElementById('skills-modal');
const projects_button = document.getElementById('projects-button');
const projects_modal = document.getElementById('projects-modal');
const background = document.getElementById('background');
const start_button = document.getElementById('start-button');
const start_buttons = document.getElementById('start-buttons');
const play_buttons = document.getElementById('play-buttons');
const social_buttons = document.getElementsByClassName('social-container')[0];
const me_tab = document.getElementById('me-tab');
const education_tab = document.getElementById('education-tab');
const experience_tab = document.getElementById('experience-tab');
const menu = document.getElementsByClassName('menu')[0];
const artil = document.getElementById('artil-project');
const wordle = document.getElementById('wordle-project');


const me = [{'photo': "./assets/me-photo.svg", 'header': "Janice Ji", 'text': 'Birthday: February 18, 2001'}, 
  {'header1': "Biography", 'text1': 'stuff', 'header2': "Hobbies", 'text2': 'stuff',}];
const education = [{'photo': "./assets/cornell.svg", 'header': "Cornell", 'text': '2019-22'}, 
  {'header': "Courses", 'text': 'stuff',}];
const experience = [{'photo': "./assets/meta.svg", 'header': "Meta", 'text': 'Software Engineer Intern 2021-22'}, 
  {'header': "Projects", 'text': 'stuff',}];

for (const button of x_buttons) {
  button.onclick = () => {
    modal_container.classList.toggle('modal-exit');
    background.style.filter = 'brightness(100%)';
    artil.style.transform = 'scale(1)';
    artil.zIndex = 0;
    wordle.style.transform = 'scale(1)';
    wordle.zIndex = 0;
  }
}

about_button.onclick = () => {
  modal_container.classList.remove('modal-exit');
  modal_container.style.display = 'flex';
  skills_modal.style.display = 'none';
  projects_modal.style.display = 'none';
  x_buttons[0].style.display = 'flex';
  about_modal.style.display = 'flex';
  background.style.filter = 'brightness(50%)'
}
skills_button.onclick = () => {
  modal_container.classList.remove('modal-exit');
  modal_container.style.display = 'flex';
  x_buttons[1].style.display = 'flex';
  about_modal.style.display = 'none';
  skills_modal.style.display = 'flex';
  projects_modal.style.display = 'none';
  background.style.filter = 'brightness(50%)'
}
projects_button.onclick = () => {
  modal_container.classList.remove('modal-exit');
  modal_container.style.display = 'flex';
  x_buttons[2].style.display = 'flex';
  about_modal.style.display = 'none';
  skills_modal.style.display = 'none';
  projects_modal.style.display = 'flex';
  background.style.filter = 'brightness(50%)'
}

start_button.onclick = () => {
  start_buttons.classList.remove('move-in');
  start_buttons.classList.toggle('move-out');
  play_buttons.classList.toggle('move-in');
  play_buttons.classList.remove('move-out');
  play_buttons.style.opacity = 1;
  menu.classList.remove('exit-menu');
  menu.classList.toggle('enter-menu');

};


function selectMe() {
  education_tab.style.filter = 'brightness(80%)';
  education_tab.style.opacity = 0.9;
  experience_tab.style.filter = 'brightness(80%)';
  experience_tab.style.opacity = 0.9;
  me_tab.style.filter = 'brightness(100%)';
  me_tab.opacity = 1;
  const about_content = document.getElementById('me').childNodes;
  for (let node of about_content) {
    if (node.className === 'left-content') {
      for (let child of node.childNodes) {
        if (child.className === 'photo') {
          child.src = './assets/me-photo.svg';
        } else if (child.className === 'header') {
          child.textContent = 'Janice Ji';
        } else if (child.className === 'text'){
          child.textContent = 'Birthday: February 18, 2001';
        }
      }
    } else if (node.className === 'right-content') {
      for (let child of node.childNodes) {
        if (child.className === 'header') {
          if (child.id === '1') {
            child.textContent = 'Biography'
          } else {
            child.style.opacity = 1;
            // child.style.textAlign = 'center';
          }
        } else if (child.className === 'text') {
          if (child.id === '1') {
            child.textContent = 'stuff';
          } else {
            child.style.opacity = 1;
          }
        }
      }
    }
  }
}

function selectEducation() {
  education_tab.style.filter = 'brightness(100%)';
  education_tab.style.opacity = 1;
  experience_tab.style.filter = 'brightness(80%)';
  experience_tab.style.opacity = 0.9;
  me_tab.style.filter = 'brightness(80%)';
  me_tab.opacity = 0.9;
  const about_content = document.getElementById('me').childNodes;
  for (let node of about_content) {
    if (node.className === 'left-content') {
      for (let child of node.childNodes) {
        if (child.className === 'photo') {
          child.src = './assets/cornell.svg';
        } else if (child.className === 'header') {
          child.textContent = 'Cornell CS';
        } else if (child.className === 'text'){
          child.textContent = '2019-22';
        }
      }
    } else if (node.className === 'right-content') {
      for (let child of node.childNodes) {
        if (child.className === 'header') {
          if (child.id === '1') {
            child.textContent = 'Courses'
          } else {
            child.style.opacity = 0;
          }
        } else if (child.className === 'text') {
          if (child.id === '1') {
            child.textContent = 'stuff';
          } else {
            child.style.opacity = 0;
          }
        }
      }
    }
  }
}

function selectExperience() {
  education_tab.style.filter = 'brightness(80%)';
  education_tab.style.opacity = 0.9;
  experience_tab.style.filter = 'brightness(100%)';
  experience_tab.style.opacity = 1;
  me_tab.style.filter = 'brightness(80%)';
  const about_content = document.getElementById('me').childNodes;
  for (let node of about_content) {
    if (node.className === 'left-content') {
      for (let child of node.childNodes) {
        if (child.className === 'photo') {
          child.src = './assets/meta.svg';
        } else if (child.className === 'header') {
          child.textContent = 'Meta';
        } else if (child.className === 'text'){
          child.textContent = 'SWE Internship 2021-22';
        }
      }
    } else if (node.className === 'right-content') {
      for (let child of node.childNodes) {
        if (child.className === 'header') {
          if (child.id === '1') {
            child.textContent = 'Projects'
          } else {
            child.style.opacity = 0;
          }
        } else if (child.className === 'text') {
          if (child.id === '1') {
            child.textContent = 'stuff';
          } else {
            child.style.opacity = 0;
          }
        }
      }
    }
  }
}


menu.onclick = () => {
  start_buttons.classList.remove('move-out')
  start_buttons.classList.toggle('move-in');
  play_buttons.classList.remove('move-in');
  play_buttons.classList.toggle('move-out');
  // play_buttons.style.opacity = 1;
  // menu.classList.remove('enter-menu');
  menu.classList.remove('enter-menu');
  menu.classList.toggle('exit-menu');
}

function artilClick1() {
  artil.style.transform = 'scale(1.65)';
  artil.style.zIndex = 1;
  wordle.style.transform = 'scale(1)';
  wordle.style.zIndex = 0;
  artil.style.cursor = 'zoom-out';
  artil.onclick = artilClick2;
}

function artilClick2() {
  artil.style.transform = 'scale(1)';
  artil.style.zIndex = 0;
  artil.style.cursor = 'zoom-in';
  artil.onclick = artilClick1;
}

function wordleClick1() {
  wordle.style.transform = 'scale(1.65)';
  wordle.style.zIndex = 1;
  artil.style.transform = 'scale(1)';
  artil.style.zIndex = 0;
  wordle.style.cursor = 'zoom-out';
  wordle.onclick = wordleClick2;
}

function wordleClick2() {
  wordle.style.transform = 'scale(1)';
  wordle.style.zIndex = 0;
  wordle.style.cursor = 'zoom-in';
  wordle.onclick = wordleClick1;
}


