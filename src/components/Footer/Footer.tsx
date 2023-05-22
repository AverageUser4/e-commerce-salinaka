import Logo from '../Logo/Logo';
import css from './Footer.module.css';
import Text from '../Text/Text';

export default function Footer() {
  return (
    <footer className={css['footer']}>
      <div className={css['footer-content']}>
        <Text style={{ fontSize: 14 }}variant="p" element="p">Based on project by <a className="link" href="https://github.com/jgudo">JULIUS GUEVARRA</a></Text>
        <div className={css['center']}>
          <Logo/>
          <Text style={{ fontSize: 14 }}variant="p" element="p">© 2023</Text>
        </div>
        <Text style={{ fontSize: 14 }}variant="p" element="p"><a className="link" href="https://github.com/jgudo">Original Project</a></Text>
      </div>
    </footer>
  );
}