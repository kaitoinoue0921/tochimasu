import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { MenelausFig1, MenelausFig2 } from './u8d1_figs';

const theorem = (
  <div className="space-y-2">
    <p>太郎さんは先生に次の定理を教わった。太郎さんは、この定理を証明しようとしている。</p>
    <div className="border rounded p-3 border-slate-300 dark:border-slate-600">
      <p>定理　ある直線が△ABCの辺BC、CA、AB、またはその延長と、それぞれ点P、Q、Rで交われば</p>
      <MathText block math="\frac{BP}{PC}\times\frac{CQ}{QA}\times\frac{AR}{RB}=\boxed{\text{ア}}" />
    </div>
    <div className="border rounded p-3 border-slate-300 dark:border-slate-600">
      <p>太郎さんの証明</p>
      <p>右の図1のように、点Cを通り、直線 <TextWithMath text="$\ell$" /> に平行な直線を引き、辺ABとの交点をDとする。<TextWithMath text="$AR=a$" />、<TextWithMath text="$BR=b$" />、<TextWithMath text="$DR=c$" /> とすると平行線の性質より <TextWithMath text="$\dfrac{BP}{PC}=$" /> イ、<TextWithMath text="$\dfrac{CQ}{QA}=$" /> ウ であるから <TextWithMath text="$\dfrac{BP}{PC}\times\dfrac{CQ}{QA}\times\dfrac{AR}{RB}=$" /> ア が成り立つ。</p>
      <MenelausFig1 />
    </div>
  </div>
);

const fig2Intro = (
  <div className="space-y-2">
    <p>（図2：△ABCで、辺BC上の点Pについて BP = 5cm、PC = 4cm。線分AP上の点Qについて AQ = 3cm、QP = 3cm。直線CQと辺ABの交点がR）</p>
    <MenelausFig2 />
  </div>
);

