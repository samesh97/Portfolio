import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

import '../css/FullScreenDialog.css';

import {AiOutlineCloseCircle} from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'fixed',
        backgroundColor: '#6e44ff'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },

}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false)
        setTimeout(hander => {
            props.cancelled();

        },400);

    };

    const content = () => {
        if(props.type === "IMAGE")
        {
            return <img src={props.source} className="dialog_content"/>
        }
        return <video src={props.source} autoPlay loop muted className="dialog_content"/>

    };

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar className="dialog_toolbar">
                        <Typography variant="h6" className={classes.title}>
                            Preview
                        </Typography>

                        <AiOutlineCloseCircle onClick={handleClose} className="dialog_close"/>
                    </Toolbar>
                </AppBar>

                    <div className="d-flex justify-content-center container_dialog">
                        {
                            content()
                        }
                    </div>






            </Dialog>
        </div>
    );
}
