'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { r3Data } from '@/data/r3';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (r3Data as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="r3" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
