# Clearpoint assignment

Complete this project for the assignment. There still a lot of improvements can be done.

## Implemented

* Refactoring the frontend code to TS.
* Modify the running scripts to proxy the backend APIs with a single run instance.
* Add the ability to talk to backend APIs.
* Mark the todo to completed.
* Some level of unit tests are added.
* Refactoring the code to more structured code.

## TODOs

* Setup a Git action CI/CD pipeline. when new change coming, it will validate the build and do tests, and may aslo do deployment to some evnrionment
* Unit tests haven't been done to cover 100% of the work. This just a showroom for my capabilities.
* Move the environment variables to a proper .env files to make it works with multiple build enviroments.
* Client side caching for API calls.
* More validation and UI final tweak can be done as well.
* Also there are so many things can talk.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode with the backend API also started.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The API will also proxied from [http://localhost:3000/api](http://localhost:3000/api)

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
