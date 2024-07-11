﻿# webShop
 
This project is part of an interview task for Applifting, demonstrating abstract automation tests for a web shop. The tests are automated using Playwright and JavaScript, with Faker used to create random test data. The project employs the Page Object Model (POM) pattern to ensure maintainability, scalability, and reusability.


#Structure of the automation test
webshop/
├── .github/workflows
│   └── playwright.yml
├── data/
│   ├── categories.json
│   └── items.json
├── node_modules/
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── NavigationPage.js
│   └── SearchPage.js
├── tests/
│   ├── addItemToCart.spec.js
│   ├── browseAndNavigation.spec.js
│   ├── payByCard.spec.js
│   ├── searchItem.spec.js
│   └── updateCart.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── playwright.config.js
