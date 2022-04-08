import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from "react-router-dom";

const DrawerComp = () => {

  const [open,setOpen] = useState(false)
  let navigate = useNavigate()

  return (
    <>
        <Drawer PaperProps={{sx:{backgroundColor:'black'}}} open={open} onClose={() => setOpen(false)}>
            <List>
                <ListItemButton onClick={() => {
                    navigate('/')
                    setOpen(false)
                }}>
                    <ListItemIcon>
                        <ListItemText sx={{color: 'white'}}>Home</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText sx={{color: 'white'}}>Account</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText sx={{color: 'white'}}>Orders</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton sx={{marginLeft: 'auto', color: 'white'}} onClick={() => setOpen(!open)}>
            <MenuRoundedIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp