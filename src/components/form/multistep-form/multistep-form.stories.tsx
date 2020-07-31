import React from 'react';
import { action } from '@storybook/addon-actions';
import * as Yup from 'yup';
import Stepper from '@material-ui/core/Stepper';
import TextField from 'components/form/text-field/text-field';
import { Step, StepLabel, StepLabelProps } from '@material-ui/core';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import MultistepForm from './multistep-form';
import FormStep from './form-step';

export default {
  title: 'Formik Forms',
};

export const basicMultiStep = () => (
  <div>
    <h1>Formik Multistep Wizard</h1>
    <MultistepForm
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
      }}
      onSubmit={action('Submit: Form')}
    >
      <FormStep
        onSubmit={action('Submit: Step 1')}
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
        onSubmit={action('Submit: Step 2')}
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

export const customStepper = () => (
  <div>
    <h1>Formik Multistep Wizard</h1>
    <MultistepForm<FormValues, StepOptions>
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        city: '',
      }}
      onSubmit={action('Submit: Form')}
      renderStepper={(stepperProps) => (
        <Stepper activeStep={stepperProps.activeStep} alternativeLabel>
          {stepperProps.steps.map(({ label, icon }) => (
            <Step key={label}>
              <StepLabel StepIconComponent={icon as any}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
    >
      <FormStep<FormValues, StepOptions>
        onSubmit={action('Submit: Step 1')}
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
      <FormStep<FormValues, StepOptions>
        onSubmit={action('Submit: Step 2')}
        stepOptions={{ icon: FormatUnderlinedIcon }}
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
      <FormStep<FormValues, StepOptions>
        onSubmit={action('Submit: Step 2')}
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
