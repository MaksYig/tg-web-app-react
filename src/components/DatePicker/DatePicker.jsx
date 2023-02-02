import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function DatePicker(props) {
    const [value, setValue] = React.useState(dayjs('02-02-2023').toDate());
    const onchangeHandler=(newValue)=>{
     setValue(newValue)
    }
  return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="Выберите дату:"
          value={value}
          onChange={onchangeHandler}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  )
}
