// # component.root

/*
Root component just used to spit out all the fields for a form.
*/

'use strict';

var React = require('react/addons');
var R = React.DOM;

module.exports = function (plugin) {

  var util = plugin.require('util');

  plugin.exports = React.createClass({

    displayName: plugin.name,

    getDefaultProps: function () {
      return {
        className: util.className('root', plugin.config.className)
      };
    },

    render: function () {
      var field = this.props.field;

      return R.div({
        className: this.props.className
      },
        field.fields().map(function (field, i) {
          return field.component({key: field.def.key || i, onFocus: this.props.onFocus, onBlur: this.props.onBlur});
        }.bind(this))
      );
    }
  });
};