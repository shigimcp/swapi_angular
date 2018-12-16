# Pre-interview Code Project - shigimcp (angular)

Use the [Star Wars API](http://swapi.co) to generate a list of the films that a particular character appears in.

### Requirements
Submit an application that accomplishes the objectives below. Hosting is up to you, we only need a link to a working deployment of your project, and a link to your source code. We reccomend [js bin](http://jsbin.com/) and [Plunker](https://plnkr.co) for free, all-in-one solutions.


Bonus points for SCM with [github](https://github.com/)/[gitlab](https://about.gitlab.com/)/[bitbucket](https://bitbucket.org) + continuous integration and deployment to a real hosting service such as [AWS](https://aws.amazon.com/), [Google Cloud](https://cloud.google.com/), [Digital Ocean](https://www.digitalocean.com/), or [Heroku](https://www.heroku.com/)


### Objectives
- Allow users to choose a character from the provided JSON file
- Upon selection of a character, the UI should update to display information about **each** of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
- Do this with any js framework, and some kind of component-based pattern
- You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
- Don't load the movie data until the character is clicked
- Don't show any movie information until all of the character's movies have loaded
- Handle HTTP errors
- Make it pretty! You're encouraged to use [Bootstrap](https://getbootstrap.com/), [Bulma](https://bulma.io/), [Material Components](https://material.io/develop/web/), or any other css framework

#### Our favorite js frameworks

- [Angular](https://angular.io/)
- [React](https://reactjs.org/)
- [Preact](https://preactjs.com/)
- [Vue](https://vuejs.org/)
  
Feel free to use any function library you'd like.

If you have feedback about the exercise, please include it.

**NOTE:** Obi-wan's URL is intentionally incorrect, please do not modify the JSON.

----

`characters.json`
```
    {
      "characters": [
        {
          "name": "Luke Skywalker",
          "url": "https://swapi.co/api/people/1/"
        },
        {
          "name": "Darth Vader",
          "url": "https://swapi.co/api/people/4/"
        },
        {
          "name": "Obi-wan Kenobi",
          "url": "https://swapi.co/api/people/unknown/"
        }, 
        {
          "name": "R2-D2",
          "url": "https://swapi.co/api/people/3/"
        }
      ]
    }
```

----

# SwapiAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
