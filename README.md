# Syed Ukasha Shahid: Portfolio

## Prompt
# Project: Build a Premium Multi-Page CV Portfolio Website

Act as a senior frontend developer, professional UI/UX designer, and web design specialist. Build a modern, elegant, premium-looking personal portfolio website for **Syed Ukasha Shahid**, a Computer Science student at Qarshi University in Lahore, Pakistan.

I will provide my CV as a PDF. Carefully read the complete CV and use its information as the primary source for the website's content. Include my actual education, technical skills, academic projects, strengths, languages, career objective, and contact information.

The website must look professional, sophisticated, modern, and suitable for internship applications, recruiters, and entry-level software development opportunities.

# 1. Strict Technology Requirements

Use ONLY:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

**Do not use React, JSX, TypeScript, Vite, Next.js, Bootstrap, Tailwind CSS, jQuery, or any other frontend framework or library.**

Create separate HTML pages with a shared CSS stylesheet and JavaScript file.

The website must run directly in a modern browser without requiring a framework, package installation, or build process.

# 2. Multi-Page Website Structure

Create a complete multi-page portfolio website with the following pages:

1. `index.html` — Home
2. `about.html` — About Me
3. `skills.html` — Technical Skills
4. `projects.html` — Academic Projects
5. `education.html` — Education
6. `strengths.html` — Strengths and Languages
7. `contact.html` — Contact

Each page must have its own HTML file and URL.

**Important:** This is a multi-page website, not a single-page website. Clicking a navigation link must open the corresponding HTML page rather than scrolling to a section on the same page.

# 3. Premium Design System

Create a cohesive, premium visual identity across all pages.

### Recommended visual style

- Deep navy or charcoal backgrounds.
- White or soft-gray text.
- Restrained electric-blue or cyan accents.
- Elegant typography using Inter, Manrope, or similar sans-serif fonts.
- Subtle gradients.
- Refined cards and borders.
- Balanced whitespace.
- Professional icons where appropriate.
- Smooth, tasteful hover effects.
- Consistent buttons and navigation.
- Carefully designed page transitions where practical.

The result should resemble a professionally designed developer portfolio, not a generic student template.

Avoid excessive neon effects, clutter, unnecessary animations, oversized decorative elements, and unsupported professional claims.

# 4. Shared Navigation Bar

Create a consistent navigation bar on every page.

Include:

- Personal brand: `Ukasha Shahid` or `US.`
- Home
- About
- Skills
- Projects
- Education
- Strengths
- Contact
- A prominent but tasteful "Let's Connect" button.

Use standard HTML anchor links to navigate between pages.

Example:

```html
<nav class="navbar">
  <a href="index.html" class="brand">US.</a>

  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="skills.html">Skills</a>
    <a href="projects.html">Projects</a>
    <a href="education.html">Education</a>
    <a href="strengths.html">Strengths</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>
```

Requirements:

- Highlight the current page in the navigation.
- Keep the navigation visually consistent across all pages.
- Implement a functional hamburger menu for mobile devices.
- Close the mobile menu after a link is selected.
- Use correct relative paths for all navigation links.
- Make the navigation keyboard-accessible.

# 5. Home Page — `index.html`

Create an impressive homepage that introduces me professionally.

Use the following information from my CV:

**Name:** Syed Ukasha Shahid

**Professional title:** Computer Science Student | Aspiring Software Developer

**Location:** Lahore, Pakistan

Use a refined introduction based on my career objective:

"I am a BS Computer Science student at Qarshi University with a foundation in programming, object-oriented design, and database systems. I am seeking an internship or entry-level software development opportunity to apply my skills to real-world projects and continue growing as a developer."

### Homepage elements

- Premium hero section.
- Name and professional title.
- Concise introduction.
- Professional profile visual or initials-based graphic.
- Explore My Projects button linking to `projects.html`.
- About Me button linking to `about.html`.
- Download CV button linking to the actual PDF.
- Compact preview of technical skills.
- Featured project previews.
- A professional call to action leading to `contact.html`.

Do not invent work experience, client statistics, years of experience, certifications, or achievements.

# 6. About Page — `about.html`

Create a dedicated About Me page presenting my background, interests, and career objective.

