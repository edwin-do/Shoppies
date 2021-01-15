# The Shoppies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and developed for the Shopify 2021 Summer UX/Web Developer application. This application allows the user to add and remove movies to a nomination list from the search results. Search results are updated as the search term is updated. The technical aspects were achivieved using React useState and useEffect Hooks. It also includes shareable links to Facebook, Linkedin, Twitter and email.

To try this application, you can go [here](https://edwin-do-shoppies.netlify.app/).

## Installation

Run the following commands to run the application locally:

Clone this repo into 
```bash
git clone https://github.com/edwin-do/shoppies.git
```
Install the dependencies
```bash
npm install
```
You would need an API key from http://www.omdbapi.com/. 

Create a file '.env' in the src folder and input your api key as follows.

```bash
REACT_APP_API_KEY = 'YOUR API KEY' 
```

Run the development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

Type in the search bar and see the results show up. Use the "+ " to add the nomination onto the list.
Remove the nomination at anytime using the trash icon. 

Instructions are provided in details via the "Need help?" button. 

More results can be viewed in the pagination at the bottom of the results!

You can share and tell your friends to nominate their movies via Facebook, Twitter, LinkedIn or Email when you're done!








