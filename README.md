# City of Oakland Design Toolkit

This toolkit contains documentation, visual identity, a pattern portfolio, and example page templates for the City of Oakland website.

[**Read the documentation**](http://oakland-primer.com) to learn more.

## Contents

- [Documentation](#documentation)
  - [Dependencies](#dependencies)
  - [Running locally](#running-locally)
  - [Publishing](#publishing)
  - [Stats](#stats)
- [Updating](#updating)
- [License](#license)

## Documentation

This toolkit's documentation is built with Jekyll and published to `http://oakland-primer.com` via the `gh-pages` branch.

### Dependencies

You'll need the following installed:

- Latest Jekyll (minimum v2.2.0): `$ gem install jekyll`
- Latest Rouge: `$ gem install rouge`
- Latest Sass: `$ gem install sass`
- Latest Grunt CLI: `$ npm install -g grunt-cli`
- [Node.js and npm](http://nodejs.org/download/)

If you have all those set up, now you can install the dependencies:

```bash
$ npm install
$ bower install
```

### Running locally

From the Terminal, start a local Jekyll server:

```bash
$ jekyll serve
```

Open a second Terminal tab to automatically recompile the Sass files, run autoprefixer, and update our [Primer stats file](#primer-stats):

```bash
$ grunt watch
```

Alternatively, you can manually run `grunt` and `jekyll serve` when needed.

### Publishing

Use the included Grunt task to generate and publish Primer's docs to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.

### Stats

When compiling or watching the Sass files, Primer will automatically generate a `.primer-stats.md` file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## Updating

Within `bower.json`, update to a new release by changing the version number that follows the `#` in the dependency URL.

```json
{
  "name": "myapp",
  "dependencies": {
    "primer-css": "x.x.x"
  }
}
```

To pull down the updated package, `cd` into `vendor/assets`, and run `bower install`.

```
$ cd vendor/assets
$ bower install
```

Check in `bower.json` and all changes under `vendor/assets/bower_components`.

## Development

Development happens in our primary branch, `master`. `master` will always be up to date with the latest changes, including those which have yet to be released.

## License

Created by Objective Subject, forked from GitHub's Primer copyright GitHub, Inc. Released under the [MIT license](LICENSE.md).