Use the CV to explain:

- My current Computer Science education.
- My programming foundation.
- My knowledge of object-oriented design and database systems.
- My interest in software development.
- My goal of applying my knowledge to real-world projects.
- My interest in internship or entry-level opportunities.

Keep the writing authentic, clear, and professional.

Use a well-balanced layout with readable text, subtle visuals, and an appropriate heading hierarchy.

Do not invent personal history, employment experience, or qualifications.

# 7. Technical Skills Page — `skills.html`

Present all technical skills from my CV in an organized, visually appealing layout.

### Programming and Web Technologies

- C
- C++
- Java
- Python
- SQL
- HTML
- CSS

### Computer Science Concepts

- Object-Oriented Programming (OOP)
- Data Structures and Algorithms (DSA)
- Database Management Systems (DBMS)
- Operating Systems

### Tools and Technologies

- Java Swing
- NetBeans
- MySQL
- Microsoft Office

Use categorized cards, skill tags, and consistent spacing.

Do not invent skill ratings, proficiency percentages, or unsupported expertise levels.

Do not add technologies that are not present in my CV.

# 8. Projects Page — `projects.html`

Create a dedicated Academic Projects page showcasing both projects from my CV.

Present each project as a polished project case study.

## Project 1: Bus Management System

**Technologies:** Java Swing, Object-Oriented Programming, NetBeans.

**Description:**

A desktop application developed to manage bus operations, including route scheduling, ticket booking, digital passes, bus allocation, and staff and feedback management.

Present its features clearly:

- Route scheduling.
- Ticket booking.
- Digital passes.
- Bus allocation.
- Staff management.
- Feedback management.

Use a suitable desktop application mockup or illustrative visual.

## Project 2: Shineo — Maid Finder Website

**Technologies:** HTML5 and CSS3.

**Description:**

A web platform designed to connect users with nearby domestic service providers through a clean, easy-to-use interface.

Use a suitable website mockup or illustrative visual.

### Project functionality

Each project card may include:

- Project title.
- Description.
- Technologies used.
- Main features or purpose.
- GitHub repository button.
- Live demo button.

Only display functional repository or demo buttons when actual URLs are provided. Otherwise, omit the buttons or clearly mark the links as unavailable without creating fake destinations.

Do not invent additional features, project results, user statistics, or repository URLs.

# 9. Education Page — `education.html`

Create a dedicated education page with an elegant vertical timeline or professional education cards.

Include all qualifications from my CV.

### Bachelor of Science in Computer Science

- Institution: Qarshi University.
- Current status: Currently in the 5th semester.
- Expected completion: 2028.

### Intermediate (ICS / Pre-Engineering)

- Institution: Punjab Group of Colleges.
- Year: 2024.

### Matriculation

- Institution: Nishat Boys High School.
- Year: 2022.

Clearly distinguish the ongoing degree from completed qualifications.

Do not invent grades, CGPA, scholarships, awards, or academic achievements.

# 10. Strengths and Languages Page — `strengths.html`

Create a dedicated page showcasing my personal strengths and languages.

### Strengths

- Problem Solving.
- Analytical Thinking.
- Quick Learner.
- Communication.
- Teamwork.
- Time Management.

### Languages

- English.
- Urdu.

Use a clean, professional layout with subtle cards or icons.

Avoid unsupported proficiency levels or personal claims.

# 11. Contact Page — `contact.html`

Create a professional Contact page for recruiters, internship providers, and potential collaborators.

Use the exact contact information from my CV:

- Email: `u128413@gmail.com`
- Phone: `+92 309 5236098`
- Location: Lahore, Pakistan.

### Required functionality

- Clickable email link using `mailto:`.
- Clickable phone link using `tel:`.
- Contact form with Name, Email, Subject, and Message fields.
- Required-field validation.
- Basic email-format validation.
- Clear success or error feedback.

Do not pretend that the form sends emails without a working backend or email service. If no backend is configured, explain what is required for actual message delivery.

Only include social-media links when I provide real URLs.

# 12. CV Download Functionality

Use the actual CV PDF that I supply.

Place it in:

`assets/Syed_Ukasha_Shahid_Resume.pdf`

