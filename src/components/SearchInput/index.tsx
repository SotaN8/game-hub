import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          variant='filled'
          placeholder='Search games...'
          ref={ref}
          type='search'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
