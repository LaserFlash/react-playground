import { RawDraftContentState } from 'draft-js';

export const exampleContent: RawDraftContentState = {
  blocks: [
    {
      key: 'b3o4c',
      text: 'This is really useful for rich text content',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 43,
          style: 'BOLD'
        }
      ],
      entityRanges: [],
      data: {}
    },
    {
      key: '9t9fd',
      text: 'Supports inline styles',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 22,
          style: 'BOLD'
        }
      ],
      entityRanges: [],
      data: {}
    },
    {
      key: '9gs2s',
      text: 'bold',
      type: 'unordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: '9hsob',
      text: 'italics',
      type: 'unordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: '7mbik',
      text: 'underline',
      type: 'unordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: 'de7as',
      text: 'Block Styles',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 12,
          style: 'BOLD'
        }
      ],
      entityRanges: [],
      data: {}
    },
    {
      key: '7ec2o',
      text: 'quotes',
      type: 'ordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: '8rtt7',
      text: 'unordered list',
      type: 'ordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: 'afmdf',
      text: 'ordered list',
      type: 'ordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: '25sus',
      text: 'Also has basic spell checgk',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 27,
          style: 'BOLD'
        }
      ],
      entityRanges: [],
      data: {}
    }
  ],
  entityMap: {}
};

export default exampleContent;
