
import styles from './Header.module.scss';

type HeaderPropsType = {
   isAuth: boolean;
   login: string | null;
   setUsersAuthThunkCreator: () => void;
};

export const Header = (props: HeaderPropsType) => {
   return (
      <div className={styles.header}>{props.isAuth === true ? <div>{props.login}</div> : <button>login</button>}</div>
   );
};
