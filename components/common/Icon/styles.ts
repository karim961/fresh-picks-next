import styled from 'styled-components';

export const SocialIconWrapper = styled.a<{
  color: string;
  hoverColor: string;
}>`
  font-size: 14px;
  color: ${(props) => props.color};
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.hoverColor};
  }
`;
