import styles from './MessageItem.module.scss';

type MessageItemPropsType = {
   messageContent: string;
};

export const MessageItem = (props: MessageItemPropsType) => {
   return <div className={styles.messageItem}>{props.messageContent}</div>;
};
