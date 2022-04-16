import Styled from "./global.module.css"
import { Pozadina } from "./components/pozadina"
import { Nav } from "./components/nav/nav"
import { Button } from "./components/button/button"
import { Section2 } from "./components/section2/section2"

export const App = () => {
    return (
        <>
            <Nav />
            <Pozadina>
                
                    <div>
                        <h1 className={Styled.naslov}>The 2019 Nike Chinese Collection</h1>
                        <p className={Styled.paragraf}>Two styles of graphics are used to represent this throughout the collection: The first is a traditional geometric quilt pattern that
                            is influenced by all 12 Chinese Zodiac symbols; the second is a mosaic pattern of the 12 symbols.</p>
                        <Button text={"LEARN MORE"} />
                    </div>
                    <div className={Styled.Trkac}>
                        <img className={Styled.SlikaTrkaca} src="./images/trkac.png" />
                    </div>
                
            </Pozadina>
            <Section2 />
        </>
    )
}