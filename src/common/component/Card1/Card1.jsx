import React from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

export default function Card1({ children }) {
    return (
        <div className='card1-container'>
            {children}
            <h1>Check NIC Details</h1>
            <Card className="card2" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="src\assets\an-id-card-with-a-man-s-face-on-it-vector.jpg"
                        alt="green iguana"
                    />
                </CardActionArea>
            </Card>
        </div>
    )
}
