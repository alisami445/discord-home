import React from 'react'
import "./contenu.css"
import photo2 from "../photo2.svg"
import photo3 from "../photo3.svg"
import photobig from "../photobig.svg"
function Contenu() {
    return (
        <>
        {/*about 1*/}
        <div className="container" style={{height:"100vh"}}>
            <div className="container-in">
                <img src={photo2} alt="erreur" style={{marginTop:"125px" , width:"50%"}}/>
                <div className="decription-te">
                    <h2 className="h2-decription">
                    Un lieu uniquement sur invitation 
                    avec plein de place pour discuter.
                    </h2>
                    <div className="p-decription">
                        <p>Les serveurs Discord sont organisés 
                            en salons axés sur des sujets où 
                            vous pouvez collaborer, partager et 
                            simplement discuter de votre journée 
                            sans encombrer un groupe de discussion.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container" style={{height:"100vh"}} >
            
            <div className="container-in">
            <div className="decription-te">
                    <h2 className="h2-decription">
                    Là où il est facile de passer du temps ensemble
                    </h2>
                    <div className="p-decription">
                        <p>Prends place dans un salon vocal quand tu es libre. Les amis 
                            dans ton serveur peuvent voir que tu es là et immédiatement 
                            te rejoindre sans avoir besoin d'appeler..</p>
                    </div>
                </div>
                <img src={photo3} alt="erreur" style={{marginTop:"95px" , width:"50%"}}/>
            </div>
        </div>


        <div className="container-ty" style={{height:"100vh"}}>
            <div className="texttt">
                <h2>Une technologie fiable pour garder le lien</h2>
            </div>
            <div className="in-textt">
                <p className="aa">Grâce aux chats vocaux et vidéo à faible latence, les interlocuteurs ont l'impression d'être dans la même pièce. Fais un petit coucou par vidéo, regarde 
                    tes amis streamer leurs jeux, ou profitez du partage d'écran pour faire une session de dessin ensemble.</p>
            </div>
            <center>
            <img src={photobig} alt="erreur"/>
            </center>
        </div>
        </>

    )
}

export default Contenu
