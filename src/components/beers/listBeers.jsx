
function ListBeers({beers}) {

    let cards = beers
    .map((beer, index) => {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100">
                    <img className="card-img-top mx-auto mt-2" src={beer.image_url} alt="" style={{ width: '60px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{beer.name}</h4>
                        <p className="card-text">{beer.tagline}</p>
                        <p className="card-text">{beer.abv}%</p>
                    </div>
                </div>
            </div>
        )
    }
    );
    return (
        <div className="row">
            {cards}
        </div>);
}

export default ListBeers;