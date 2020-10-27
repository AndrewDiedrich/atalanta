import styled from 'styled-components';
import { Card, Elevation, Drawer } from '@blueprintjs/core';
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBanner = styled(Card)`
  background-image: linear-gradient(
      to bottom,
      ${'rgba(117, 117, 117, 0.4)'},
      ${'rgba(94, 94, 94, 0.3)'}
    ),
    url('images/banner_chin.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 35vh;
  width: 100% !important;
`;
