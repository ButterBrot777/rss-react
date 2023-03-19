import { ReactElement } from 'react';

export default interface RouteBuilder {
  path: string;
  element?: ReactElement;
  exact?: boolean;
}
