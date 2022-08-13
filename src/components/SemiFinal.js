import React,{useState} from 'react'

function SemiFinal(props) {
  //const [checked1,setChecked1] = useState(false);
    //const [checked2,setChecked2] = useState(false);

    const [checked1,setCheckedSemi1] = useState(false);
    const [checked2,setCheckedSemi2] = useState(false);

    const [smatch1Res, setSmatch1Res] = useState("");
    const [smatch2Res, setSmatch2Res] = useState("");
    const [smatch3Res, setSmatch3Res] = useState("");
    const [smatch4Res, setSmatch4Res] = useState("");
    
    function checkBoxChangeHandler1(val,flag,group,teamName,props){
      console.log('val',val);
      console.log('flag',flag);
      console.log('group',group);
      
      if(flag){
    
    if(group==='SMatch1'){
    if(smatch1Res===""){
      //groupAArray=[...groupAArray,teamName]
      //setGroupA([...groupA,teamName]);
      setSmatch1Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only one Winner');
    }
    
    }
    
    if(group==='SMatch2'){
    if(smatch2Res===""){
      //groupAArray=[...groupAArray,teamName]
      //setGroupB([...groupB,teamName]);
      setSmatch2Res(teamName);
      toggleSelection(flag,val);
      props.cb(group,teamName);
    }
    else{
      alert('Select only One Winner');
    }
    }

    if(group==='SMatch3'){
      if(smatch1Res===""){
        //groupAArray=[...groupAArray,teamName]
        //setGroupA([...groupA,teamName]);
        setSmatch3Res(teamName);
        toggleSelection(flag,val);
        props.cb(group,teamName);
      }
      else{
        alert('Select only one Winner');
      }
      
      }

      if(group==='SMatch4'){
        if(smatch1Res===""){
          //groupAArray=[...groupAArray,teamName]
          //setGroupA([...groupA,teamName]);
          setSmatch4Res(teamName);
          toggleSelection(flag,val);
          props.cb(group,teamName);
        }
        else{
          alert('Select only one Winner');
        }
        
        }
    
  
    
    
    //console.log('groupAArray',groupAArray);
      }
      else{
        if(group==='SMatch1'){ 
        
          setSmatch1Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    if(group==='SMatch2'){ 
     
      setSmatch2Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    if(group==='SMatch3'){ 
     
      setSmatch3Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    if(group==='SMatch4'){ 
     
      setSmatch4Res("");
    toggleSelection(flag,val);
    props.cb(group,"");
    }
    
    }
    
    }

    const toggleSelection = (flag,val) => {
      if(flag){
        if(val==='Team1')
        setCheckedSemi1(true);
        if(val==='Team2')
        setCheckedSemi2(true);
        
      }
      else{
        if(val==='Team1')
        setCheckedSemi1(false);
        if(val==='Team2')
        setCheckedSemi2(false);
        
      }
      }
  return (
    
          <div><strong>&nbsp;&nbsp;{props.group}</strong><br/><br/>
  <input type="checkbox" id="grpAteam1" name="grpAteam1" value="Team1" checked={checked1} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team1,props)}/>
  <label for="grpAteam1"> {props.team1}</label><br/>
  <input type="checkbox" id="grpAteam2" name="grpAteam2" value="Team2" checked={checked2} onChange={(e) => checkBoxChangeHandler1(e.target.value,e.target.checked,props.group,props.team2,props)}/>
  <label for="grpAteam2"> {props.team2}</label>
  <br/>
  
  </div>
    
  )

}

export default SemiFinal;