function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    const defImg = "https://i.postimg.cc/Gpx9qtpj/noImage.png";

    const handleImageError = (event) => {
        event.target.src = defImg;
    }

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} onError={handleImageError} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title"><b>{name}</b></span>
                {description ? <p>{description}</p> : <p>Описание отсутствует</p>}
            </div>
            <div className="card-action">
                <button 
                    class="btn" 
                    onClick={() => 
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }>
                    Купить</button>
                <span className="right">{price} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };