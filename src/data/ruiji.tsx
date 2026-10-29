import { MajorQuestionData } from './r7';
import { ruijiA } from './ruiji_a';
import { ruijiB } from './ruiji_b';
import { ruijiC } from './ruiji_c';
import { ruijiD } from './ruiji_d';

// 類題：栃木県公立入試の形式（大問5の関数・規則性など）をもとに作った練習問題。
export const ruijiData: Record<string, MajorQuestionData> = { ...ruijiA, ...ruijiB, ...ruijiC, ...ruijiD };
