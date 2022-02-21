import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { send } from 'emailjs-com';

import { yupSchema } from './config';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import {
  ButtonContainer,
  ErrorMessage,
  FormSectionContainer,
  StyledForm,
} from './styles';
import Button from '../../common/button';
import { TEXT } from '../../../config/strings';
import DropdownSelect from '../../common/dropdown-select';

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps): ReactElement<ContactFormProps> => {
  const [isSending, setIsSending] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    handleSubmit(
      (data) => {
        if (!isSending) {
          setIsSending(true);
          send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '',
            {
              from_name: data.company_name,
              from_email: data.email,
              country: data.country,
              phone: data.phone,
              subject: data.subject,
              reply_to: data.email,
              message: data.message,
            },
            process.env.NEXT_PUBLIC_EMAIL_USER_ID || '',
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              const timer = setTimeout(() => {
                setIsSending(false);
              }, 6000 * 5);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        }
      },
      (errors) => {
        // eslint-disable-next-line no-console
        console.log(errors);
      },
    )();
  };

  return (
    <FormSectionContainer>
      <StyledForm>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <input
                placeholder={'Company name'}
                type={'text'}
                {...register('company_name')}
              />
              <ErrorMessage>{errors.company_name?.message}</ErrorMessage>
            </Col>
            <Col xs={12} md={6}>
              <DropdownSelect
                label={'Country'}
                name={'country'}
                options={TEXT.COUNTRIES_ARRAY}
                control={control}
              />

              <ErrorMessage>{errors.country?.message}</ErrorMessage>
            </Col>
            <Col xs={12} md={6}>
              <input
                placeholder={'Email'}
                type={'text'}
                {...register('email')}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </Col>
            <Col xs={12} md={6}>
              <input
                placeholder={'Phone Number'}
                type={'text'}
                {...register('phone')}
              />
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </Col>
            <Col xs={12} md={12}>
              <input
                placeholder={'Subject'}
                type={'text'}
                {...register('subject')}
              />
              <ErrorMessage>{errors.subject?.message}</ErrorMessage>
            </Col>
            <Col xs={12} md={12}>
              <textarea placeholder={'Message'} {...register('message')} />
              <ErrorMessage>{errors.message?.message}</ErrorMessage>
            </Col>
            <ButtonContainer xs={12}>
              <Button
                text={isSending ? TEXT.MESSAGE_SENT : TEXT.SEND_MESSAGE}
                handleClick={onSubmit}
                isDisabled={isSending}
              />
            </ButtonContainer>
          </Row>
        </Grid>
      </StyledForm>
    </FormSectionContainer>
  );
};

export default ContactForm;
