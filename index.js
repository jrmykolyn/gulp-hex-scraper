// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const Stream = require( 'stream' );
const { StringDecoder } = require( 'string_decoder' );

// Vendor
const hexScraper = require( 'hex-scraper' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var decoder = new StringDecoder( 'utf8' );

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function gulpHexScraper( options ) {
	options = ( options && typeof options === 'object' ) ? options : {};

	var stream = new Stream.Transform( { objectMode: true } );

	stream._transform = function( chunk, encoding, callback ) {
		hexScraper(
			Object.assign(
				options,
				{ data: decoder.write( chunk._contents ) }
			)
		);

		/// TODO[@jrmykolyn]: Handle error by invoking `callback` with Error instance.
		callback( null, chunk );
	}

	return stream;
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = gulpHexScraper;
