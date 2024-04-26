import { useNavigate } from "react-router-dom";
import { IMenu } from "../models/menu.interface";
import React from "react";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface ChildMenuProps{
    parent: IMenu;
}
export default function ChildMenu({parent}: ChildMenuProps){
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return(
        <>
        {
            parent.children.length > 0 ? (
                <>
                    <ListItemButton onClick={handleClick} selected={open}>
                        <ListItemIcon>
                            {parent.icon}
                        </ListItemIcon>
                        <ListItemText primary={parent.label} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding dense={true}>
                        {
                            parent.children.map((item) => (
                                <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate(item.path)} key={item.path}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            ))
                        }
                        </List>
                    </Collapse>
                </>
            ): (
                <>
                    <ListItemButton onClick={()=>navigate(parent.path)}>
                        <ListItemIcon>
                            {parent.icon}
                        </ListItemIcon>
                        <ListItemText primary={parent.label} />
                    </ListItemButton>
                </>
            )
        }
        </>
    )
}