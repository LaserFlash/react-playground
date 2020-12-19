import React from 'react';
import './stepper.scss';

interface Props {
  activeStep: number;
  steps: Array<any>;
}

export const Stepper: React.FC<Props> = (props) => (
  <div className="stepper">
    Step: {props.activeStep + 1} of {props.steps.length}
  </div>
);

export default Stepper;
