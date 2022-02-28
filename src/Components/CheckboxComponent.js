import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "../Styles/CheckboxComponent.css"

function CheckboxComponent() {

    const storeData = useSelector(({navReducer}) => navReducer);

    const QuestionData = storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex];

    const [lang, setLang] = useState(storeData.Language);

    useEffect(() => {
        setLang(storeData.Language)
    },[storeData.Language])

    let Choices = [];

    if(QuestionData.Type == "Checkbox"){
      Choices = QuestionData.List.Stubs;
    }

    const [allselect, setAllselect] = useState(false);
    const [exclselect, setExclSelect] = useState(false);


    function anyselect(event){
        setAllselect(null)
        setExclSelect(false)
    }

    function exclusive(event){
        setExclSelect(true)
        setAllselect(false)
    }

    return (
        <div className="radiosbox">

            <form>

                {Choices.map((Choice, index) => (
                    <div key={index}>
                        <input value={index} type="checkbox" name="ab" id={"r"+index} checked={allselect} onChange={(event) => anyselect(event)}/> 
                        {/* <label htmlFor={"r"+index}>{Choice.Text[lang].Text}</label>  */}
                        <label className='labelClass' htmlFor={"r"+index}>
                            {lang.map((langIndex) => (
                                <div>
                                    {lang.length>0 ? Choice.Text[langIndex].Text : Choice.Text[1].Text} <br/>
                                </div>
                            ))}
                        </label>
                    </div>
                ))}

                {/* <button type="submit">Submit</button> */}

                    <input value="abcd" type="checkbox" name="ab" id="nota" checked={exclselect} onChange={(event)=> exclusive(event)}/> 
                    <label className='labelClass' htmlFor='nota'> None of the above </label>

            </form>            
        </div>
    );
}

export default CheckboxComponent;
