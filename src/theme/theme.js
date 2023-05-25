import { createTheme } from "@mui/material";

export const theme= createTheme({
    components: {
        MuiButton: {
            styleOverrides:{
                root: {
                    backgroundColor: '#ea7295',
                    borderColor: '#ea7295',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#ee5490'
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(85,85,85,0.7)',
                    borderRadius: '5px',
                    color: '#fff',
                    '& .MuiInputBase-input': {
                        color: '#fff',
                    },    
                    '&.Mui-focused': {
                        border: 'none'
                    }        
                },
            },
        },
        MuiInputBase:{
            input: {
                color: '#fff',
                '&::placeholder': {
                    color: '#fff'
                }
            }        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    border: '4px solid #ea7295',
                    '&.Mui-focused': {
                        border: 'none'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ea7295'
                    },
                }
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#fff'
                    }
                },
            },
        },
    }
})