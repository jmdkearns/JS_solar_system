var assert = require( 'chai' ).assert;
var Planet = require( '../planet' );
var SolarSystem = require( '../solar_system' );

describe( 'Solar System', function(){

  it( 'should have an empty array of planets.', function(){
    var sol = new SolarSystem()
    assert.equal( 0, sol.planets.length )
  })

  it( 'should add planet to planets array.', function(){
    var sol = new SolarSystem();
    var planet = new Planet( "Jupiter" );
    sol.add( planet );

    console.log(sol.planets);
    assert.deepEqual( [planet], sol.planets)
  })

})