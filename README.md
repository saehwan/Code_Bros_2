# Code Bros

## Team Members

- Aaron Cheng
- Bruce Quach
- Andrew Nguyen
- Saehwan Park
- Reetu Shrestha
- Andrew
  
## Inspiration
The most important part of a lot of trips/vacations are the new food you get to experience, for a long time the process of planning this was arduous.

## What it does
Palate Passport plans to streamline this process and allows users to create restaurant itineraries for their upcoming trips; Allowing User to find quality local restaurants in a location and adding them to create and plan an itinerary for their upcoming trip

## How we built it
Implemented Yelp API, React/TS as well as SCSS in order to create a dashboard that allows user to search for restaurants in a location and add that location to an itinerary that can be stored and referenced.

## Challenges we ran into
Implementing Yelp API: Initial Challenges with connecting to the API due to CORS issue that was resolved by setting up a proxy server Dependency Tree/Conflicts: working as a Team on different parts of the page, we ran into issues with merging our code and having our dependencies not conflict Styling was a slow and arduous process

## Accomplishments that we're proud of
Delivering a functioning product; implementing communication with an API; implementing redux to allow for seamless state management and communication of the application;

## What we learned
We learned new tech like typescript, applied API functions on the program, distributed roles correctly, how to work as a team, how to overcome when we faced error or wall.

## What's next for development
Further connecting the app to health and fitness apps as well as adding functionality to import the itineraries to Apple/Google Calendars

## Built With
css
git
github
html
javascript
node.js
react
redux
scss
typescript
yelpapi

## Getting Started

### Prerequisites

Ensure you have `npm` installed.

### Installation and Running

1. Navigate to the repository directory:

   ```
   cd path/to/repository
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Start the project:
   ```
   npm start
   ```

## Code Quality

ESLint rules and prettier configurations are set up for this project.

To lint the code, run:

````
 npm run lint
````

## Project Structuring Rules

### React

- React components should be functional, not class (see usage)

---

### Styling

- This project utilizes CSS modules.
- When importing SCSS files, use the following format:
  ```typescript
  import styles from "./[filename].module.scss";
  ```
  This ensures modularity of classNames.
- When referencing classNames, use them modularly:
  ```typescript
   <div className={styles.{yourClassName}}></div>
  ```
- Non-global styling should be encapsulated using SCSS nesting:
  ```SCSS
   .HomePage{
      display: flex;
      .HomePage-button{
         color: red;
      }
      .HomePage-whatever{
         color: blue;
         .something-insideOfWhatever{
            color: green;
         }
      }
   }
  ```
- For color consistency, theme colors should be defined in App.css and exported.

### Components

- All components (pages and sub-components) are in `src/components`.
- Component files should follow this naming convention:
  ```
  [component-name].component.tsx
  ```

### Redux

- This project leverages the Redux Toolkit.
- Global states should be separated into slices by category, if needed in the future. Refer to the codebase for usage examples.

---
