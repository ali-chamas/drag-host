<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> Alex is a machine learning game, ideal for both kids and adults to build, test, and use their own custom models seamlessly in Scratch 3.0, all without writing a single line of code.
> At Alex, users select a mission and construct an AI model using Alex's user-friendly interface to meet the game's requirements.
> Once the model is built, users can test and deploy it to Scratch. With Alex's extension, they can play with their model and complete the game! Completing a game unlocks the next one, keeping the learning journey engaging and progressive.

### User Stories

- ## As a user:
- I'm interested in machine learning but want to learn it in a fun and challenging way.
- I don't want to learn machine learning through courses since I can't code. I want to build my model using no-code tools.
- I want to use my model in Scratch to create a character that represents my model and play with it.
- ## As a content creator:
- I aim to invent new game ideas and create step-by-step tutorials for solving them.
- I plan to post these games and their solutions on the website after getting admin approval.
- I want to track user progress to see if they enjoy my games

<br><br>

<!-- Tech stack -->
<img src="./readme/title3.svg"/>

### Alex is built using the following technologies:

- This project uses the [React.js Library](https://react.dev/). React.js is a JavaScript library for building user interfaces, especially single-page web applications.
- For persistent storage (database), the app uses the [MongoDB](https://www.mongodb.com/) NoSQL database that uses a document-oriented data model, making it easy to store and retrieve data in a flexible JSON-like format.
- For the backend, [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/) is utilized, providing a robust framework for building scalable and efficient server-side logic
- For Machine Learning, [Brain.js](https://brain.js.org/) is used to allow users to create their custom text-recognition models. Brain.js is a JavaScript library for building and training neural networks, useful for tasks like data analysis and pattern recognition.

<br><br>

<!-- UI UX -->
<img src="./readme/title4.svg"/>

> We designed Alex using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

- Project Figma design [figma](https://www.figma.com/design/41Kg9ShobHU55JVHjJ78N4/Alex-final-project?node-id=0%3A1&t=yzxGdm3vbknwdD81-1)

### Mockups

| Home screen                             | Login Screen                          | Games Screen                          |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/figma/landing.png) | ![Login](./readme/figma/login.png) | ![Games](./readme/figma/games.png) |

<br><br>

<!-- Database Design -->
<img src="./readme/title5.svg"/>

### Architecting Data Excellence: Innovative Database Design Strategies:

![ERD](./readme/ERD/schema.png)

<br><br>

<!-- Implementation -->
<img src="./readme/title6.svg"/>

### User Screens 

| Landing Screen                              | Login screen                            |
| -----------------------------------------   | --------------------------------------- |
| ![Landing](./readme/screens/landing.gif)    | ![Login](./readme/screens/login.gif)    |

| Profile screen                              | Games Screen                            |
| -----------------------------------------   | --------------------------------------- |
| ![Profile](./readme/screens/profile.gif)    | ![Games](./readme/screens/games.gif)    |
 
| Single Game Screen                          | Labels screen                           |
| -----------------------------------------   | --------------------------------------- |
| ![Landing](./readme/screens/single-game.gif)| ![Labels](./readme/screens/labels.gif)  |

| Examples screen                             | Training Screen                         |
| -----------------------------------------   | --------------------------------------- |
| ![examples](./readme/screens/examples.gif)  | ![Training](./readme/screens/training.gif)|

| Testing screen                              | Playing Screen                         |
| -----------------------------------------   | --------------------------------------- |
| ![testing](./readme/screens/testing.gif)    | ![playing](./readme/screens/complete.gif)|

| Scratch Extension screen                    | Scratch game Example                    |
| -----------------------------------------   | --------------------------------------- |
| ![scratch-extension](./readme/screens/scratch-block.gif)  | ![scratch game](./readme/screens/scratc-game.gif)|


### Creator Screens 

| Dashboard screen                        | Games screen                          | 
| --------------------------------------- | ------------------------------------- |
| ![dashboard](./readme/screens/creator-dashboard.gif) | ![games](./readme/screens/creator-games.gif) |

### Admin Screens 

| Dashboard screen                        | Users Screen                          | Games Screen           |               
| --------------------------------------- | ------------------------------------- |------------------------------------- |
| ![Landing](./readme/screens/admin-dashboard.gif) | ![fsdaf](./readme/screens/users-admin.gif) | ![games](./readme/screens/admin-games.gif) | 

<br><br>

<!-- Prompt Engineering -->
<img src="./readme/title7.svg"/>

### Mastering AI Interaction: Unveiling the Power of Prompt Engineering:

- This project uses advanced prompt engineering techniques to optimize the interaction with natural language processing models. By skillfully crafting input instructions, we tailor the behavior of the models to achieve precise and efficient language understanding and generation for various tasks and preferences.
  
| OpenAi prompt                       |
| ------------------------------------|
|![prompt](./readme/prompt/prompt.PNG)|


<br><br>

<!-- AWS Deployment -->
<img src="./readme/title8.svg"/>

### Efficient AI Deployment: Unleashing the Potential with AWS Integration:

- This project leverages AWS deployment strategies to seamlessly integrate and deploy natural language processing models. With a focus on scalability, reliability, and performance, we ensure that AI applications powered by these models deliver robust and responsive solutions for diverse use cases.

<br><br>

<!-- Unit Testing -->
<img src="./readme/title9.svg"/>

### Precision in Development: Harnessing the Power of Unit Testing:

- This project employs rigorous unit testing methodologies to ensure the reliability and accuracy of code components. By systematically evaluating individual units of the software, we guarantee a robust foundation, identifying and addressing potential issues early in the development process.

| Unit Testing                        |
| ------------------------------------|
|![unit](./readme/unit-test/unit-test.PNG)|

<br><br>

<!-- How to run -->
<img src="./readme/title10.svg"/>

> To set up Coffee Express locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [example](https://example.com)
2. Clone the repo
   git clone [github](https://github.com/your_username_/Project-Name.git)
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

Now, you should be able to run Coffee Express locally and explore its features.
