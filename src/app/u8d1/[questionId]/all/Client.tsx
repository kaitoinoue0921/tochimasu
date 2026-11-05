'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { u8d1Data } from '@/data/u8d1';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (u8d1Data as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="u8d1" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
