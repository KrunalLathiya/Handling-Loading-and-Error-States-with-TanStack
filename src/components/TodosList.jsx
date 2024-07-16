// src/components/TodosList.jsx

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// eslint-disable-next-line react/prop-types
const TodosList = ({ todos }) => {
  return (
    <Box padding={2}>
      <Typography variant="h4">Todos</Typography>
      <List>
        {
          // eslint-disable-next-line react/prop-types
          todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText
                primary={todo.title}
                secondary={todo.completed ? "Completed" : "Not Completed"}
              />
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
};

export default TodosList;
