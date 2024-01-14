
import star from "../images/star.svg"
import map from "../images/map.svg"

const functions = [
    {
        "name": "Sélection de profils",
        "para": "Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux! "
    },
    {
        "name": " Publication",
        "para": "Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée ! "
    },
    {
        "name": "TRAVEL MAP",
        "para": "Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! "
    },
    {
        "name": "Filtres & recherche avancée",
        "para": "Ciblez vos recherches par secteur d'activité, pays et plus encore. "
    },
    {
        "name": "NOTIFICATIONS",
        "para": "Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications."
    }

]

function Functions() {
    return (
        <div className="d-md-flex">
            <div className="d-md-flex flex-wrap">
            {
                functions.map((e => {
                    return(
                        <section className="p-3 text-center box2 m-2">
                            <img src={star} alt="star" className="my-3"/>
                            <p className="head3">{e.name}</p>
                            <div className="nav-list">{e.para}</div>
                            <p></p>
                        </section>
                    )
                }))
            } 
            </div>
            
            <div className="text-center">
                <img src={map} alt="" />
                <button type="submit" className="btnc">Explorer la Travel Map</button>
            </div>
        </div>
    )
}

export default Functions