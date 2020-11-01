import {
  Box,
  GlobalStyle,
  PageLayout,
  SearchBox,
  Section,
  Text,
  UserMenu,
} from '@t3n/components';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { MaterialArrowBack } from '@t3n/icons';

const BreadcrumbSection = styled(Box)`
  > div {
    ${({ theme }) =>
      space({
        theme,
        pb: [0],
      })};
  }
`;

const Layout: React.FC<{ hideBreadcrumbs?: boolean }> = ({
  hideBreadcrumbs = true,
  children,
}) => {
  const router = useRouter();

  return (
    <PageLayout
      showHeader
      noContentPadding
      headerContent={
        <>
          <SearchBox
            width="350px"
            placeholder="Suche nach Produkten und Deals"
            isLoading={false}
            getSuggestionValue={() => null}
            handleSuggestionClearRequested={() => null}
            onSelect={() => null}
            renderSuggestion={() => <p>Suggestion</p>}
            handleSuggestionFetchRequested={() => null}
          />
          <UserMenu
            loading={false}
            loggedIn
            user={{
              name: 'John Doe',
              avatarUrl: '',
              label: 'John doe',
            }}
          />
        </>
      }
    >
      <>
        <GlobalStyle />
        {!hideBreadcrumbs && (
          <BreadcrumbSection>
            <Section variant="primary">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                onClick={() => router.back()}
              >
                <MaterialArrowBack />
                <Text inline ml={2}>
                  zurück
                </Text>
              </Box>
            </Section>
          </BreadcrumbSection>
        )}
        {children}
      </>
    </PageLayout>
  );
};

export default Layout;
