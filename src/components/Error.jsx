// src/components/Error.jsx

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
const Error = ({ message }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};

export default Error;
