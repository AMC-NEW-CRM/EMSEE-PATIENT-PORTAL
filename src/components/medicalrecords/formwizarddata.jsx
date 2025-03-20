import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, InputGroup, Row, Form as BootstrapForm } from 'react-bootstrap';
import SpkFlatpickr from '../../@spk-reusable-components/reusable-plugins/spk-flatpicker';
import SpkSelect from '../../@spk-reusable-components/reusable-plugins/spk-reactselect';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const MyDatePicker = () => {
    const [_selectedDate, setSelectedDate] = React.useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <SpkFlatpickr
            inputClass="form-control flatpickr-input"
            options={{ disableMobile: "true", dateFormat: "Y-m-d" }}
            onfunChange={handleDateChange}
            placeholder="Select a date"
        />
    );
};

const Countrydata = [
    { value: "India", label: "India" },
    { value: "Brazil", label: "Brazil" },
    { value: "China", label: "China" },
    { value: "Russia", label: "Russia" },
    { value: "United States", label: "United States" },
];

const Selectdata = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "Australia", label: "Australia" },
];

const Maledata = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

const schema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    // Adding validation for radio button
    gender: Yup.string().required('Gender is required'),
    // Checkbox validation (example for terms & conditions)
    termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Required'),
});

const HorizontalNonLinearStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const steps = [
        {
            label: 'Patient Key Info',
            description: (
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        gender: '',
                        termsAccepted: false, // Initial state for checkbox
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form onSubmit={handleSubmit} className="row gy-3">
                            <Col xl={6}>
                                <BootstrapForm.Label htmlFor="firstName" className="form-label">
                                    First Name
                                </BootstrapForm.Label>
                                <Field
                                    as={BootstrapForm.Control}
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                    isInvalid={touched.firstName && errors.firstName}
                                    id="firstName"
                                />
                                {touched.firstName && errors.firstName && (
                                    <BootstrapForm.Text className="text-danger">{errors.firstName}</BootstrapForm.Text>
                                )}
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label htmlFor="lastName" className="form-label">
                                    Last Name
                                </BootstrapForm.Label>
                                <Field
                                    as={BootstrapForm.Control}
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                    isInvalid={touched.lastName && errors.lastName}
                                    id="lastName"
                                />
                                {touched.lastName && errors.lastName && (
                                    <BootstrapForm.Text className="text-danger">{errors.lastName}</BootstrapForm.Text>
                                )}
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label htmlFor="email" className="form-label">
                                    Email Address
                                </BootstrapForm.Label>
                                <Field
                                    as={BootstrapForm.Control}
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && errors.email}
                                    id="email"
                                />
                                {touched.email && errors.email && (
                                    <BootstrapForm.Text className="text-danger">{errors.email}</BootstrapForm.Text>
                                )}
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label className="form-label">Phone Number</BootstrapForm.Label>
                                <InputGroup>
                                    <span className="input-group-text" id="inputGroup-sizing-default">
                                        +99
                                    </span>
                                    <BootstrapForm.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Phone Number"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label className="form-label">Date of Birth</BootstrapForm.Label>
                                <MyDatePicker />
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label className="form-label">Select Gender:</BootstrapForm.Label>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            className="form-check-input"
                                        />
                                        Male
                                    </label>
                                    <label className="form-check-label">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            className="form-check-input"
                                        />
                                        Female
                                    </label>
                                </div>
                                {touched.gender && errors.gender && (
                                    <BootstrapForm.Text className="text-danger">{errors.gender}</BootstrapForm.Text>
                                )}
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label className="form-label">Country</BootstrapForm.Label>
                                <SpkSelect
                                    name="country"
                                    option={Countrydata}
                                    mainClass="basic-multi-select"
                                    menuplacement="auto"
                                    classNameprefix="Select2"
                                    placeholder="Select Country"
                                />
                            </Col>
                            <Col xl={6}>
                                <BootstrapForm.Label className="form-label">Select City:</BootstrapForm.Label>
                                <SpkSelect
                                    name="city"
                                    option={Selectdata}
                                    mainClass="basic-multi-select"
                                    menuplacement="auto"
                                    classNameprefix="Select2"
                                    placeholder="India"
                                />
                            </Col>
                            <Col xl={6}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <Field
                                            type="checkbox"
                                            name="termsAccepted"
                                            className="form-check-input"
                                        />
                                        I accept the terms and conditions
                                    </label>
                                </div>
                                {touched.termsAccepted && errors.termsAccepted && (
                                    <BootstrapForm.Text className="text-danger">{errors.termsAccepted}</BootstrapForm.Text>
                                )}
                            </Col>
                        </Form>
                    )}
                </Formik>
            ),
        },
        {
            label: 'Confirmation',
            description: (
                <div>
                    <Row className="wizard-content container">
                        <Col xl={12}>
                            <div className="checkout-payment-success">
                                <div className="mb-4">
                                    <h5 className="text-success fw-medium">Appointment Booked...</h5>
                                </div>
                                <div className="mb-4">
                                    <p className="text-muted">Thank you for booking an appointment.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            ),
        },
    ];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((_step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep} className="wizard-nav container">
                {steps.map((step, index) => (
                    <Step key={step.label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {step.label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you're finished</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>{steps[activeStep].description}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                className="btn btn-primary"
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button className="btn btn-primary" onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
};

export default HorizontalNonLinearStepper;
