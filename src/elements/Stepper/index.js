import React, { useState } from "react";

import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKey = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(
    stepsKey.indexOf(initialStep) > -1 ? initialStep : stepsKey[0]
  );
  const totalStep = stepsKey.length;
  const indexStep = stepsKey.indexOf(currentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKey[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKey[indexStep + 1]);
  }

  return <>{props.children(prevStep, nextStep, currentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object,
  initialStep: propTypes.string.isRequired,
};
