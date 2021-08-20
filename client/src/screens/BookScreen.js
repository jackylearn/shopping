import './BookScreen.css'
export default function BookScreen(props) {
    return (
        <div className='book-screen'>
            <div className='book-screen-left'>
                <div className='left-img'>
                    <img src="https://picsum.photos/id/15/300/200" alt="book img"></img>
                </div>
                <div className="left-info">
                    <p className='left-name'>Book 1</p>
                    <p className='left-author'>Author</p>
                    <p className='left-price'>Rent for 30 days: {`$1`}</p>
                    <p className='left-description'>Cras congue mi sed eros consectetur tincidunt. Cras mollis dolor ut mi condimentum, sit amet rutrum odio fringilla. Nam sollicitudin venenatis dui, ut porta justo mollis sit amet. Nunc eu velit risus. Proin eu lorem volutpat, facilisis dolor ac, porta tortor. Nam at nunc pharetra, finibus massa vitae, rhoncus erat. Nunc fermentum efficitur arcu nec feugiat. Quisque vel augue a mauris euismod sagittis nec at nunc. Nulla non elit sed ipsum porta sollicitudin. Etiam aliquam leo ac risus convallis, quis dictum augue feugiat. </p>
                </div>
            </div>
            <div className='book-screen-right'>
                <div className='right-buttons'>
                    <div className='btn add-cart-btn'>Add to Cart</div>
                    <div className='btn follow-btn'>Follow</div>
                </div>
            </div>
        </div>
    )
}