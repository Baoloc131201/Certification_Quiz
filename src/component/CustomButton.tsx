import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface CustomButtonProps extends ButtonProps {
  text: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, ...props }) => {
  return (<>
  <Button
      {...props} 
      variant="contained" // Giữ kiểu 'contained' cho button
      sx={{
        backgroundColor: props.disabled ? 'yellow' : "purple",
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        marginTop: "10px",
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      }}
    >
      <span>{text}</span>
  </Button>
  </>
    
  );
};

export default CustomButton;
