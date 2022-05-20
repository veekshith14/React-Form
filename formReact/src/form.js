import "./form.css"
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
 

function Form(){
const [childStatus,setChildStatus] = useState()
const [projectSelected,setProject] = useState()
  const [country,setCountry] = useState()
  const [gender,setGender] = useState()
  const [actionCode,setActionCode ] = useState()
  const [operatorValue,setOperatorValue] = useState()
  const [secondOperatorValue,setSecondOperatorValue] = useState()
  const[date1,setDate1] = useState()
  const[date2,setDate2] = useState()
    const childStatusOptionsList = [
        {label: 'Option 1', value: 'option1'},
        {label: 'Option 2', value: 'option2'},
        {label: 'Option 3', value: 'option3'},
     
    ];
    const projectOptionsList = [
        {label: 'Project 1', value: 'project1'},
        {label: 'Project 2', value: 'project2'},
        {label: 'Project 3', value: 'project3'},
     
    ];

    const countryList = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
    const genderList = [
        {label:'Male',value:'male'},
        {label:'Female',value:'female'}
    ]
    const actionCodeList = [
        {label: 'Action Code 1', value: 'actionCode1'},
        {label: 'Action Code 2', value: 'actionCode2'},
        {label: 'Action Code 3', value: 'actionCode3'},
    ]
  const operatorList=[
    {label: 'Operator 1', value: 'operator1'},
    {label: 'Operator 2', value: 'operator2'},
    {label: 'Operator 3', value: 'operator3'},
  ]
  const secondOperatorList = [
    {label: 'second Operator 1', value: 'secondoperator1'},
    {label: 'second Operator 2', value: 'secondoperator2'},
    {label: 'second Operator 3', value: 'secondoperator3'},
  ]

 return(
     <div className="formDiv">
         Form
         <div className="first-row displayContent">
         <div className="childIdDiv columnContent">
             <span>Child ID <i class="fa fa-info-circle" style={{color:'blue'}} aria-hidden="true"></i></span>
             <InputText type="text" className="block mb-2" placeholder="Please Type" />

         </div>
         <div className="childGivenNameDiv columnContent">
             <span>Child Given Name </span>
             <InputText type="text" className="block mb-2" placeholder="Please Type" />
         </div>
         <div className="childFamilyDiv columnContent">
             <span>Child Family Name </span>
             <InputText type="text" className="block mb-2" placeholder="Please Type" />
         </div>
         </div>

         <div className="second-row displayContent">
             <div className="rcds-div columnContent">
                <span>RCDS Child Status </span>
   
<Dropdown className="dropdownStyle" value={childStatus} options={childStatusOptionsList} onChange={(e) => setChildStatus(e.value)} placeholder="Please Type"/>
 
             </div>
         <div className="childCountryProject">
                 <div className="childCountryDiv columnContent">
                   <span>Child Country </span>
    
<Dropdown className="dropdownStyle" value={country} options={countryList } onChange={(e) => setCountry(e.value)} placeholder="Please Type"/>
 
                 </div>
              <div className="projectDiv columnContent">
                <span>Project </span>

                <Dropdown className="dropdownStyle projectStyle" value={projectSelected} options={projectOptionsList} onChange={(e) => setProject(e.value)} placeholder="Please Type"/>
 
             </div>
        </div>
  
         </div>
         <div className="third-row displayContent">
             <div className="ageRangeDiv">
             <span>Age Range</span>
             <div className="displayContent">
             <div className="fromDiv columnContent"> 
                 <span >From</span>
                 <InputText type="text" className="block mb-2" placeholder="Please Type" />

             </div>
             <div className="toDiv columnContent">
             <span>To</span>
             <InputText type="text" className="block mb-2" placeholder="Please Type" />

             </div>
             </div>
             </div>
             <div className="genderDiv columnContent">
                <span>Gender </span>
                <Dropdown className="dropdownStyle" value={gender} options={genderList} onChange={(e) => setGender(e.value)} placeholder="Please Type"/>
             </div>
             <div className="reservationDiv columnContent">
                     <span>Reservation ID</span>
                     <InputText type="text" className="block mb-2" placeholder="Please Type" />
             </div>
             </div>
             <div className="fourthDiv displayContent">
                 <div className="actionCodeDiv columnContent">
                      <span>Action Code</span>
      
<Dropdown className="dropdownStyle" value={actionCode} options={actionCodeList} onChange={(e) => setActionCode(e.value)} placeholder="Select a City"/>
 
                </div>
                <div className="rcdsAddDate columnContent">

                     <span >
                          RCDS Add Date
                    
                     </span>
                     <div className="rcdsSecondDiv displayContent">
                    <div className="operatorDiv">
 
<Dropdown className="dropdownStyle" value={operatorValue} options={operatorList} onChange={(e) => setOperatorValue(e.value)} placeholder="Select Operator"/>
 
                    </div>
                    <div className="dateDiv">
                    <Calendar className="inputDateStyle" placeholder="Select Date" id="icon" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
                    </div>
                   </div>
                </div>
                </div>
                <div className="fifthDiv displayContent ">
                    <div className="fifthInnerDiv columnContent">
                    <span>Field Office Last Update Date</span>
                    <div className="fifthDivInner displayContent">
                    <div className="secondoperatorDiv">
     
<Dropdown className="dropdownStyle" value={secondOperatorValue} options={secondOperatorList} onChange={(e) => setSecondOperatorValue(e.value)} placeholder="Select Operator"/>
 
                    </div>
                    <div className="seconddateDiv">
                    <Calendar className="inputDateStyle" placeholder="Select Date" id="icon" value={date2} onChange={(e) => setDate2(e.value)} showIcon />
                    </div>
                    </div>
                    </div>
 
                </div>
        
     </div>
 )
}
export default Form