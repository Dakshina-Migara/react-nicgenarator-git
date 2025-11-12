import React from 'react'
import './InputCard.css'

export default function InputCard() {
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
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
