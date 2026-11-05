'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { bstData } from '@/data/bst';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (bstData as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="bst" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
