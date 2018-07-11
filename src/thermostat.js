'user strict';

function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(degrees){
  if((this.temperature + degrees) > this.maxTemp) {
    throw new Error('Cannot increase temperature: temperature too high');
  }
  this.temperature += degrees;
};

Thermostat.prototype.down = function(degrees){
  if((this.temperature - degrees) < this.minTemp) {
    throw new Error('Cannot reduce temperature: temperature too low');
  }
  this.temperature -= degrees;
};

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
  this.maxTemp = 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
