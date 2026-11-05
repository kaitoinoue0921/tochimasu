import { u8d1Data } from '@/data/u8d1';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(u8d1Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
