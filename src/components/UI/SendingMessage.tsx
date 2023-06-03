import Modal from './Modal';

type Props = {
  onCloseHandler: () => void;
}

const SendingMessage = ({ onCloseHandler }: Props) => {
  return (
    <>
      <Modal onClose={onCloseHandler}>
        <h2>Message is sending... Please wait....</h2>
      </Modal>
    </>
  );
};

export default SendingMessage;
