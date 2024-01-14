import Functions from "./Functions"
import Missions from "./Missions"
import img1 from "../images/1.svg"
import img2 from "../images/2.svg"
import img3 from "../images/3.svg"
import OfferCard from "./OfferCard"
import offer1 from "../images/offer1.svg"
import offer2 from "../images/offer2.svg"
import offer3 from "../images/offer3.svg"
import offer4 from "../images/offer4.svg"
import event from "../images/eventimg.svg"
import profile from "../images/profile.svg"
import man from "../images/man.svg"
import woman from "../images/woman.svg"
import line from "../images/line.svg"
import plant from "../images/plant.svg"
import bannar from "../images/banner.svg"


function HomePage() {
    return (
        <section className="px-5">
            <div className="banner m-1 ">
                <div className="head text-center">
                    Nous réunissons experts du monde entier et organisations en Afrique
                </div>
                <div className="d-md-flex align-items-center justify-content-between mt-5">
                    <div className="col-md-3 m-4 p-4">
                        <div className="sub-head">Organisations en Afrique</div>
                        <p className="txt">Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet?

                            Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
                    </div>
                    <img src={bannar} alt="banner" className="col-5" />
                    <div className="col-md-3 m-4 p-4">
                        <div className="sub-head">Experts</div>
                        <p className="txt">Vous êtes un professionnel expérimenté et vous planifiez de partir travailler en Afrique? Vous vous rendez souvent sur le continent africain pour des raisons professionnelles et vous souhaitez étendre votre réseau? Vous souhaitez partager votre expertise avec des organisations africaines sans vous déplacer?
                            PANDA est la plateforme de networking des experts pour la réalisation de leurs projets professionnels sur le continent africain! </p>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="head mb-4">Missions de PANDA</div>
                <div>
                    <Missions />
                </div>
            </div>

            <div>
                <div className="head my-5 pt-5">Fonctionnalités</div>
                <Functions />
            </div>

            <div className="mt-5 py-5">
                <img src={line} alt="line" />
                <div className="d-md-flex align-items-end">

                    <div className="head col-md-3">Découvrez les experts</div>
                    <div className="col-md-2"></div>
                    <div className="discover-text">“ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</div>
                </div>

                <div className="d-md-flex align-items-end">
                    <div className="col-md-3">
                        <div className="txt">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </div>
                        <button className="btnc">Voir tout</button>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="d-flex align-items-end mt-5">
                        <img src={img1} alt="1" className="mx-3" />
                        <img src={img3} alt="3" className="mx-3" />
                        <img src={img2} alt="2" className="mx-3" />
                    </div>
                </div>
            </div>
            <div className="mt-5 py-5">
                <div className="d-md-flex align-items-end">
                    <div className="discover-text">“PANDA nous donne accès aux meilleurs talents dans leur domaine d'activité et à de réelles perspectives de collaboration!  ”</div>
                    <div className="col-md-1"></div>
                    <div className="head col-md-4">Découvrez les organisations en Afrique</div>

                </div>

                <div className="d-md-flex align-items-end">

                    <div className="d-flex align-items-end mt-5">
                        <img src={img2} alt="2" className="mx-3" />
                        <img src={img3} alt="3" className="mx-3" />
                        <img src={img1} alt="1" className="mx-3" />

                    </div>
                    <div className="col-md-2"></div>

                    <div className="col-md-3">
                        <div className="txt">Trouvez les experts que vous recherchez, publiez vos offres d'emploi et d'autres contenus exclusifs sur votre organisation!</div>
                        <button className="btnc">Voir tout</button>
                    </div>
                </div>
            </div>

            {/* ----------------OFFER SECTION----------- */}
            <div style={{ marginTop: "7rem" }}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="col-md-3 head">Offres d'emploi</div>
                    <div className="d-flex">
                        <OfferCard head="Lead Software Engineer" image={offer1} />
                        <OfferCard head="Risk Analyst" image={offer2} />
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <div className="col-md-3">
                        <div className="txt">Publiez les offres d'emploi au sein de votre organisation auprès de notre communauté d'experts! Expert à la recherche d'un emploi en Afrique? Trouvez le job de vos rêves! </div>
                        <button className="btnc">Publier ou postuler à une offre d'emploi</button>
                    </div>
                    <div className="d-flex">
                        <OfferCard head="Financial Analyst" image={offer3} />
                        <OfferCard head="Data Engineer" image={offer4} />

                    </div>
                </div>
            </div>



            {/* -------------------event section--------------- */}
            <div style={{ marginTop: "9rem" }}>
                <img src={line} alt="line" />
                <div className="d-md-flex align-items-start mt-5">

                    <div className="col-md-3">
                        <div className="head">Evénements à venir</div>
                        <div className="txt">Publié par: Pablo Diahuno</div>
                        <div className="nav-list mt-5">Sortez votre carnet d'adresses! Restez informés de tous les événements à venir autour du business en Afrique organisés en Afrique ou à l'étranger.</div>
                        <button className="btnc">Publier ou voir les événements </button>

                    </div>
                    <div className="col-2"></div>
                    <div className="col-md-5">
                        <img src={event} alt="" />
                    </div>


                    <div className="txt col">
                        <div>L'événement: <span style={{ color: "var(--red)" }}>The Nancy party’s </span></div>
                        <div>Date: <span style={{ color: "var(--red)" }}>10/07/22 </span></div>
                        <div>Lieu:  <span style={{ color: "var(--red)" }}>Senegal</span></div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: "9rem" }}>
                <div className="d-md-flex align-items-start mt-5">
                    <div className="col-md-4">
                        <div className="head">Témoignages</div>
                        <div className="txt">Diaspora Member:</div>
                        <div className="txt2"> Artur Luison</div>
                        <div className="txt mt-3">Job Position:</div>
                        <div className="txt2"> Manager</div>
                        <div className="txt mt-5 pt-5 col-9" >“ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci. “</div>
                    </div>

                    <div className="col-md-5">
                        <img src={profile} alt="profile" />
                    </div>

                    <div className="txt col">
                        <img src={line} alt="line" />
                        <div className="txt bold mt-5">Very Nice Atmosphere and experience with “Welcome to PANDA”</div>
                        <div className="nav-list mt-3">Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.</div>

                        <div className="nav-list mt-3">Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.</div>

                    </div>
                </div>
            </div>

            <div style={{ marginTop: "9rem" }}>
                <div className="head">Les fondateurs</div>
                <div className="d-md-flex mt-5 justify-content-between align-items-end">
                    <div>
                        <img src={woman} alt="img" />
                        <div className="txt mt-3">Co-fondateur PANDA:
                        </div>
                        <div className="txt2">Sarah Walu Onya</div>
                    </div>
                    <div>
                        <img src={man} alt="img" />
                        <div className="txt mt-3">Co-fondateur PANDA:</div>
                        <div className="txt2">Abdoulaye Ba</div>
                    </div>
                    <div className="founder-box" style={{ fontSize: "13px" }}>
                        <div>
                            “ Sarah et Abdoulaye sont tous deux consultants et managers dans un groupe international de conseil en stratégie et management. Ils se sont rencontrés au Luxembourg et ont beaucoup échangé sur leur expérience commune dans l'entrepreneuriat. Tout au long de leurs discussions, une chose très claire est vite apparue : leur passion pour l'entrepreneuriat et leur amour de l'Afrique, le continent dont ils sont tous deux originaires. “

                        </div>
                        <div className="mt-4">
                            Ils sont alors convaincus qu'ils peuvent répondre à un besoin critique en Afrique et avoir un réel impact en réunissant des experts de premier plan du monde entier pour collaborer avec des acteurs africains sur des projets visant à faire croître l'écosystème de l'innovation en Afrique.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "8rem" }} className="head2 text-center p-5">
                <p>

                    “ Notre objectif est de capturer et partager les connaissances, les expertises et les réseaux afin de créer des opportunités illimitées, que ce soit pour les acteurs africains à la recherche des meilleures talents pour développer leurs activités ou pour les experts du monde entier qui souhaitent lancer des projets innovants en Afrique. “
                </p>
                <div className="txt2 text-end">Sarah et Abdoulaye</div>
            </div>

            {/* ------------ACTIVITIES------------- */}
            <div style={{ marginTop: "5rem" }}>
                <div className="head col-9">Top 5 des domaines d’activités porteurs en Afrique </div>

                <div className="d-md-flex mt-5">
                    <div>
                        <img src={plant} alt="" />
                    </div>
                    <div className="col-3"></div>
                    <div>
                        <img src={line} alt="line" className="mb-5" />
                        <ul className="head2">
                            <li>Les énergies renouvelables</li>
                            <li style={{ color: "var(--red)" }}>L'agro-alimentaire</li>
                            <li>Les technologies</li>
                            <li>Le e-commerce</li>
                            <li>Les solutions de paiement</li>
                        </ul>
                        <button className="btnc">Suivant</button>
                    </div>
                </div>
            </div>


            <hr style={{ marginTop: "8rem" }} />
            <div className="head2 text-center p-5" style={{ margin: "2rem 10rem" }}>
                Rejoignez notre communauté et aidez-nous à construire la première plateforme de networking en ligne à destination du marché africain!
            </div>
            <div className="d-flex justify-content-center ">
                <button className="btnc mx-4">Se connecter</button>
                <button className="btnc">Créer un compte</button>
            </div>

            <footer>
                <div className="d-md-flex m-5">
                    <div className="col-md-3">
                        <div className="head3">Page d'accueil </div>
                        <ul className="nav-list">
                            <li>Missions de PANDA</li>
                            <li>Fonctionnalités</li>
                            <li>Découvrez les experts</li>
                            <li>Découvrez les organisations en Afrique</li>
                            <li>Offres d'emploi</li>
                            <li>Evénements à venir</li>
                            <li>Témoignages</li>
                            <li>Les fondateurs</li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <div className="head3">pour les EXPERTS</div>
                        <ul className="nav-list">
                            <li>Découvrez les organisations en Afrique</li>
                            <li>Offres d'emploi</li>
                            <li>Travel Map</li>
                            <li>Evénements à venir</li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <div className="head3">pour les organisations en Afrique</div>
                        <ul className="nav-list">
                            <li>Evénements à venir</li>
                            <li>Témoignages</li>
                            <li>Les fondateurs</li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <div className="head3">Contact </div>
                        <ul className="nav-list">
                            <li>Nous contacter</li>
                        </ul>

                    </div>
                </div>
            </footer>
        </section>
    )
}

export default HomePage