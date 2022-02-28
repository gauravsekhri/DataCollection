import React from 'react';
import RadioComponent from './RadioComponent';
import Paper from '@mui/material/Paper';
import '../Styles/PageLayout.css';
import HeaderText from './HeaderText';
import QuesText from './QuesText';
import NavButtons from './NavButtons';
import { useSelector } from 'react-redux';
import ThankyouPage from './ThankyouPage';
import CheckboxComponent from './CheckboxComponent';
import { useState, useEffect } from 'react';
import TextOpenend from './TextOpenend';
import NavBar from './NavBar';
import GridComponent from './GridComponent';
import Constantsum from './constantsum';


function PageLayout() {

    const storeData = useSelector(({navReducer}) => navReducer);

    const [qType, setQType] = useState(storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex].Type);

    useEffect(() => {
        setQType(storeData.SurveyJSON.Survey[0].QuestionSet[storeData.PageIndex].Type)
    }, [storeData]);

    let CurrComponent;

    if(qType == "Radio"){
        CurrComponent = <RadioComponent/>
    }
    else if(qType == "Checkbox"){
        CurrComponent = <CheckboxComponent/>
    }
    else if(qType == "TextOpenend"){
        CurrComponent = <TextOpenend/>
    }
    else if(qType == "Grid"){
        CurrComponent = <GridComponent/>
    }
    else if(qType == "Constantsum"){
        CurrComponent = <Constantsum/>
    }

    return (
        <>
            <NavBar/>
            <Paper elevation={5} className="container">
                <HeaderText/>
                <QuesText/>
                {CurrComponent}
                <NavButtons className="nextbackContainer"/>
            </Paper>
        </>
    );
}

export default PageLayout;
