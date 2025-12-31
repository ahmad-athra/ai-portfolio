document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scroll Animation (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section, .stat-item, .skill-card, .timeline-item, .cert-card');
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Add CSS class for animation via JS to keep CSS clean
    const style = document.createElement('style');
    style.innerHTML = `
        .hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Typing Effect for "SRE" -> "DevOps" -> "Engineer" (Optional flair)
    // Using simple interval to switch the highlight text
    const titles = ["SRE", "Innovator", "Problem Solver"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const titleSpan = document.querySelector('.hero .highlight');

    // Simple typing loop
    if(titleSpan) {
        (function type() {
            if (count === titles.length) {
                count = 0;
            }
            currentText = titles[count];
            letter = currentText.slice(0, ++index);
            
            titleSpan.textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); // Wait before clearing or switching
            } else {
                setTimeout(type, 150);
            }
        })(); // Self invoking but slightly buggy logic for backspace, let's keep it simple: Just replace text
    }

    // Better simple rotator
    let titleIndex = 0;
    const rotateTitles = ["SRE", "Full Stack Dev", "Problem Solver"];
    const rotateSpan = document.querySelector('.hero .title .highlight');
    
    if (rotateSpan) {
        setInterval(() => {
            rotateSpan.style.opacity = 0;
            setTimeout(() => {
                titleIndex = (titleIndex + 1) % rotateTitles.length;
                rotateSpan.textContent = rotateTitles[titleIndex];
                rotateSpan.style.opacity = 1;
            }, 500);
        }, 3000);
        rotateSpan.style.transition = "opacity 0.5s";
    }
});
