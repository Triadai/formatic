// # pretty-select-input component

/*
   Render an input to be used as the element for typing a custom value into a pretty select.
 */

'use strict';

import createReactClass from 'create-react-class';
import { ref } from '../../utils';

import HelperMixin from '../../mixins/helper';

export default createReactClass({

  displayName: 'PrettySelectInput',

  mixins: [HelperMixin],

  render: function () {
    return this.renderWithConfig();
  },

  focus: function () {
    if (this.textBoxRef && this.textBoxRef.focus) {
      this.textBoxRef.focus();
    }
  },

  setChoicesOpen: function (isOpenChoices) {
    this.textBoxRef.setChoicesOpen(isOpenChoices);
  },

  renderDefault: function () {
    return this.props.config.createElement('pretty-text-input', {
      ref: ref(this, 'textBox'),
      classes: this.props.classes,
      onChange: this.props.onChange,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onAction: this.onBubbleAction,
      field: this.props.field,
      value: this.props.isEnteringCustomValue ? this.props.field.value : this.props.getDisplayValue(),
      selectedChoices: this.props.config.fieldSelectedReplaceChoices(this.props.field),
      replaceChoices: this.props.config.fieldReplaceChoices(this.props.field),
      onTagClick: this.onTagClick,
      readOnly: !this.props.isEnteringCustomValue,
      disabled: this.isReadOnly()
    });
  }

});
