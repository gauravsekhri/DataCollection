import React from 'react';
import { useSelector } from 'react-redux';
import "../Styles/HeaderText.css"

function HeaderText() {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const storeData = useSelector(({navReducer}) => navReducer);

  const headerText = storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex].HeadText;


  return (
      <>
        {headerText.length>0 ? <div className="htext">{headerText}</div> : <div></div>}
        {/* <div className="htext">{headerText}</div> */}
      </>
  );
}

export default HeaderText;
