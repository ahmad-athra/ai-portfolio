# Portfolio for Ahmad Yasser Abu Atherah

This is a modern, responsive portfolio website based on your resume.

## How to View
Simply open `index.html` in your web browser.

## Customization
1. **Profile Picture**: Replace the placeholder in the Hero section.
   - Look for the `<div class="img-wrapper">` in `index.html`.
   - You can replace the inner `div` with an `<img>` tag:
     ```html
     <img src="path/to/your/photo.jpg" alt="Ahmad Yasser Abu Atherah" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
     ```
2. **Links**: Ensure all your social links (LinkedIn, GitHub, Email) are correct in the HTML.
3. **Form**: The contact form is currently a demo (it just alerts). You would need a backend service (like Formspree or EmailJS) to make it functional.

## Tech Stack
- HTML5
- CSS3 (Variables, Flexbox, Grid, Animations)
- JavaScript (Intersection Observer for scroll effects)
- Font Awesome (Icons)
- Google Fonts (Outfit)
