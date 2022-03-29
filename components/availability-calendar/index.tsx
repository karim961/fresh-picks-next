import { ReactElement } from 'react';
import {
  Availability,
  AvailabilitySectionContainer,
  CalendarGrid,
  ImageTitleCol,
  Month,
  Origin,
} from './styles';
import { TEXT } from '../../config/strings';
import { H2 } from '../../styles/text';
import { Col, Row } from 'react-styled-flexboxgrid';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getMediaUrl } from '../../api/cms';

interface AvailabilityCalendarProps {
  variations: any[];
  title: string;
  description: string;
  image: { [key: string]: string };
}

const AvailabilityCalendar = ({
  variations,
  title,
  description,
  image,
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
      <Row center={'xs'}>
        {image && (
          <ImageTitleCol xs={12}>
            <img src={getMediaUrl(image.url)} alt={title} />
            <H2>{title}</H2>
          </ImageTitleCol>
        )}
        {description && (
          <Col xs={12} sm={12} md={12} lg={10}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {description}
            </ReactMarkdown>
          </Col>
        )}
      </Row>

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
