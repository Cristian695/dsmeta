import logo from '../assets/img/image 1.svg';
import './Header.css';

export function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/devsuperior.ig">@Devsuperior.ig</a>
                    </p>
            </div>
        </header>
    )
}