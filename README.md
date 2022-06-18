# LAB - Class 04 - API Server

## Author

Guy Farley

## Problem Domain

The purpose of this lab is to perform CRUD Operations on a database and test for functionality.

## Links and Resources

<https://gf-api-server.herokuapp.com/>
<https://github.com/GuyFarley/api-server>

## Setup

Database URL: postgres://localhost:5432/gf-lab04

## How to initialize/run your application (where applicable)

This application can be accessed through the heroku app listed above. It is only a back end server at this point, but a user can post new items via Thunderclient. Current items stored in the database can be accessed by using one of the routes noted below.

## How to use your library (where applicable)

## Features / Routes

GET all whiskeys: /whiskey
GET one whiskey: /whiskey/<id #>
POST one whiskey: /whiskey
UPDATE one whiskey: /whiskey/<id #>
DELETE one whiskey: /whiskey/<id #>

GET all beers: /beer
GET one beer: /beer/<id #>
POST one beer: /beer
UPDATE one beer: /beer/<id #>
DELETE one beer: /beer/<id #>

## Tests

Created tests using Jest and Supertest:

404 on a bad route
404 on a bad method
Creates one whiskey
Gets all whiskeys
Gets one whiskey
Updates one whiskey
Deletes one whiskey

## UML
