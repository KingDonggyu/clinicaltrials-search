import { useEffect } from 'react';
import colors from 'constants/colors';
import { useUpDownKeyboardNavigation } from 'hooks/useUpDownKeyboardNavigation';
import { SearchIcon } from './Icon';

interface SearchListProps {
  title?: string;
  hasSearchWord: boolean;
  searchList: string[];
}

export function SearchDropdown({ title, hasSearchWord, searchList }: SearchListProps) {
  return (
    <div css={{ padding: '1.2em 0' }}>
      {hasSearchWord ? (
        <>
          <p css={{ marginTop: 0, ...PARAGRAPH_STYLE }}>{title}</p>
          <SearchList searchList={searchList} />
        </>
      ) : (
        <p css={{ margin: 0, ...PARAGRAPH_STYLE }}>검색어 없음</p>
      )}
    </div>
  );
}

function SearchList({ searchList }: { searchList: string[] }) {
  const [selectedIndex, setSelectedIndex] = useUpDownKeyboardNavigation({
    size: searchList.length - 1,
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchList, setSelectedIndex]);

  return (
    <ul css={{ marginBottom: 0 }}>
      {searchList.map((word, index) => (
        <SearchItem key={word} word={word} isSelected={selectedIndex === index} />
      ))}
    </ul>
  );
}

interface SearchItemProps {
  word: string;
  isSelected: boolean;
}

function SearchItem({ word, isSelected }: SearchItemProps) {
  return (
    <li
      tabIndex={0}
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.7em',
        outline: 'none',
        padding: `0.7em ${PADDING_HORIZONTAL}`,
        background: isSelected ? colors.grey100 : 'inherit',
      }}
    >
      <SearchIcon width="20px" alt="검색어" css={{ filter: 'opacity(0.3)' }} />
      <span>{word}</span>
    </li>
  );
}

const PADDING_HORIZONTAL = '1.5em';

const PARAGRAPH_STYLE = {
  fontSize: '0.9em',
  color: colors.grey600,
  padding: `0 ${PADDING_HORIZONTAL}`,
};
