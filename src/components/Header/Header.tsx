import React from 'react';
import {Box, Typography} from "@mui/material";

interface HeaderProps {
  todoCount: number
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <Box textAlign="left">
      <Typography className="header"
        variant="h1"
        component="h1"
        gutterBottom
      >
        Todo List: {todoCount}
      </Typography>
    </Box>
  );
};

