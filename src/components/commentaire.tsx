import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Comment = ({ popup = false, closePopup, victory = false }) => {
  const handleClose = () => {
    closePopup();
  };

  return (
    <Dialog
      open={popup}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Fin de la party !"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {victory
            ? "VICTOIRE ! Vous avez finis le jeu ! Veux tu rejouer ?"
            : "DEFAITE !  Réessayez ? "}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Rejouer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Comment;



