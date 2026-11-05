import { u8d2Data } from '@/data/u8d2';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(u8d2Data).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
