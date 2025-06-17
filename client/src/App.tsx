import {Container, Grid, IconButton, Typography} from '@mui/material';
import {useState} from "react";
import {ProductCard} from "./components/Card/ProductCard/ProductCard.tsx";
import {Header} from "./components/Layout/Header/Header.tsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {ModalBasket} from "./components/Basket/ModalBasket.tsx";


const products = [
    {id: 1, title: 'Cat', price: 1000},
    {id: 2, title: 'Dog', price: 2000},
    {id: 3, title: 'Pip', price: 3000},
]


function App() {

    const [openBasket, setOpenBasket] = useState(false)


    return (
        <div className={'App'}>

            <Header>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Каталог
                </Typography>

                <IconButton>
                    <FavoriteIcon/>
                </IconButton>

                <IconButton onClick={() => setOpenBasket(!openBasket)}>
                    <ShoppingBasketIcon/>
                </IconButton>

            </Header>

            <Container sx={{marginTop: '1.5rem'}}>
                <Grid container spacing={2}>

                    {products.map(product => {
                        return (
                            <Grid size={4}>
                                <ProductCard props={product} onClick={() => console.log('aaa')}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

            <ModalBasket open={openBasket} onClick={() => setOpenBasket(!openBasket)}/>

        </div>
    )
}

export default App
