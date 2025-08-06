import { useEffect } from 'react';
import { HomeModel } from '../models/Home-model/Home-model';
import { useLayoutContext } from './useLayoutContext';

export const usePageHeaderUpdate = (
  id: number,
  heading: string,
  message: string
) => {
  const { updateHeader } = useLayoutContext();
  useEffect(() => {
    const headerModel = new HomeModel(id, heading, message);
    updateHeader(headerModel);
  }, [id, heading, message, updateHeader]);
};

export const useUpdateFooter = (message: string) => {
  const { updateFooter } = useLayoutContext();
  useEffect(() => {
    updateFooter(message);
  }, [updateFooter, message]);
};

export const useUpdateStep = (step: number) => {
  const { updateStep } = useLayoutContext();
  useEffect(() => {
    updateStep(step);
  }, [updateStep, step]);
};
