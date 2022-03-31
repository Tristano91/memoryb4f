import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Commentaire } from "../app/types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Comment = ({ open, closePopup, victory }: Commentaire) => {

  console.log('Comment open', open);

  const handleClose = () => {
    closePopup();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{'Résultat :'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {victory ? (
            <span>
              {' '}
              Bien joué, vous avez trouvé toutes les paires du jeux. Plutot
              rapide !{' '}
            </span>
          ) : (
            <span>
              {' '}
              Vous n'avez pas réussi à finir à temps.. C'est dommage. <br />{' '}
              Voulez vous réessayer ?{' '}
            </span>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Rejouer ?</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Comment;
