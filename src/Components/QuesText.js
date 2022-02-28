import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../Styles/QuesText.css"

function QuesText() {

  const storeData = useSelector(({navReducer}) => navReducer);

  const quesText = storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex].Text;

  const [lang, setLang] = useState(storeData.Language);

  useEffect(() => {
      setLang(storeData.Language)
  },[storeData.Language])

  return (
      <>
        {/* <div className="qText">{quesText[1].Text}</div> */}

        <div className="qText">
            {lang.map((langIndex, index) => (
                <div key={index}>
                    {lang.length>0 ? quesText[langIndex].Text : quesText[1].Text} <br/>
                </div>
            ))}
        </div>
      </>
  );
}

export default QuesText;
