import { r4Data } from '@/data/r4';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(r4Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