export const q5Data: MajorQuestionData = {
  id: "q5",
  title: "宇短大附属 R8(4日) 大問5：メネラウスの定理の証明と利用",
  subs: [
    {
      id: "1",
      title: "1. BP/PC を文字で表す（イ）",
      knowledge: ["平行線と線分の比"],
      originalText: <div>{theorem}<p>1　イにあてはまる値を、<TextWithMath text="$a,b,c$" /> のうち必要なものを用いて答えよ。</p></div>,
      steps: [
        {
          id: 1, title: '① 使う平行線を見つける',
          content: <p>DC // RP です。点Bから見ると、直線BAと直線BPの上に平行線が交わっています。</p>,
          quiz: {
            type: 'choice',
            question: 'BP : PC と等しい比は？',
            options: ['BR : RD', 'BD : DR', 'AR : RD'],
            correctAnswer: 'BR : RD',
            explanation: <p>△BRPで DC // RP なので、<TextWithMath text="$BP:PC=BR:RD$" /> です（平行線と線分の比）。</p>
          }
        },
        {
          id: 2, title: '② 文字で表す',
          content: <p><TextWithMath text="$BR=b$" />、<TextWithMath text="$RD=c$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: 'イにあてはまる値は？',
            options: ['b/c', 'c/b', '(b − c)/c'],
            correctAnswer: 'b/c',
            explanation: <p><TextWithMath text="$\dfrac{BP}{PC}=\dfrac{BR}{RD}=\dfrac{b}{c}$" /> です。BDとDRの比 <TextWithMath text="$\tfrac{b-c}{c}$" /> と取り違えないよう、比をとる始点が同じBであることを確認します。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. CQ/QA を文字で表す（ウ）",
      knowledge: ["平行線と線分の比"],
      originalText: <div>{theorem}<p>2　ウにあてはまる値を、<TextWithMath text="$a,b,c$" /> のうち必要なものを用いて答えよ。</p></div>,
      steps: [
        {
          id: 1, title: '① 使う平行線を見つける',
          content: <p>今度は点Aから見ます。△ADCで RQ // DC です。</p>,
          quiz: {
            type: 'choice',
            question: 'CQ : QA と等しい比は？',
            options: ['DR : RA', 'RA : DR', 'BR : RA'],
            correctAnswer: 'DR : RA',
            explanation: <p>△ADCで RQ // DC なので <TextWithMath text="$AQ:QC=AR:RD$" />、つまり <TextWithMath text="$CQ:QA=DR:RA$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 文字で表す',
          content: <p><TextWithMath text="$DR=c$" />、<TextWithMath text="$RA=a$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: 'ウにあてはまる値は？',
            options: ['c/a', 'a/c', 'c/b'],
            correctAnswer: 'c/a',
            explanation: <p><TextWithMath text="$\dfrac{CQ}{QA}=\dfrac{DR}{RA}=\dfrac{c}{a}$" /> です。分子・分母の順番を問題の式どおりにそろえます。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 定理の値（ア）",
      knowledge: ["メネラウスの定理"],
      originalText: <div>{theorem}<p>3　アにあてはまる数を答えよ。</p></div>,
      steps: [
        {
          id: 1, title: '① AR/RB を文字で表す',
          content: <p><TextWithMath text="$AR=a$" />、<TextWithMath text="$RB=b$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: 'AR/RB は？',
            options: ['a/b', 'b/a', 'a/c'],
            correctAnswer: 'a/b',
            explanation: <p>そのまま <TextWithMath text="$\dfrac{AR}{RB}=\dfrac{a}{b}$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 3つをかける',
          content: <MathText block math="\frac{b}{c}\times\frac{c}{a}\times\frac{a}{b}" />,
          quiz: {
            type: 'choice',
            question: 'アにあてはまる数は？',
            options: ['1', '0', '2'],
            correctAnswer: '1',
            explanation: <p>分子と分母が <TextWithMath text="$a,b,c$" /> どうしで全部約分され、積は <TextWithMath text="$1$" /> です。これがメネラウスの定理です。B→P→C→Q→A→R→B と頂点と交点を交互にたどる順で比をとるのがコツです。</p>
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. 図2で AR/RB を求める",
      knowledge: ["メネラウスの定理の利用"],
      originalText: <div>{fig2Intro}<p>4　右の図2において、<TextWithMath text="$\dfrac{AR}{RB}$" /> の値を求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① どの三角形と直線で使うか',
          content: <p>R、Q、Cは一直線上にあります。この直線が3辺（または延長）と交わる三角形を選びます。</p>,
          quiz: {
            type: 'choice',
            question: 'メネラウスの定理を使う三角形と直線の組は？',
            options: ['△ABP と直線RC', '△ABC と直線RC', '△APC と直線RB'],
            correctAnswer: '△ABP と直線RC',
            explanation: <p>直線RCは △ABP の辺AB上のR、辺AP上のQ、辺BPの延長上のCを通ります。△ABCでは直線RCが頂点Cを通ってしまうので使えません。</p>
          }
        },
        {
          id: 2, title: '② 式を立てる',
          content: <p>A→R→B→C→P→Q→A の順にたどります。<TextWithMath text="$BC=5+4=9$" />、<TextWithMath text="$CP=4$" />、<TextWithMath text="$PQ=QA=3$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '正しい式は？',
            options: ['AR/RB × 9/4 × 3/3 = 1', 'AR/RB × 5/4 × 3/3 = 1', 'AR/RB × 4/9 × 3/3 = 1'],
            correctAnswer: 'AR/RB × 9/4 × 3/3 = 1',
            explanation: <p><TextWithMath text="$\dfrac{AR}{RB}\times\dfrac{BC}{CP}\times\dfrac{PQ}{QA}=1$" /> です。BからCまでは9cmで、BPの5cmではありません。</p>
          }
        },
        {
          id: 3, title: '③ 解く',
          content: <MathText block math="\frac{AR}{RB}\times\frac94\times1=1" />,
          quiz: {
            type: 'choice',
            question: 'AR/RB の値は？',
            options: ['4/9', '9/4', '4/5'],
            correctAnswer: '4/9',
            explanation: <p><TextWithMath text="$\dfrac{AR}{RB}=\dfrac49$" /> です。図でもRはAに近い位置にあり、ARのほうが短いことと合っています。</p>
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. △RBCと△BPQの面積比",
      knowledge: ["高さが等しい三角形の面積比", "線分の比"],
      originalText: <div>{fig2Intro}<p>5　右の図2において、△RBCの面積は△BPQの面積の何倍か求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① △ABCを基準にする',
          content: <p>△ABCの面積を <TextWithMath text="$S$" /> とおき、それぞれを <TextWithMath text="$S$" /> で表します。</p>,
          quiz: {
            type: 'choice',
            question: '△RBCの面積は？',
            options: ['9/13 S', '4/13 S', '9/4 S'],
            correctAnswer: '9/13 S',
            explanation: <p>4より <TextWithMath text="$AR:RB=4:9$" /> なので <TextWithMath text="$RB:AB=9:13$" />。頂点Cからの高さが共通なので <TextWithMath text="$\triangle RBC=\tfrac{9}{13}S$" /> です。</p>
          }
        },
        {
          id: 2, title: '② △BPQを表す',
          content: <p>まず △ABP、次にQがAPの中点であることを使います。</p>,
          quiz: {
            type: 'choice',
            question: '△BPQの面積は？',
            options: ['5/18 S', '5/9 S', '2/9 S'],
            correctAnswer: '5/18 S',
            explanation: <p><TextWithMath text="$BP:BC=5:9$" /> より <TextWithMath text="$\triangle ABP=\tfrac59S$" />。<TextWithMath text="$AQ=QP$" /> なので <TextWithMath text="$\triangle BPQ=\tfrac12\times\tfrac59S=\tfrac{5}{18}S$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 何倍かを求める',
          content: <MathText block math="\frac{9}{13}S\div\frac{5}{18}S" />,
          quiz: {
            type: 'choice',
            question: '△RBCは△BPQの何倍？',
            options: ['162/65 倍', '65/162 倍', '18/13 倍'],
            correctAnswer: '162/65 倍',
            explanation: <p><TextWithMath text="$\tfrac{9}{13}\times\tfrac{18}{5}=\tfrac{162}{65}$" /> 倍です。およそ2.5倍で、図で△RBCが△BPQよりかなり大きいことと合っています。</p>
          }
        }
      ]
    }
  ]
};
