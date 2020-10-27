# 🖥️ Later's Coding Assignment for Aspiring Junior Web Devs
A code challenge provided as part of Later's job application process

## 👩‍💻 Aspiring Applicant
Taylor Wilkinson (www.taylorwilkinson.ca)

### 🔨 Build Instructions
1. after cloning the repo, use the terminal to cd into the `later-landing-app` folder to access the React app
2. run `npm start` in the terminal to run the app in Development mode
3. open [http://localhost:3000] to view the landing page in the browser

#### 📝 Process
1. Scaffolded a basic version of the landing page using HTML and CSS, to determine colors from screenshot and write out copy.
2. Sketched a basic UI layout for mobile and smaller screens, as the provided screenshot works best for desktop.
3. Created a React app with the "create-react-app" npm command
4. Created the landing page and components for the hero, buttons, testimonial section, and testimonial cards.
5. Ensured responsiveness by adding @media queries in CSS

#### 🔧 Built With
* HTML5
* CSS3
* React.js

#### 🤔 Reflections
* Testimonials cards
** In the screenshot these cards are the same height, with the cited person's photo, name, and title all being aligned at the bottom. When building the component, I struggled to ensure that all cards were the same height while also having that row align to the bottom. With further work, I would play with the vertical alignment and find a streamlined solution.
** Noted: on the current Later.com landing page, these cards are broken between 1100px>800px. Given the forced height, the customer div overlaps the quote above it.
