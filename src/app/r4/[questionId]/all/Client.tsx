'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { r4Data } from '@/data/r4';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (r4Data as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="r4" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
