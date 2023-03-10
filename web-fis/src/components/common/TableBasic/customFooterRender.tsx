import React, { useMemo } from 'react';
import appConfig from 'src/appConfig';
import { View } from 'src/components/common';
import Text from '../Text';
import SelectRowsPerPage from './SelectRowsPerPage';
import './styles.scss';
import cn from 'classnames';
import {
  TableCell,
  TableFooter,
  TableRow,
  useMediaQuery,
  Pagination,
  ThemeProvider,
} from '@mui/material';
const clsPrefix = 'custom-footer-table';
const CustomFooterRender: React.FC<Props> = ({
  count,
  page,
  rowsPerPage,
  changeRowsPerPage,
  changePage,
  theme,
}) => {
  const isTabletScreen = useMediaQuery('(max-width:840px)');

  const range = useMemo(() => {
    const end = (page + 1) * rowsPerPage;
    const start = end - (rowsPerPage - 1);
    if (count < end) return `${start}-${count}`;
    else return `${start} to ${end}`;
  }, [count, page, rowsPerPage]);

  const handleChangeRowsPerPage = React.useCallback(
    (value: number) => {
      changeRowsPerPage(value);
      changePage(0);
    },
    [changePage, changeRowsPerPage]
  );

  const handleChangePage = (event: object, value: number) => {
    const skip = value > 0 ? value - 1 : value;
    changePage(skip);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableFooter>
        <TableRow>
          <TableCell>
            <View
              isRowWrap={!isTabletScreen}
              align="center"
              justify="space-between"
              className={cn(`${clsPrefix}`, {
                'px-2': !isTabletScreen,
                'py-2': isTabletScreen,
              })}
            >
              <View
                isRowWrap={isTabletScreen}
                fullWidth
                {...(isTabletScreen && {
                  align: 'center',
                  justify: 'center',
                })}
              >
                {count ? (
                  <Text size={14} className={`fw-medium text-color-grey-600`}>
                    Showing {range} of {count} documents
                  </Text>
                ) : (
                  <div />
                )}
              </View>
              <View
                isRow
                align="center"
                fullWidth
                {...(!isTabletScreen && {
                  justify: 'flex-end',
                })}
              >
                <View
                  isRow
                  align="center"
                  {...(isTabletScreen && {
                    fullWidth: true,
                    justify: 'center',
                  })}
                >
                  <Text size={14} className={`fw-medium text-color-grey-600`}>
                    Rows per page:
                  </Text>
                  <SelectRowsPerPage
                    className="mx-2"
                    options={appConfig.ROWS_PER_PAGE_OPTIONS}
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                  />
                </View>
                <View
                  {...(isTabletScreen && {
                    fullWidth: true,
                    justify: 'center',
                  })}
                >
                  <Pagination
                    count={count > 0 ? Math.ceil(count / rowsPerPage) : 1}
                    page={page + 1}
                    shape="rounded"
                    size="small"
                    onChange={handleChangePage}
                    classes={{
                      root: `${clsPrefix}-pagination`,
                    }}
                  />
                </View>
              </View>
            </View>
          </TableCell>
        </TableRow>
      </TableFooter>
    </ThemeProvider>
  );
};

type Props = {
  count: number;
  page: number;
  rowsPerPage: number;
  changeRowsPerPage: (page: string | number) => void;
  changePage: (newPage: number) => void;
  theme: any;
};

export default CustomFooterRender;
