import './InputCard.css'
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputCard() {
  const [nicNumber, setNicNumber] = useState('');
  const [nic, setNic] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    const input = nicNumber.trim().toUpperCase();
    let year, dayOfYear, genderValue;

    //old nic
    if (/^\d{9}[VX]$/.test(input)) {
      year = 1900 + parseInt(input.substring(0, 2));
      dayOfYear = parseInt(input.substring(2, 5));
    }

     // new nic
    else if (/^\d{12}$/.test(input)) {
      year = parseInt(input.substring(0, 4));
      dayOfYear = parseInt(input.substring(4, 7));
    } else {
      setNic('');
      setBirthday('');
      setGender('');
      return;
    }





  return (
    <Card sx={{
      maxWidth: 500,
      overflow: 'hidden',
      borderRadius: '20px',
      marginLeft: '500px',
      marginTop: '100px'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="src\assets\istockphoto-2156936031-612x612.jpg"
          alt="green iguana"
          sx={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '20px'
          }}
        />
        <CardContent>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField
              fullWidth
              value={nicNumber}
              onChange={(e) => setNicNumber(e.target.value)}
              label="Enter NIC No"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
            />
          </Box>
          <button onClick={handleSubmit} className="submitButton">Submit</button>

          <div className="info-box">
            <div className="info-label">NIC No</div>
            <div className="info-value">{nic}</div>
          </div>

          <div className="info-box">
            <div className="info-label">Birthday</div>
            <div className="info-value">{birthday}</div>
          </div>

          <div className="info-box">
            <div className="info-label">Gender</div>
            <div className="info-value">{gender}</div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
