import globalStyle from '../../../../config/config';

const mediaQuery = `@media (max-width: 768px)`;

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: 'rgb(217,217,217)',
    borderRadius: globalStyle.inputBorderRadius,
    marginBottom: '1.5rem',
    fontWeight: 400,
    fontSize: '1.1rem',
    lineHeight: '3rem',
    width: '100%',
    marginTop: '0.25rem',
    [mediaQuery]: {
      lineHeight: '2rem',
      fontSize: '1.25rem',
      padding: '0.25rem 0.25rem',
    },
  }),
};

export { customStyles };
