# Race Startlist

[![Tests](https://github.com/ruiined/race-startlist/actions/workflows/testing.yml/badge.svg)](https://github.com/ruiined/race-startlist/actions/workflows/testing.yml)

Dashboard for event organisers to view race startlist entries and ticket sale revenue.

## My Approach

### Planning

I started the exercise with a bit of planning on Miro. Considering that there was a 5hr time limit, it made sense to plan everything out as much as I could to save time as a result. What I found to be the most helpful was mocking up the "finished product" to help me envision what I want to work towards.

My biggest challenge was keeping it small scale and simple. I tried my best to not overthink the problem.

Given that the exercise revolved around the data given, the main functionality to implement had to do with data manipulation, e.g. sorting & filtering. Of course, ticket revenue was in my plans as well. As for an additional feature I could implement, I decided on PDF printing as something essential for an event organiser.

![Mockup](https://github.com/ruiined/race-startlist/blob/main/screens/race-startlist-planning.jpg)

### Coding

I decided to go for Create-React-App with TypeScript as there was no need for a server & setup was pretty straightforward.

My next step was getting API data to display on the page. From that point on I kept adding functionality and expanding on it. I started with sorting, then moved on to filtering, stats and finally, printing.

I am new to Typescript so it was a great opportunity to learn more about it, even though it did slow me down. Creating type interfaces was something I've never done before.

Printing in react was a new experience as well but it was a breeze thanks to ReactToPrint package.

Overall, this was a fun experience and I wish I didn't have the time limit as it went by too fast. I feel like I could have done a much better job at refactoring and keeping it DRY. I might have decided to implement too much of the functionality that made me rush through it. However, I set a goal for myself and I'm happy I have more or less reached it within the time given.

### Testing

Testing is the weakest point of this project. In fact, I'm embarassed of how bad of a job I've done. I would blame time constraints, but I should have prioritized better. I have tested API calls & basic component rendering but there is more to be desired, no doubt.

### To improve on

I have learnt a lot through this tech test and, inevitably, made a lot of mistakes. The biggest challenge was time, which constrained me on all fronts. There is a lot I could improve on, as well as new features to implement.

- More extensive component testing
- Cypress e-to-e testing
- Using ids rather than titles for filtering
- Search function
- Organiser authorization for sensitive data security
- - User-friendly interface

## Instructions

### Installation

1. Clone the repository & `cd` into it
2. `npm install` to install dependencies
3. `npm start` to run a development server
4. Visit `localhost:3000` & you are good to go!

### Testing

- `npm test` to test the application
- `npm lint` to run ESLint

## Technologies

- [Node.js](https://nodejs.dev/) | Back-end JavaScript runtime environment
- [React](https://reactjs.org) | Front-end JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript

<br />

- [Jest](https://jestjs.io/) | Back-end unit testing
- [React Testing Library](https://testing-library.com/) | React DOM testing utilities

<br />

- [Axios](https://github.com/axios/axios) | Http client
- [ESLint](https://eslint.org/) | Linting utility
- [Moment](https://momentjs.com/) | Date formatting
- [ReactToPrint](https://github.com/gregnb/react-to-print) | Printing react components

## Features

- Entries
  - Minimal view
  - Detailed view
- Filtering
  - By organiser
  - By event
  - Reset option
- Sorting
  - By each of the entries' properties (x11)
  - Ascending & descending order
  - Reset option
- PDF Printing
- Stats
  - Total ticket revenue
  - Total tickets
  - Average ticket price per entry

## Screenshot

![Screenshot](https://github.com/ruiined/race-startlist/blob/main/screens/race-startlist-screenshot.jpg)
