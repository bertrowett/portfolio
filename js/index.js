// Populating Portfolio section with info on projects
fetch('projects.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        const projectsSection = document.querySelector('.projects')

        data.projects.forEach((project, index) => {
            // Project title (with icons)
            let content = '<h3 class="mt-4 text-xl red">'
                content += '<i class="arrow_p' + index + ' fa-solid fa-right-long mr-8"></i>'
                content += '<span class="turquoise">' + project.name + '</span>'
                content += '<i class="open-toggle downchev_p' + index + ' fa-solid fa-chevron-down ml-24 white" data-downchev="' + index + '"></i>'
                content += '<i class="close-toggle upchev_p' + index + ' fa-solid fa-chevron-up ml-24 white hidden" data-upchev="' + index + '"></i>'
            content +='</h3>'

            // Content flex container
            content += '<div class="content_p' + index + ' pt-4 flex gap-4 hidden">'
                // Image
                content += '<div class="w-2/5">'
                    content += '<img src="' + project.img + '" alt="' + project.img_alt + '" />'
                content += '</div>'
                // Text + icons flex container
                content += '<div class="w-3/5 flex flex-col gap-4 justify-between">'
                    // Summary text
                    content += '<p>' + project.summary + '</p>'
                    // Icons
                    content += '<nav>'
                        content += '<a href="' + project.github + '"><i class="fa-brands fa-github text-2xl mr-8"></i></a>'
                        content += '<a href="' + project.site + '"><i class="fa-solid fa-up-right-from-square text-2xl"></i></a>'
                    content += '</nav>'
                content += '</div>'
            content += '</div>'

            // Adding combined content to page
            projectsSection.innerHTML += content
        })

        //Basic functions
            function makeGreen(target) {
                document.querySelector(target).classList.add('green');
            }

            function makeRed(target) {
                document.querySelector(target).classList.remove('green');
            }
            
            function unhide(target) {
                document.querySelector(target).classList.remove('hidden');
            }

            function hide(target) {
                document.querySelector(target).classList.add('hidden');
            }
        
        //Combined functions
            function openProject(number) {
                const arrow = '.arrow_p' + number
                const downchev = '.downchev_p' + number
                const upchev = '.upchev_p' + number
                const content = '.content_p' + number
                makeGreen(arrow);
                hide(downchev);
                unhide(upchev);
                unhide(content);
            }

            function closeProject(number) {
                const arrow = '.arrow_p' + number
                const downchev = '.downchev_p' + number
                const upchev = '.upchev_p' + number
                const content = '.content_p' + number
                makeRed(arrow);
                unhide(downchev);
                hide(upchev);
                hide(content);
            }

        //Immediately called
            openProject(0)

        //Event-called
            const downchevs = document.querySelectorAll('.open-toggle')

            downchevs.forEach((downchev) => {
                downchev.addEventListener('click', (event) => {
                    downchevs.forEach((downchev) => {
                        const number = downchev.dataset.downchev
                        closeProject(number)
                    })
                    const clickedDownchev = event.target.dataset.downchev
                    openProject(clickedDownchev)
                })
            })

            const upchevs = document.querySelectorAll('.close-toggle')

            upchevs.forEach((upchev) => {
                upchev.addEventListener('click', (event) => {
                    const clickedUpchev = event.target.dataset.upchev
                    closeProject(clickedUpchev)
                })
            })

    })