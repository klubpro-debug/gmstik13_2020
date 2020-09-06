import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactsIcon from '@material-ui/icons/Contacts';
import PanToolIcon from '@material-ui/icons/PanTool';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Beranda" icon={<HomeIcon />} />
      <BottomNavigationAction label="Survei" icon={<AssignmentIcon />} />
      <BottomNavigationAction label="Kontak" icon={<ContactsIcon />} />
      <BottomNavigationAction label="Cuci Tangan" icon={<PanToolIcon />} />
    </BottomNavigation>
  );
}
