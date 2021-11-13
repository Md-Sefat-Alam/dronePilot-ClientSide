import './rating.css'
// get rating stars
const starFill = {
    color: 'orange'
}
const getRatingStars = (rate) => {
    const rateStars = parseInt(rate);
    const getFractions = parseInt((rate % rateStars) * 10);
    switch (rateStars) {
        case 0:
            return;
        case 1:
            if (getFractions > 4) {
                return (
                    <p className='rating_rate'>
                        <i className='fas fa-star'></i> <i className='fas fa-star-half-alt'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i>
                    </p>
                )
            }
            return (
                <p className='rating_rate'>
                    <i className='fas fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i>
                </p>
            )

        // <i style={starFill} className='far fa-star'></i>
        case 2:
            if (getFractions > 4) {
                return (
                    <p className='rating_rate'>
                        <i className='fas fa-star'></i><i className='fas fa-star'></i> <i className='fas fa-star-half-alt'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i>
                    </p>
                )
            }
            return (
                <p className='rating_rate'>
                    <i className='fas fa-star'></i><i className='fas fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i>
                </p>
            )
        case 3:
            if (getFractions > 4) {
                return (
                    <p className='rating_rate'>
                        <i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i> <i className='fas fa-star-half-alt'></i><i style={starFill} className='far fa-star'></i>
                    </p>
                )
            }
            return (
                <p className='rating_rate'>
                    <i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i style={starFill} className='far fa-star'></i><i style={starFill} className='far fa-star'></i>
                </p>
            )
        case 4:
            if (getFractions > 4) {
                return (
                    <p className='rating_rate'>
                        <i className='fas fa-star'><i className='fas fa-star'></i><i className='fas fa-star'></i></i><i className='fas fa-star'></i> <i className='fas fa-star-half-alt'></i>
                    </p>
                )
            }
            return (
                <p className='rating_rate'>
                    <i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i style={starFill} className='far fa-star'></i>
                </p>
            )
        case 5:
            return (
                <p className='rating_rate'>
                    <i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i>
                </p>
            )
        default:
    };
}

export { getRatingStars };