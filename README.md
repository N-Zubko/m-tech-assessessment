# technical assessment - additional changes and functionality

## Why:

I like the design and the project idea, so I decided to complete the task based on the code I pushed after 1 hour in the office and based on the code discussion with Clark.

## Some side notes:

-   Age validation is now working. The app shows alerts when the age is less than 18 years, or when the date of birth is not entered.

-   I used em instead of px in most cases to make elements scalable keeping accessibility in mind, so that users who need to zoom in, would be able to do so.

-   The mockups cover two screen sizes w=1920px and w=350px. The app looks best in those sizes. More information is needed from designers on the layout for other sizes. I added the most popular screen sizes to `_mixins.scss` to be able to use them in the future.

-   I tried to stick to the mockup, but for better accessibility labels are required for every selection in the modal.

-   The state in the functional component Modal is controlled using useState hook. Global state is managed using the context. It might be an overkill for this small project. I added it with the intention to use when the app gets more components and states.

## Start script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.
The port has been changed from the default one to 8080 by specifying it as an environment variable.

The page will reload when you make changes.
You may also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
