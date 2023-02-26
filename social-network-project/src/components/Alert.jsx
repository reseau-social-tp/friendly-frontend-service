import { useState } from "react"
import { Box, Alert, Snackbar, ClickAwayListener } from "@mui/material"


const CustomAlert = ({alertType, msg})=>{
  const [alertOpen,setAlertOpen] = useState(true)
  
  const handleClose =(e, reason)=>{
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false)
  }
  return(
    <>
    {alertOpen &&
    <ClickAwayListener onClickAway={handleClose}>
      <Snackbar className="alert-box" open={alertOpen} autoHideDuration={3000} onClose={handleClose}
      anchorOrigin={{ vertical:'top', horizontal:'right' }}

      >
        <Alert className={`alert ${alertType}`} variant="filled" severity={alertType}
        sx={{ width: '100%' }}
        autoHideDuration={3000}
            onClose={handleClose}
            >
              {msg}
          </Alert>
      </Snackbar>
    </ClickAwayListener>

    }
    </>
  )

}

export default CustomAlert
