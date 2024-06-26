import { BasketItem } from "./basketItem";

function BasketList(props) {
    const { 
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
       <main className="basket-list">
            <ul className="collection">
                <li className="orange accent-2 collection-item active">Корзина</li>
                {order.length ? (
                    order.map((item) => (
                        <BasketItem 
                            key={item.id}
                            removeFromBasket={removeFromBasket}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                            {...item}
                        />
                    ))
                ) : (
                    <li className="collection-item">Корзина пуста</li>
                )}
                <li className="orange accent-2 collection-item active">
                    Общая стоимость заказа: {totalPrice} руб.
                </li>
                <i className="material-icons basket-clear" onClick={handleBasketShow}>
                    clear
                </i>
            </ul>
       </main>
    );
}

export { BasketList };