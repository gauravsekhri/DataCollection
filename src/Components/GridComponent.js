import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../Styles/GridComponent.css"


function GridComponent() {

    const storeData = useSelector(({navReducer}) => navReducer);

    const QuestionData = storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex];

    const [lang, setLang] = useState(storeData.Language);

    useEffect(() => {
        setLang(storeData.Language)
        console.log("from RC - ", storeData.Language);
    },[storeData.Language])

    let ColumnList = [];
    let RowList = [];

    if(QuestionData.Type == "Grid"){
      ColumnList = QuestionData.ColumnList.Stubs;
      RowList = QuestionData.RowList.Stubs;
    }

    return (
        <div>
            <table className="container-box">
                <thead>
                    <tr>
                        <td className="columnhead">
                            <div></div>
                        </td>

                        {ColumnList.map((col,index) => (
                            <td className="columnhead" key={"col"+index}>
                                <div><b>{col.Text[1].Text}</b></div>
                            </td>
                        ))}

                    </tr>
                </thead>

                <tbody>
                    {RowList.map((row,index) => (
                        <tr key={index}>
                            <td className="rowshead">
                                <div><b>{row.Text[1].Text}</b></div>
                            </td>

                            {RowList.map((col,colindex) => (
                                <td key={colindex}>
                                    <div>
                                        
                                        <label className='grid-radio-label'>
                                            <input type="radio" name={colindex} id={"in"+ colindex} style={{display:'block', cursor:'pointer'}}></input>
                                        </label>
                                    </div>

                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default GridComponent;
