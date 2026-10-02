import { r7Data } from '@/data/r7';
import Client from './Client';

export function generateStaticParams() {
  return Object.entries(r7Data).flatMap(([questionId, q]) =>
    q.subs.map((s) => ({ questionId, subId: s.id }))
  );
}

export default function Page({ params }: { params: Promise<{ questionId: string; subId: string }> }) {
  return <Client params={params} />;
}
