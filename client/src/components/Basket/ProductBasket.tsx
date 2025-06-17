import {Box, IconButton, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export function ProductBasket() {
    return(
        <Box sx={{ maxHeight: '50vh', overflowY: 'auto', mb: 3 }}>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                mb: 2,
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '0.5rem'
            }}>
                <Box sx={{ width: 80, height: 80 }}>
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Товар"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '0.25rem'
                        }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" fontWeight="bold">
                        Название товара
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Размер: M
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="body1" fontWeight="bold">
                        2 499 ₽
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider' }}>
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography>1</Typography>
                        <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider' }}>
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                <IconButton>
                    <DeleteIcon color="error" />
                </IconButton>
            </Box>
        </Box>
    )
}