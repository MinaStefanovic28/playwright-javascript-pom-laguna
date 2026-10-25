# Laguna E-Commerce Automation Framework

Automated E2E test suite for the Laguna online bookstore (laguna.rs). 
The project is built using Playwright with JavaScript and follows the Page Object Model (POM) design pattern.

## Technologies Used
* JavaScript (Node.js)
* Playwright
* Page Object Model architecture

## Project Structure
* `pages/` - Contains Page Object classes (HomePage, CartPage, SearchResultsPage, etc.)
* `tests/` - E2E test scripts covering the complete purchase flow
* `playwright.config.js` - Playwright runner configuration

## Setup and Run Instructions

1. Clone the repository:
   git clone https://github.com/MinaStefanovic28/playwright-javascript-pom-laguna.git

2. Install dependencies:
   npm install

3. Run tests in headless mode:
   npx playwright test

4. Run tests with UI visible:
   npx playwright test --headed
