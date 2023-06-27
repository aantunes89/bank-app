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
import { Grid } from "@mui/material";
import { TransactionsTypes } from "../../utils/TransactionsTypes.enum";

interface AccountProps {
  details: AccountDetails;
  getAccountDetails?: () => AccountDetails;
}

const Account = (props: AccountProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
    // retornar callback ativar estado para buscar transactions por id
  };

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
          <ListItemButton sx={{ pl: 4 }}>
            {props.details.transactions?.map(({ ammount, type, balanceId }) => (
              <ListItemIcon key={balanceId}>
                <Grid container>
                  <MonetizationOnSharpIcon
                    sx={{
                      marginRight: ".4rem",
                      color:
                        type === TransactionsTypes.CREDIT ? "green" : "red",
                    }}
                  />
                  <ListItemText primary={`${type} - ${ammount}`} />
                </Grid>
              </ListItemIcon>
            ))}
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default Account;
