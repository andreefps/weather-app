# Weather App

App that displays London's current weather and forecast for the week using React + Redux and OpenWeatherMap Api

## Running the app

Before running the app you need to install the dependencies with:

```bash
yarn
```

Then to run the app in development mode just type:

```bash
yarn run dev
```

## How it works

When loaded, the app fetches the current weather and the week forecast using
the "/onecall" endpoint.

The response then is cached and stored on redux state.

In case there's an error the app checks if there's cached data to show if not, an error message is rendered.

## Important considerations

After reading the API documentation i realized that using "/forecast5" and "/current"
would be a lot of overfetching as i would be calling two different endnpoints and specifically forecast5 that returns way too much data that i didnt need.

Iterating through a long array would potentially affect the perfomance and also add unecessary complexity to the code.

## Planned improvements

- Add search bar to check weather on different locations

## Author

- Andre Felipe Possiedi da Silva
