# Reqres-cypress

This project shows usage of cypress to test REST 
endpoints. Endpoints are provided from open REST Api : https://reqres.in/ .

## Technologies

* JavaScript
* Cypress
* Mocha

## Run (all terminal commands run in a directory where is your project)

 * PreRequests is to install node js
 * To run project download this repository
 * type in terminal `npm install`
 * type in terminal `npx open cypress` this will open cypress interface
 * to run all test from terminal type `cypress run --spec "cypress/integration/*"`
 * to run test from terminal specific test type `cypress run --spec "cypress/integration/Api(reqres)/jsfile`
