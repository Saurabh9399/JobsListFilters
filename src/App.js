import { useState, useEffect } from "react";
import "./App.css";
import backgroundImg from "./images/bg-header-desktop.svg";
import JobOpeningCard from "./components/JobOpeningCard";
import dataArray from "./data.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [tags, setTags] = useState([]);
  const [filteredData, setFilteredData] = useState(dataArray);

  useEffect(() => {
    // Filter data based on selected tags only if there are tags
    const filtered =
      tags.length > 0
        ? dataArray.filter((item) => {
            const hasRole = tags.includes(item.role);
            const hasLevel = tags.includes(item.level);
            const hasLanguages = item.languages.some((lang) => tags.includes(lang));
            const hasTools = item.tools.some((tool) => tags.includes(tool));
  
            return hasRole || hasLevel || hasLanguages || hasTools;
          })
        : dataArray;
  
    setFilteredData(filtered);
  }, [tags]);
  

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      setTags((prevTags) => [...prevTags, searchText.trim()]);
      setSearchText("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const handleClearFilters = () => {
    setTags([]);
    setSearchText('');
  };

  return (
    <div className="w-full h-screen border-2 border-yellow-200 relative">
      {/* Background image */}
      <div className="w-full h-[20vh] ">
        <img
          alt="backgroundImg"
          src={backgroundImg}
          className="w-full h-[20vh] bg-[rgb(93,165,164)]"
        />
      </div>

      {/* Search box with tags */}
      <div className="absolute top-[17%] left-[22%] border border-blue-300 w-[50%] h-[100%%] rounded-md shadow-lg flex items-center">
        <div className="flex flex-wrap items-center bg-white w-[100%]">
          {tags.map((tag, index) => (
            <div key={index} className="tag bg-[rgb(93,165,164)] text-white px-2 py-1 m-1 rounded-md flex items-center">
              {tag}
              <button onClick={() => handleRemoveTag(index)} className="ml-2">
                x
              </button>
            </div>
          ))}
          <input
            name="search"
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="flex-grow p-4 rounded-md focus:outline-none "
            placeholder="Add tags and press Enter"
          />
          {tags.length > 0 && (
            <button onClick={handleClearFilters} className="ml-2 px-3 py-2 rounded-md  text-[rgb(93,165,164)] font-bold hover:underline">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Jobs list */}
      <div className="absolute top-[25%] left-[20%]  w-[54%] h-[75vh] rounded-md overflow-y-scroll scrollbar-hide">
        {/* Job cards */}
        {filteredData.map((item) => (
          <JobOpeningCard item={item} key={item.company} />
        ))}
      </div>
    </div>
  );
}

export default App;
