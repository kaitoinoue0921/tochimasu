'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { r7Data } from '@/data/r7';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (r7Data as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="r7" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
