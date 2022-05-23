import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../App';

function SliderBeers({range, onChangeValue}) {
    const context = useContext(AppContext);
    const [value, setValue] = useState(context.beers.range)

    const handleChange = (event, newValue) => {
        context.beers.setRange(value);
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