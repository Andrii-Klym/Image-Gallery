import { createContext, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=7&per_page=12&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchField />
      </Header>
      <div className="bg-slate-200">
        <Images />
      </div>
    </ImageContext.Provider>
  );
}

export default App;
