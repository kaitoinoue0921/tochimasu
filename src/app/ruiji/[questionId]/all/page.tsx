import { ruijiData } from '@/data/ruiji';
import Client from './Client';

export function generateStaticParams() {
  return Object.keys(ruijiData).map((questionId) => ({ questionId }));
}

export default function Page({ params }: { params: Promise<{ questionId: string }> }) {
  return <Client params={params} />;
}
