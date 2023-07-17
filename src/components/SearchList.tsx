import colors from 'constants/colors';
import { SearchIcon } from './Icon';
import { css } from '@emotion/react';

interface SearchListProps {
  title?: string;
  hasSearchWord: boolean;
  searchList: string[];
}

export function SearchList({ title, hasSearchWord, searchList }: SearchListProps) {
  return (
    <div css={{ paddingTop: PADDING_VERTICAL }}>
      {hasSearchWord ? (
        <>
          <p
            css={css`
              ${paragraphStyle}
              margin-top: 0;
            `}
          >
            {title}
          </p>
          <ul
            css={{
              overflowY: 'auto',
              maxHeight: '25em',
              paddingBottom: PADDING_VERTICAL,
            }}
          >
            {searchList.map(word => (
              <SearchItem key={word} word={word} />
            ))}
          </ul>
        </>
      ) : (
        <p
          css={css`
            ${paragraphStyle}
            margin: 0;
            padding-bottom: ${PADDING_VERTICAL};
          `}
        >
          검색어 없음
        </p>
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
      <SearchIcon width="20px" alt="검색어" css={{ filter: 'opacity(0.3)' }} />
      <span>{word}</span>
    </li>
  );
}

const PADDING_HORIZONTAL = '1.5em';
const PADDING_VERTICAL = '1.2em';

const paragraphStyle = css`
  font-size: 0.9em;
  color: ${colors.grey600};
  padding: 0 ${PADDING_HORIZONTAL};
`;
