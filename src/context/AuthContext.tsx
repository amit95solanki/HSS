import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context value
// Update the shape of the context value
interface DataContextType {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  user: string | null | boolean; // Allow string, null, or boolean
  setUser: Dispatch<SetStateAction<string | null | boolean>>; // Update setter type
  userInfo: object | null;
  setUserInfo: Dispatch<SetStateAction<object | null>>;
}

// Create the context with the type
export const DataContext = createContext<DataContextType | null>(null);

// Custom hook to access the context
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

// Props interface for the DataProvider
interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<string | null | boolean>(null); // Update type to string | null | boolean
  const [userInfo, setUserInfo] = useState<object | null>(null);
  const ProvidedValue = useMemo(
    () => ({
      search,
      setSearch,
      user,
      setUser,
      userInfo,
      setUserInfo,
    }),
    [search, user] // Include both `search` and `user`
  );

  return (
    <DataContext.Provider value={ProvidedValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
