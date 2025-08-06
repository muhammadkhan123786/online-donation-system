import { useCallback, useState } from 'react';
import { HomeModel } from '../models/Home-model/Home-model';
import { LayoutContext } from './LayoutContext';
const homeModel = new HomeModel(1, '', '');
const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerModel, setHeaderModel] = useState<HomeModel>(homeModel);
  const [footerMessage, setFooterMessage] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  const updateHeaderModal = useCallback((headerModal: HomeModel) => {
    setHeaderModel(headerModal);
  }, []);

  const updateFooterMessage = useCallback((message: string) => {
    setFooterMessage(message);
  }, []);

  const updateStep = useCallback((step: number) => {
    setStep(step);
  }, []);

  const cxtValue = {
    headerModel,
    footerModel: footerMessage,
    updateHeader: updateHeaderModal,
    updateFooter: updateFooterMessage,
    updateStep,
    step,
  };

  return (
    <LayoutContext.Provider value={cxtValue}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
