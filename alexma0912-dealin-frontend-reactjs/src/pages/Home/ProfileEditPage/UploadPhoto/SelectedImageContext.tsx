import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface SelectedImageContextValue {
  selectedImage: File | null;
  setSelectedImage: Dispatch<SetStateAction<File | null>>; // Correct function signature
}

const SelectedImageContext = createContext<SelectedImageContextValue>({
  selectedImage: null,
  setSelectedImage: () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  },
});

export const useSelectedImage = () => useContext(SelectedImageContext);

export const SelectedImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <SelectedImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </SelectedImageContext.Provider>
  );
};
