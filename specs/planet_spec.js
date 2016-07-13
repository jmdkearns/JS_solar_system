var assert = require( 'chai' ).assert;
var Planet = require( '../planet' );
var Planet = require( '../solar_system' );

describe( 'Planet', function() {

  it( 'should be created with name.', function(){
    var jupiter = new Planet( "jupiter" )
    assert.equal( 'jupiter', jupiter.name)
  })

})
