import React, { memo } from 'react';
import { ErrorLink } from '../stylized/errorStyle';

interface IErrorProps {}

const Error: React.FC<IErrorProps> = () => {
  return (
    <main>
      <h2>Error - Page 404</h2>
      <p>Oups...</p>
      <ErrorLink href="/">Home</ErrorLink>
    </main>
  );
};

export default memo(Error);
