import cn from 'classnames';
import React, { HTMLProps } from 'react';
import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { HIDE_NAV_PATHS } from 'src/appConfig/paths';
import { IRootState } from 'src/redux/rootReducer';
import View from '../View';
import './styles.scss';

const Screen: React.FC<Props> = ({
  showNavbar,
  showSidebar,
  collapseSidebar,
  showMiniSidebar,
  children,
}) => {
  const location = useLocation();

  const isHideNav = HIDE_NAV_PATHS.includes(location.pathname);

  return (
    <View
      className={cn('cmp-screen', {
        'cmp-screen__navbar': showNavbar && !isHideNav,
        'cmp-screen__sidebar': showSidebar,
        'is-collapse': collapseSidebar,
        'is-mini': showMiniSidebar,
      })}
    >
      {children}
    </View>
  );
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  HTMLProps<HTMLDivElement>;

const mapStateToProps = (state: IRootState) => ({
  showNavbar: state.common.showNavbar,
  showSidebar: state.common.showSidebar,
  collapseSidebar: state.common.collapseSidebar,
  showMiniSidebar: state.common.showMiniSidebar,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
