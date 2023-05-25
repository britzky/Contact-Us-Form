import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';


export const ThankYouModal = ({ open, onClose, name }) => {
  return (
    <>
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="thank-you-dialog-title"
      aria-describedby="thank-you-dialog-description"
    >
      <DialogTitle id="thank-you-dialog-title" sx={{backgroundColor: 'rgb(85,85,85,0.7)', color: '#fff', display: 'flex', justifyContent: 'center'}}>Thank you!</DialogTitle>
      <DialogContent sx={{backgroundColor: 'rgb(85,85,85,0.7)', color: '#fff'}}>
        <DialogContentText id="thank-you-dialog-description" sx={{color: '#fff'}}>
          Thank you for sending in a question {name} We appreciate your feedback.
        </DialogContentText>
      </DialogContent>
    </Dialog>
    </>
  )
}
