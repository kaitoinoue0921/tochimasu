import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { PyramidFig } from './u8d2_figs';

const intro = (
  <div className="space-y-2">
    <p>図のような正四角錐O−ABCDにおいて、辺OAの中点をMとする。また、点Eは辺OC上の点で、OE：EC＝2：3である。頂点Oから底面ABCDに引いた垂線をOHとし、OHとMEの交点をFとする。このとき、次の問題に答えよ。</p>
    <PyramidFig />
  </div>
);

export const q5Data: MajorQuestionData = {
  id: "q5",
  title: "宇短大附属 R8(5日) 大問5：正四角錐と切り口の三角形",
  subs: [
    {
      id: "1",
      title: "1. 正四角錐の体積",
      knowledge: ["角錐の体積"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">1　AB＝3cm、OH＝7cm であるとき、正四角錐O−ABCDの体積を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 底面積を求める',
          content: <p>正四角錐の底面は正方形です。</p>,
          quiz: {
            type: 'choice',
            question: '底面ABCDの面積は？',
            options: ['9 cm²', '12 cm²', '6 cm²'],
            correctAnswer: '9 cm²',
            explanation: <p><TextWithMath text="$3\times3=9$" /> cm² です。</p>
          }
        },
        {
          id: 2, title: '② 体積を求める',
          content: <MathText block math="V=\frac13\times\text{底面積}\times\text{高さ}" />,
          quiz: {
            type: 'choice',
            question: '体積は？',
            options: ['21 cm³', '63 cm³', '42 cm³'],
            correctAnswer: '21 cm³',
            explanation: <p><TextWithMath text="$\dfrac13\times9\times7=21$" /> cm³ です。<TextWithMath text="$\dfrac13$" /> をかけ忘れると63になります。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 四角形OMHCの面積",
      knowledge: ["中点と面積比", "三角形の面積比"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">2　△AMHの面積が30cm² のとき、四角形OMHCの面積を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 平面OACで考える',
          content: (
            <div>
              <p>H は正方形の対角線の交点なので、AC の中点です。O, M, H, C, A はすべて平面OAC の上にあります。</p>
              <PyramidFig showPlane />
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '△AMH は △AOC の何倍の面積？',
            options: ['1/4倍', '1/2倍', '1/3倍'],
            correctAnswer: '1/4倍',
            explanation: <p>AM は AO の <TextWithMath text="$\dfrac12$" />、AH は AC の <TextWithMath text="$\dfrac12$" /> なので、面積は <TextWithMath text="$\dfrac12\times\dfrac12=\dfrac14$" /> 倍です（MH ∥ OC で、△AMH と △AOC は相似比1：2）。</p>
          }
        },
        {
          id: 2, title: '② 四角形の面積を求める',
          content: <p>四角形OMHC は、△AOC から △AMH を取り除いた部分です。</p>,
          quiz: {
            type: 'choice',
            question: '四角形OMHC の面積は？',
            options: ['90 cm²', '120 cm²', '60 cm²'],
            correctAnswer: '90 cm²',
            explanation: <p>△AOC＝<TextWithMath text="$30\times4=120$" /> cm² なので、<TextWithMath text="$120-30=90$" /> cm² です。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. MH と EC の長さの比",
      knowledge: ["中点連結定理", "線分の比"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">3　線分MHと線分ECの長さの比を最も簡単な整数の比で表せ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① MH を OC で表す',
          content: <p>△AOC で、M は AO の中点、H は AC の中点です。</p>,
          quiz: {
            type: 'choice',
            question: 'MH の長さは？',
            options: ['OC の 1/2', 'OC の 2/5', 'OC の 1/3'],
            correctAnswer: 'OC の 1/2',
            explanation: <p>中点連結定理より、MH ∥ OC、<TextWithMath text="$MH=\dfrac12OC$" /> です。</p>
          }
        },
        {
          id: 2, title: '② EC を OC で表して比べる',
          content: <p>OE：EC＝2：3 なので、OC を5等分した3つ分が EC です。</p>,
          quiz: {
            type: 'choice',
            question: 'MH：EC は？',
            options: ['5：6', '5：4', '1：3'],
            correctAnswer: '5：6',
            explanation: (
              <div>
                <p><TextWithMath text="$EC=\dfrac35OC$" /> なので <TextWithMath text="$MH:EC=\dfrac12:\dfrac35=5:6$" /> です（両方に10をかける）。</p>
                <p className="mt-2 text-sm">OC＝10 とおくと MH＝5、EC＝6 で確かめられます。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. MF と FE の長さの比",
      knowledge: ["平行線と線分の比（砂時計型）", "中点連結定理"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">4　線分MFと線分FEの長さの比を最も簡単な整数の比で表せ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① 砂時計型を見つける',
          content: <p>3 で MH ∥ OC がわかりました。E は OC 上にあるので MH ∥ OE です。F は ME と OH の交点です。</p>,
          quiz: {
            type: 'choice',
            question: 'どの2つの三角形が相似？',
            options: ['△FMH と △FEO', '△FMH と △FEC', '△OMF と △OAH', '△FMO と △FHE', '△OMF と △OEF'],
            correctAnswer: '△FMH と △FEO',
            explanation: <p>MH ∥ OE なので、F をはさんで △FMH と △FEO が砂時計型の相似になります。</p>
          }
        },
        {
          id: 2, title: '② 相似比を求める',
          content: <p>OC＝10 とおくと、MH＝5、OE＝4 です。</p>,
          quiz: {
            type: 'choice',
            question: 'MF：FE は？',
            options: ['5：4', '5：6', '4：5'],
            correctAnswer: '5：4',
            explanation: <p>MF：FE＝MH：OE＝5：4 です。EC（＝6）と比べてしまうと 5：6 になるので、対応する辺が OE であることに注意しましょう。</p>
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. OF と面積から体積を求める",
      knowledge: ["線分の比", "三角形の面積", "正方形の面積（対角線）", "角錐の体積"],
      originalText: (
        <div className="space-y-2">
          {intro}
          <p className="font-bold">5　<TextWithMath text="$OF=4\sqrt3$" /> cm、△AMHの面積が <TextWithMath text="$6\sqrt3$" /> cm² であるとき、正四角錐O−ABCDの体積を求めよ。</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① OH の長さを求める',
          content: <p>4 と同じ砂時計型で、HF：FO＝MH：OE＝5：4 です。</p>,
          quiz: {
            type: 'choice',
            question: 'OH の長さは？',
            options: ['9√3 cm', '5√3 cm', '7√3 cm'],
            correctAnswer: '9√3 cm',
            explanation: <p>OF が4つ分で <TextWithMath text="$4\sqrt3$" /> なので1つ分は <TextWithMath text="$\sqrt3$" />。OH は 5＋4＝9 つ分で <TextWithMath text="$9\sqrt3$" /> cm です。</p>
          }
        },
        {
          id: 2, title: '② AC の長さを求める',
          content: <p>2 と同じく △AOC＝△AMH×4 です。△AOC は底辺AC、高さOH の三角形です。</p>,
          quiz: {
            type: 'choice',
            question: 'AC の長さは？',
            options: ['16/3 cm', '8/3 cm', '4/3 cm'],
            correctAnswer: '16/3 cm',
            explanation: (
              <div>
                <p>△AOC＝<TextWithMath text="$6\sqrt3\times4=24\sqrt3$" />。</p>
                <MathText block math="\frac12\times AC\times9\sqrt3=24\sqrt3\ \Rightarrow\ AC=\frac{48}{9}=\frac{16}{3}" />
              </div>
            )
          }
        },
        {
          id: 3, title: '③ 底面積を求める',
          content: <p>正方形はひし形の一種なので、面積は 対角線×対角線÷2 で求められます。</p>,
          quiz: {
            type: 'choice',
            question: '底面ABCD の面積は？',
            options: ['128/9 cm²', '256/9 cm²', '64/9 cm²'],
            correctAnswer: '128/9 cm²',
            explanation: <p><TextWithMath text="$\dfrac{16}{3}\times\dfrac{16}{3}\div2=\dfrac{256}{9}\div2=\dfrac{128}{9}$" /> cm² です。AC を1辺の長さとして2乗すると <TextWithMath text="$\dfrac{256}{9}$" /> になり誤りです。</p>
          }
        },
        {
          id: 4, title: '④ 体積を求める',
          content: <MathText block math="V=\frac13\times\frac{128}{9}\times9\sqrt3" />,
          quiz: {
            type: 'choice',
            question: '正四角錐の体積は？',
            options: ['128√3/3 cm³', '128√3 cm³', '256√3/3 cm³'],
            correctAnswer: '128√3/3 cm³',
            explanation: (
              <div>
                <p>9 が約分されて <TextWithMath text="$\dfrac{128\sqrt3}{3}$" /> cm³ です。</p>
                <p className="mt-2 text-sm">確認：OH と AC がわかれば、△AOC＝<TextWithMath text="$\dfrac12\times\dfrac{16}{3}\times9\sqrt3=24\sqrt3$" /> となり、△AMH の4倍になっていることが確かめられます。</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
