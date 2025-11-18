import './InputCard.css'
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import lankaNic from 'lanka-nic';

export default function InputCard() {

  const [inputNic, setInputNic] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = () => {
    let nic1 = inputNic;
    if (inputNic.length > 10) {
      nic1 = inputNic.slice(2, 12);
    }
    const result = lankaNic.getInfoFromNIC(nic1);
    result.dateOfBirth = result.dateOfBirth.toISOString().split("T")[0];
    setResult(result);
  };

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
              value={inputNic}
              onChange={(e) => setInputNic(e.target.value)}
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
            <div className="info-value">{inputNic}</div>
          </div>

          <div className="info-box">
            <div className="info-label">Birthday</div>
            <div className="info-value">{result.dateOfBirth}</div>
          </div>

          <div className="info-box">
            <div className="info-label">Gender</div>
            <div className="info-value">{result.gender}</div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}