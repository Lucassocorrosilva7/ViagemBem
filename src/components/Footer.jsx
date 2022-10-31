import  './FooterStyles.css'

const Footer = () => {
  return (
    <footer className='footer'>
<div className="top">
    <div>
        <h1>ViageBem</h1>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div>
        <a href="#"><i className='fa-brands fa-facebook-square'></i></a>
        <a href="#"><i className='fa-brands fa-instagram-square'></i></a>
        <a href="#"><i className='fa-brands fa-behance-square'></i></a>
        <a href="#"><i className='fa-brands fa-twitter-square'></i></a>
    </div>
</div>
<div className="bottom">
    <div>
        <h4>Projetos</h4>
        <a href="/">Licenças</a>
        <a href="/">Status</a>
        <a href="/">Todas as versões</a>
    </div>
    <div>
        <h4>Comunidade</h4>
        <a href="/">GitHub</a>
        <a href="/">Issues</a>
        <a href="/">Projetos</a>
        <a href="/">Twitter</a>
    </div>
    <div>
        <h4>Ajuda</h4>
        <a href="/">Suporte</a>
        <a href="/">Contate-nos</a>
        <a href="/">Solucionar problemas</a>
    </div>
    <div>
        <h4>Outros</h4>
        <a href="/">Termos de serviço</a>
        <a href="/">Política de privacidade</a>
        <a href="/">Licenças</a>
    </div>
</div>
    </footer>
  )
}

export default Footer