import React from 'react'
import {useState,useRef,useContext} from 'react';
import ReactDOM from "react-dom/client";
import {FixtureContext} from "../App";

function Group(props) {

  //useRef sample
  const inputRef = useRef();
  console.log('inputRef',inputRef.current);

  //useContext Example
  const fromParentText=useContext(FixtureContext);
  console.log('fromParentText '+fromParentText);

  const [checked1,setChecked1] = useState(false);
  const [checked2,setChecked2] = useState(false);
  const [checked3,setChecked3] = useState(false);
  const [checked4,setChecked4] = useState(false);
  let groupAArray = [];
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [groupE, setGroupE] = useState([]);
  const [groupF, setGroupF] = useState([]);
  const [groupG, setGroupG] = useState([]);
  const [groupH, setGroupH] = useState([]);
  //const [grpA,setGrpA] = useState([]);
  //const grpATeams = [];
  //let checkBoxChangeHandler=()=>{
  //console.log('in');
  //}

const toggleSelection = (flag,val) => {
if(flag){
  if(val==='Team1')
  setChecked1(true);
  if(val==='Team2')
  setChecked2(true);
  if(val==='Team3')
  setChecked3(true);
  if(val==='Team4')
  setChecked4(true);
}
else{
  if(val==='Team1')
  setChecked1(false);
  if(val==='Team2')
  setChecked2(false);
  if(val==='Team3')
  setChecked3(false);
  if(val==='Team4')
  setChecked4(false);
}
}

function callMe(){
  alert('call me');
}

  function checkBoxChangeHandler1(val,flag,group,teamName,props){
    console.log('val',val);
    console.log('flag',flag);
    console.log('group',group);
    
    if(flag){

if(group==='Group A'){
  if(groupA.length<2){
    //groupAArray=[...groupAArray,teamName]
    setGroupA([...groupA,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
  
}

if(group==='Group B'){
  if(groupB.length<2){
    //groupAArray=[...groupAArray,teamName]
    setGroupB([...groupB,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}

if(group==='Group C'){
  if(groupC.length<2){
    //groupAArray=[...groupAArray,teamName]
    setGroupC([...groupC,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}

if(group==='Group D'){
  if(groupD.length<2){
    //groupDArray=[...groupDArray,teamName]
    setGroupD([...groupD,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}

if(group==='Group E'){
  if(groupE.length<2){
    //groupEArray=[...groupAArray,teamName]
    setGroupE([...groupE,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}

if(group==='Group F'){
  if(groupF.length<2){
    //groupEArray=[...groupAArray,teamName]
    setGroupF([...groupF,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}

if(group==='Group G'){
  if(groupG.length<2){
    //groupEArray=[...groupAArray,teamName]
    setGroupG([...groupG,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}

if(group==='Group H'){
  if(groupG.length<2){
    //groupEArray=[...groupAArray,teamName]
    setGroupG([...groupG,teamName]);
    toggleSelection(flag,val);
    props.cb(group,teamName);
  }
  else{
    alert('Select only Two Teams');
  }
}
//console.log('groupAArray',groupAArray);
    }
    else{
      if(group==='Group A'){ 
      const index = groupA.indexOf(teamName);
if (index > -1) {
  groupA.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupA(groupA);
toggleSelection(flag,val);
  }

  if(group==='Group B'){ 
    const index = groupB.indexOf(teamName);
if (index > -1) {
groupA.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupB(groupB);
toggleSelection(flag,val);
}

if(group==='Group C'){ 
  const index = groupC.indexOf(teamName);
if (index > -1) {
groupC.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupC(groupC);
toggleSelection(flag,val);
}

if(group==='Group D'){ 
  const index = groupD.indexOf(teamName);
if (index > -1) {
groupD.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupD(groupD);
toggleSelection(flag,val);
}

if(group==='Group E'){ 
  const index = groupE.indexOf(teamName);
if (index > -1) {
groupE.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupE(groupE);
toggleSelection(flag,val);
}

if(group==='Group F'){ 
  const index = groupF.indexOf(teamName);
if (index > -1) {
groupF.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupE(groupF);
toggleSelection(flag,val);
}

if(group==='Group G'){ 
  const index = groupG.indexOf(teamName);
if (index > -1) {
groupG.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupG(groupG);
toggleSelection(flag,val);
}

if(group==='Group H'){ 
  const index = groupH.indexOf(teamName);
if (index > -1) {
groupH.splice(index, 1); // 2nd parameter means remove one item only
}
setGroupH(groupH);
toggleSelection(flag,val);
}


}

  }

  const divStyle = {
    //backgroundColor: "#cccc"; // camel cased
    left: "20px !important"
    //color: 'yellow';
}
  
  return (
    <div style={divStyle}><strong>&nbsp;&nbsp;{props.group}</strong><br/><br/>
  <input ref={inputRef} type="checkbox" id="grpAteam1" name="grpAteam1" value="Team1" checked={checked1} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team1,props)}/>
  <label for="grpAteam1"> {props.team1}</label><br/>
  <input type="checkbox" id="grpAteam2" name="grpAteam2" value="Team2" checked={checked2} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team2,props)}/>
  <label for="grpAteam2"> {props.team2}</label>
  <br/>
  <input type="checkbox" id="grpAteam3" name="grpAteam3" value="Team3" checked={checked3} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team3,props)}/>
  <label for="grpAteam3"> {props.team3}</label>
  <br/>
  <input type="checkbox" id="grpAteam4" name="grpAteam4" value="Team4" checked={checked4} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team4,props)}/>
  <label for="grpAteam4"> {props.team4}</label>
  </div>
  )
}

export default Group