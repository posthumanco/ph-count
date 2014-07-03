var Cylon = require('cylon');

Cylon.api({
  host: '0.0.0.0',
  port: '8080',
  ssl: false
});

count = 0

pebbleRobot = {
  name: 'pebble',

  connection: {
    name: 'pebble',
    adaptor: 'pebble'
  },

  device: {
    name: 'pebble',
    driver: 'pebble'
  },

  work: function(my) {
    my.pebble.send_notification("Hello Pebble!");

    my.pebble.on('button', function(data) {
      count = count + 1;
      console.log(count);
      console.log("Button pushed: " + data);
      my.pebble.send_notification("That's number " + count + "!");
    });

    my.pebble.on('tap', function() {
      console.log("Tap event detected");
    });
  }

}

Cylon.robot(pebbleRobot);
Cylon.start();
