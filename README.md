# Random Quote Generator

## Table of Contents

- Description
- Installation
- Usage
- Technologies Used
- Acknowledgements

### Description

This project is a React-based web application that displays inspirational quotes fetched from an external API. Users can select different categories and change the color scheme of the application when searching for new quotes.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Obtain an API key from [API Ninjas](https://api-ninjas.com/) and add it to your environment variables as __VITE_API_KEY__.

### Usage

1. After installing dependencies, start the application by running `npm run dev`.
2. Once the application is running, you can view it in your web browser on the web adddress and port supplied by Vite. The default URI in development mode is `http://localhost:5173`.
3. Choose a category from the dropdown menu to display quotes from that category.
4. Click the "New Quote" button to fetch and display a new quote.
The application automatically changes the background color with each new quote.
5. In addition, you can immediately tweet the quote text by pressing the Twitter logo on the page.

#### Application Screenshots

The following images show the quote generator app in light and dark modes on a broswer.

![Light Mode]('./src/assets/image1_light.png')

![Dark Mode]('./src/assets/image1_dark.png')

### Technologies Used

- HTML
- CSS
- React.js
- API Reference Docs
This project uses the API Ninjas API to fetch quotes.

### Acknowledgements

Special thanks to API Ninjas for providing the quotes API.
