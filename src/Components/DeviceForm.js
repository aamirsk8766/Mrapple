import React, { useState } from 'react';
import  axios  from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaApple } from "react-icons/fa"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../Assets/company_logo.png";
const DeviceForm = () => {
  const [device, setDevice] = useState('');
  const [model, setModel] = useState('');
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState(1);

  const deviceOptions = ['iPhone', 'iWatch', 'iPad', 'MacBook'];
  const iphoneModels = [
    'iPhone 14 Pro Max',
    'iPhone 14 Pro',
    'iPhone 14 Plus',
    'iPhone 14',
    'iPhone 13 Pro Max',
    'iPhone 13 Pro',
    'iPhone 13',
    'iPhone 13 Mini',
    'iPhone 12 Pro Max',
    'iPhone 12 Pro',
    'iPhone 12',
    'iPhone 12 Mini',
    'iPhone SE (2020)',
    'iPhone 11 Pro Max',
    'iPhone 11 Pro',
    'iPhone 11',
    'iPhone XS Max',
    'iPhone XS',
    'iPhone XR',
    'iPhone X',
    'iPhone 8 Plus',
    'iPhone 8',
    'iPhone 7 Plus',
    'iPhone 7',
    'iPhone 6s Plus',
    'iPhone 6s',
    'iPhone 6 Plus',
    'iPhone 6',
    'iPhone SE',
    'iPhone 5s',
    'iPhone 5c',
    'iPhone 5',
  ];
  const iphoneIssues=[
    'Screen|Display Repair & Replacement',
  'Back Glass Repair & Replacement',
  'Battery Repair & Replacement',
  'Charging Flex|Strip Repair & Replacement',
  'Speaker|Ringer Repair & Replacement',
  'Mic Repair & Replacement',
  'Ear Speaker Repair & Replacement',
  'Front Camera Repair & Replacement',
  'Rear Camera Repair & Replacement',
  'Light & Motion Sensor Repair & Replacement',
  'Headphone Repair & Replacement',
  'Power Button Repair & Replacement',
  'Volume Button Repair & Replacement',
  'Frame & Housing Repair & Replacement',
  'Other Problems - We will Contact you to find out more',
  ]
  const iWatchModels = [
    'Apple Watch Series 8',
    'Apple Watch Series Ultra',
    'Apple Watch Series 7',
    'Apple Watch Series 6',
    'Apple Watch SE',
    'Apple Watch Series 5',
    'Apple Watch Series 4',
    'Apple Watch Series 3',
    'Apple Watch Series 2',
    'Apple Watch Series 1',
  ];
  const iWatchIssues = [
     'Apple Watch Screen|Display Repair & Replacement',
    'Apple Watch Battery Repair & Replacement',
    'Other Problems - We Will Contact you to find out more',
  ];
  const ipadModels = [
    'iPad',
    'iPad Air',
    'iPad Mini',
    'iPad Pro',
  ];
  const ipadIssues = [
    'Screen|Display Repair & Replacement',
    'Back Glass Repair & Replacement',
    'Battery Repair & Replacement',
    'Charging Flex|Strip Repair & Replacement',
    'Speaker|Ringer Repair & Replacement',
    'Mic Repair & Replacement',
    'Ear Speaker Repair & Replacement',
    'Front Camera Repair & Replacement',
    'Rear Camera Repair & Replacement',
    'Light & Motion Sensor Repair & Replacement',
    'Headphone Repair & Replacement',
    'Power Button Repair & Replacement',
    'Volume Button Repair & Replacement',
    'Frame & Housing Repair & Replacement',
    'Other Problems - We will Contact you to find out more',
  ];
  const macbookModels = [
    'MacBook',
    'MacBook Pro Retina',
    'MacBook Pro',
    'MacBook Air',
  ];
  const macbookIssues = [
     'MacBook Screen|Display Repair & Replacement',
  'MacBook Hard Disk Drive Repair & Replacement',
  'MacBook Motherboard Repair & Replacement',
  'MacBook RAM Addition, Repair & Replacement',
  'Mac OSX support',
  'MacBook Battery Repair & Replacement',
  'MacBook Keyboard Repair & Replacement',
  'MacBook Camera Repair & Replacement',
  'MacBook Trackpad Repair & Replacement',
  'Other Problems - We will Contact you to find out more',
  ];

  const handleDeviceSelect = (selectedDevice) => {
    setDevice(selectedDevice);
    setStep(2);
  };

  const handleModelSelect = (selectedModel) => {
    setModel(selectedModel);
    setStep(3);
  };

  const handleIssueSelect = (selectedIssue) => {
    if (selectedIssues.includes(selectedIssue)) {
      setSelectedIssues(selectedIssues.filter((issue) => issue !== selectedIssue));
    } else {
      setSelectedIssues([...selectedIssues, selectedIssue]);
    }
  };
  function GoBack(){
    setStep(step-1)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Device:', device);
    // console.log('Model:', model);
     console.log('Issue:', ...selectedIssues);
    // console.log('Phone Number:', phoneNumber);
    const issue={...selectedIssues}
    const data={
      Device:device,
      Model:model,
      Issues:issue,
      Phone_Number:phoneNumber,
    }
    axios.post('https://sheet.best/api/sheets/15c0842a-05e3-4e79-8b91-f63a36a5f939',data).then((response)=>{
      console.log(response)
      setDevice('');
      setModel('');
      setPhoneNumber('');
    })
  };
function handleNext(){
  setStep(step+1)
}
  return (
    <div className="device-form">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h2>Select your device to get started now!</h2>
            <div className="edit">
            <ul>
              {deviceOptions.map((option, index) => (
                <ListGroup.Item action variant="warning my-3 mx-2">
                  <FaApple/>
                <li  key={index} name="device" onClick={() => handleDeviceSelect(option)}>
                  {option}
                </li>
              </ListGroup.Item>
                
              ))}
            </ul>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Select your {device} Model</h2>
            <ul>
              {device === 'iPhone' &&
                iphoneModels.map((iphoneModel, index) => (
                  <ListGroup.Item action variant="warning my-3 mx-2">
                   <li  key={index} name="data[model]" onClick={() => handleModelSelect(iphoneModel)}>
                    {iphoneModel}
                  </li>
              </ListGroup.Item>
                 
                ))}
              {device === 'iWatch' &&
                iWatchModels.map((iWatchModel, index) => (
                  <ListGroup.Item action variant="warning my-3 mx-2">
                  <li  key={index} name="data[model]" onClick={() => handleModelSelect(iWatchModel)}>
                    {iWatchModel}
                  </li>
                  </ListGroup.Item>
                ))}
              {device === 'iPad' &&
                ipadModels.map((ipadModel, index) => (
                  <ListGroup.Item action variant="warning my-3 mx-2">
                  <li  key={index} name="data[model]" onClick={() => handleModelSelect(ipadModel)}>
                    {ipadModel}
                  </li>
                  </ListGroup.Item>
                ))}
              {device === 'MacBook' &&
                macbookModels.map((macbookModel, index) => (
                  <ListGroup.Item action variant="warning my-3 mx-2">
                  <li  key={index} name="data[model]" onClick={() => handleModelSelect(macbookModel)}>
                    {macbookModel}
                  </li>
                  </ListGroup.Item>
                ))}
            </ul><br />
            <Button  onClick={GoBack}variant="warning">Go back</Button>{' '}
            
          </>
        )}

        {step === 3 && (
          <>
           <h2>Select your issues with your {model} Model</h2>
            <ul>
              {device === 'iPhone' &&
                iphoneIssues.map((iphoneIssue, index) => (
                  <ListGroup.Item action variant="warning my-3 mx-2">
                  <li  key={index}>
                    <label>
                      <input
                      name="data[issues]"
                        type="checkbox"
                        value={iphoneIssue}
                        onChange={() => handleIssueSelect(iphoneIssue)}
                      />{' '}
                      {iphoneIssue}
                    </label>
                  </li>
                  </ListGroup.Item>
                ))}
              {device === 'iWatch' &&
                iWatchIssues.map((iWatchIssue, index) => (
                  <ListGroup.Item action variant="warning my-3 mx-2">
                  <li  key={index}>
                    <label>
                      <input
                      name="data[issues]"
                        type="checkbox"
                        value={iWatchIssue}
                        onChange={() => handleIssueSelect(iWatchIssue)}
                      />{' '}
                      {iWatchIssue}
                    </label>
                  </li>
                  </ListGroup.Item>
                ))}
              {device === 'iPad' &&
                ipadIssues.map((ipadIssue, index) => (
                  <ListGroup.Item  action variant="warning my-3 mx-2">
                  <li  key={index}>
                    <label>
                      <input
                      name="data[issues]"
                        type="checkbox"
                        value={ipadIssue}
                        onChange={() => handleIssueSelect(ipadIssue)}
                      />{' '}
                      {ipadIssue}
                    </label>
                  </li>
                  </ListGroup.Item>
                ))}
                {device === 'MacBook' &&
                macbookIssues.map((macbookIssues, index) => (
                  <ListGroup.Item  action variant="warning my-3 mx-2">
                  <li  key={index}>
                    <label>
                      <input
                      name="data[issues]"
                        type="checkbox"
                        value={macbookIssues}
                        onChange={() => handleIssueSelect(macbookIssues)}
                      />{' '}
                      {macbookIssues}
                    </label>
                  </li>
                  </ListGroup.Item>
                ))}
            </ul>
            
          
            <Button  onClick={GoBack}variant="warning">Go back</Button>{' '}
            <Button  onClick={handleNext}variant="warning mx-2">Next</Button>{' '}
            
          </>
        )}

{step === 4 && (
  <>
    <h2>Enter your phone number</h2>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name="data[number]"
      type="tel"
      placeholder="Phone Number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)} />
      </Form.Group>
     <br />
     <Button  onClick={GoBack}variant="warning mx-2">Go back</Button>{' '}
      
    {phoneNumber.length === 10 ? (
      <Button onClick={handleNext} variant="primary" type="submit">
      Submit
    </Button>
      
    ) : (
      <p>Please enter a valid 10-digit phone number.</p>
    )}
  </>
)}

{step === 5 && (
  <>
    <h2>Thank You We Will Contact You Soon!!!</h2>
    <img  className="logo-work my-2" src={Logo} alt="" />
  </>
)}


      </form>
    </div>
  );
};

export default DeviceForm;
