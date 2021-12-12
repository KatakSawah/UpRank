function start_am() {
    const sect = document.querySelectorAll('.sec_animate');

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById("navbar-example").classList.add('bg-transparent');
                document.getElementById("navbar-example").classList.remove('bg-dark');
            } else {
                document.getElementById("navbar-example").classList.add('bg-dark');
                document.getElementById("navbar-example").classList.remove('bg-transparent');
            }
        });
    });

    sect.forEach(sect_x => {
        observer.observe(sect_x);
    });
}

function changeBgColor() {
    var uri = window.location.href;
    
    uri = uri.split('#');
    if(Array.isArray(uri)){
        if(uri[1] != "home"){
            document.getElementById("navbar-example").classList.remove('bg-dark');
            document.getElementById("navbar-example").classList.add('bg-transparent');
        }
        else{
            document.getElementById("navbar-example").classList.add('bg-dark');
            document.getElementById("navbar-example").classList.remove('bg-transparent');
        }
    }
    else{
        document.getElementById("navbar-example").classList.add('bg-dark');
        document.getElementById("navbar-example").classList.remove('bg-transparent');
    }
}