# ReactJS-CRUD-with-mockAPI

A CRUD interface in React that reads and writes against a mock API, so the full add / read / update / delete flow can be exercised without standing up a backend.

## Features

- Add a record — `src/components/home/Add.jsx`
- List records — `src/components/home/Fetch.jsx`
- Update a record — `src/components/home/Update.jsx`
- All requests funnelled through one module, so swapping the mock for a real endpoint is a single-file change

## Stack

React 18 · Vite · Tailwind CSS

## Running

```bash
npm install
npm run dev
```

Serves on `http://localhost:5173`; `npm run build` produces the production bundle.

## Notes

The mock API is the point of this repo — it keeps the focus on the React data flow (form state, request lifecycle, list refresh) instead of on server code. Swapping in a real backend means editing the request module and nothing else.
