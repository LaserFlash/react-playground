import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import {
  FormatQuote,
  FormatListBulleted,
  FormatListNumbered,
  Undo,
  Redo,
} from '@material-ui/icons';

import './controls.scss';

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: <FormatBoldIcon fontSize="small" /> },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: <FormatItalicIcon fontSize="small" />,
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    icon: <FormatUnderlinedIcon fontSize="small" />,
  },
];

const BLOCK_TYPES = [
  {
    label: 'Blockquote',
    style: 'blockquote',
    icon: <FormatQuote fontSize="small" />,
  },
  {
    label: 'UL',
    style: 'unordered-list-item',
    icon: <FormatListBulleted fontSize="small" />,
  },
  {
    label: 'OL',
    style: 'ordered-list-item',
    icon: <FormatListNumbered fontSize="small" />,
  },
];

export const InlineStyleControls = ({
  getActiveInlineStyles,
  onToggle,
}: {
  getActiveInlineStyles(): string[];
  onToggle(style: string): void;
}) => (
  <div className="inline-controls control-block">
    <ToggleButtonGroup aria-label="inline text formating">
      {INLINE_STYLES.map((type) => (
        <ToggleButton
          size="small"
          value={type.label}
          selected={getActiveInlineStyles().includes(type.style)}
          onClick={() => onToggle(type.style)}
          aria-label={type.label}
          className="control"
        >
          {type.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </div>
);

export const BlockStyleControls = ({
  getActiveBlockType,
  onToggle,
}: {
  getActiveBlockType(): string;
  onToggle(style: string): void;
}) => (
  <div className="block-controls control-block">
    <ToggleButtonGroup exclusive aria-label="block text formating">
      {BLOCK_TYPES.map((type) => (
        <ToggleButton
          size="small"
          value={type.label}
          selected={type.style === getActiveBlockType()}
          onClick={() => onToggle(type.style)}
          aria-label={type.label}
          className="control"
        >
          {type.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </div>
);

interface Props {
  getActiveInlineStyles(): string[];
  getActiveBlockType(): string;
  toggleInlineStyle(arg1: string): void;
  toggleBlockType(arg1: string): void;
  undo(): void;
  redo(): void;
}

export const Controls: React.FC<Props> = (props) => (
  <Toolbar className="editor-controls" variant="dense">
    <InlineStyleControls
      getActiveInlineStyles={props.getActiveInlineStyles}
      onToggle={props.toggleInlineStyle}
    />
    <BlockStyleControls
      getActiveBlockType={props.getActiveBlockType}
      onToggle={props.toggleBlockType}
    />
    <div className="state-controls control-block">
      <IconButton aria-label="undo" onClick={props.undo}>
        <Undo fontSize="small" />
      </IconButton>
      <IconButton aria-label="redo" onClick={props.redo}>
        <Redo fontSize="small" />
      </IconButton>
    </div>
  </Toolbar>
);

export default Controls;
