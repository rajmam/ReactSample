import logo from './logo.svg';
import './App.css';
import './index.css';
import './components/Group';
import Group from './components/Group';
import PreQuarter from './components/PreQuarter';
import Quarer from './components/Quarer';
import SemiFinal from './components/SemiFinal';
import Final from './components/Final';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {useState, createContext} from 'react';
//import { useNavigate } from 'react-router-dom';
//import {Link} from 'react-router-dom';

export const FixtureContext = createContext();

function App() {
//const history = useHistory();
//const navigate = useNavigate();
//Round of 16 Teams


const [gTeam,setGTeam] = useState([]);
const [gATeam,setGATeam] = useState([]);
const [gBTeam,setGBTeam] = useState([]);
const [gCTeam,setGCTeam] = useState([]);
const [gDTeam,setGDTeam] = useState([]);
const [gETeam,setGETeam] = useState([]);
const [gFTeam,setGFTeam] = useState([]);
const [gGTeam,setGGTeam] = useState([]);
const [gHTeam,setGHTeam] = useState([]);

//Quarter qualified Teams
const [q1Team,setQ1Team] = useState("");
const [q2Team,setQ2Team] = useState("");
const [q3Team,setQ3Team] = useState("");
const [q4Team,setQ4Team] = useState("");
const [q5Team,setQ5Team] = useState("");
const [q6Team,setQ6Team] = useState("");
const [q7Team,setQ7Team] = useState("");
const [q8Team,setQ8Team] = useState("");

//Semi Qualified Teams
const [s1Team,setS1Team] = useState("");
const [s2Team,setS2Team] = useState("");
const [s3Team,setS3Team] = useState("");
const [s4Team,setS4Team] = useState("");

//Final Qualified Teams
const [f1Team,setF1Team] = useState("");
const [f2Team,setF2Team] = useState("");

const [winner,setWinner] = useState("");


console.log('grpA',gATeam);
console.log('grpB',gBTeam);
console.log('grpC',gCTeam);
console.log('grpD',gDTeam);
console.log('grpE',gETeam);
console.log('grpF',gFTeam);
console.log('grpG',gGTeam);
console.log('grpH',gHTeam);

const passToParent = (grp,country) =>{
  console.log('here1',grp);
  switch(grp) {
    case 'Group A':{
      setGATeam([...gATeam,country]);
      break;
    }
    case 'Group B':{
      setGBTeam([...gBTeam,country]);
      break;
    }
      case 'Group C':{
        setGCTeam([...gCTeam,country]);
        break;
      }
        case 'Group D':{
          setGDTeam([...gDTeam,country]);
          break;
        }
      case 'Group E':{
        setGETeam([...gETeam,country]);
        break;
      }
      
      case 'Group F':{
        setGFTeam([...gFTeam,country]);
        break;
      }  
      case 'Group G':{
        setGGTeam([...gGTeam,country]);
        break;
      }
      case 'Group H':{
        setGHTeam([...gHTeam,country]);
        break;
      }
      case 'Match1':{
        setQ1Team(country);
        
        break;
      }
      case 'Match2':{
        setQ2Team(country);
        
        break;
      }
      case 'Match3':{
        setQ3Team(country);
        
        break;
      }
      case 'Match4':{
        setQ4Team(country);
        
        break;
      }
      case 'Match5':{
        setQ5Team(country);
        
        break;
      }
      case 'Match6':{
        setQ6Team(country);
        
        break;
      }
      case 'Match7':{
        setQ7Team(country);
        
        break;
      }
      case 'Match8':{
        setQ8Team(country);
        
        break;
      }
      case 'QMatch1':{
        setS1Team(country);
        
        break;
      }
      case 'QMatch2':{
        setS2Team(country);
        
        break;
      }
      case 'QMatch3':{
        setS3Team(country);
        
        break;
      }
      case 'QMatch4':{
        setS4Team(country);
        
        break;
      }
      case 'SMatch1':{
        setF1Team(country);
        
        break;
      }
      case 'SMatch2':{
        setF2Team(country);
        
        break;
      }
      case 'Final':{
        setWinner(country);
        
        break;
      }
    default:
      console.log('default');
  }
  
  
  
}
const buttonHandler= (e)=>{
  e.preventDefault();
  window.location.href='/prequarter';
  //alert('clicked');
  
  //navigate('/dashboard');
  //history.push('/dashboard');
  //this.props.history.push('/prequarter')
}

const callFunc= () =>{
  alert('called');
}

  return (
    <>
     <h1>FIFA WorldCup Qatar Fixture</h1>
    <marquee
    behavior='scroll'
    scrollamount='20'
    width='100%'
    direction='left'
    height='50px'
 >
    Select Two Teams from Each Group. First slection will be Group Winner and second selection will be runnersup and will proceed to Round of 16!!!
</marquee>
    <BrowserRouter>
<Routes>
<Route path="/" element={
 
 <FixtureContext.Provider value="From Parent" >
    <div className="grid-container">
  <Group group='Group A' team1='Ecuador' team2='Netherlands' team3='Qatar' team4='Senegal' cb={passToParent} selectedTeam={gTeam} ></Group>
  <Group group='Group B' team1='England' team2='Groupb2' team3='Iran' team4='USA' cb={passToParent} selectedTeam={gTeam}></Group>
  <Group group='Group C' team1='Argentina' team2='Mexico' team3='Poland' team4='Saudi Arabia' cb={passToParent} selectedTeam={gTeam}></Group>
  <Group group='Group D' team1='Denmark' team2='France' team3='Groupd3' team4='Tunisia' cb={passToParent} selectedTeam={gTeam}></Group>
  <Group group='Group E' team1='Germany' team2='Groupe2' team3='Japan' team4='Spain' cb={passToParent} selectedTeam={gTeam}></Group>
  <Group group='Group F' team1='Belgium' team2='Canada' team3='Croatia' team4='Morocco' cb={passToParent} selectedTeam={gTeam}></Group>  
  <Group group='Group G' team1='Brazil' team2='Cameroon' team3='Serbia' team4='Switzerland' cb={passToParent} selectedTeam={gTeam}></Group>
  <Group group='Group H' team1='Ghana' team2='Portugal' team3='Korea Republic' team4='Uruguay' cb={passToParent} selectedTeam={gTeam}></Group>
  <br/>

<Link to="/prequarter" element={
<></>
}>Proceed to PreQuarter</Link>


</div>
</FixtureContext.Provider> 
  
}/>
<Route path="/prequarter" element={
  
  <div className="grid-container"> 
  <PreQuarter group='Match1' team1={gATeam[0]} team2={gATeam[1]} cb={passToParent}/>
  <PreQuarter group='Match2' team1={gBTeam[0]} team2={gBTeam[1]} cb={passToParent}/>
  <PreQuarter group='Match3' team1={gCTeam[0]} team2={gCTeam[1]} cb={passToParent}/>
  <PreQuarter group='Match4' team1={gDTeam[0]} team2={gDTeam[1]} cb={passToParent}/>
  <PreQuarter group='Match5' team1={gETeam[0]} team2={gETeam[1]} cb={passToParent}/>
  <PreQuarter group='Match6' team1={gFTeam[0]} team2={gFTeam[1]} cb={passToParent}/>
  <PreQuarter group='Match7' team1={gGTeam[0]} team2={gGTeam[1]} cb={passToParent}/>
  <PreQuarter group='Match8' team1={gHTeam[0]} team2={gHTeam[1]} cb={passToParent}/>
  <br/> 
  <Link to="/quarter" element={
<></>
}>Proceed to Quarter</Link>
  </div>
}/>

<Route path="/quarter" element={
  <div className="grid-container"> 
  <Quarer group='QMatch1' team1={q1Team} team2={q5Team} cb={passToParent} />
  <Quarer group='QMatch2' team1={q2Team} team2={q6Team} cb={passToParent} />
  <Quarer group='QMatch3' team1={q3Team} team2={q7Team} cb={passToParent} />
  <Quarer group='QMatch4' team1={q4Team} team2={q8Team} cb={passToParent} />
 
  <br/> 
  <Link to="/semiFinal" element={
<></>
}>Proceed to Semi Final</Link>
  </div>

}/>
<Route path="/semiFinal" element={
  <div className="grid-container"> 
  <SemiFinal group='SMatch1' team1={s1Team} team2={s4Team} cb={passToParent}/>
  <SemiFinal group='SMatch2' team1={s2Team} team2={s3Team} cb={passToParent}/>
  
  <br/> 
  <br/> 
  <Link to="/final" element={
    <></>
}>Proceed to  Final</Link>
  </div>

}/>
<Route path="/final" element={
  <div className="grid-container"> 
  <Final group="Final Match" team1={f1Team} team2={f2Team} cb={passToParent} />
  <br/> 
  </div>
  }/>
  
</Routes>
<Link to="/" element={
<></>
}>Predict Again</Link>
</BrowserRouter>



</>
  );
}

export default App;
