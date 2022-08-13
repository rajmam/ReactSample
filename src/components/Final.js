import React, {useState} from 'react'

function Final(props) {
  const [checked1,setCheckedFinal1] = useState(false);
    const [checked2,setCheckedFinal2] = useState(false);
    const[fmatch1Res,setFmatch1Res] = useState("");
    function checkBoxChangeHandler1(val,flag,group,teamName,props){
      console.log('val',val);
      console.log('flag',flag);
      console.log('group',group);
      
      if(flag){
    
    if(group==='Final Match'){
    if(fmatch1Res===""){
      //groupAArray=[...groupAArray,teamName]
      //setGroupA([...groupA,teamName]);
      setFmatch1Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only one Winner');
    }
    
    }
      }
      else{
        if(group==='Final Match'){ 
        
          setFmatch1Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    }
    
    }

    const toggleSelection = (flag,val) => {
      if(flag){
        if(val==='Team1')
        setCheckedFinal1(true);
        if(val==='Team2')
        setCheckedFinal2(true);
        
      }
      else{
        if(val==='Team1')
        setCheckedFinal1(false);
        if(val==='Team2')
        setCheckedFinal2(false);
        
      }
      } 
      
      function handlerFunction(){
        if(fmatch1Res){ 
        alert('Hurrey!!! you predicted '+fmatch1Res+ ' as the Winners for Qatar 2022 worldcup');
      }
      else{
        alert('Please select one and submit');
      }
      }
  return (
    <div><strong>&nbsp;&nbsp;{props.group}</strong><br/><br/>
 <input type="checkbox" id="grpAteam1" name="grpAteam1" value="Team1" checked={checked1} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team1,props)}/>
  <label for="grpAteam1"> {props.team1}</label><br/>
  <input type="checkbox" id="grpAteam2" name="grpAteam2" value="Team2" checked={checked2} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team2,props)}/>
  <label for="grpAteam2"> {props.team2}</label>
  <br/>
  <button onClick={handlerFunction}>Submit</button>
  
  </div>
  )
}

export default Final