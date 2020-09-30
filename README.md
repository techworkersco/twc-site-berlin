# Berlin TWC

This repository is responsible for most content visible on the website [TechWorkersBerlin.com](https://TechWorkersBerlin.com). The site is made with a static site generator called [Jekyll](https://jekyllrb.com/) in a language called Ruby.

## Getting Started

### With Docker (recommended)

We use Docker to have a reproducible development environment.
Before proceeding, install [Docker Compose](https://docs.docker.com/compose/install/) on your system.

1. Start the application with the command: `docker-compose up`
2. Access the application in a browser at `localhost:4000`
3. Execute other commands in the Docker container: `docker-compose run --rm --service-ports jekyll bash`

### Without Docker

1. Install dependencies: `bundle install && npm install`
2. Start a local server: `npm start && bundle exec jekyll serve`
3. Verify all internal links are valid: `bundle exec rake`

Open a browser to localhost:4000

## Add an event

Add a file inside the [`_events`](_events) directory. Copy a previous file as a template, and make sure to include the right time zone for Berlin!

## Add a blog post (inside /news)

Add a file inside the [`_news`](_news) directory. Copy a previous file as a template. If an author does not exist, add one inside [`_data/authors.yml`](_data/authors.yml). A name is the only thing necessary, but photo is optional too.

## Add a press mention

Inside [`_data/press.yml`](_data/press.yml) file, add a media entry, with date format in `YYYY-MM-DD`.

## Translation

I18n (internationalization) is made available with the [jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin/). When a page has a translated version available, a link will show up on the top right if you use the [default_translate](_layouts/default_translate.html) layout. English is the default language, while other languages have their two letter ISO code prefixed, for example [TechWorkersCoalition.org/ru](https://TechWorkersCoalition.org/ru) for Russian.

### Adding new language
1. Add new language key to [en.yml](_i18n/en.yml)
2. Add two letter iso code in [config](_config.yml). The order here determines the order shown on the page. English must be first.
3. Inside the [i18n](_i18n) directory create a
  - `LANGUAGE.yml` with the language key and value in its own language, for example `es: Español`

Note, only the default [en.yml](_i18n/en.yml) must contain the names of each language. The other language yaml files contain just their own language key.

![Screen Shot 2019-07-21 at 14 48 46](https://user-images.githubusercontent.com/7111514/61591397-cb0cd180-abc6-11e9-9876-1577d5c8b4bd.png)

### Supported Pages
* Landing Page [index.yml](index.md)
* Join Page [join.md](join.md)
* Events [events.md](events.md)
* Press mentions [press_mentions.md](press_mentions.md)

### Supported Languages
* English
* German
* Polish

## Adding Netlify Build Plugins

Netlify is both our server and continuous integration. It offers [plugins](https://docs.netlify.com/configure-builds/build-plugins/) which can be ran before deploying the site, to either perform some checks or optimizations. Check out our [netlify.toml], it has some build plugins installed. To test them locally on your own machine run:  
```
# Ensure that you have the netlify build command available
# (in future this will be provided via the CLI)
npm install @netlify/build -g

# In the project working directory, run the build as netlify would with the build bot
netlify-build
```
