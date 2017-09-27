# Gulp Hex Scraper

## Table of Contents
- [About](#about)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Documentation](#documentation)

## About
Gulp Hex Scraper is a wrapper around the [Hex Scraper](https://npmjs.com/package/hex-scraper) API.

## Installation
```
npm install --save-dev gulp-hex-scraper gulp
```

## Setup
Import Gulp Hex Scraper into your `gulpfile` as follows:

```
var hexScraper = require( 'gulp-hex-scraper' );
```

## Usage
The example below demonstrates one way to add Gulp Hex Scraper to your build process:

```
gulp.task( 'styles', function() {
	gulp.src( 'path/to/stylesheet' )
		.pipe( hexScraper() )
		.pipe( gulp.dest( 'path/to/output' ) );
} );
```

Gulp Hex Scraper can also included as part of stylesheet preprocessing tasks, provided that its invoked *after* the compilation step:

```
gulp.task( 'styles', function() {
	gulp.src( 'path/to/stylesheet' )
		.pipe( sass() )
		.pipe( hexScraper() )
		.pipe( gulp.dest( 'path/to/output' ) );
} );
```

It can also be configured by passing it an options object at invocation time:

```
gulp.task( 'styles', function() {
	gulp.src( 'path/to/stylesheet' )
		.pipe( hexScraper( {
			outFile: 'path/to/hex-scraper-output/filename.ext',
		} ) )
		.pipe( gulp.dest( 'path/to/output' ) );
} );
```

## Documentation
Currently, Gulp Hex Scraper does not include any external documentation.

See the [Hex Scraper](https://npmjs.com/package/hex-scraper) package for additional documentation.

For an overview of the project's evolution, please consult the CHANGELOG.
