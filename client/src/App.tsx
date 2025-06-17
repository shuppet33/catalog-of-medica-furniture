import {Container, Grid, IconButton, Typography, CircularProgress, Box} from '@mui/material';
import {useState, useEffect} from "react";
import {ProductCard} from "./components/Card/ProductCard/ProductCard.tsx";
import {Header} from "./components/Layout/Header/Header.tsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {ModalBasket} from "./components/Basket/ModalBasket.tsx";
import {fakeFetchProduct, fakeFetchBasket} from './api.js';


function App() {
    const [openBasket, setOpenBasket] = useState(false)

    const [loading, setLoading] = useState(false)
    const [basket, setBasket] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function preload() {
            setLoading(prev => !prev)
            const {result} = await fakeFetchProduct()
            const productsBasket = await fakeFetchBasket()
            setProducts(result)
            setBasket(productsBasket)
            setLoading(prev => !prev)
        }
        preload()
    }, [])

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
            }}>
                <CircularProgress sx={{
                }}/>
            </Box>
        )
    }

    function addProductBasket(value) {
        return setBasket(prev => ([...prev, products.find(i => i.id === value)]))
    }


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

                    {products?.map(product => {
                        return (
                            <Grid size={4}>
                                <ProductCard props={product} onClick={() => addProductBasket(product.id)}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

            <ModalBasket props={basket} open={openBasket} onClick={() => setOpenBasket(!openBasket)}/>

        </div>
    )
}

export default App
