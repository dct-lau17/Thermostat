$(document).ready(function() {

  var thermostat = new Thermostat();

  thermostat.update = function(){
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.currentEnergyUsage());
  };

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() { // event listener

    if(this.temperature + 1 > this.maxTemp) {
      alert( "Too hot!" );
    } else {
      thermostat.up(1); // update model
      thermostat.update();
    }

  });

  $('#temperature-up-by5').on('click', function() {
  thermostat.up(5);
  thermostat.update();
  });

  $('#temperature-down-by5').on('click', function() {
  thermostat.down(5);
  thermostat.update();
  });

  $('#temperature-down').on('click', function() {
  thermostat.down(1);
  thermostat.update();
  });

  $('#temperature-reset').on('click', function() {
  thermostat.reset();
  thermostat.update();
  });

  $('#powersaving-on').click(function() {
   thermostat.powerSavingModeOn();
   $('#power-saving-status').text('on');
   thermostat.update();
 });

 $('#powersaving-off').click(function() {
   thermostat.powerSavingModeOff();
   $('#power-saving-status').text('off');
   thermostat.update();
 });

});
