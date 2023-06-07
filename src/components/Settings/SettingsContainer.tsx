import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook/hook';
import Settings from './Settings';
import { changeLang } from '../../store/slices/settingsSlice';

const SettingsContainer:React.FC = () => {
  const { lang, isChangePassword } = useAppSelector((state) => state.settings);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onChangeLanguage = (newLang: string) => {
    dispatch(changeLang({ lang: newLang, token }));
  };

  return (
    <Settings onChangeLanguage={onChangeLanguage} lang={lang} isChangePassword={isChangePassword} />
  );
};
export default SettingsContainer;
