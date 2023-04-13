# Boilerplate: Fullstack with Tailwind

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.ts`)
* an API client module (`client/apis/fruits.ts`)
* configuration for Jest and React Testing Library
* configuration for TailwindCSS
* a single client-side test (`client/components/App.test.tsx`)

### Installation

#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```sh
git clone https://github.com/tohora-2023/boilerplate-fullstack-tailwind [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
npm run knex migrate:latest # to update the database
npm run knex seed:run # to run the seeds
npx tailwindcss -i ./client/styles/index.css -o ./server/public/styles.css # to build tailwind

```

You can find the server running on [http://localhost:3000](http://localhost:3000).
