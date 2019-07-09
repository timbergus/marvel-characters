# Marvel Characters Project

<img src="./src/assets/images/spidy.png" width="280" alt="Hey!">

This is a simple project to show a Marvel characters list. This list allows you to navigate to the character detail in a new view.

The project's repository is [marvel-characters](https://github.com/timbergus/marvel-characters).

The project has been deployed to Google's Firebase. You can find the final application working on this [URL](https://marvel-characters-da0d4.web.app/).

## Tools

This project has been generated using my own [project generator](https://github.com/timbergus/fullstack-cli), and adapted to work with IE11.

The API used for the project is [MarvelQL](https://medium.com/novvum/say-hello-to-marvelql-a-graphql-entry-into-the-marvel-universe-260245200b7d), a Marvel API, GraphQL adaptation.

## Libraries

I have used [Material UI](https://material-ui.com/) for the UI components and styles.

I have used [Apollo Client](https://www.apollographql.com/docs/react/api/apollo-client/) to communicate with the API.

I have used [Redux](https://react-redux.js.org/) to handle the internal state of the application (in this case the user's filter for the character list).

I have used [uuid](https://www.npmjs.com/package/uuid) to generate unique identifiers for the list's elements keys.

I have used [PostCSS](https://postcss.org/) for styles.

I have used [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for testing, and [ESLint](https://eslint.org/) with Airbnb rules package, and [StyleLint](https://stylelint.io/) to check code quality.

I have typed JavaScript with [Flow](https://flow.org/).

## Resources

* [Loading Gif](https://dribbble.com/shots/2098959-Marvel-loader/attachments/379027)
* [Small Loading Gif](https://www.behance.net/gallery/31234507/Open-source-Loading-GIF-Icons-Vol-1)

## Project Instructions

All the project has been automatized using NPM scripts.

* __Start:__ This script launch [webpack-dev-serve](https://github.com/webpack/webpack-dev-server) to start developing your new application.
* __Build:__ This script builds the application and put the result inside the `dist` folder.
* __Docs:__ This script creates the project documentation using [ESDoc](https://esdoc.org/).
* __Lint:__ This script creates an output file with the result of the linter to be used for example in [Jenkins](https://jenkins.io/).
* __Test:__ This script run the tests and coverage for the application.
