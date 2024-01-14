const mission = [
    {
        "id": "01",
        "name": "Networking",
        "para": "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux."
    },
    {
        "id": "02",
        "name": "Partage",
        "para": "Promouvoir le partage de connaissances et d’expertises. "
    },
    {
        "id": "03",
        "name": "Recrutement",
        "para": "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés."
    },
    {
        "id": "04",
        "name": "Collaborations",
        "para": " Créer des opportunités de collaborations en Afrique."
    },
    {
        "id": "05",
        "name": "Evénements",
        "para": "Augmenter la visibilité des évenements autour du “Business in Africa”."
    }

]

function Missions() {
    return (
        <div className="d-md-flex justify-content-evenly">
            {
                mission.map((e) => {
                    return (
                        <section className="p-3 text-center box mx-1">
                            <div>{e.id}</div>
                            <div className="head2">{e.name}</div>
                            <div className="nav-list">{e.para}</div>
                            <p></p>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Missions