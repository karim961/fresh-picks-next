import { ReactElement } from 'react';
import {
  Availability,
  AvailabilitySectionContainer,
  CalendarGrid,
  Month,
  Origin,
} from './styles';
import { TEXT } from '../../config/strings';
import { H3 } from '../../styles/text';

interface AvailabilityCalendarProps {
  variations: any[];
  title: string;
}

const AvailabilityCalendar = ({
  variations,
  title,
}: AvailabilityCalendarProps): ReactElement<AvailabilityCalendarProps> => {
  const reOrderMonths = (months: {
    january: boolean;
    february: boolean;
    march: boolean;
    april: boolean;
    may: boolean;
    june: boolean;
    july: boolean;
    august: boolean;
    september: boolean;
    october: boolean;
    november: boolean;
    december: boolean;
  }) => {
    return [
      months.january,
      months.february,
      months.march,
      months.april,
      months.may,
      months.june,
      months.july,
      months.august,
      months.september,
      months.october,
      months.november,
      months.december,
    ];
  };
  let isStart = true;
  let isEnd = false;
  return (
    <AvailabilitySectionContainer>
      <H3>{title}</H3>

      <CalendarGrid>
        <div />
        {TEXT.MONTHS_SHORT.map((month, index) => (
          <Month key={month} isEven={index % 2 == 0}>
            {month}
          </Month>
        ))}

        {variations.map((variation) => (
          <>
            <Origin>{variation.origin}</Origin>
            {reOrderMonths(variation).map((month, index) => {
              let isFirst = false;
              let isLast = false;
              if (isStart && month) {
                isStart = false;
                isEnd = true;
                isFirst = true;
              }
              if (
                index === 11 ||
                (isEnd &&
                  month &&
                  index !== 11 &&
                  !reOrderMonths(variation)[index + 1])
              ) {
                isEnd = false;
                isStart = true;
                isLast = true;
              }
              return (
                <Availability
                  key={index}
                  isAvailable={month}
                  isEnd={isLast}
                  isStart={isFirst}
                  isEven={index % 2 == 0}
                />
              );
            })}
          </>
        ))}
      </CalendarGrid>
    </AvailabilitySectionContainer>
  );
};

export default AvailabilityCalendar;
