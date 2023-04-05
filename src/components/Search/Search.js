import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoOptions, GEO_API_URL } from "../../API";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChanege = (searchData) => {
    onSearchChange(searchData);
    setSearch(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Bir şehir giriniz"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChanege}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
