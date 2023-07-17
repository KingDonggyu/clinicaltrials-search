import colors from 'constants/colors';
import { SearchIcon } from './Icon';

interface SearchListProps {
  searchList: string[];
}

export function SearchList({ searchList }: SearchListProps) {
  return (
    <div css={{ paddingTop: PADDING_VERTICAL }}>
      <p css={{ fontSize: '0.9em', color: colors.grey600, padding: `0 ${PADDING_HORIZONTAL}`, marginTop: 0 }}>
        추천 검색어
      </p>
      {searchList.length ? (
        <ul css={{ overflowY: 'auto', maxHeight: '25em', paddingBottom: PADDING_VERTICAL }}>
          {searchList.map(word => (
            <SearchItem key={word} word={word} />
          ))}
        </ul>
      ) : (
        <p css={{ padding: `0 ${PADDING_HORIZONTAL}`, paddingBottom: PADDING_VERTICAL }}>검색어 없음</p>
      )}
    </div>
  );
}

function SearchItem({ word }: { word: string }) {
  return (
    <li
      css={{
        padding: `12px ${PADDING_HORIZONTAL}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        ':hover': { background: colors.grey100 },
      }}
    >
      <SearchIcon width="20px" alt="검색어" />
      <span>{word}</span>
    </li>
  );
}

const PADDING_HORIZONTAL = '1.5em';
const PADDING_VERTICAL = '1.2em';
