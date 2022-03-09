import React, { useState } from "react";
import "./TrackerEditForm.css";
import DevelopmentUrl from "../../data/api";
import Axios from 'axios';



export default function TrackerEditForm() {

  const [currentMonthYear, setCurrentMonthYear] = useState('');
  const [status, setStatus] = useState('');
  const [alsID, setAlsID] = useState('');
  const [client, setClient] = useState('');
  const [clientLob, setClientLob] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [dateOfC, setDateOfC] = useState('');
  const [lastWorkingDate, setLastWorkingDate] = useState('');
  const [probationPeriod, setProbationPeriod] = useState('');
  const [elAmount, setElAmount] = useState(0);
  const [elEligibility, setElEligibility] = useState(0);
  const [basic, setBasic] = useState(0);
  const [grossSalary, setGrossSalary] = useState(0);
  const [openingBalance, setOpeningBalance] = useState(0);
  const [leaveTaken, setLeaveTaken] = useState(0);
  const [additionalSL, setAdditionalSL] = useState(0);
  const [additionalEL, setAdditionalEL] = useState(0);
  const [closingBalance, setClosingBalance] = useState(0);
  const [lop, setLop] = useState('');


  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  let onchangemonthyearhandler = (event) => {
    setCurrentMonthYear(event.target.value);
    //setSubmitted(false);
  }
  let onchangestatushandler = (event) => {
    setStatus(event.target.value);
    //setSubmitted(false);
  }
  let onchangealsidhandler = (event) => {
    setAlsID(event.target.value);
    //setSubmitted(false);
  }
  let onchangeclienthandler = (event) => {
    setClient(event.target.value);
    //setSubmitted(false);
  }
  let onchangeclientlobhandler = (event) => {
    setClientLob(event.target.value);
    //setSubmitted(false);
  }
  let onchangecandidatenamehandler = (event) => {
    setCandidateName(event.target.value);
    //setSubmitted(false);
  }
  let onchangedateofjoininghandler = (event) => {
    setDateOfJoining(event.target.value);
    //setSubmitted(false);
  }
  let onchangedateofchandler = (event) => {
    setDateOfC(event.target.value);

  }
  let onchangelastworkingdatehandler = (event) => {
    setLastWorkingDate(event.target.value);
  }
  let onchangeprobationperiodhandler = (event) => {
    setProbationPeriod(event.target.value);
    //setSubmitted(false);
  }
  let onchangeelamounthandler = (event) => {
    setElAmount(event.target.value);
  }
  let onchangeeleligibilityhandler = (event) => {
    setElEligibility(event.target.value);
  }
  let onchangebasichandler = (event) => {
    setBasic(event.target.value);
    //setSubmitted(false);
  }
  let onchangegrosssalaryhandler = (event) => {
    setGrossSalary(event.target.value);
    //setSubmitted(false);
  }
  let onchangeleavetakenhandler = (event) => {
    setLeaveTaken(event.target.value);
    //setSubmitted(false);
  }
  let onchangeopeningbalancehandler = (event) => {
    setOpeningBalance(event.target.value);
    //setSubmitted(false);
  }
  let onchangeadditionalslhandler = (event) => {
    setAdditionalSL(event.target.value);
    //setSubmitted(false);
  }
  let onchangeadditionalelhandler = (event) => {
    setAdditionalEL(event.target.value);
    //setSubmitted(false);
  }

  let onchangelophandler = (event) => {
    setLop(event.target.value);
    //setSubmitted(false);
  }

  let submithandler = (event) => {
    event.preventDefault();
    let formdata = {
      currentMonthYear: currentMonthYear,
      status: status,
      alsID: alsID,
      client: client,
      clientLob: clientLob,
      candidateName: candidateName,
      dateOfJoining: dateOfJoining,
      dateOfC: dateOfC,
      lastWorkingDate: lastWorkingDate,
      probationPeriod: probationPeriod,
      elAmount: elAmount,
      elEligibility: elEligibility,
      basic: basic,
      grossSalary: grossSalary,
      openingBalance: openingBalance,
      leaveTaken: leaveTaken,
      additionalSL: additionalSL,
      additionalEL: additionalEL,
      closingBalance: closingBalance,
      lop: lop

    };
    // if (currentMonthYear === '' || status === '' || alsID === '' || client==="" || clientLob==="" ||
    // candidateName==="" || dateOfJoining==="" || probationPeriod==="" || basic==="" || grossSalary ==="" ||
    // openingBalance==="" ||  leaveTaken==="" ||  additionalSL==="" ||  additionalEL==="" ||  closingBalance==="" || 
    // lop==="" ) {
    //   setError(true);
    // } else {
    //   setSubmitted(true);
    //   setError(false);
    // }
    
    Axios.post(DevelopmentUrl + '/leaves', formdata).then(
      (res) => {
        let { data } = res;
        console.log(data);
        

      }
    ).catch(error => {
      console.log("error occured")
      console.log(error.data)
      
    })
    
  }
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3 style={{color:"rgb(0, 111, 139)"}}>Edited Successfully !!</h3>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h4 >Please enter <sup style={{color:"red"}}>*</sup> fields</h4>
      </div>
    );
  };

  return (
    <div className="newUser">
      <div style={{ display: "flex" }}>
        <h3 className="newUserTitle">Update Employee</h3>
        <form className="newUserForm1" >
          <div className="newUserItem1" >
            <label>Select Month and Year &nbsp;&nbsp;</label>
            <input type="month" id="myDate" placeholder=" select Date" required  onChange={onchangemonthyearhandler}/>
          </div>
        </form>
      </div>

      <form className="newUserForm">
        <div className="newUserItem">
          <label>Status</label>
          <select className="newUserSelect" name="active" id="active" required onChange={onchangestatushandler} >
            <option>Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="newUserItem" >
          <label>ALS Id</label>
          <input type="text" placeholder="ALS Id" onChange={onchangealsidhandler}/>
        </div>
        <div className="newUserItem" onChange={onchangeclienthandler}>
          <label>Client</label>
          <input type="text" placeholder="Client" onChange={onchangeclienthandler}/>
        </div>
        <div className="newUserItem" onChange={onchangeclientlobhandler}>
          <label>Client Lob </label>
          <input type="text" placeholder="Client Lob" onChange={onchangeclientlobhandler}/>
        </div>

        <div className="newUserItem" onChange={onchangecandidatenamehandler}>
          <label>Candidate Name </label>
          <input type="text" placeholder="Candidate Name" onChange={onchangecandidatenamehandler} />
        </div>
        <div className="newUserItem" >
          <label>DOJ </label>
          <input type="date" id="myDate" placeholder=" select Date" onChange={onchangedateofjoininghandler}/>
        </div>
        <div className="newUserItem" >
          <label>DOC</label>
          <input type="date" id="myDate" placeholder="-- -- -- -- --" onChange={onchangedateofchandler}/>
        </div>
        <div className="newUserItem" >
          <label>last Working Day </label>
          <input type="date" placeholder="Batch Monitor" onChange={onchangelastworkingdatehandler}/>
        </div>

        <div className="newUserItem" >
          <label>Prob Period </label>
          <input type="text" placeholder="Prob Period" onChange={onchangeprobationperiodhandler} />
        </div>

        <div className="newUserItem" >
          <label>El Amount as per CTC</label>
          <input type="text" placeholder="El Amount as per CTC" onChange={onchangeelamounthandler}/>
        </div>


        <div className="newUserItem" >
          <label>El Eligibility</label>
          <input type="text" placeholder="El Eligibility" onChange={onchangeeleligibilityhandler}/>
        </div>
        <div className="newUserItem" >
          <label>Basic Salary </label>
          <input type="text" placeholder="Basic" onChange={onchangebasichandler} />
        </div>
        <div className="newUserItem" >
          <label>Gross Salary</label>
          <input type="text" placeholder="Gross Salary" onChange={onchangegrosssalaryhandler} />
        </div>

        <div className="newUserItem" >
          <label>Op Bal </label>
          <input type="text" placeholder="Op Bal"  onChange={onchangeopeningbalancehandler} />
        </div>

        <div className="newUserItem" >
          <label>Leave Taken </label>
          <input type="text" placeholder="Leave Taken" onChange={onchangeleavetakenhandler} />
        </div>

        <div className="newUserItem" >
          <label>Addition Sl </label>
          <input type="text" placeholder="Addition Sl" onChange={onchangeadditionalslhandler} />
        </div>

        <div className="newUserItem" >
          <label>Addition El </label>
          <input type="text" placeholder="Addition El" onChange={onchangeadditionalelhandler} />
        </div>
        {/* <div className="newUserItem" onChange={onchangesetclosingbalancehandler}>
          <label>Closing Balance</label>
          <input type="text" placeholder="Closing Balance" />
        </div> */}
        <div className="newUserItem" >
          <label>Lop </label>
          <input type="text" placeholder="Lop" onChange={onchangelophandler}/>
        </div>

        <button type="submit" className="newUserButton" onClick={submithandler}>Update</button>
     
   
      </form>
        {successMessage()}
    </div>
  );






}
