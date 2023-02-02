import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import MainButton from '../Button/MainButton'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StepperC from '../Stepper/Stepper'
import ServiceList from '../ServiceList/ServiceList'
import TimePicker from '../TimePicker/TimePicker'



export default function Form() {

  const [step, setStep] = React.useState(0);
  const[ data, setData]=React.useState([]);

  const NextHandler =()=>{
    if (step >= 0 && step < 3){
        setStep(step+1)
    }
    console.log(step)

  }

  return (
    <Grid container rowSpacing={2} justifyContent={'center'} style={{marginTop:'15px'}}>
      <Grid item xs={11}>
      <StepperC step={step} />
      </Grid>

      <Grid item xs={9} marginTop={3} >
        <Paper elevation={4} style={ {padding:'15px'}}>
        {step === 0 && <DatePicker />}
        {step === 1 && <ServiceList />} 
        {step === 2 && <TimePicker />}   
        </Paper>
      </Grid>
      <Grid item xs={8} display="flex" justifyContent="space-between">
        <MainButton name={'Назад'} color={'error'} variant={'contained'} onClick={()=>setStep(step -1)}/>
        <MainButton name={step === 3 ? 'Подтвердить' : 'Далее'} color={'success'} variant={'contained'} onClick={NextHandler}/>
      </Grid>
    </Grid>
  )
}
