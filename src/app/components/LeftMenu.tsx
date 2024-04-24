import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IMenu } from '../models/menu.interface';
import { Comment, Mic, Pattern, RecordVoiceOver, Straighten, TextFields } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const menu: IMenu[] = [
    {
        icon: <TextFields />,
        label: "Text Functions",
        children: [
            {
                path: "/text-length",
                label: "Text Length",
                icon: <Straighten />
            },
            {
                path: "/text-pattern",
                label: "Text Pattern",
                icon: <Pattern />
            }
        ]
    },
    {
        icon: <Mic />,
        label: "Speech Functions",
        children: [
            {
                path: "/speech-to-text",
                label: "Speech To Text",
                icon: <Comment />
            },
            {
                path: "/text-to-speech",
                label: "Text To Speech",
                icon: <RecordVoiceOver />
            }
        ]
    }

] as IMenu[];

interface ChildMenuProps{
    parent: IMenu;
}
function ChildMenu({parent}: ChildMenuProps){
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
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            {parent.icon}
                        </ListItemIcon>
                        <ListItemText primary={parent.label} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
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

export default function LeftMenu() {
  

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
        {
            menu.map((item) => <ChildMenu parent={item} key={item.path} />)
        }
      
      
    </List>
    </>
  );
}