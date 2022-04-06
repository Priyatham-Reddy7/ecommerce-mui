import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = ({linksArray}) => {

  const [open,setOpen] = useState(false)

  return (
    <>
        <Drawer PaperProps={{sx:{backgroundColor:'black'}}} open={open} onClose={() => setOpen(false)}>
            <List>
                {linksArray.map((link, index) => (
                    <ListItemButton onClick={() => setOpen(false)} key={index} divider>
                        <ListItemIcon>
                            <ListItemText sx={{color: 'white'}}>{link}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
        <IconButton sx={{marginLeft: 'auto', color: 'white'}} onClick={() => setOpen(!open)}>
            <MenuRoundedIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp