import { bstData } from '@/data/bst';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(bstData).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
