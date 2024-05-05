function PageTransitions(){
    const sections = document.querySelectorAll('.container'); // Corrected selector
    const sectBtns = document.querySelectorAll('.controls'); // Corrected selector
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn'); // Use classList.remove to remove class
            this.classList.add('active-btn'); // Use classList.add to add class
        })
    }

    //Sections Active
    for(let i = 0; i < sectBtns.length; i++){
        sectBtns[i].addEventListener('click', function(e) {
            const id = e.target.dataset.id;
            if(id){
                // Remove 'active' class from all controls
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active');
                });
                // Add 'active' class to the clicked control
                this.classList.add('active');

                // Hide other sections
                sections.forEach((section)=>{
                    section.classList.remove('active');
                });

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    }

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();
