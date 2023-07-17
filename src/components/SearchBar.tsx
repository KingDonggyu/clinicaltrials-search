import searchIconSrc from 'assets/search.svg';
import colors from 'constants/colors';

export function SearchBar() {
  return (
    <form
      method="get"
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
        <img src={searchIconSrc} width="20px" alt="검색" />
        <input
          type="search"
          name="q"
          css={{
            flexGrow: 1,
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
        }}
      >
        검색
      </button>
    </form>
  );
}

const BORDER_RADIUS = '100px';
