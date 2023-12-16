import React, { useState } from 'react'
import Logo from '../assets/Logo.svg' //Downloaded image
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2' //Imported the react icons in terminal "npm install react-icons --save"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material' //Imported material ui from mui.com
import HomeIcon from '@mui/icons-material/Home' //using different built-in components from MaterialUI
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'



const Navbar = () => { //Navbar function and using usestate for menu
    const [openMenu, setOpenMenu] = useState(false) //openMenu variable is set
    const menuOptions = [{ //Navbar menu options with icon
        text: "Home",
        icon: <HomeIcon />,
    },
    {
        text: "About",
        icon: <InfoIcon />,
    },
    {
        text: "Testimonials",
        icon: <CommentRoundedIcon />,
    },
    {
        text: "Contact",
        icon: <PhoneRoundedIcon />,
    },
    {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon />,
    }
    ]
    return (
        <nav>

            <div className='nav-logo-container' >
                <a href='#'>
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className='navbar-links-container'>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Testimonials</a>
                <a href='' className='contact'>Contact</a>
                <a href=''><BsCart2 className='navbar-cart-icon' /></a>
                <button className='primary-button'>Booking Now</button>
            </div>
            <div className='navbar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />

                {/* Here when icon is clicked useState sets openMenu true */}

            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
               
                {/* expands a box for menu and closes the menu again */}
                
                <Box sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar