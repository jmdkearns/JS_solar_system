var SolarSystem = function( name ){
  
  this.name = name;
  
  this.planets = [];
  
  this.add = function( planet ){
    this.planets.push( planet );
  }

}

module.exports = SolarSystem;