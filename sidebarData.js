import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export const sidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: 'Mailbox',
        icon: <EmailIcon />,
        link: "/mailbox",
    },
    {
        title: 'Analytics',
        icon: <AutoGraphIcon />,
        link: "/analytics",
    },
    {
        title: 'Dashboard',
        icon: <SpaceDashboardIcon />,
        link: "/dashboard",
    },
    {
        title: 'Friends',
        icon: <Diversity3Icon />,
        link: "/friends",
    },
    {
        title: 'Pictures',
        icon: <CropOriginalIcon />,
        link: "/pictures",
    },

]




