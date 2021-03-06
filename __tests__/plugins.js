/*global describe, it, expect*/
'use strict';

import Formatic from '../lib/formatic';

describe('plugins', function() {

  it('can create a new default configuration', function () {

    var config = Formatic.createConfig();

    expect(config.humanize('foo')).toEqual('Foo');
  });

  it('can create a new configuration with plugin', function () {

    var plugin = function (config) {

      var isEmptyObject = config.isEmptyObject;

      return {
        isEmptyObject: function (obj) {
          if (obj === 'empty') {
            return true;
          }
          return isEmptyObject(obj);
        }
      };
    };

    var config = Formatic.createConfig(
      plugin
    );

    expect(config.isEmptyObject('empty')).toEqual(true);
    expect(config.isEmptyObject({})).toEqual(true);
    expect(config.isEmptyObject('foo')).toEqual(false);
  });

  describe('humanize', function() {

    it('doesn’t choke on numbers', function () {

      var config = Formatic.createConfig();

      expect(config.humanize(123)).toEqual('123');
    });

    it('doesn’t choke on falsey values', function () {

      var config = Formatic.createConfig();

      expect(config.humanize(undefined)).toEqual('');
    });

    it('doesn’t choke on string values', function () {

      var config = Formatic.createConfig();

      expect(config.humanize('string')).toEqual('String');
    });

  });

  describe('coerceValueToBoolean', () => {

    it('properly coerces values to false', () => {

      var config = Formatic.createConfig();

      expect(config.coerceValueToBoolean(false)).toEqual(false);
      expect(config.coerceValueToBoolean(0)).toEqual(false);
      expect(config.coerceValueToBoolean(undefined)).toEqual(false);
      expect(config.coerceValueToBoolean(null)).toEqual(false);
      expect(config.coerceValueToBoolean('0')).toEqual(false);
      expect(config.coerceValueToBoolean('')).toEqual(false);
      expect(config.coerceValueToBoolean('no')).toEqual(false);
      expect(config.coerceValueToBoolean('off')).toEqual(false);
      expect(config.coerceValueToBoolean('false')).toEqual(false);
    });

    it('properly coerces values to true', () => {

      var config = Formatic.createConfig();

      expect(config.coerceValueToBoolean(true)).toEqual(true);
      expect(config.coerceValueToBoolean(1)).toEqual(true);
      expect(config.coerceValueToBoolean('1')).toEqual(true);
      expect(config.coerceValueToBoolean('true')).toEqual(true);
      expect(config.coerceValueToBoolean('any other string')).toEqual(true);
    });

  });

});
