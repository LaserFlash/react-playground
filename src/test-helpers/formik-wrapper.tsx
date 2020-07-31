import React from 'react';
import { Formik, Form, FormikConfig } from 'formik';

export const withFormikWrapper = (
  children: React.ReactChild,
  props?: Partial<FormikConfig<any>>
) => (
  <Formik initialValues={{}} onSubmit={() => undefined} {...props}>
    <Form>{children}</Form>
  </Formik>
);

export default withFormikWrapper;
