# Laravel Breeze - Nuxt Edition

This repository is an implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Nuxt](https://nuxt.com/) with [Nuxt UI](https://ui.nuxt.com/). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum) and [nuxt-auth-sanctum](https://nuxt.com/modules/nuxt-auth-sanctum) module, allowing you to quickly begin pairing your beautiful [Nuxt UI](https://ui.nuxt.com/) frontend with a powerful Laravel backend.

## Installation

This project requires a proper Laravel Breeze API template to work with. Follow the guide below to create a new project and link it with Nuxt frontend.

### Laravel Breeze API

**Easy way 🚀**

You can always use pre-configured template to start working immediately - [Breeze API](https://github.com/manchenkoff/breeze-api) or you can follow the steps below to create a new Laravel project and configure it manually.

**Not easy way 📚**

First, you will need follow one of the guides below:
- Create with Composer - [Creating a Laravel Project](https://laravel.com/docs/11.x#creating-a-laravel-project)
- Create with Docker - [Docker Installation Using Sail](https://laravel.com/docs/11.x#docker-installation-using-sail)

After you have your Laravel project ready, you can install Laravel Breeze, please refer to the [official documentation](https://laravel.com/docs/11.x/starter-kits#breeze-and-next).

**💡 Note:** Make sure to run all database migrations and check that the API is available at `http://localhost:8000` or `http://localhost:80` (when using Laravel Sail).

**Configure existing Laravel project**

If you already have a Laravel project and want to add Breeze w/ Sanctum to it, you can check this commit to see what files were added/changed and adjust your project accordingly: [Add Laravel Breeze w/ Sanctum](https://github.com/manchenkoff/breeze-api/commit/09c6586fc5f2ca84e467fe443fa7cfddbd8f7338).

### Nuxt Breeze

To start working with Nuxt frontend, you need to clone this repository and install dependencies:

```bash
git clone https://github.com/manchenkoff/breeze-nuxt
```

For dependencies you should use [yarn](https://yarnpkg.com/getting-started/install):

```bash
yarn install
```

Configure your `.env` file:

```bash
NUXT_PUBLIC_SANCTUM_BASE_URL=http://localhost:8000 # or your Laravel API URL
```

Once configuration is done and you have your Laravel API running, you can start the Nuxt frontend:

```bash
yarn dev
```

## Development

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more about technologies used in this template.

### Code Style and Linting

Run ESLint to check for issues in the code:

```bash
yarn lint
```

Or automatically fix issues:

```bash
yarn lint:fix
```

### Start Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

### Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```
