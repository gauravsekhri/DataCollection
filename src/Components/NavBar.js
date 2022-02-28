import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/NavBar.css";
// import 'semantic-ui-css/semantic.min.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Arabic',
  'English'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function NavBar() {

    const Language = useSelector(({navReducer}) => navReducer.Language);
    const dispatch = useDispatch();

    // function langChange(event){
    //     event.preventDefault();
    //     dispatch({type : "Lang_Change", payload : event.target.value});
    // }

    function langChange(newValue){
        dispatch({type : "Lang_Change", payload : newValue});
    }

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const { target: { value } } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      console.log(event.target.value);
      if(event.target.value.length > 0){
        langChange(event.target.value);
      }
      else{
        langChange([1]);
      }
    };

    return (
        <div className='nb_container'>
            {/* <form onChange={langChange}>
                <select name="cars" id="cars" value={Language}>
                    <option value="0">Arabic</option>
                    <option value="1">English</option>
                </select>
            </form> */}
            {/* <select className="search dropdown" multiple="">
                <option value="">Skills</option>
                <option value="angular">Angular</option>
                <option value="css">CSS</option>
            </select> */}

            {/* <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> */}


            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select multiple displayEmpty
                value={Language}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                    return <em>Select Language</em>;
                    }

                    return selected.join(', ');
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem disabled value=""><em>Select Language</em></MenuItem>
                    {names.map((name, index) => (
                        <MenuItem
                        key={name}
                        value={index}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default NavBar;
