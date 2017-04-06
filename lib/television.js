'use strict'

const television = {
  size: 40,
  volume: 1,
  power: false,
  channel: 2,
  resolution: 'super-hd',
  brand: 'samsung',
  color: 'black',
  inputTypes: ['hdmi', 'vga', 'RYW', 'Composite'],
  addVolume: function () {
    if (this.volume < 100) {
      this.volume += 1
    }
  },
  reduceVolume: function () {
    if (this.volume > 0) {
      this.volume -= 1
    }
  },
  channelUp: function () {
    if (this.channel > 100) {
      this.channel = 2
    } else if (this.channel < 100) {
      this.cannel++
    }
  },
  channelDown: function () {
    if (this.channel < 2) {
      this.channel = 100
    } else if (this.channel < 2) {
      this.cannel--
    }
  }
}
