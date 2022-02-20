import styled, { css } from 'styled-components';
import { SectionContainer } from '../../styles/styles';

export const AvailabilitySectionContainer = styled(SectionContainer)``;

export const Month = styled.div<{ isEven: boolean }>`
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  background: ${(props) =>
    props.isEven ? props.theme.colors.white : props.theme.colors.secondary30};
  padding: 10px 2px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Origin = styled.div`
  padding: 10px 0;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5px;
`;

export const Availability = styled.div<{
  isAvailable: boolean;
  isStart?: boolean;
  isEnd?: boolean;
  isEven: boolean;
}>`
  background: ${(props) =>
    props.isEven ? props.theme.colors.white : props.theme.colors.secondary30};
  padding: 10px 0;
  position: relative;
  z-index: 0;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.grey};
    z-index: -1;
  }

  &:before {
    content: '';
    display: block;
    padding: 10px;
    z-index: 1;

    background: ${(props) =>
      props.isAvailable ? props.theme.colors.accent : 'transparent'};

    ${(props) =>
      props.isStart &&
      css`
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      `}

    ${(props) =>
      props.isEnd &&
      css`
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      `}
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(12, 1fr);
`;
