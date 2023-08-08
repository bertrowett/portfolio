// Populating Portfolio section with info on projects
fetch('projects.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        const projectsSection = document.querySelector('.projects')

        let count = 1

        data.projects.forEach((project) => {
            // Project title (with icons)
            let content = '<h3 class="mt-4 text-xl red">'
                content += '<i class="arrow_p' + count + ' fa-solid fa-right-long mr-8"></i>'
                content += '<span class="turquoise">' + project.name + '</span>'
                content += '<i class="downchev_p' + count + ' fa-solid fa-chevron-down ml-24 white"></i>'
                content += '<i class="upchev_p' + count + ' fa-solid fa-chevron-up ml-24 white hidden"></i>'
            content +='</h3>'

            // Content flex container
            content += '<div class="content_p' + count + ' pt-4 flex gap-4 hidden">'
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
                        content += '<a href="' + project.github + '"><i class="fa-brands fa-github text-2xl mr-4"></i></a>'
                        content += '<a href="' + project.site + '"><i class="fa-solid fa-up-right-from-square text-2xl"></i></a>'
                    content += '</nav>'
                content += '</div>'
            content += '</div>'

            // Adding combined content to page
            projectsSection.innerHTML += content
            
            count += 1
        })

        // Defining targets
        const arrow_p1 = document.querySelector('.arrow_p1')
        const arrow_p2 = document.querySelector('.arrow_p2')
        const arrow_p3 = document.querySelector('.arrow_p3')

        const downchev_p1 = document.querySelector('.downchev_p1')
        const downchev_p2 = document.querySelector('.downchev_p2')
        const downchev_p3 = document.querySelector('.downchev_p3')

        const upchev_p1 = document.querySelector('.upchev_p1')
        const upchev_p2 = document.querySelector('.upchev_p2')
        const upchev_p3 = document.querySelector('.upchev_p3')

        const content_p1 = document.querySelector('.content_p1')
        const content_p2 = document.querySelector('.content_p2')
        const content_p3 = document.querySelector('.content_p3')

        //Basic functions
        function addGreenClass(target) {
            target.classList.add('green');
        }

        function removeGreenClass(target) {
            target.classList.remove('green');
        }
        
        function unhide(target) {
            target.classList.remove('hidden');
        }

        function hide(target) {
            target.classList.add('hidden');
        }
        
        //Combined functions
        function openProject1() {
            addGreenClass(arrow_p1);
            hide(downchev_p1);
            unhide(upchev_p1);
            unhide(content_p1);
        }

        function closeProject(number) {
            const arrow = document.querySelector('arrow_p' + number);
            const downchev = document.querySelector('downchev_p' + number);
            const upchev = document.querySelector('upchev_p' + number);
            const content = document.querySelector('content_p' + number);
            removeGreenClass(arrow);
            unhide(downchev);
            hide(upchev);
            hide(content);
            console.log(arrow);
        }

        //Immediately called
        openProject1()

        //Event-called
        upchev_p1.addEventListener('click', () => {
            closeProject(1)
        })
    })



