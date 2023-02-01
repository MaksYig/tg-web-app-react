import React from 'react'
import Button from '@mui/material/Button';

export default function MainButton({onClick,variant,size,href,startIcon,endIcon,color,name,...props}) {
  return (
    <Button 
    onClick={onClick}
    color={color}
    startIcon={startIcon}
    endIcon={endIcon}
    href={href}
    size={size}
    variant={variant}>
      {name}
    </Button>
  )
}
