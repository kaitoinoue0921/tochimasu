import { r6Data } from '@/data/r6';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(r6Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
