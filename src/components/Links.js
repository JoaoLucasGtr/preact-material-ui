import { route } from 'preact-router';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const Links = (props) => {
  return (
    <List color="inherit">
      {props.routes?.map(r =>
        <ListItem button onClick={() => route(r.route)}>
          <ListItemIcon>
            {r.icon()}
          </ListItemIcon>
          <ListItemText primary={r.label} />
        </ListItem>
      )}
    </List>
  );
}

export default Links;