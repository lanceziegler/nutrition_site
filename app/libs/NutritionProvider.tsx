'use client';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type ContextType = {
  contactModalVisible: boolean;
  setContactModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const NutritionContext = createContext<ContextType | undefined>(
  undefined
);

const NutritionProvider = ({ children }: { children: ReactNode }) => {
  const [contactModalVisible, setContactModalVisible] =
    useState<boolean>(false);

  return (
    <NutritionContext.Provider
      value={{ contactModalVisible, setContactModalVisible }}
    >
      {children}
    </NutritionContext.Provider>
  );
};

export default NutritionProvider;
