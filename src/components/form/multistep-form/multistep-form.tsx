import React, { useState } from 'react';
import { Formik, FormikValues, Form, FormikHelpers } from 'formik';
import { Props as FormStep } from './form-step';
import Stepper from './stepper/stepper';

export interface RenderStepperProps<StepProps> {
  activeStep: number;
  steps: Array<StepProps>;
}

interface Props<FormValues extends FormikValues, StepOptions extends unknown = undefined> {
  initialValues: FormValues;
  onSubmit(arg1: FormValues, arg2: FormikHelpers<FormValues>): void;
  renderStepper?(arg1: RenderStepperProps<StepOptions>): React.ReactChild;
  children: React.ReactElement<FormStep<FormValues, StepOptions>>[];
}

export const MultistepForm = <
  FormValues extends FormikValues,
  StepOptions extends unknown = undefined
>(
  props: Props<FormValues, StepOptions>
) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = React.Children.toArray(props.children) as React.ReactElement<
    FormStep<FormValues, StepOptions>
  >[];

  const step = steps[activeStep];
  const totalSteps = steps.length;
  const isLastStep = activeStep === totalSteps - 1;

  const handleSubmit = async (values: FormValues, bag: FormikHelpers<FormValues>) => {
    if (step && step.props.onSubmit) {
      step.props.onSubmit(values, bag);
    }

    if (isLastStep) {
      props.onSubmit(values, bag);
    }

    bag.setTouched({});
    setActiveStep(Math.min(activeStep + 1, totalSteps - 1));
  };

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          {props.renderStepper ? (
            props.renderStepper({
              activeStep,
              steps: steps.map(({ props: p }) => ({ ...p.stepOptions } as StepOptions)),
            })
          ) : (
            <Stepper
              activeStep={activeStep}
              steps={steps.map(({ props: p }) => ({ ...p.stepOptions } as StepOptions))}
            />
          )}
          {step}
          <div style={{ display: 'flex' }}>
            {activeStep > 0 && (
              <button onClick={() => setActiveStep(Math.max(activeStep - 1, 0))} type="button">
                Back
              </button>
            )}
            <div>
              <button disabled={formik.isSubmitting} type="submit">
                {isLastStep ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultistepForm;
