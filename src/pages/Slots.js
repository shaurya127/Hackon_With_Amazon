import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { slotbyshop } from "../api/queries";
import { createSlot } from "../api/mutations";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = useState(false);
  const [slots, setslots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slotcount, setslotcount] = useState(0);

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      if (slots.length === 0) {
        let slotdetails = {
          startTime: props.starttime,
          shopID: props.shopid,
          bookedcount: 0,
        };
        const slotscreated = await API.graphql(
          graphqlOperation(createSlot, { input: slotdetails })
        );
        const slotsdo = slotscreated.data;
        console.log(slotsdo);
      }
    } catch (err) {
      console.log("error creating slots:", err);
    }
  };

  useEffect(() => {
    fetchslots();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchslots = async () => {
    try {
      setLoading(true);
      const { data } = await API.graphql({
        query: slotbyshop,
        variables: { shopID: props.shopid },
      });

      const slots = data.slotbyshop.items;
      setslots(slots);
      setLoading(false);
      //   console.log(slots);
      if (slots.length === 0) {
        handleSubmit();
      } else {
        slots.map((slot) => {
          if (slot.startTime === props.starttime) {
            setslotcount(slot.bookedcount);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Book Slot {props.slotno}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Slot time- {props.starttime} to {props.endtime}
          <div>Slots booked today- {slotcount}</div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              <div>
                  SHOP NAME- {props.name}
                  <br/>
                  Shop Location- {props.location}
              </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
