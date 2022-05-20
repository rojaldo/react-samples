import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';

function SliderBeers({range, onChangeValue}) {
    const [value, setValue] = useState([0,6])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        onChangeValue(value)
    }, [value]);
    
    return (
        <Box class="w-100">
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={range[1]}
            />
        </Box>
    );
}

export default SliderBeers;