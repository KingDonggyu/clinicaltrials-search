import { ChangeEvent, useState } from 'react';
import colors from 'constants/colors';
import usePopover from 'hooks/usePopover';
import { SearchList } from './SearchList';
import { SearchIcon } from './Icon';

interface SearchBarProps {
  searchList: string[];
  onChangeSearchKeyword: (query: string) => void;
}

export function SearchBar({ searchList, onChangeSearchKeyword }: SearchBarProps) {
  const { Popover, showPopover, hidePopover } = usePopover();
  const [hasSearchWord, setHasSearchWord] = useState(false);

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeSearchKeyword(e.target.value);
    setHasSearchWord(Boolean(e.target.value));
  };

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
            onFocus={showPopover}
            onBlur={hidePopover}
            onChange={handleChangeSearchKeyword}
            css={{
              width: '100%',
              border: 'none',
              ':focus': { outline: 'none' },
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
        <SearchList title="추천 검색어" searchList={searchList} hasSearchWord={hasSearchWord} />
      </Popover>
    </div>
  );
}

const BORDER_RADIUS = '100px';
