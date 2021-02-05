import React from 'react';
import { Story } from '@storybook/react';
import * as Yup from 'yup';
import Stepper from '@material-ui/core/Stepper';
import TextField from 'components/form/text-field/text-field';
import { Step, StepLabel, StepLabelProps } from '@material-ui/core';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import MultistepForm from './multistep-form';
import FormStep from './form-step';

export default {
  title: 'Formik Forms',
  argTypes: {
    onSubmit: {
      action: 'Submit: Form',
    },
    onSubmitStep: {
      action: 'Submit: Step',
    },
  },
};

type Args = {
  onSubmit(): void;
  onSubmitStep(): void;
};

export const basicMultiStep: Story<Args> = ({ onSubmit, onSubmitStep }) => (
  <div>
    <h1>Formik Multistep Wizard</h1>
    <MultistepForm
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
      }}
      onSubmit={onSubmit}
    >
      <FormStep
        onSubmit={onSubmitStep}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
        })}
      >
        <TextField
          label="First Name"
          name="firstName"
          isRequired
          extraProps={{
            autoComplete: 'given-name',
            placeholder: 'First Name',
          }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          isRequired
          extraProps={{
            autoComplete: 'family-name',
            placeholder: 'Last Name',
          }}
        />
      </FormStep>
      <FormStep
        onSubmit={onSubmitStep}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
      >
        <TextField
          label="Email"
          name="email"
          isRequired
          extraProps={{
            autoComplete: 'email',
            placeholder: 'Email',
          }}
        />
      </FormStep>
    </MultistepForm>
  </div>
);

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
};

interface StepOptions {
  icon?: StepLabelProps['StepIconComponent'];
  label?: string;
}

export const customStepper: Story<Args> = ({ onSubmit, onSubmitStep }) => (
  <div>
    <h1>Formik Multistep Wizard</h1>
    <MultistepForm<FormValues, StepOptions>
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        city: '',
      }}
      onSubmit={onSubmit}
      renderStepper={(stepperProps) => (
        <Stepper activeStep={stepperProps.activeStep} alternativeLabel>
          {stepperProps.steps.map(({ label, icon } = {}) => (
            <Step key={label}>
              <StepLabel StepIconComponent={icon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
    >
      <FormStep
        onSubmit={onSubmitStep}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
        })}
      >
        <TextField
          label="First Name"
          name="firstName"
          isRequired
          extraProps={{
            autoComplete: 'given-name',
            placeholder: 'First Name',
          }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          isRequired
          extraProps={{
            autoComplete: 'family-name',
            placeholder: 'Last Name',
          }}
        />
      </FormStep>
      <FormStep onSubmit={onSubmitStep} stepOptions={{ icon: FormatUnderlinedIcon }}>
        <TextField
          label="Email"
          name="email"
          isRequired
          extraProps={{
            autoComplete: 'email',
            placeholder: 'Email',
          }}
        />
      </FormStep>
      <FormStep
        onSubmit={onSubmitStep}
        validationSchema={Yup.object({
          city: Yup.string().required('Required'),
        })}
      >
        <TextField
          label="City"
          name="city"
          isRequired
          extraProps={{
            autoComplete: 'city',
            placeholder: 'City',
          }}
        />
      </FormStep>
    </MultistepForm>
  </div>
);
