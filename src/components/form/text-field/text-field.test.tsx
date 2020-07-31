import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { withFormikWrapper } from 'test-helpers/formik-wrapper';
import TextField from './text-field';

const props = {
  label: 'First Name',
  name: 'fName',
  readOnly: false,
  isRequired: false,
};
describe('Text Field', () => {
  describe('Basic Render', () => {
    test('Basic text-field render', () => {
      const { container, getByTestId } = render(withFormikWrapper(<TextField {...props} />));
      expect(container).toBeTruthy();
      expect(getByTestId('input-field')).toBeTruthy();
    });

    test('The provided label is shown', () => {
      const { getByText } = render(withFormikWrapper(<TextField {...props} />));
      expect(getByText(props.label)).toBeTruthy();
    });
  });

  describe('Validation and error handling', () => {
    test('Show isRequired if expected', () => {
      const { queryByText } = render(withFormikWrapper(<TextField {...props} isRequired />));
      expect(queryByText('(required)')).toBeTruthy();
    });

    test('Hide isRequired if expected', () => {
      const { queryByText } = render(
        withFormikWrapper(<TextField {...props} isRequired={false} />)
      );
      expect(queryByText('(required)')).toBeFalsy();
    });

    test('Shows validation error on blur', async () => {
      const { getByTestId, queryByText } = render(
        withFormikWrapper(<TextField {...props} />, {
          initialValues: { fName: '' },
          validate: (values: { fName: any }) => {
            if (!values.fName) {
              return { fName: 'fName: Required' };
            }

            return {};
          },
        })
      );
      expect(queryByText('fName: Required')).toBeFalsy();
      fireEvent.blur(getByTestId('input-field'));
      await waitFor(() => expect(queryByText('fName: Required')).toBeTruthy());
    });
  });
});
