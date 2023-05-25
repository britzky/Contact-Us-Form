import React, { useState } from 'react'
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ThankYouModal } from '../components/ThankYouModal'

export const QuestionForm = () => {
  const [open, setOpen] = useState(false)
  const [checkbox, setCheckbox] = useState(true)
  const [formData, setFormData] = useState({})

  const { 
    register, handleSubmit, formState: { errors }
  } = useForm()
  
  const handleClose = () => {
    setOpen(false)
  }
  
  const onSubmit = (data) => { 
    setOpen(true)
    setFormData(data)
  } 

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit) }
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          backgroundColor: 'rgb(85,85,85,0.4)',
          color: '#ee5490',
          width: 'fit-content',
          padding: '20px',
          borderRadius: '10px',
          border: '4px solid black'
        }}
      >
        <Typography variant="h2">Have a question?</Typography>
        <Typography variant="h2">Contact us NOW</Typography>
        <TextField
          name="name"
          id="name"
          label="Name"
          autoFocus
          {...register("name", { required: "You must provide a name"})}

        />
        {errors.name && <span>{errors.name.message}</span>}
        <TextField
          name="email" 
          id="email"
          label="Email Address"
          autoComplete="email"
          {...register("email", {
            required: "You must provide a valid email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <TextField
          name="comment"
          id="comment"
          label="Questions or Comments"
          multiline
          rows={4}
          {...register("comment", {required: "you must provide a comment or question"})}
        />
        {errors.comment && <span>{errors.comment.message}</span>}
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography sx={{color: '#fff'}}>Recieve Marketing emails related to our products</Typography>
          <Checkbox 
            checked={checkbox} 
            size='small'
            onClick={() => {setCheckbox((prevState) => !prevState)}}
            sx={{
              color: '#ee5490',
              '&.Mui-checked': {
                color: '#ee5490',
              },
            }}
          />
        </Box>
        <Button type="submit">Submit</Button>
        <ThankYouModal open={open} onClose={handleClose} name={formData.name}/>
      </Box>
    </Box>

    </>
  )
}
