import _ from 'lodash';

const fields = [
  {
    label: 'Pretty Text with integer default',
    key: 'integerPrettyText',
    type: 'pretty-text',
    default: 1,
    placeholder: 1
  },
  {
    label: 'Group',
    type: 'fields',
    fields: [{
      label: 'Pretty Text with integer default',
      key: 'integerPrettyTextGrouped',
      type: 'pretty-text',
      default: 1,
      placeholder: 1
    }]
  },
  {
    label: 'Readonly pretty text',
    key: 'readonlyPrettyText',
    type: 'pretty-text',
    default: "Nah nah you can't edit me",
    readOnly: true
  },
  {
    label: 'Accordion Names',
    key: 'nestedPrettyText',
    type: 'pretty-text',
    isAccordion: true,
    default: 'Hi there {{firstName}} {{lastName}} {{middleName}}.',
    isLoading: true,
    replaceChoices: [
      {
        label: 'Name',
        value: 'name'
      },
      {
        label: 'Hi Class People',
        sectionKey: 'hiClass'
      },
      {
        value: 'givenName',
        label: 'Given Name',
        sample: 'Sir Duke',
        tagClasses: {
          special: true
        }
      },
      {
        value: 'surname',
        label: 'Surname',
        sample: 'Ellington'
      },
      {
        label: 'Lo Class People',
        sectionKey: 'loClass'
      },
      {
        value: 'firstName',
        label: 'First Name',
        sample: 'Peasant'
      },
      {
        value: 'lastName',
        label: 'Last Name',
        sample: 'Brown'
      },
      {
        sectionKey: null,
        value: 'extraName',
        label: 'Extra Name',
        sample: 'Extra'
      }
    ]
  }
];

const dynamicFields = _.range(2).map((idx) => ({
  label: 'Pretty Text 2',
  key: 'prettyText2-' + idx,
  type: 'pretty-text',
  default: 'Hi there {{firstName}} {{lastName}} {{middleName}}.',
  replaceChoices: [
    {
      value: 'firstName',
      label: 'First Name',
      sample: 'Bob',
      tagClasses: {
        special: true
      }
    },
    {
      value: 'lastName',
      label: 'Last Name',
      sample: 'Smith'
    },
    {
      value: 'middleName',
      label: 'A really long label that should break somewhere in the middle and then definitely fill up all the space.'
    }
  ]
}));

export default [
  ...fields,
  ...dynamicFields
];
