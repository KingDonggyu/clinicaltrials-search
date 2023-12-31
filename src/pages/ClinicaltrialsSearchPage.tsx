import { useMemo } from 'react';
import { SearchBar } from 'components/SearchBar';
import colors from 'constants/colors';
import mediaQueries from 'constants/mediaQueries';
import { useSickListContext } from 'contexts/sickListContext';

export function ClinicaltrialsSearchPage() {
  const { sickList, searchSickList } = useSickListContext();
  const searchedSickList = useMemo(() => sickList.map(({ sickNm }) => sickNm), [sickList]);

  return (
    <main
      css={{
        background: colors.blue100,
        padding: '2em',
        display: 'flex',
        flexDirection: 'column',
        gap: '2em',
        minHeight: '100vh',
        height: 'max-content',
        [mediaQueries.mobile]: {
          padding: '5em 2em',
        },
      }}
    >
      <h1 css={{ fontSize: '1.8em', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.6 }}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar
        searchList={searchedSickList}
        placeholder="질환명을 입력해 주세요."
        onChangeSearchKeyword={searchSickList}
      />
    </main>
  );
}
