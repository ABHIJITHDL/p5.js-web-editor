import React from 'react';
import styled from 'styled-components';
import { remSize } from '../../theme';


export default styled.div`
  /* Dashboard Styles */
  z-index: 0;
  margin-top: ${props => remSize(props.slimheader ? 50 : 68)};



  /* Dashboard Styles */
  

  td {
    font-size: ${remSize(10)};
    min-width: ${remSize(72)};
  };
  tbody th {
    font-size: ${remSize(14)};
    /* font-weight: bold; */
    width: 100%;
    /* max-width: ${remSize(280)}; */

    
  };

  .sketch-list__sort-button { padding: 0 }
  .sketches-table__row {
    height: ${remSize(48)};
  }

  .sketches-table-container { padding-bottom: ${remSize(160)} }

  td.sketch-list__dropdown-column { min-width: unset; }
`;
