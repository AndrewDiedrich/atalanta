import styled from 'styled-components';
import { FlexRow, FlexColumn } from '@globalStyles';
import { Card, Divider, H5, Colors } from '@blueprintjs/core';

export interface INavbarExampleState {
  alignRight: boolean;
}

const LogoDiv = styled.div`
  cursor: pointer;
`;

const HeadersDecoration = styled(H5)`
  /* text-decoration: underline; */
`;

const FooterStyled = styled(Card)`
  padding: 20px 0 20px;
  font-size: 15px;
  line-height: 24px;
  width: 100%;
  margin-top: 35px;
  flex-shrink: 0;
`;

const Footer = () => {
  return (
    <FooterStyled className="bp3-dark app-footer">
      <FlexColumn style={{ margin: '0 auto', maxWidth: '1080px' }}>
        <FlexRow>
          <FlexColumn style={{ marginRight: '50px' }}>
            <HeadersDecoration>About</HeadersDecoration>
            <p>
              <a>DTS.com</a> Vivamizzle nec mauris egizzle nisi nizzle pretium.
              Vivamizzle mofo amizzle lacus. Nam funky fresh nisl eget lacizzle
              auctizzle the bizzle. Praesent fo shizzle mah nizzle fo rizzle,
            </p>
            <Divider style={{ backgroundColor: `${Colors.WHITE}` }} />
            <HeadersDecoration>Contact</HeadersDecoration>
          </FlexColumn>

          <FlexColumn style={{ marginRight: '50px' }}>
            <LogoDiv>
              <img
                src="/images/chinati_admin_logo.svg"
                alt="powered-by-chintai"
              />
            </LogoDiv>
            <FlexRow>
              <FlexColumn>
                <p>
                  Copyright &copy; 2020 All Rights Reserved by
                  <a href="#">CHINTAI</a>.
                </p>
              </FlexColumn>
              <FlexColumn></FlexColumn>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      </FlexColumn>
    </FooterStyled>
  );
};

export default Footer;
