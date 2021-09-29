import React, { useState, useMemo } from "react";

import {
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  CropFree as CropFreeIcon,
  InsertDriveFileOutlined as FileIcon,
  CloseOutlined as CloseIcon,
} from "@material-ui/icons";

import Scanner from "../scanner";

const useStyles = makeStyles({
  root: {
    paddingTop: 24,

    "& .MuiOutlinedInput-root": {
      "& .MuiSvgIcon-root": {
        color: "#908f8f",
      },
    },
  },
});

const InputScanner = ({ onError, onScan, loading, onClick }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleScan = (data) => {
    onScan(data);
    if (data) {
      setValue(data);
      setOpen(false);
    }
  };

  return (
    <div className={classes.root} maxWidth="lg">
      <TextField
        label="Código do documento"
        sx={{ m: 1, width: "100%", margin: "0 0 24px 0" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          startAdornment: <FileIcon />,
          endAdornment: loading ? (
            <CircularProgress size={20} />
          ) : value ? (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={() => setValue("")}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ) : (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={() => {
                  const constraints = {
                    video: true,
                    audio: false,
                  };
                  if (navigator.mediaDevices) {
                    navigator.mediaDevices
                      .getUserMedia(constraints)
                      .then((stream) => {
                        alert(stream);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  }
                  setOpen(true);
                }}
              >
                <CropFreeIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Scanner
        open={open}
        onClose={() => setOpen(false)}
        onError={onError}
        onScan={handleScan}
      />
    </div>
  );
};

export default InputScanner;
