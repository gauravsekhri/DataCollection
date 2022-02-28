import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../Styles/RadioComponent.css";

function RadioComponent() {
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.ab.value)
    };

    const storeData = useSelector(({navReducer}) => navReducer);

    const QuestionData = storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex];

    const [lang, setLang] = useState(storeData.Language);

    useEffect(() => {
        setLang(storeData.Language)
        console.log("from RC - ", storeData.Language);
        // lang.map((x) => (console.log(x)))
    },[storeData.Language])

    let Choices = [];

    if(QuestionData.Type == "Radio"){
      Choices = QuestionData.List.Stubs;
    }

    return (
        <div className="radiosbox">

            <form onSubmit={handleSubmit}>

                {Choices.map((Choice, index) => (
                    <div key={index}>
                        <input value="{Choice.Text[lang].Text}" type="radio" name="ab" id={"r"+index} /> 
                        {/* <label htmlFor={"r"+index}>{Choice.Text[0].Text}</label>  */}
                        <label className='labelClass' htmlFor={"r"+index}>
                            {lang.map((langIndex) => (
                                <div>
                                    {lang.length>0 ? Choice.Text[langIndex].Text : Choice.Text[1].Text} <br/>
                                </div>
                            ))}
                        </label>
                        {/* <input type="text"/> */}
                    </div>
                ))}

                {/* <button type="submit">Submit</button> */}

            </form>            
        </div>
    );
}

export default RadioComponent;
