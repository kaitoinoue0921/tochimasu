import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { CirclePackFig } from './u8d1_figs';

const intro = (
  <div className="space-y-2">
    <p>下の図のように、1辺12cmの正方形に内側で接する大きさの等しい円を、ある規則にしたがって隣り合う円どうしが1点のみを共有するように並べる。このとき、次の問題に答えよ。ただし、円周率は <TextWithMath text="$\pi$" /> とする。</p>
    <CirclePackFig />
  </div>
);

export const q4Data: MajorQuestionData = {
  id: "q4",
  title: "宇短大附属 R8(4日) 大問4：正方形に並べた円の周の長さ",
  subs: [
    {
      id: "1",
      title: "1. 2番目の図の周の長さ",
      knowledge: ["円周の長さ", "おうぎ形の弧"],
      originalText: <div>{intro}<p>1　2番目の図で、色のついた部分の周りの長さを求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① 円の半径',
          content: <p>2番目は、12cmの正方形に円が縦横2個ずつ並んでいます。</p>,
          quiz: {
            type: 'choice',
            question: '2番目の円1個の半径は？',
            options: ['3cm', '6cm', '4cm'],
            correctAnswer: '3cm',
            explanation: <p>直径は <TextWithMath text="$12\div2=6$" /> cm なので半径は3cmです。円周は <TextWithMath text="$6\pi$" /> cm です。</p>
          }
        },
        {
          id: 2, title: '② 外周に出ている部分',
          content: <p>中央のすき間も色がついているので、周りは外側の弧だけです。各円が接点から接点まで、外側にどれだけ弧を出しているか考えます。</p>,
          quiz: {
            type: 'choice',
            question: '角にある1つの円は、円周の何分のいくつが周りになる？',
            options: ['3/4', '1/2', '1/4'],
            correctAnswer: '3/4',
            explanation: <p>右隣との接点と下隣との接点の間で、内側の90°ぶんだけが内部に入ります。外側の270°、つまり <TextWithMath text="$\tfrac34$" /> 周が周りになります。</p>
          }
        },
        {
          id: 3, title: '③ 合計する',
          content: <MathText block math="4\times\frac34\times6\pi" />,
          quiz: {
            type: 'choice',
            question: '2番目の周りの長さは？',
            options: ['18π cm', '24π cm', '12π cm'],
            correctAnswer: '18π cm',
            explanation: <p><TextWithMath text="$4\times\tfrac34\times6\pi=18\pi$" /> cm です。円周4つ分の <TextWithMath text="$24\pi$" /> は、中央のすき間の縁まで数えてしまった場合の値です。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 4番目の図の周の長さ",
      knowledge: ["規則性", "円周の長さ"],
      originalText: <div>{intro}<p>2　4番目の図で、色のついた部分の周りの長さを求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① 円の大きさと配置',
          content: <p>4番目は縦横4個ずつ、16個の円が並びます。</p>,
          quiz: {
            type: 'choice',
            question: '4番目の円1個の円周は？',
            options: ['3π cm', '6π cm', '1.5π cm'],
            correctAnswer: '3π cm',
            explanation: <p>直径は <TextWithMath text="$12\div4=3$" /> cm なので、円周は <TextWithMath text="$3\pi$" /> cm です。</p>
          }
        },
        {
          id: 2, title: '② 外側の円の種類',
          content: <p>周りに関わるのは外側に並ぶ円だけです。角の円は <TextWithMath text="$\tfrac34$" /> 周、辺の途中の円は両隣との接点の間の半周が周りになります。内側の円は周りに関わりません。</p>,
          quiz: {
            type: 'choice',
            question: '4番目で、角以外の辺に並ぶ円は何個？',
            options: ['8個', '12個', '4個'],
            correctAnswer: '8個',
            explanation: <p>1辺に4個並び、両端の2個は角なので、途中は2個。4辺で <TextWithMath text="$2\times4=8$" /> 個です。</p>
          }
        },
        {
          id: 3, title: '③ 合計する',
          content: <MathText block math="4\times\frac34\times3\pi+8\times\frac12\times3\pi" />,
          quiz: {
            type: 'choice',
            question: '4番目の周りの長さは？',
            options: ['21π cm', '24π cm', '48π cm'],
            correctAnswer: '21π cm',
            explanation: <p><TextWithMath text="$9\pi+12\pi=21\pi$" /> cm です。同じ考え方で2番目を計算すると <TextWithMath text="$18\pi$" /> になり、1と合っています。</p>
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 周の長さが整数×πになる最大のn",
      knowledge: ["規則性の一般化", "約数"],
      originalText: <div>{intro}<p>3　<TextWithMath text="$n$" /> 番目の図で、色のついた部分の周りの長さを整数 <TextWithMath text="$p$" /> を用いて、<TextWithMath text="$p\pi$" /> cm と表せたとき、考えられる最大の整数 <TextWithMath text="$n$" /> を求めよ。</p></div>,
      steps: [
        {
          id: 1, title: '① n番目を式にする',
          content: <p>円周は <TextWithMath text="$\tfrac{12}{n}\pi$" />。角の円が4個で各 <TextWithMath text="$\tfrac34$" /> 周、辺の途中の円が <TextWithMath text="$4(n-2)$" /> 個で各半周です。</p>,
          quiz: {
            type: 'choice',
            question: 'n番目の周りの長さを整理すると？',
            options: ['(24 − 12/n)π', '12nπ', '(24 − 6/n)π'],
            correctAnswer: '(24 − 12/n)π',
            explanation: <p><TextWithMath text="$\left\{3+2(n-2)\right\}\times\tfrac{12}{n}\pi=\tfrac{(2n-1)\times12}{n}\pi=\left(24-\tfrac{12}{n}\right)\pi$" />。<TextWithMath text="$n=2$" /> で <TextWithMath text="$18\pi$" />、<TextWithMath text="$n=4$" /> で <TextWithMath text="$21\pi$" /> と合っています。</p>
          }
        },
        {
          id: 2, title: '② 整数になる条件',
          content: <p><TextWithMath text="$p=24-\tfrac{12}{n}$" /> が整数になるには、<TextWithMath text="$\tfrac{12}{n}$" /> が整数であればよいです。</p>,
          quiz: {
            type: 'choice',
            question: 'n はどんな数であればよい？',
            options: ['12の約数', '12の倍数', '偶数'],
            correctAnswer: '12の約数',
            explanation: <p><TextWithMath text="$n$" /> が12の約数のとき、<TextWithMath text="$\tfrac{12}{n}$" /> が整数になります。</p>
          }
        },
        {
          id: 3, title: '③ 最大の n',
          content: <p>12の約数は1、2、3、4、6、12です。</p>,
          quiz: {
            type: 'choice',
            question: '考えられる最大の n は？',
            options: ['12', '6', '24'],
            correctAnswer: '12',
            explanation: <p>最大は <TextWithMath text="$n=12$" /> です。このとき周りの長さは <TextWithMath text="$(24-1)\pi=23\pi$" /> cm で、確かに整数×πになっています。</p>
          }
        }
      ]
    }
  ]
};
