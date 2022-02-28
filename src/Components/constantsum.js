import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Styles/constantsum.css';

function Constantsum() {

    const storeData = useSelector(({navReducer}) => navReducer);

    const QuestionData = storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex];

    const [lang, setLang] = useState(storeData.Language);
    const [total, setTotal] = useState(0);

    var allValues = [];

    useEffect(() => {
        setLang(storeData.Language)
        console.log("from RC - ", storeData.Language);
        // lang.map((x) => (console.log(x)))
    },[storeData.Language])

    let Choices = [];

    if(QuestionData.Type == "Constantsum"){
      Choices = QuestionData.List.Stubs;
      for(var i=0; i<Choices.length; i++){
        allValues.push(0);
      }
      console.log(allValues);
    }

    function valChange(val, index){
        allValues[index] = Number(val);
        // allValues[index] = val;
        console.log(allValues);

        // for (var i = 0, total = 0; i < allValues.length; setTotal += allValues[i++]);

        let curr_total = allValues.reduce((a, b) => a + b);
        setTotal(curr_total);
    }

    return (
        <div>
            <table>
                <tbody>
                    {Choices.map((Choice, index) => (
                        <tr key={index}>
                            <td className='rowlabel'>
                                {lang.map((langIndex) => (
                                    <div>
                                        {lang.length>0 ? Choice.Text[langIndex].Text : Choice.Text[0].Text} <br/>
                                    </div>
                                ))}
                            </td>
                            <td>
                                <input type="number" onInput={(event) => valChange(event.target.value, index)}/>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td><input type="number" value={total}/></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Constantsum;