var skills = document.getElementById('skills');
var career = document.getElementById('career');
var projects = document.getElementById('projects');
var lune = document.getElementById('project-full-lune');
var rangolitico = document.getElementById('project-full-rangolitico');
var dialog = document.getElementById('project-full-dialog');

document.getElementById('projects_button').addEventListener('click', function(event) {
    event.preventDefault();
    if (projects.style.display == 'none') {
      skills.style.display = 'none';
      career.style.display = 'none';
      projects.style.display = 'flex';
      projects.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      projects.style.display = 'none';
      rangolitico.style.display = 'none';
      lune.style.display = 'none';
      dialog.style.display = 'none';
    }
  });

document.getElementById('skills_button').addEventListener('click', function(event) {
    event.preventDefault();
    if (skills.style.display == 'none') {
      projects.style.display = 'none';
      career.style.display = 'none';
      skills.style.display = 'block';
      rangolitico.style.display = 'none';
      lune.style.display = 'none';
      dialog.style.display = 'none';
      skills.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      skills.style.display = 'none';
    }
  });

document.getElementById('career_button').addEventListener('click', function(event) {
    event.preventDefault();
    if (career.style.display == 'none') {
      projects.style.display = 'none';
      skills.style.display = 'none';
      career.style.display = 'block';
      rangolitico.style.display = 'none';
      lune.style.display = 'none';
      dialog.style.display = 'none';
      career.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      career.style.display = 'none';
    }
  });

document.getElementById('rangolitico_button').addEventListener('click', function(event) {
    event.preventDefault();
    if (rangolitico.style.display == 'none') {
      rangolitico.style.display = 'flex';
      lune.style.display = 'none';
      dialog.style.display = 'none';
      rangolitico.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      rangolitico.style.display = 'none';
    }
  });

  document.getElementById('lune_button').addEventListener('click', function(event) {
    event.preventDefault();
    if (lune.style.display == 'none') {
      lune.style.display = 'flex'
      dialog.style.display = 'none';
      rangolitico.style.display = 'none';
      lune.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      lune.style.display = 'none';
    }
  });

  document.getElementById('dialog_button').addEventListener('click', function(event) {
    event.preventDefault();
    if (dialog.style.display == 'none') {
      dialog.style.display = 'flex';
      lune.style.display = 'none';
      rangolitico.style.display = 'none';
      dialog.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      dialog.style.display = 'none';
    }
  });