import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { incramentProduct, decramentProduct } from '../../../reduxStore/actions/cartActions';

const Products = ({ products, loading, error, onIncrament, onDecrament }) => {
	const classes = useStyles();

	const renderProductCards = () => {
		if (loading) return [1, 2, 3, 4, 5].map((d) => <ProductCard loading={loading} key={d} />);

		const array = products.map((item) => {
			return (
				<ProductCard
					{...item}
					loading={loading}
					key={item.id}
					onIncrament={() => onIncrament(item)}
					onDecrament={() => onDecrament(item)}
				/>
			);
		});

		return array;
	};

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					<Typography variant="h1">Välj varor</Typography>

					<Grid container spacing={2}>
						<Grid item xs={12}>
							{renderProductCards()}
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { items, loading, error } = state.products;

	return { products: items, loading, error };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrament: (data) => dispatch(incramentProduct(data)),
		onDecrament: (data) => dispatch(decramentProduct(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
