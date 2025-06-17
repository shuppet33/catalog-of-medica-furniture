import {Box, Modal, Typography,IconButton, Button} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import {ProductBasket} from "./ProductBasket.tsx";


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

export function ModalBasket({props, open, onClick}) {
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
                    alignItems: 'center',
                    mb: 3
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Корзина
                    </Typography>
                    <IconButton sx={{ marginLeft: 'auto' }} onClick={onClick}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Карточки товаров в корзине */}
                <ProductBasket / >

                {/* Итого и кнопка оформления */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    pt: 2
                }}>
                    <Typography variant="h6">
                        Итого: 2 499 ₽
                    </Typography>
                    <Button variant="contained" size="large" sx={{ minWidth: 200 }}>
                        Оформить заказ
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}