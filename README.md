# Playwright TypeScript Automation - Way2Automation - Banking Transactions

This project automates customer banking operations (deposit, withdraw) on the [Way2Automation banking app](https://www.way2automation.com/angularjs-protractor/banking/#/login) using **Playwright with TypeScript**.

It follows the **Page Object Model (POM)** structure and includes:
- `.env` configuration
- Structured test suite
- HTML and trace reports for test result analysis

---

## Project Structure

```
way2auto/
├── pages/                  # Page object classes (LoginPage, AccountPage)
├── tests/                  # Test cases
├── test-results/           # Playwright test outputs (HTML, traces)
├── .env                    # Environment config
├── playwright.config.ts    # Playwright config
├── tsconfig.json           # TypeScript config
└── README.md               # This file
```

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Configure environment

```env
# .env
BASE_URL="https://www.way2automation.com/angularjs-protractor/banking/"
```

### 3. Run tests in chromium browser with headed mode

```bash
npx playwright test --project=chromium --headed
```

---

## Generate and View HTML Report

After test execution:

```bash
npx playwright show-report
```

This opens an interactive HTML report (automatically got stored in `playwright-report/`).

---

## To View Trace Report

Playwright generates trace files per test.

### Example Trace Files:

```
/way2auto/test-results/customerTransaction-Banking-Transactions-Deposit-Money-chromium/trace.zip
/way2auto/test-results/customerTransaction-Banking-Transactions-Withdraw-Money-chromium/trace.zip
```

### How to open a trace:

```bash
npx playwright show-trace /way2auto/test-results/customerTransaction-Banking-Transactions-Deposit-Money-chromium/trace.zip
```

Use the same format for each trace file.

---


## Technologies Used

- Playwright
- TypeScript
- Dotenv
- Page Object Model design pattern

---

## Author

- Sridhar K

---


