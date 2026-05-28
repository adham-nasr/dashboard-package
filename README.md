# @adhamnasr/dashboard

A lightweight logger package for posting event and diagnostic logs to a centralized dashboard application.

## Features

- Initialize with an API key and application name
- Reads `baseUrl` from a local `.env` file
- Sends log payloads to `POST /api/applications/:appName/logs`
- Returns the raw fetch response for success or error handling

## Installation

```bash
npm install @adhamnasr/dashboard
```

## Usage

Create a `.env` file in the root of your project with the dashboard API base URL:

```env
baseUrl=https://your-dashboard.example.com
```

Then use the package like this:

```js
import Logger from "@adhamnasr/dashboard";

Logger.init("YOUR_API_KEY", "my-app-name");

const logEntry = {
  level: "info",
  message: "User signed in",
  userId: "123",
  timestamp: new Date().toISOString(),
};

const response = await Logger.log(logEntry);
console.log(response.status, await response.text());
```

## API

### `Logger.init(apiKey, appName)`

Initializes the logger.

- `apiKey` (string): Bearer token used for authorization.
- `appName` (string): Application name used in the log endpoint path.

This method reads `baseUrl` from `.env` using Node's `process` utilities.

### `Logger.log(data)`

Sends a log payload to the dashboard.

- `data` (object): JSON-serializable log data.

Returns the fetch response or an error object if the request fails.

## Notes

- `type` is set to `module` in `package.json`, so use ES module imports.
- Make sure `.env` contains a valid `baseUrl` before calling `Logger.init()`.

## License

ISC

## Contributing

If you want, I can also expand this README with:

- a detailed log schema example
- recommended error handling patterns
- env file example for auth and staging/production
- package publishing or upgrade instructions
