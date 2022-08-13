import React, { useState } from "react";

function Quarer(props) {
  const [checked1, setCheckedQuarter1] = useState(false);
  const [checked2, setCheckedQuarter2] = useState(false);

  const [qmatch1Res, setQmatch1Res] = useState("");
  const [qmatch2Res, setQmatch2Res] = useState("");
  const [qmatch3Res, setQmatch3Res] = useState("");
  const [qmatch4Res, setQmatch4Res] = useState("");
  const [qmatch5Res, setQmatch5Res] = useState("");
  const [qmatch6Res, setQmatch6Res] = useState("");
  const [qmatch7Res, setQmatch7Res] = useState("");
  const [qmatch8Res, setQmatch8Res] = useState("");

  function checkBoxChangeHandler1(val, flag, group, teamName, props) {
    console.log("val", val);
    console.log("flag", flag);
    console.log("group", group);

    if (flag) {
      if (group === "QMatch1") {
        if (qmatch1Res === "") {
          //groupAArray=[...groupAArray,teamName]
          //setGroupA([...groupA,teamName]);
          setQmatch1Res(teamName);
          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only one Winner");
        }
      }

      if (group === "QMatch2") {
        if (qmatch2Res === "") {
          //groupAArray=[...groupAArray,teamName]
          //setGroupB([...groupB,teamName]);
          setQmatch2Res(teamName);
          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }

      if (group === "QMatch3") {
        if (qmatch3Res === "") {
          //groupAArray=[...groupAArray,teamName]
          //setGroupC([...groupC,teamName]);
          setQmatch3Res(teamName);

          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }

      if (group === "QMatch4") {
        if (qmatch4Res === "") {
          //groupDArray=[...groupDArray,teamName]
          //setGroupD([...groupD,teamName]);
          setQmatch4Res(teamName);
          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }

      if (group === "QMatch5") {
        if (qmatch5Res === "") {
          //groupEArray=[...groupAArray,teamName]
          //setGroupE([...groupE,teamName]);
          setQmatch5Res(teamName);
          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }

      if (group === "QMatch6") {
        if (qmatch6Res === "") {
          //groupEArray=[...groupAArray,teamName]
          //setGroupF([...groupF,teamName]);
          setQmatch6Res(teamName);
          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }

      if (group === "QMatch7") {
        if (qmatch7Res === "") {
          //groupEArray=[...groupAArray,teamName]
          //setGroupG([...groupG,teamName]);
          setQmatch7Res(teamName);

          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }

      if (group === "QMatch8") {
        if (qmatch8Res === "") {
          //groupEArray=[...groupAArray,teamName]
          //setGroupG([...groupG,teamName]);
          setQmatch8Res(teamName);

          toggleSelection(flag, val);
          props.cb(group, teamName);
        } else {
          alert("Select only One Winner");
        }
      }
      //console.log('groupAArray',groupAArray);
    } else {
      if (group === "QMatch1") {
        setQmatch1Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch2") {
        setQmatch2Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch3") {
        setQmatch3Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch4") {
        setQmatch4Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch5") {
        setQmatch5Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch6") {
        setQmatch6Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch7") {
        setQmatch7Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }

      if (group === "QMatch8") {
        setQmatch8Res("");
        toggleSelection(flag, val);
        props.cb(group, "");
      }
    }
  }

  const toggleSelection = (flag, val) => {
    if (flag) {
      if (val === "Team1") setCheckedQuarter1(true);
      if (val === "Team2") setCheckedQuarter2(true);
    } else {
      if (val === "Team1") setCheckedQuarter1(false);
      if (val === "Team2") setCheckedQuarter2(false);
    }
  };
  return (
    <div>
      <div>
        <strong>&nbsp;&nbsp;{props.group}</strong>
        <br />
        <br />
        <input
          type="checkbox"
          id="grpAteam1"
          name="grpAteam1"
          value="Team1"
          checked={checked1}
          onChange={(e) =>
            checkBoxChangeHandler1(
              e.target.value,
              e.target.checked,
              props.group,
              props.team1,
              props
            )
          }
        />
        <label for="grpAteam1"> {props.team1}</label>
        <br />
        <input
          type="checkbox"
          id="grpAteam2"
          name="grpAteam2"
          value="Team2"
          checked={checked2}
          onChange={(e) =>
            checkBoxChangeHandler1(
              e.target.value,
              e.target.checked,
              props.group,
              props.team2,
              props
            )
          }
        />
        <label for="grpAteam2"> {props.team2}</label>
        <br />
      </div>
    </div>
  );
}

export default Quarer;
