import React, { Fragment, useEffect } from "react";
import clsx from "clsx";
import QrReader from "react-qr-reader";

import { CloseOutlined as CloseIcon } from "@material-ui/icons";

import { Drawer, Modal, Fade, IconButton, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    background: "unset",

    "& .MuiBackdrop-root": {
      backgroundColor: "unset",
    },
  },
  paper: {
    position: "relative",
    width: "70%",
    maxWidth: 490,
    maxHeight: "100%",
    overflowY: "auto",
    backgroundColor: "white",
    border: "none",
    outline: 0,
    boxShadow: "0px 4px 17px 1px #0000005c",
    padding: "30px",
    borderRadius: "24px 24px 0 0",
    "@media (max-width:420px)": {
      padding: 20,
    },

    "@media (max-width:959px)": {
      width: "80vw",
    },

    "@media (max-width:767px)": {
      height: "auto",
      marginBottom: "0",
      overflowY: "auto",
    },

    "& section": {
      borderRadius: 24,
    },
  },
  closeButtonShow: {
    display: "block",
    opacity: "1 !important",
    transition: "1s",
  },
  closeButtonBox: {
    opacity: 0,
    transition: "3s",

    "& .MuiButtonBase-root": {
      background: "#0009",
      color: "#fff",
      position: "fixed",
      width: 54,
      height: 54,
      left: "calc(50vw - 21px)",
      bottom: 67,
      zIndex: 1,
      animation: "$jump .5s linear alternate infinite",
      "&:hover": {
        background: "#000",
      },
    },
  },
  show: {
    display: "block",
    opacity: "1 !important",
    transition: "3s",
  },
  "@keyframes jump": {
    "0%": {
      bottom: 60,
    },
    "100%": {
      bottom: 67,
    },
  },
}));

const Scanner = ({ open, onClose, onError, onScan }) => {
  const classes = useStyles();

  useEffect(() => {
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedias) {
    //   console.log("Let's get this party started");
    // }
    // navigator.mediaDevices.getUserMedias({ video: true });
  });

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      BackdropProps={{
        timeout: 3000,
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div className={classes.paper}>
          {open && (
            <Fragment>
              <QrReader
                onError={onError}
                onScan={onScan}
                style={{ width: "100%" }}
              />
              <div
                className={clsx(
                  classes.closeButtonBox,
                  open && classes.closeButtonShow
                )}
              >
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </div>
            </Fragment>
          )}
        </div>
      </Slide>
    </Modal>
  );
};

export default Scanner;
