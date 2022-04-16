import Styled from "./nav.module.css"

export const Nav = () => {
    return (
        <nav>
            <div className={Styled.Container}>
                <div>
                    <img className={Styled.logo} src="./images/logo.svg" alt="logo"/>
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