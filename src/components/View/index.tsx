import * as React from 'react';
import {View as ViewRN, ViewProps} from 'react-native';

interface CustomViewProps extends ViewProps {
  /**
   * Default: undefined
   */
  flex?: number;

  /**
   * Default: column
   */
  layout?: 'row' | 'column';
}

export const Box: React.FC<CustomViewProps> = ({flex, layout, ...props}) => {
  return <ViewRN style={{flex, flexDirection: layout}} {...props} />;
};
