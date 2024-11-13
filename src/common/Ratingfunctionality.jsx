import { useState } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Button } from 'react-bootstrap';



const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const Customizable = () => {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    return (
        <>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(_event , newValue) => {
                    if (newValue !== null) {
                        setValue(newValue);
                    }
                }}
                onChangeActive={(_event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <div>{value !== null && labels[hover !== -1 ? hover : value]}</div>
        </>
    );
};




const labels1 = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Excellent',
};

function getLabelText1(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels1[value]}`;
}

export const HoverRating = () => {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    return (

        <>
        <div className="d-flex justify-content-center">
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText1}
                onChange={(_event, newValue) => {
                    if (newValue !== null) {
                        setValue(newValue);
                    }
                }}
                onChangeActive={(_event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Button className="badge bg-success-transparent live-rating ms-3">
                    {hover !== -1 ? hover : value}
                </Button>
            )}
            </div>
        </>
    );
};


