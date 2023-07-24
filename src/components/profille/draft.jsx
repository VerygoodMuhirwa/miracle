import React, { useState, Fragment } from "react";
import { countries } from "countries-list";
import { Combobox, Transition } from "@headlessui/react";

const FlagApp = () => {
  const [countryList, setCountryList] = useState([]);
  const [query, setQuery] = useState("");
  const [countryy, setCountry] = useState("");
  // Extract country names and flags from the countries object
  const countriesData = Object.entries(countries).map(([code, country]) => ({
    name: country.name,
    flag: country.emoji,
  }));

  // Set the countryList state with the array of country names and flags
  useState(() => {
    setCountryList(countriesData);
  }, []);


  const filteredCountries =
    query === ""
      ? countryList
      : countryList.filter((country) =>
          country.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="py-16 px-16">
      <Combobox value={countryy} onChange={setCountry}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <img src="/assets/user.png" alt="draft" className="w-16  h-2" />
          </Combobox.Button>
          <Combobox.Input
            className="w-full"
            placeholder="Canada"
            displayValue={(country) => country}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-10"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredCountries.map((country) => (
                <Combobox.Option
                  key={country.name}
                  className={({ active }) =>
                    `relative  search-manufacturer_option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={[country.flag,country.name]}
                >
                  <span className="block truncate">{country.flag} {country.name}</span>
                  
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default FlagApp;
