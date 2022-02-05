# N00GA

A simple javascript library for driving the LCD messageboard that goes under various names:

- Maplin N00GA
- AM03127
- Y5207

## Setup

The message board should be connected to your machine and available at a port such as `/dev/tty.usbserial-0001` (on Mac) or `COM<X>` on a windows machine

You can then install the node module using:

`npm install --save n00ga`

## Initialisation

```javascript
const { N00GA } = require('n00ga')

// Create the N00GA object
const n00ga = N00GA('/dev/tty.usbserial-0001')

// You must then initialise it before performing any further actions
// This opens the serial port and is an asynchronous process that returns a promise
await n00ga.initialise()
```

### Options
You can supply the following options object during initialisation

```javascript
{
  boardId: '01',
  bell: '0.5',
  column: '0',
  color: 'rainbow',
  font: 'bold',
  lagEffect: 'scrollL',
  leadEffect: 'scrollL',
  line: '1',
  page: 'A',
  speed: 'mediumFast',
  waitTime: '5'
}
```
Available values can be found in the `constants` directory

## Sending Messages

### Send text-based message

Example usage:
```javascript
n00ga.send('Homer Simpson')
```

You can also specify options here too:
```javascript
n00ga.send('Homer Simpson', { color: 'brightRed' })
```

## Managing pages

### Running a specific page

Pages are specified by letter:
```javascript
n00ga.runPage('A')
```

### Clearing a specific page

Pages are specified by letter:
```javascript
n00ga.clearPage('A')
```

## Other Functions

### Display datetime

```javascript
n00ga.showDateTime()
```

### Reset sign to factory settings

*Warning* - this will delete all pages and reset your sign back to factory settings
Due to the destructive nature of this command, note that you need to specify `true` to confirm. 
```javascript
n00ga.resetToFactory(true)
```

## Credits

Tremendous thanks to https://blog.ambor.com/2020/04/driving-led-panel-with-spreadsheet.html for excellent work in identifying the communication protocol with this sign