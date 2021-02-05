import React, { PropsWithChildren, ReactElement } from 'react';
import { FormikValues, FormikHelpers } from 'formik';
import { ObjectSchema } from 'yup';

export interface Props<FormValues extends FormikValues, StepOptions extends unknown = undefined> {
  validationSchema?: ObjectSchema<FormValues>;
  onSubmit?(values: FormValues, bag: FormikHelpers<FormValues>): void;
  stepOptions?: StepOptions;
}

export const FormStep = <FormValues extends FormikValues, StepOptions extends unknown = undefined>(
  props: PropsWithChildren<Props<FormValues, StepOptions>>
): ReactElement => <>{props.children}</>;

export default FormStep;
