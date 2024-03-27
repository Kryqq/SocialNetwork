import styles from './MessageItem.module.scss';

export type MessageItemType = {
   messageContent: string;
};

export const MessageItem = (props: MessageItemType) => {
   return <div className={styles.messageItem}>{props.messageContent}</div>;
};
