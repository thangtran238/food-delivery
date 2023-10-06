import React, { useState, useEffect } from 'react';
import { SearchBar, AutoSuggest } from 'react-native-autosuggest';

type SearchBarProps = {
  data: string[];
  placeholder: string;
  onSelect: (suggestion: string) => void;
};

const SearchBarWithR: React.FC<SearchBarProps> = ({
  data,
  placeholder,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const filterSuggestions = () => {
      const filteredSuggestions = data.filter((item) => {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setSuggestions(filteredSuggestions);
    };

    filterSuggestions();
  }, [searchTerm, data]);

  return (
    <SearchBar
      placeholder={placeholder}
      value={searchTerm}
      onChangeText={(searchTerm: string) => setSearchTerm(searchTerm)}
    >
      <AutoSuggest
        suggestions={suggestions}
        onSelect={(suggestion: string) => {
          onSelect(suggestion);
          setSearchTerm('');
        }}
      />
    </SearchBar>
  );
};

export default SearchBarWithR;
