
import ButtonGroup from '@mui/material/ButtonGroup';
import CustomButton from './CustomButton';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';

export default function ToDo({todo, onCheckBtnClick}) {
  return (
    <>
    
    <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
        fullWidth
        sx={{marginBottom: '10px' }}
      >
        <div style={{display:"flex"}}>
        <CustomButton text={todo.name} disabled={todo.isCompleted}/>
        <Button onClick={()=>onCheckBtnClick(todo.id)} sx={{ width: '60px', height: "60px" }}>
          <CheckIcon sx={{height:"40px"}} />
         </Button>
         {console.log("todo isCompleted", todo.isCompleted)}
        </div>
       
    </ButtonGroup>
    </>
  )
}
