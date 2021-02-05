import React, { ReactElement } from 'react';
import { Field, ErrorMessage, getIn, FieldProps } from 'formik';
import classnames from 'classnames';
import ErrorNotice from 'components/form/error-message/error-message';

import './text-field.scss';

interface Props {
  label: string;
  name: string;
  readOnly?: boolean;
  isRequired?: boolean;
  extraProps?: React.InputHTMLAttributes<HTMLInputElement>;
  errorIcon?: React.ReactChild;
}

const InnerTextField = (props: Props & FieldProps) => {
  const displayError =
    getIn(props.form.touched, props.field.name) && getIn(props.form.errors, props.field.name);

  return (
    <div
      className={classnames('form-group', 'form-text-field', `${props.field.name}-field`, {
        error: displayError,
      })}
    >
      {!!props.label && (
        <label htmlFor={props.field.name} className={props.readOnly ? 'label-readonly' : ''}>
          {props.label}
          {props.isRequired && (
            <>
              <span className="required-asterisk">*</span>
              <span className="sr-only"> &nbsp; (required)</span>
            </>
          )}
        </label>
      )}
      <input
        type="text"
        id={props.field.name}
        {...props.field}
        {...props.extraProps}
        readOnly={props.readOnly}
        className={props.readOnly ? 'field-readonly field-readonly-text' : 'form-control'}
        data-testid="input-field"
      />
      {displayError && <div className="error-icon">{props.errorIcon || '!'}</div>}
      <ErrorMessage name={props.field.name} component={ErrorNotice} />
    </div>
  );
};

export default (props: Props): ReactElement => <Field component={InnerTextField} {...props} />;
