import React, { Fragment } from 'react';
import { Typography, IconButton, Divider, Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStyles from './styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ProductCard = ({
	loading,
	title,
	isLast,
	price,
	image,
	id,
	description,
	category,
	rating,
	onIncrament,
	onDecrament
}) => {
	const classes = useStyles();

	return (
		<div className={classes.productCard}>
			<div className={classes.productCardFlex}>
				<div className={classes.informationContainer}>
					<div className={classes.info}>
						{loading ? (
							<Skeleton variant="rect" width={65} height={92} style={{ marginRight: 20 }} />
						) : (
							<img className={classes.img} src={image} alt={title} />
						)}

						<div className={classes.details}>
							<Typography variant="subtitle2">
								{loading ? (
									<Skeleton variant="text" width={50} height={20} />
								) : (
									<p className={`${classes.title} ${classes.detailMargin}`}>{title}</p>
								)}
							</Typography>
							{loading ? (
								<Skeleton variant="text" width={80} height={20} />
							) : (
								<Fragment>
									<p className={classes.detailMargin}>{price} Kr</p>
								</Fragment>
							)}
						</div>
					</div>
				</div>

				<div className={classes.buttons}>
					<IconButton aria-label="plus" onClick={onIncrament}>
						<AddShoppingCartIcon fontSize="large" className={classes.button} />
					</IconButton>
					<IconButton aria-label="minus" onClick={onDecrament}>
						<RemoveShoppingCartIcon fontSize="large" className={classes.button} />
					</IconButton>
				</div>
			</div>

			{!isLast && (
				<div className={classes.divider}>
					<Divider variant="middle" />
				</div>
			)}
		</div>
	);
};

export default ProductCard;
