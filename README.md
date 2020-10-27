# 🖥️ Later's Coding Assignment for Junior Web Dev Applicants
My solution to the code challenge provided as part of Later's job application process.

## 👩‍💻 Aspiring Applicant
Taylor Wilkinson (www.taylorwilkinson.ca)

## 🔨 Build Instructions
1. after cloning the repo, use the terminal to cd into the `later-landing-app` folder to access the React app
2. run `npm start` in the terminal to run the app in Development mode
3. open [http://localhost:3000] to view the landing page in the browser


#### 🔧 Built With
* React.js (using create-react-app)
* CSS3
* HTML5

#### 📝 Process
1. Scaffolded a basic version of the landing page using vanilla HTML and CSS
2. Using pencil and paper, sketched a low-fidelity UI layout for mobile, as the provided screenshot seems to works best for desktop
3. Created a React app with the "create-react-app" npm command
4. Created the landing page and components for the hero, buttons, testimonial section, and testimonial cards.
5. Ensured responsiveness by adding @media queries in CSS

#### 🤔 Reflections
* Testimonials cards
  * In the screenshot, these cards are the same height with the customer information all aligned at the bottom.
  * When building the component, used the 'position' property for the parent container ('cards__item') and the child <div> ('cards__item__info'). This current solution works, however I believe it could be refactored and improved to find a more efficient solution that requires fewer media queries to change the height of the card.
  * Noted: on the current Later.com landing page, these cards are broken between 1100px>800px with overlapping customer information and text.

### 🙋‍♀️ Have a nice day!