Connect the Download CV button on the homepage and any other appropriate page to the actual PDF.

Example:

```html
<a
  href="assets/Syed_Ukasha_Shahid_Resume.pdf"
  download="Syed_Ukasha_Shahid_Resume.pdf"
>
  Download My CV
</a>
```

Verify that the file path works when the website is opened locally.

Do not fabricate or replace the original CV.

# 13. Footer

Create a consistent footer across every page.

Include:

- My name or personal brand.
- A short professional tagline.
- Links to the main pages.
- Dynamically generated copyright year.
- A tasteful back-to-top button.

The back-to-top button may scroll to the top of the current page. The restriction against single-page anchor navigation does not apply to this multi-page website.

# 14. Responsive Design

Ensure all pages work on:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

Use CSS Grid, Flexbox, media queries, responsive typography, and fluid sizing.

Requirements:

- No accidental horizontal overflow.
- Readable typography on small screens.
- Responsive project cards.
- A working mobile navigation menu.
- Appropriate image sizing.
- Consistent section spacing.
- Usable buttons and form controls.

Vertical scrolling is allowed on all pages because this is a conventional multi-page website.

# 15. JavaScript Requirements

Use vanilla JavaScript only.

Implement:

- Mobile navigation toggle.
- Active navigation state where appropriate.
- Contact form validation.
- Clear form interaction feedback.
- Dynamic copyright year.
- Optional subtle UI interactions.

Use separate JavaScript functionality where necessary, but ensure it works correctly on every page.

Do not use React, JSX, or third-party JavaScript libraries.

Avoid unnecessary animations and complex scripts.

# 16. Accessibility, SEO, and Performance

Follow HTML5 semantic and accessibility best practices.

Include:

- Proper page titles.
- Relevant meta descriptions.
- Viewport metadata.
- Open Graph metadata where appropriate.
- Semantic HTML elements.
- Accessible form labels.
- Meaningful image alt text.
- Keyboard-accessible controls.
- Visible focus indicators.
- Sufficient color contrast.
- Reduced-motion support.
- Optimized images.
- Clean CSS and JavaScript.

Give each page a unique title and relevant meta description.

# 17. Required Project Structure

Provide the complete website using a structure similar to:

```text
ukasha-portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── education.html
├── strengths.html
├── contact.html
├── style.css
├── script.js
├── assets/
│   ├── Syed_Ukasha_Shahid_Resume.pdf
│   └── images/
└── README.md
```

Keep the code organized and reusable through shared CSS classes and JavaScript.

Do not use frontend frameworks or require a build process.

# 18. Final Testing Requirements

Before finishing, verify that:

- Every page opens correctly.
- Navigation links point to the correct HTML files.
- The active page is highlighted in the navbar.
- The mobile navigation works.
- All CV information is accurate.
- The CV download works.
- Contact links work.
- Form validation works.
- Layouts adapt to different screen sizes.
- No broken images or asset paths remain.
- No unnecessary dependencies are used.
- No React, JSX, or frontend framework is present.

Do not claim a feature has been tested unless it has actually been verified.

# 19. Final Deliverables

Provide:

1. Complete HTML code for all seven pages.
2. Complete shared CSS stylesheet.
3. Complete vanilla JavaScript file.
4. The actual supplied CV PDF in the assets directory.
5. Necessary local image assets.
6. A README with setup instructions.
7. Instructions for opening the website locally.
8. A list of any missing information, such as profile photographs or social-media URLs.
9. A summary of tested features and any functionality requiring an external service.

## Final Non-Negotiable Instructions

- Use only HTML5, CSS3, and vanilla JavaScript.
- Create a real multi-page website with separate HTML files.
- Use standard links to navigate between pages.
- Do not convert the website into a single-page application.
- Include the complete and accurate CV information.
- Maintain a premium, modern, professional design.
- Use the actual supplied CV PDF for downloading.
- Ensure all pages are responsive, accessible, and functional.
- Do not invent personal details, achievements, project links, or professional experience.

**Final goal:** Deliver a complete, premium multi-page CV portfolio website for Syed Ukasha Shahid, suitable for recruiters and internship applications, built entirely with HTML5, CSS3, and vanilla JavaScript.