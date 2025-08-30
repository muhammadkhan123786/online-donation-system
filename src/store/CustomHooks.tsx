import { useEffect } from 'react';

import { useLayoutContext } from './useLayoutContext';
import type { pageContent } from '../models/TypeScript/Types';

export const useUpdatePageContent = (content: pageContent) => {
  const { updatePageContent } = useLayoutContext();
  useEffect(() => {
    updatePageContent(content);
  }, [updatePageContent, content]);
};
