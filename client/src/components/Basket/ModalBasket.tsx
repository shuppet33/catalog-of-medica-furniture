import {
    Box, Modal, Typography,IconButton
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    pt: 2,
    borderRadius: '0.75rem'
};

export function ModalBasket({open, onClick}) {
    return(
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text
                    </Typography>
                    <IconButton sx={{ marginLeft: 'auto' }} onClick={onClick}>
                        <CloseIcon />
                    </IconButton>
                </Box>




            </Box>
        </Modal>
    )
}