fetch('projects.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        const projectsSection = document.querySelector('.projects')

        let count = 1
        data.projects.forEach((project) => {
            // Project title (with icons)
            let content = '<h3 class="mt-4 text-xl turquoise">'
            content += '<span class="arrow_p' + count + ' mr-8 red"><i class="fa-solid fa-right-long"></i></span>'
            content += project.name
            content += '<i class="downchev_p' + count + ' fa-solid fa-chevron-down ml-24 white"></i>'
            content += '<i class="upchev_p' + count + ' fa-solid fa-chevron-up ml-24 white hidden"></i></h3>'
            // 
            content +=
            content +=
            content +=
            content +=
            content +=
            content +=

            projectsSection.innerHTML += content
            
            count += 1
        })
    })