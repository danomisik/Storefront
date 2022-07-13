# Storefront Frontend Project

This project contain example frontend for store with users, orders and products that can be sold in store.

## Getting Started

To get started, clone this repo and run `npm install` in your terminal at the project root.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## How to deploy App

1. Deploy Storefront Backend

- Clone [Storefront Backend repo](https://github.com/danomisik/StorefrontBackend)
- Deploy Storefront Backend - open README.md of Storefront Backend and follow `How to deploy DEV application` instructions
- Keep default configuration
- Backend will be deployed in port `3000`.

2. Deploy Storefront Frontend

- Clone this repo
- Run `npm install` in root directory of this repo to install project dependencies.
- Run `ng serve` in root directory of this repo to deploy developement server of frontend

3. Visit `http://localhost:4200/` in your browser and buy something.

## Project description

App contains these components (`app/components` folder):

- cart: contains products in cart and final price of cart
- purchase: contains form for additional purchase
- cart-container: encapsulates cart and purchase component, user is redirected here by Cart tab(Routing: `/cart`).
- confirmation: when purchase is success, user is redirected here from purchase component (Routing: `/cart/confirmation`)
- navigation: navigation bar at top of the app
- product-item: product item that is part of product list, child of product-list component
- product-item-detail: product detail page redirected from product-item component (Routing: `/products/:id`)
- product-list: renders product items, user is redirected here by Products tab(Routing: `/` - default route).

App contains these models (`app/models` folder):

- cart: represent cart in store
- product: represent product in store

App contains these services (`app/services` folder):

- cart: represent cart service that contain one mock cart of user (Carts for users should be get from Storefront Backend in future).
- product: represent product service that is pulling products from Storefront Backend.

App have these routings:

- `/`                  - product-list component(default route)
- `/cart`              - cart-container(parent of cart and purchase component)
- `/cart/confirmation` - confimation component that contains confirmation page
- `/products/:id`      - product-item-detail component that contains product details

## Additional details

This app was build by [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.