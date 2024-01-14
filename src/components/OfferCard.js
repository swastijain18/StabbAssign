
function OfferCard(props){
    return(
        <section>
            <div className="cardBox text-center">
                <div className="head2">{props.head}</div>
                <div className="txt mb-3" style={{color:"var(--red)"}}>Madagascar</div>
                <div className="d-flex align-items-center">
                    <div className="col-4 txt">Full-time</div>
                    <div className="col-4">
                        <img src={props.image} alt="image" />
                    </div>
                    <div className="col-4" style={{fontSize:"11px"}}>1 Day ago</div>
                </div>
                <button className="btnc px-5 mt-5">Voir</button>
            </div>
        </section>
    )
}

export default OfferCard