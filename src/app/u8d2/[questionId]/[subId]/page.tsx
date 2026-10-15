import { u8d2Data } from '@/data/u8d2';
import Client from './Client';

export function generateStaticParams() {
  return Object.entries(u8d2Data).flatMap(([questionId, q]) =>
    q.subs.map((s) => ({ questionId, subId: s.id }))
  );
}

export default function Page({ params }: { params: Promise<{ questionId: string; subId: string }> }) {
  return <Client params={params} />;
}
