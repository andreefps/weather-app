# Weather App

App that displays London's current weather and forecast for the week using React + Redux + Tailwind and OpenWeatherMapApi


Live version : https://weather-4pp.surge.sh/

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
the OpenWeatherMapApi's "/onecall" endpoint.

The response then is cached and stored on redux state.

In case the API call returns an error, the app checks if there's cached data to show if not, an error message is rendered.
