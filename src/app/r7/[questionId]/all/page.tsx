import { r7Data } from '@/data/r7';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(r7Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
