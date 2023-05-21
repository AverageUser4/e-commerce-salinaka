import Logo from '../Logo/Logo';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css['footer']}>
      <div className={css['footer-content']}>
        <p className="para para--small para--no-margin">Based on project by <a className="link" href="https://github.com/jgudo">JULIUS GUEVARRA</a></p>
        <div className={css['center']}>
          <Logo/>
          <p className="para para--small para--no-margin">© 2023</p>
        </div>
        <p className="para para--small para--no-margin"><a className="link" href="https://github.com/jgudo">Original Project</a></p>
      </div>
    </footer>
  );
}