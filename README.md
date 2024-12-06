# Next.js - Blank Screen Before Data Fetches on About Page

This repository demonstrates a common issue in Next.js applications where a slow API call on a page results in a blank screen before the data is fetched. The problem occurs because the loading state is not explicitly handled, causing a visual glitch or a blank screen for a short period.

## Problem
The `pages/about.js` file contains a simulated API call with a 3-second delay. During this delay, the page displays nothing before showing the actual data. This leads to a poor user experience.

## Solution
The `pages/aboutSolution.js` file demonstrates the solution. The solution properly handles the loading state by displaying a loading indicator while waiting for the API call to complete. This provides a better user experience.

## How to reproduce the problem
1. Clone this repository.
2. Navigate to the `pages` directory.
3. Run `npm install` or `yarn install` to install the necessary dependencies.
4. Run `npm run dev` or `yarn dev` to start the Next.js development server.
5. Visit `localhost:3000/about` to see the problem. The page will be blank for 3 seconds before displaying the data.

## How to see the solution
1. Navigate to the `pages` directory.
2. Replace the content of `pages/about.js` with the content of `pages/aboutSolution.js`.
3. Refresh `localhost:3000/about` to see the solution.  The page will now display a "Loading..." message while waiting for the data.