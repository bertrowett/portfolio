fetch('projects.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        const projectsSection = document.querySelector('.projects')

        data.projects.forEach((project) => {
            projectsSection.innerHTML += 'test'
        })
    })