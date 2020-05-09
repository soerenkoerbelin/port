My approach of building a responsive portfolio page based on REACT and CSS Grid. 
Nothing special, some gimmicks like changing fonds and colors on every refresh or on click. 
The gallery loads images on scroll and the alignment basically is implemented using 
CSS grid and flexbox.
Because I did not wanted to use redux I built a basic store to pass the fonts and colors through the application. 


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Before calling deploy, add the "homepage": "https://soerenkoerbelin.com" property to the top of the package.json file. This will deploy the app to your GitHub Pages. Afterwards, remove the property and restart by calling `start`