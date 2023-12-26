let filterButtons = document.querySelectorAll('.portfolio__buttons');
let projects = document.querySelectorAll('.card-list__item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(e => {
        e.classList.remove('active');
      })
        let textCategory = button.textContent;
        button.classList.add('active');


        projects.forEach(project => {
            let projectCategory = project.querySelector('.card-list__text').textContent;
        
            if(textCategory === 'Усі') {
                project.style.display = 'block';  
              } else if (textCategory === 'Веб-сайти' && projectCategory.includes('Веб-сайт')) {
                project.style.display = 'block';
              } else if (textCategory === 'Додатки' && projectCategory.includes('Додаток')) {
                project.style.display = 'block';
              } else if (textCategory === 'Дизайн' && projectCategory.includes('Дизайн')) {
                project.style.display = 'block';  
              } else if (textCategory === 'Маркетинг' && projectCategory.includes('Маркетинг')) {
                project.style.display = 'block';  
              }else {
                project.style.display = 'none';
              }
        })
    })
})