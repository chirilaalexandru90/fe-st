# BACKEND

## Description

The customer realises that online shopping has gotten popular and wishes to offer their products through an online shop.
They list out some basic functionality to want to start with on their endeavour with e-commerce:

- As a ***customer***, I should be able to ***see the available products***
- As a ***customer***, I should be able to ***search the available products***
- As a ***customer***, I should be able to ***add products to my shopping cart***
- As an ***administrator***, I should be able to ***add, edit and remove products***

For inspiration, the customer drew a wireframe of an online shop to help us understand what they were after. It is just
for clarification purposes, and the customer gave us free hands make it work/look in any way we want.

![pretty straight lines for a drawing](ref.png)

## Starter pack API
A simple json-server based API that provides endpoints for products, users and their carts.

#### Prerequisites to running the API:
- Node.js installed in your environment

#### How to run:
Install the dependencies using yarn (if installed) or npm
``` sh
yarn
``` 
or 
``` sh
npm install
```

#### Running the API

Run the API server using
``` sh
yarn be
``` 
or 
``` sh
npm run be
```
The default location for the json-server is [`localhost:8080`](http://localhost:8080)

### API endpoints
There are four endpoints provided by the [json-server](https://github.com/typicode/json-server). As per [json-server](https://github.com/typicode/json-server) documentation: 
all of endpoints support `GET`, `POST`, `PUT` and `DELETE` so be careful!
The API generates an in memory JSON-database on runtime that contains 1000 products, 100 users and their carts by default. That 
means restarting will recreate the database. There is no authentication, so you can use any user id, or ignore the endpoint
altogether.

Endpoints:
- `/recommendeds` is a utility endpoint to get the first 10 products
- `/products`
- `/users`
- `/carts`

[json-server](https://github.com/typicode/json-server) cheatsheet:
- Search with `GET /products?q={keyword}`
- Paginate with `GET /products?_page={page_number}&_limit={number_of_entries}`
- Get specific product `GET /products/{product_id}`
- Get specific user `GET /users/{user_id}`
- Get specific cart `GET /carts/{user_id}`
- Whole database is viewable with `GET /db`
- More info if needed on [json-server github page](https://github.com/typicode/json-server)

Expect objects to look something like this:

```typescript
type Product = {
    id: number,
    name: string,
    description: string,
    defaultImage: string,
    images: string[],
    price: number,
    discount: number,
};

type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    }
    phone: string,
    avatar: string,
    email: string,
    address: {
        country: string,
        city: string,
        zip: string,
        street: string,
    },
    orders: {
        id: number,
        products: {
            id: number,
            quantity: number,
        }[],
    },
    role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
};

type Cart = {
    id: number, // User id
    products: {
          id: number,
          quantity: number,
    }[],
}
```

### Examples:

#### Products
- `GET` `http://localhost:8080/products`
- `GET` `http://localhost:8080/products?q={keyword}`
  ```javascript
      [
          {
              "id": 1,
              "name": "Incredible Metal Sausages",
              "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
              "defaultImage": "http://placeimg.com/640/480/cats", // Unfortunately faker.js doesn't support dogs...
              "images": [
                  "http://placeimg.com/640/480/cats",
                  "http://placeimg.com/640/480/cats",
                  "http://placeimg.com/640/480/cats",
                  "http://placeimg.com/640/480/cats"
              ],
              "price": 64946.54, // IKR, it's an expensive metal sausage!
              "discount": 8
          },
          ...
      ]
  ```
- `POST` `http://localhost:8080/products`
```json
    {
        "name": "Incredible Metal Sausages",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "defaultImage": "http://placeimg.com/640/480/cats",
        "images": [
            "http://placeimg.com/640/480/cats",
            "http://placeimg.com/640/480/cats",
            "http://placeimg.com/640/480/cats",
            "http://placeimg.com/640/480/cats"
        ],
        "price": 64946.54,
        "discount": 8
    }
```
- `PUT` `http://localhost:8080/products/{product_id}`
```json
    {
        "name": "Changed this",
        "description": "And this",
        "defaultImage": "http://placeimg.com/640/480/cats",
        "images": [
            "http://placeimg.com/640/480/cats",
            "http://placeimg.com/640/480/cats",
            "http://placeimg.com/640/480/cats",
            "http://placeimg.com/640/480/cats"
        ],
        "price": 1,
        "discount": 0
    }
```
#### Users
- `GET` `http://localhost:8080/users/{user_id}`
    ```javascript
    {
        "id": 1,
        "name": {
            "firstName": "Cesar",
            "lastName": "Reichel"
        },
        "phone": "1-869-324-5801 x510",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg",
        "email": "Charlie.Ernser@gmail.com",
        "address": {
            "country": "Martinique",
            "city": "Stromanfurt",
            "zip": "30627",
            "street": "3607 Olson Motorway"
        },
        "role": "ADMIN",
        "orders": [
                {
                    "id": 1,
                    "products": [
                        {
                            "id": 388,
                            "quantity": 5
                        },
                        ...
                    ]
                },
            ],
    }
  
    ```
#### Carts
- `GET` `http://localhost:8080/carts/{user_id}`
    ```javascript
      {
          "id": 1,
          "products": [
              {
                  "id": 468,
                  "quantity": 7
              },
              ...
          ]
      }
    ```

# FRONT END

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
