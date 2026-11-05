import { r3Data } from '@/data/r3';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(r3Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
