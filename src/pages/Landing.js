import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="logo" className="logo" />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nam expedita consequatur sint reprehenderit itaque beatae vel
            accusantium quia! Dignissimos nisi nobis autem quia recusandae totam
            nihil! Assumenda, mollitia excepturi?
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job" className="img main-img" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
`

export default Landing
