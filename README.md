# :notes: Who sings

Musixmatch Front-end test

## :rocket: Goals and purpose

Goal of the game:
choose the artist that sings a specific line of lyrics, winning points for every correct choice
Must have features:

-   quiz card with one line of lyrics and 3 artists to choose from
-   the game ends after completing N quiz cards, one after the other
-   ask the name of the player with the ability to log off so that another user could play
-   count the points and save them at the end of the game
-   the screens of the game should be:
-   the quiz screen
-   the user's screen where they can see their name and the points of the last N games
-   the high score screen where you can see a chart of the best players

## :pencil2: UI

I designed the UI for this app on Figma.
[Figma link to the UI I designed](https://www.figma.com/file/umQ0ujQdIuU5DxZurJK7vY/whosings?node-id=0%3A1)

## :telephone_receiver: Add the API key

Add your API key to use the Musixmatch API.
Generate the key [here](https://developer.musixmatch.com/).

create `.env` file in the root of the project

```
#.env file
REACT_APP_API_KEY="<api key>"
```

## :computer: Commands

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\

## :dizzy: Improvements

-   I could add more genres, only rap for now.
-   Better handling of lyrics quotes

## :scream: Known issues

-   The CORS proxy is deployed as an app on my free tier on Heroku. It takes a bit to "warm up" so the first API call takes a little bit more time.
-   I should avoid one event listener for each button and use event bubbling to have just one listener. 
