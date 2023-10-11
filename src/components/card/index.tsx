import CardStyles from './styles'

const Card = () => {

  return (
    <CardStyles>
        <div className="card">
            <header className="card__header">
                <h2>Card Header</h2>
            </header>
            <div className="card__body">
                <p>Card body, Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae quam facilis fugit blanditiis iure, possimus velit dolores soluta sed explicabo vero provident laudantium dicta aliquid minus, in eum iste?</p>
                <a href="https://google.co.uk/" target="_blank" rel="noreferrer"  className="card__link">View more</a>
            </div>
        </div>
    </CardStyles>
  )
}

export default Card