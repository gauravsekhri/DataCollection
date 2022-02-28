import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/NavStyle.css"

function NavButtons() {

    const PageIndex = useSelector(({navReducer}) => navReducer.PageIndex);
    const dispatch = useDispatch();

    function backClick(){
        dispatch({type : "Page_Change", payload : PageIndex - 1});
        console.log(PageIndex);
    }

    function nextClick(){
        dispatch({type : "Page_Change", payload : PageIndex + 1});
        console.log(PageIndex);
    }

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" className='buttonContainer'>
                {/* { PageIndex>0 && <Button onClick={backClick} variant="outlined">Back</Button>} */}
                <Button onClick={backClick} variant="outlined">Back</Button>
                <Button onClick={nextClick} variant="outlined">Next</Button>
            </Stack>
        </>
    );
}

export default NavButtons;
