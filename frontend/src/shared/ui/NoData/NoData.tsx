import type { ReactElement } from 'react';

export function NoData({
  message = 'No data found',
}: {
  message?: string;
}): ReactElement {
  return <div>{message}</div>;
}
