import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import MainButton from '../Button/MainButton'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StepperC from '../Stepper/Stepper'



export default function Form() {

  return (
    <Grid container rowSpacing={2} justifyContent={'center'} style={{marginTop:'15px'}}>
      <Grid item xs={11}>
      <StepperC />
      </Grid>

      <Grid item xs={9} marginTop={3} >
        <Paper elevation={4} style={ {padding:'15px'}}>
           <DatePicker/>
           <MainButton name={'Назад'} color={'error'} variant={'contained'}/>
           <MainButton name={'Далее'} color={'success'} variant={'contained'}/>
        </Paper>
      </Grid>

    </Grid>
  )
}
