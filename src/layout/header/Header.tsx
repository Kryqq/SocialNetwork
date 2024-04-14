import { AuthReducerType } from '../../redux/authReducer';
import styles from './Header.module.scss';

type HeaderPropsType = {
   isAuth: boolean;
   login: string | null;
   setUserAuthData: (data: AuthReducerType) => void;
};

export const Header = (props: HeaderPropsType) => {
   return <div className={styles.header}>{props.isAuth === true ? <div>login</div> : <button>login</button>}</div>;
};
