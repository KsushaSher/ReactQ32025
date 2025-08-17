'use client';

import Error from '../../components/Errors';

export default function ErrorError({ error }: { error: Error }) {
  return <Error error={error} />;
}
