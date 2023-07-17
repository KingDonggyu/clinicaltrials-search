import { ChangeEvent, useCallback, useState } from 'react';
import colors from 'constants/colors';
import usePopover from 'hooks/usePopover';
import { SearchList } from './SearchList';
import { SearchIcon } from './Icon';
import useDebounce from 'hooks/useDebounce';

interface SearchBarProps {
  searchList: string[];
  placeholder?: string;
  onChangeSearchKeyword: (query: string) => void;
}

export function SearchBar({ searchList, placeholder, onChangeSearchKeyword }: SearchBarProps) {
  const { Popover, showPopover, hidePopover } = usePopover();
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchDebounce = useCallback(
    () => onChangeSearchKeyword(searchKeyword),
    [onChangeSearchKeyword, searchKeyword]
  );

  useDebounce({ value: searchKeyword, onDebounce: handleSearchDebounce });

  return (
    <div>
      <form
        method="get"
        onSubmit={e => e.preventDefault()}
        css={{
          display: 'flex',
          alignItems: 'center',
          height: '3.7em',
          justifyContent: 'space-between',
          background: colors.blue500,
          borderRadius: BORDER_RADIUS,
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '1em',
            flexGrow: 1,
            padding: '1.2em',
            height: '100%',
            background: colors.background,
            borderTopLeftRadius: BORDER_RADIUS,
            borderBottomLeftRadius: BORDER_RADIUS,
          }}
        >
          <SearchIcon width="20px" alt="검색창" />
          <input
            type="search"
            name="q"
            autoComplete="off"
            placeholder={placeholder}
            onFocus={showPopover}
            onBlur={hidePopover}
            onChange={handleChangeSearchKeyword}
            css={{
              width: '100%',
              border: 'none',
              ':focus': { outline: 'none' },
              '::placeholder': { color: colors.grey500 },
            }}
          />
        </div>
        <button
          type="submit"
          css={{
            color: colors.background,
            width: '15%',
            height: '100%',
            fontWeight: 'bold',
            background: 'none',
            padding: '1.2em',
          }}
        >
          검색
        </button>
      </form>
      <Popover css={{ marginTop: '0.5em' }}>
        <SearchList title="추천 검색어" searchList={searchList} hasSearchWord={Boolean(searchKeyword)} />
      </Popover>
    </div>
  );
}

const BORDER_RADIUS = '100px';
