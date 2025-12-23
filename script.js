document.getElementById('projects_button').addEventListener('click', function(event) {
    event.preventDefault();
    var skills = document.getElementById('skills');
    var career = document.getElementById('career');
    var projects = document.getElementById('projects');
    if (projects.style.display == 'none') {
      skills.style.display = 'none';
      career.style.display = 'none';
      projects.style.display = 'flex';
    } else {
      projects.style.display = 'none';
    }
  });

document.getElementById('skills_button').addEventListener('click', function(event) {
    event.preventDefault();
    var skills = document.getElementById('skills');
    var career = document.getElementById('career');
    var projects = document.getElementById('projects');
    if (skills.style.display == 'none') {
      projects.style.display = 'none';
      career.style.display = 'none';
      skills.style.display = 'block';
    } else {
      skills.style.display = 'none';
    }
  });

document.getElementById('career_button').addEventListener('click', function(event) {
    event.preventDefault();
    var skills = document.getElementById('skills');
    var projects = document.getElementById('projects');
    var career = document.getElementById('career');
    if (career.style.display == 'none') {
      projects.style.display = 'none';
      skills.style.display = 'none';
      career.style.display = 'block';
    } else {
      career.style.display = 'none';
    }
  });

document.getElementById('rangolitico_button').addEventListener('click', function(event) {
    event.preventDefault();
    var conteudo = document.getElementById('project-full-rangolitico');
    if (conteudo.style.display == 'none') {
      conteudo.style.display = 'flex';
    } else {
      conteudo.style.display = 'none';
    }
  });

  document.getElementById('lune_button').addEventListener('click', function(event) {
    event.preventDefault();
    var conteudo = document.getElementById('project-full-lune');
    if (conteudo.style.display == 'none') {
      conteudo.style.display = 'flex';
    } else {
      conteudo.style.display = 'none';
    }
  });

  document.getElementById('dialog_button').addEventListener('click', function(event) {
    event.preventDefault();
    var conteudo = document.getElementById('project-full-dialog');
    if (conteudo.style.display == 'none') {
      conteudo.style.display = 'flex';
    } else {
      conteudo.style.display = 'none';
    }
  });