import { useState, useEffect, useContext } from "react";
import { Grid, CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";


const GridProducts = () => {

    const [limit, setLimit] = useState(4)

    let navigate = useNavigate()
    const products = useContext(ProductContext)

    //Handling load more
    const getMoreData = (e) => {
        e.preventDefault()
        setLimit(limit+4)
        if(limit >= 20){
            window.alert('No more products left')
        }
    }

    return (
        <>  
            <Grid container spacing={2} className='grid-container'>
                {products.slice(0, limit).map((product) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} className="grid-item" 
                    key={product.id}>
                        <Card className='grid-card'>
                            <CardMedia
                                component="img"
                                className="grid-img"
                                image={product.image}
                                alt="product image"
                                onClick={() => navigate(`/details/${product.id}`) }
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.title.slice(0,15)}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    ${product.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add to Cart</Button>
                                <Button size="small">Add to WishList</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}                
            </Grid>
            <div className="pagination">
                <Button variant="outlined" color="primary" className='pagination' onClick={getMoreData}>
                    Load More
                </Button>
            </div>
        </>
    )
}

export default GridProducts