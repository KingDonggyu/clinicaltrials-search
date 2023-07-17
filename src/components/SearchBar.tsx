import colors from 'constants/colors';
import usePopover from 'hooks/usePopover';
import { SearchList } from './SearchList';
import { SearchIcon } from './Icon';

export function SearchBar() {
  const { Popover, showPopover, hidePopover } = usePopover();

  return (
    <div>
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
          <SearchIcon width="20px" alt="검색창" />
          <input
            type="search"
            name="q"
            autoComplete="off"
            onFocus={showPopover}
            onBlur={hidePopover}
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
        <SearchList searchList={['123']} />
      </Popover>
    </div>
  );
}

const BORDER_RADIUS = '100px';
