import { r5Data } from '@/data/r5';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(r5Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
