import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import {
  Editor,
  EditorState,
  RichUtils,
  RawDraftContentState,
  ContentState,
  convertFromRaw,
  convertToRaw,
} from 'draft-js';
import Controls from './controls/controls';
import './rich-text.scss';

interface Props {
  initialRaw?: RawDraftContentState | string;
  onContentUpdate?(arg1: RawDraftContentState): void;
  placeholderText?: string;
  isReadOnly?: boolean;
}

const generateInitialData = (initialRaw?: RawDraftContentState | string) => {
  if (typeof initialRaw === 'string') {
    return EditorState.createWithContent(ContentState.createFromText(initialRaw));
  }
  if (typeof initialRaw === 'object') {
    return EditorState.createWithContent(convertFromRaw(initialRaw));
  }
  return EditorState.createEmpty();
};

export const RichTextEditor: React.FC<Props> = (props) => {
  const { initialRaw, onContentUpdate, placeholderText, isReadOnly } = props;
  const [editorState, setEditorState] = useState(generateInitialData(initialRaw));
  const keepFocus = (): EditorState =>
    EditorState.forceSelection(editorState, editorState.getSelection());

  useEffect(() => {
    if (onContentUpdate) {
      onContentUpdate(convertToRaw(editorState.getCurrentContent()));
    }
  }, [editorState, onContentUpdate]);

  return (
    <div className={classnames('editor-wrapper', { 'read-only': isReadOnly })}>
      {!isReadOnly && (
        <Controls
          getActiveInlineStyles={() => editorState.getCurrentInlineStyle().toArray()}
          getActiveBlockType={() =>
            editorState
              .getCurrentContent()
              .getBlockForKey(editorState.getSelection().getStartKey())
              .getType()
          }
          toggleInlineStyle={(inlineStyle) =>
            setEditorState(RichUtils.toggleInlineStyle(keepFocus(), inlineStyle))
          }
          toggleBlockType={(blockType) =>
            setEditorState(RichUtils.toggleBlockType(keepFocus(), blockType))
          }
          undo={() => setEditorState(EditorState.undo(keepFocus()))}
          redo={() => setEditorState(EditorState.redo(keepFocus()))}
        />
      )}
      <div className="editor">
        <Editor
          readOnly={isReadOnly}
          spellCheck
          placeholder={placeholderText}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={(command: string, eState: EditorState) => {
            const newState = RichUtils.handleKeyCommand(eState, command);
            if (newState) {
              setEditorState(newState);
              return 'handled';
            }
            return 'not-handled';
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
