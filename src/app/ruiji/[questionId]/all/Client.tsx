'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { ruijiData } from '@/data/ruiji';
import { ChainLayout } from '@/components/ChainLayout';

export default function Chain({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = React.use(params);
  const data = (ruijiData as Record<string, { title: string; subs: React.ComponentProps<typeof ChainLayout>['subs'] }>)[questionId];
  if (!data) return notFound();
  return <ChainLayout year="ruiji" questionId={questionId} majorTitle={data.title} subs={data.subs} />;
}
