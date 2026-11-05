'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { r5Data } from '@/data/r5';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (r5Data as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="r5" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
