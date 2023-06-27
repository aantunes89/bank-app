import React, { useState } from "react";
import { AccountDetails } from "../../types/AccountDetails";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { TransactionsTypes } from "../../utils/TransactionsTypes.enum";

interface AccountProps {
  details: AccountDetails;
}

const Account = (props: AccountProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen(!open);

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      subheader=""
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText
          primary={`Client: ${props.details.name}`}
          secondary={`Balance: $ ${props.details.balance}`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, display: "block" }}>
            {props.details.transactions?.map(({ ammount, type, id }) => (
              <ListItemIcon key={id} sx={{ display: "block", width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <MonetizationOnSharpIcon
                    sx={{
                      marginRight: ".4rem",
                      color:
                        type === TransactionsTypes.CREDIT ? "green" : "red",
                    }}
                  />
                  <ListItemText
                    primary={`${type.toLowerCase()} - ${ammount}`}
                  />
                </Box>
              </ListItemIcon>
            ))}
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default Account;
