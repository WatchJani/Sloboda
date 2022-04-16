import Styled from "./nav.module.css"

export const Nav = () => {
    return (
        <nav>
            <div className={Styled.Container}>
                <div>
                    <h1 className={Styled.Naslov}>ATLETSKI KLUB SLOBODA</h1>
                    {/* <p className={Styled.Grad}>Novi Grad</p> */}
                </div>
                <div className={Styled.menu}>
                    <p>o nama</p>
                    <p>o nama</p>
                    <p>o nama</p>
                </div>
            </div>
        </nav>
    )
}