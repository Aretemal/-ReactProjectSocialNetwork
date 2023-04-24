import * as Yup from 'yup';

const MessageSchema = Yup.object().shape({
  newMessageBody: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
});
export default MessageSchema;
