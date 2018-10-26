# transit-app

Transit App is a frontend web application that allows users in Greater Vancouver to check live bus locations without having to register accounts. Each marker on the map comes with a clickable popover window that displays the bus information.

## Setting Up API Keys
- in the project root folder create a new ``.env`` file like [this](https://github.com/margaritawang/transit-app/blob/master/.env.example)
- add the API keys in the ``.env`` file. The API keys will be provided in a separate text file.
- when staging on ``localhost`` make sure you have the [CORS plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) installed and enabled on your browser

## Setup
- ``git clone`` this repo and ``cd`` into the project root directory
- run ``npm install`` within the root directory
- run ``npm start`` and the project should open in a new webpage.

## Build for production
- run ``npm build`` to bundle React in production mode
