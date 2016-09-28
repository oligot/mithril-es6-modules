# mithril-es6-modules

> Simple example that shows how to use Mithril with ES6 modules

## Dependencies

Install the dependencies with

```shell
npm install
jspm install
```

## Run

### Client-side rendering

Start a local server that watches files and reload the browser when the files changes

```shell
npm run serve
```

Open a browser at the URL given by browser-sync (usually this will be [http://localhost:3000/](http://localhost:3000/)).

You should now see a client-side rendered Hello World.

### Server-side rendering

Start the server with

```shell
jspm run server.js
```

Open a browser at the URL [http://localhost:8080/](http://localhost:8080/).

You should now see a server-side rendered Hello World.
