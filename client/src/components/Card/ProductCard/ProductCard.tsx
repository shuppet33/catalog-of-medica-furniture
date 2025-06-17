import {
    Button
} from '@mui/material';
import "./ProductCard.css";


export function ProductCard ({props, onClick}) {
    return (
        <div className={'product'}>
            <div className={'imageContainer'}>
                <img
                    src={props.imgUrl}
                    className={'productImage'}
                />
            </div>

            <h3 className={'title'}>{props.title}</h3>
            <p className={'price'}>{props.price} ₽</p>

            <Button onClick={onClick} sx={{width: '100%'}} variant="contained">Заказать</Button>
        </div>
    );
};
