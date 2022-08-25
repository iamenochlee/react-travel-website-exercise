import locationIcon from '../assets/location.svg';

function Main(props) {

  return (
    <main className="Main">
            <img className='image' src={props.card.imageUrl} alt="img" />
            <div className='main-content'>
                <div className='location'>
                  <div className='flex'>
                    <img src={locationIcon} />
                    <h2>{props.card.location}</h2>
                  </div>
                  <a href={props.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>{props.card.title}</h3>
                <small>${props.card.startDate} - ${props.card.endDate}</small>
                <p>{props.card.description}</p>
            </div>
    </main>
  )
}

export default Main
