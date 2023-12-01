import {createContext, useReducer} from 'react';
import StepReducer from './StepReducer'

export const StepContext = createContext();

export const StepProvider = ({children}) => {
    const initialStepState = {
        currentStep: 1,
        nextStep: () => {},
        previousStep: () => {}
    };

    const [stepState,
        dispatch] = useReducer(StepReducer, initialStepState);

    const nextStep = () => {
        dispatch({type: 'NEXT_STEP'});
    };

    const previousStep = () => {
        dispatch({type: 'PREVIOUS_STEP'});
    };

    const stepContextValue = {
        ...stepState,
        nextStep,
        previousStep
    };

    return (
        <StepContext.Provider value={stepContextValue}>
            {children}
        </StepContext.Provider>
    );
};
