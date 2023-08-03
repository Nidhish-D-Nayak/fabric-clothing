import { useDispatch } from "react-redux";

import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from "../../store/cart/cart.reducer";

import { CartItemType } from "../../store/cart/cart.types";
import "./checkout-items.styles";
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Price,
	Quantity,
	RemoveButton,
	Value,
} from "./checkout-items.styles";

type CartItemCheckoutType = {
	cartItem: CartItemType;
};

const CheckoutItems: React.FC<CartItemCheckoutType> = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, price, quantity } = cartItem;

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Price>
				<span>₹</span>
				{price}
			</Price>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItems;
