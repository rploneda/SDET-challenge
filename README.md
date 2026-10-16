# Playwright + TypeScript Automation Framework

This repository contains a test automation framework built with **Playwright** and **TypeScript** as part of an SDET mentorship challenge. It includes UI tests, API tests and a BDD scenario, organized with the Page Object Model.

---

## Goal

The goal of this project is to put into practice the programming, OOP, automation and test design skills covered during the mentorship, through working code:

- **OOP:** classes, constructors, encapsulation (getters/setters), inheritance, polymorphism, static and instance members
- **UI automation:** Page Object Model, CSS and chained locators, fixtures, hooks and web-first assertions
- **API automation:** GET and POST requests, typed models, schema validation and negative scenarios
- **BDD:** a Gherkin feature connected to step definitions
- **Framework design:** environment-based configuration, external test data, parameterized tests, custom assertions and cross-browser execution (Chromium, Firefox and WebKit)
- **Principles:** SOLID, DRY and KISS

---

## Applications Under Test

| Type | Application | URL |
|---|---|---|
| UI | Playwright Automation practice site | https://www.playwrightautomation.com/ |
| API | Fake Store API | https://fakestoreapi.com/ |

---

## Tech Stack

- **Playwright Test:** test runner, browser automation and API requests
- **TypeScript:** language used across the framework
- **zod:** schema validation for API responses
- **playwright-bdd:** runs Gherkin feature files with Playwright
- **dotenv** and **cross-env:** load environment files and select the environment

---

## Project Structure

```text
├── api/              # API clients (ProductsApi, AuthApi)
├── bdd/
│   ├── features/     # Gherkin feature files
│   └── steps/        # Step definitions
├── configs/          # Environment loading (env.ts) and constants (routes, endpoints)
├── data/
│   ├── ui/           # Test data for UI tests
│   └── api/          # Test data for API tests
├── fixtures/         # Custom fixtures that provide page objects and API clients
├── models/           # ContactDetails class, API models and schemas
├── pom/              # Page Object Model (BasePage, HomePage, PracticePage)
├── tests/
│   ├── ui/           # UI tests
│   └── api/          # API tests
├── utils/            # Custom matcher, schema validator and logger
├── .env.qa / .env.dev
└── playwright.config.ts
```

---

## Environment Configuration

The framework supports two environments, each with its own file in the project root:

| Environment | File |
|---|---|
| QA (default) | `.env.qa` |
| Dev | `.env.dev` |

Each file defines the base URLs used by the tests:

```text
UI_BASE_URL=https://www.playwrightautomation.com
API_BASE_URL=https://fakestoreapi.com
```

The environment is selected with the `TEST_ENV` variable. If it is not set, QA is used. The `test:qa` and `test:dev` scripts set it for you.

`configs/env.ts` loads the selected file, and the run stops with a clear error if a variable is missing. `.env.example` lists the required variables.

> **Note:** `.env.qa` and `.env.dev` are committed on purpose to make the project easy to review. They only contain public URLs, with no credentials or sensitive data. In a real project, these files would be git-ignored and only `.env.example` would be shared.

---

## Scripts

Requirements: **Node.js 20 or higher**

Install the dependencies and browsers first:

```bash
npm install
npx playwright install
```

Then run any of the following:

| Script | Description |
|---|---|
| `npm test` | Runs all tests (BDD, UI on all browsers, API) |
| `npm run test:qa` | Runs all tests against the QA environment |
| `npm run test:dev` | Runs all tests against the Dev environment |
| `npm run test:chromium` | Runs the UI tests in Chromium |
| `npm run test:firefox` | Runs the UI tests in Firefox |
| `npm run test:webkit` | Runs the UI tests in WebKit |
| `npm run test:api` | Runs the API tests |
| `npm run test:bdd` | Generates and runs the BDD tests |
| `npm run report` | Opens the last HTML report |

After a run, the HTML report includes screenshots and videos for failed tests, and a trace for every test. All artifacts are saved in the `test-results/` folder.
