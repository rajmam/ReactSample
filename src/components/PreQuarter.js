import React,{useState} from 'react'



function PreQuarter(props) {
    
    const [checkedpre1,setCheckedPre1] = useState(false);
    const [checkedpre2,setCheckedPre2] = useState(false);
    
    let groupAArray = [];
    const [match1Res, setmatch1Res] = useState("");
    const [match2Res, setmatch2Res] = useState("");
    const [match3Res, setmatch3Res] = useState("");
    const [match4Res, setmatch4Res] = useState("");
    const [match5Res, setmatch5Res] = useState("");
    const [match6Res, setmatch6Res] = useState("");
    const [match7Res, setmatch7Res] = useState("");
    const [match8Res, setmatch8Res] = useState("");
    
    function checkBoxChangeHandler1(val,flag,group,teamName,props){
      console.log('val',val);
      console.log('flag',flag);
      console.log('group',group);
      
      if(flag){
    
    if(group==='Match1'){
    if(match1Res===""){
      //groupAArray=[...groupAArray,teamName]
      //setGroupA([...groupA,teamName]);
      setmatch1Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only one Winner');
    }
    
    }
    
    if(group==='Match2'){
    if(match2Res===""){
      //groupAArray=[...groupAArray,teamName]
      //setGroupB([...groupB,teamName]);
      setmatch2Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    
    if(group==='Match3'){
    if(match3Res===""){
      //groupAArray=[...groupAArray,teamName]
      //setGroupC([...groupC,teamName]);
      setmatch3Res(teamName);

      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    
    if(group==='Match4'){
    if(match4Res===""){
      //groupDArray=[...groupDArray,teamName]
      //setGroupD([...groupD,teamName]);
      setmatch4Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    
    if(group==='Match5'){
    if(match5Res===""){
      //groupEArray=[...groupAArray,teamName]
      //setGroupE([...groupE,teamName]);
      setmatch5Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    
    if(group==='Match6'){
    if(match6Res===""){
      //groupEArray=[...groupAArray,teamName]
      //setGroupF([...groupF,teamName]);
      setmatch6Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    
    if(group==='Match7'){
    if(match7Res===""){
      //groupEArray=[...groupAArray,teamName]
      //setGroupG([...groupG,teamName]);
      setmatch7Res(teamName);

      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    
    if(group==='Match8'){
    if(match8Res===""){
      //groupEArray=[...groupAArray,teamName]
      //setGroupG([...groupG,teamName]);
      setmatch8Res(teamName);

      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }
    //console.log('groupAArray',groupAArray);
      }
      else{
        if(group==='Match1'){ 
        
          setmatch1Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match2'){ 
     
      setmatch2Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match3'){ 
    
    setmatch3Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match4'){ 
      setmatch4Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match5'){ 
      setmatch5Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match6'){ 
      setmatch6Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match7'){ 
      setmatch7Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='Match8'){ 
      setmatch8Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    
    }
    
    }
    
    const toggleSelection = (flag,val) => {
      if(flag){
        if(val==='Team1')
        setCheckedPre1(true);
        if(val==='Team2')
        setCheckedPre2(true);
        
      }
      else{
        if(val==='Team1')
        setCheckedPre1(false);
        if(val==='Team2')
        setCheckedPre2(false);
        
      }
      }

  return (
    <div>
          <div><strong>&nbsp;&nbsp;{props.group}</strong><br/><br/>
  <input type="checkbox" id="grpAteam1" name="grpAteam1" value="Team1" checked={checkedpre1} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team1,props)}/>
  <label for="grpAteam1"> {props.team1}</label><br/>
  <input type="checkbox" id="grpAteam2" name="grpAteam2" value="Team2" checked={checkedpre2} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team2,props)}/>
  <label for="grpAteam2"> {props.team2}</label>
  <br/>
  
  </div>
    </div>
  )
}

export default PreQuarter