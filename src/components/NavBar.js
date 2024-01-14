function NavBar() {
    return (
        <div className="text-center p-5">
            <div className="d-md-flex justify-content-center">

                <div style={{ fontSize: "40px" }}> Bienvenue sur PANDA</div>
                <div className="d-md-flex align-items-center" style={{textDecoration:"underline"}}>
                    <div>Créer un compte</div>
                    <div>Se connecter</div>
                </div>
            </div>
            <section className="d-md-flex justify-content-around mt-5 nav-list" style={{ listStyle: "none" }}>
                <li> missions de pANDA</li>
                <li> Fonctionnalités</li>
                <li>experts</li>
                <li>Organisations en Afrique</li>
                <li>Offres d'emploi</li>    
                <li>Evénements à venir</li>
                <li> Témoignages</li>
                <li>Fondateurs</li>
            </section>
        </div>
    )
}
export default NavBar