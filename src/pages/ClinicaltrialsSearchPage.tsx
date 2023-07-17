import { SearchBar } from 'components/SearchBar';
import colors from 'constants/colors';
import { useSickListContext } from 'contexts/SickListContext';
import { useMemo } from 'react';

export function ClinicaltrialsSearchPage() {
  const { sickList, searchSickList } = useSickListContext();

  const searchedSickList = useMemo(() => sickList.map(({ sickNm }) => sickNm), [sickList]);

  return (
    <main
      css={{
        background: colors.blue100,
        padding: '4em 2em',
        display: 'flex',
        flexDirection: 'column',
        gap: '3em',
        height: '100vh',
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
