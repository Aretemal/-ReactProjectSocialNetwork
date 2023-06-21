import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../hook/hook';
import Settings from './Settings';
import { changeLang, getLang } from '../../store/slices/settingsSlice';

const SettingsContainer:React.FC = () => {
  const { lang, isChangePassword } = useAppSelector((state) => state.settings);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const onChangeLanguage = (newLang: string) => {
    dispatch(changeLang({ lang: newLang, token }));
  };
  useEffect(() => {
    dispatch(getLang(token));
  }, [lang]);
  return (
    <Settings t={t} onChangeLanguage={onChangeLanguage} lang={lang} isChangePassword={isChangePassword} />
  );
};
export default SettingsContainer;
