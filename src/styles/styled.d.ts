import 'styled-components';
import { theme } from './Theme';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
