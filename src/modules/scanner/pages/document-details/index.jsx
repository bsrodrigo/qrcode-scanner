import React, { useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  CloseOutlined as CloseIcon,
  CheckOutlined as CheckIcon,
} from "@material-ui/icons";

import Scanner from "../../components/scanner";
import InputScanner from "../../components/input-scanner";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 24,
  },
  card: {
    borderRadius: "24px !important",
  },
  content: {
    padding: "36px 24px 64px 24px !important",
  },
  buttonErrorBox: {
    "& .MuiButtonBase-root": {
      background: "#e2172e",
      color: "#fff",
      width: 54,
      height: 54,
      border: "4px solid #f0f0f0",
      boxShadow: "0px -1px 0px 0px #00000082",
      marginRight: 40,
      transition: ".3s",

      "&:hover": {
        width: 64,
        height: 64,
        background: "#bb0e21",
        transition: ".3s",
      },
    },
  },
  buttonSuccessBox: {
    "& .MuiButtonBase-root": {
      background: "#17e283",
      color: "#fff",
      width: 54,
      height: 54,
      border: "4px solid #f0f0f0",
      boxShadow: "0px -1px 0px 0px #00000082",
      transition: ".3s",

      "&:hover": {
        width: 64,
        height: 64,
        background: "#10b367",
        transition: ".3s",
      },
    },
  },
  actionBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 64px",
    marginTop: -27,
    height: 64,
  },
}));

const DocumentDetails = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setValue(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <Container className={classes.root} maxWidth="sm">
      <InputScanner
        open={open}
        loading={loading}
        onError={handleError}
        onScan={handleScan}
      />
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            NÚMERO DA REQUISIÇÃO
          </Typography>
          <Typography variant="h5" component="div">
            001548
          </Typography>
          <Typography variant="body1" color="text.secondary">
            2015 - Algum material aqui
          </Typography>
          <Typography
            variant="overline"
            sx={{ fontWeight: 700 }}
            color="text.secondary"
          >
            Solicitante
          </Typography>
          <Typography variant="body1">Joãozinho da Silva Sauro</Typography>
        </CardContent>
      </Card>
      <div className={classes.actionBox}>
        <div className={classes.buttonErrorBox}>
          <IconButton
            className={classes.buttonError}
            onClick={console.log("teste")}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.buttonSuccessBox}>
          <IconButton onClick={console.log("teste")}>
            <CheckIcon />
          </IconButton>
        </div>
      </div>
    </Container>
  );
};

export default DocumentDetails;
