import React from 'react';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';
import { CubeFig, CircleAngleFig } from './r5_figs';

export const q1Data: MajorQuestionData = {
  id: "q1",
  title: "令和5年 大問1：基本の小問集合",
  subs: [
    {
      id: "1",
      title: "1. 正負の数の計算",
      knowledge: ["正負の数のひき算"],
      originalText: <p><TextWithMath text="$3-(-5)$" /> を計算しなさい。</p>,
      steps: [
        {
          id: 1, title: '① マイナスをひくとは？',
          content: <p>「負の数をひく」ことは「正の数をたす」ことと同じです。かっこを外すと符号がどうなるか考えましょう。</p>,
          quiz: {
            type: 'choice',
            question: '3 − (−5) のかっこを外した式はどれ？',
            options: ['3 − 5', '3 + 5', '−3 − 5'],
            correctAnswer: '3 + 5',
            explanation: <p><TextWithMath text="$-(-5) = +5$" /> なので、<TextWithMath text="$3-(-5) = 3+5$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 計算する',
          content: <p>かっこを外した式を計算します。</p>,
          quiz: {
            type: 'choice',
            question: '3 − (−5) の答えは？',
            options: ['−2', '8', '2'],
            correctAnswer: '8',
            explanation: <p><TextWithMath text="$3+5=8$" />。答えは <strong>8</strong> です。「−2」はかっこの符号を変え忘れたときのミスです。</p>
          }
        }
      ]
    },
    {
      id: "2",
      title: "2. 単項式の除法",
      knowledge: ["単項式の乗除", "指数法則"],
      originalText: <p><TextWithMath text="$8a^3b^2 \div 6ab$" /> を計算しなさい。</p>,
      steps: [
        {
          id: 1, title: '① 分数の形にする',
          content: <p>単項式のわり算は、分数の形にすると約分しやすくなります。</p>,
          quiz: {
            type: 'choice',
            question: '8a³b² ÷ 6ab を分数で表すとどれ？',
            options: ['6ab / 8a³b²', '8a³b² / 6ab', '8a³b² × 6ab'],
            correctAnswer: '8a³b² / 6ab',
            explanation: <MathText block math="\frac{8a^3b^2}{6ab}" />
          }
        },
        {
          id: 2, title: '② 係数を約分する',
          content: <p>まず数字の部分（係数）だけを約分します。</p>,
          quiz: {
            type: 'choice',
            question: '8 / 6 を約分すると？',
            options: ['4/3', '3/4', '2'],
            correctAnswer: '4/3',
            explanation: <p>8と6を2でわって <TextWithMath text="$\frac{4}{3}$" /> です。</p>
          }
        },
        {
          id: 3, title: '③ 文字を約分する',
          content: <p><TextWithMath text="$a^3 \div a = a^2$" />、<TextWithMath text="$b^2 \div b = b$" /> のように、文字の個数を1つずつ減らします。</p>,
          quiz: {
            type: 'choice',
            question: '8a³b² ÷ 6ab の答えは？',
            options: ['4a²b/3', '4a³b²/3', '4a²/3', '2a²b'],
            correctAnswer: '4a²b/3',
            explanation: <MathText block math="\frac{8a^3b^2}{6ab} = \frac{4a^2b}{3}" />
          }
        }
      ]
    },
    {
      id: "3",
      title: "3. 式の展開（乗法公式）",
      knowledge: ["乗法公式 (x+a)²"],
      originalText: <p><TextWithMath text="$(x+3)^2$" /> を展開しなさい。</p>,
      steps: [
        {
          id: 1, title: '① 公式を思い出す',
          content: <MathText block math="(x+a)^2 = x^2 + 2ax + a^2" />,
          quiz: {
            type: 'choice',
            question: '(x+3)² の展開で、x の係数（真ん中の項）はいくつ？',
            options: ['3', '6', '9'],
            correctAnswer: '6',
            explanation: <p>真ん中の項は <TextWithMath text="$2 \times 3 \times x = 6x$" /> です。「3」にしてしまうのは2倍を忘れるミスです。</p>
          }
        },
        {
          id: 2, title: '② 展開を完成させる',
          content: <p>最後の項は <TextWithMath text="$3^2$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '(x+3)² を展開した式は？',
            options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', 'x² + 6x + 6'],
            correctAnswer: 'x² + 6x + 9',
            explanation: <p><TextWithMath text="$(x+3)^2 = x^2+6x+9$" />。「<TextWithMath text="$x^2+9$" />」は真ん中の項を忘れる典型ミスです。</p>
          }
        }
      ]
    },
    {
      id: "4",
      title: "4. 数量の関係を不等式で表す",
      knowledge: ["文字式の立式", "不等号（以下・未満）"],
      originalText: <p>1個 <TextWithMath text="$x$" /> 円のパンを7個と1本 <TextWithMath text="$y$" /> 円のジュースを5本買ったところ、代金の合計が2000円以下になった。この数量の関係を不等式で表しなさい。</p>,
      steps: [
        {
          id: 1, title: '① 代金の合計を式にする',
          content: <p>（1個の値段）×（個数）をそれぞれ求めて足します。</p>,
          quiz: {
            type: 'choice',
            question: '代金の合計を表す式は？',
            options: ['7x + 5y', '5x + 7y', 'x + y'],
            correctAnswer: '7x + 5y',
            explanation: <p>パン代 <TextWithMath text="$7x$" /> 円、ジュース代 <TextWithMath text="$5y$" /> 円なので <TextWithMath text="$7x+5y$" /> 円です。</p>
          }
        },
        {
          id: 2, title: '② 「以下」を不等号で表す',
          content: <p>「2000円以下」は2000円ちょうどもふくみます。</p>,
          quiz: {
            type: 'choice',
            question: '正しい不等式はどれ？',
            options: ['7x + 5y < 2000', '7x + 5y ≦ 2000', '7x + 5y ≧ 2000'],
            correctAnswer: '7x + 5y ≦ 2000',
            explanation: <p>「以下」は等号をふくむので <strong><TextWithMath text="$7x+5y \leqq 2000$" /></strong> です。「未満」なら &lt; を使います。</p>
          }
        }
      ]
    },
    {
      id: "5",
      title: "5. ねじれの位置にある辺",
      knowledge: ["空間における直線の位置関係", "ねじれの位置"],
      originalText: (
        <div>
          <p>右の図の立方体ABCD−EFGHにおいて、辺ABとねじれの位置にある辺の数はいくつか。</p>
          <CubeFig />
        </div>
      ),
      steps: [
        {
          id: 1, title: '① ねじれの位置の意味',
          content: <p>ねじれの位置とは「平行でもなく、交わりもしない」2直線の関係です。立方体の辺は全部で12本。ABと平行な辺・交わる辺を除けば残りがねじれの位置です。</p>,
          quiz: {
            type: 'choice',
            question: '辺ABと平行な辺はいくつ？',
            options: ['1本', '3本', '4本'],
            correctAnswer: '3本',
            explanation: <p>DC、EF、HG の3本です。</p>
          }
        },
        {
          id: 2, title: '② 交わる辺を数える',
          content: <p>点A・点Bを端にもつ辺が、ABと交わる辺です（AB自身は除く）。</p>,
          quiz: {
            type: 'choice',
            question: '辺ABと交わる辺はいくつ？',
            options: ['2本', '4本', '6本'],
            correctAnswer: '4本',
            explanation: <p>Aから出るAD、AE、Bから出るBC、BF の4本です。</p>
          }
        },
        {
          id: 3, title: '③ 残りを数える',
          content: <p>12本から、AB自身・平行な辺・交わる辺を引きます。</p>,
          quiz: {
            type: 'choice',
            question: '辺ABとねじれの位置にある辺の数は？',
            options: ['4', '5', '8'],
            correctAnswer: '4',
            explanation: <p><TextWithMath text="$12-1-3-4=4$" />。CG、DH、EH、FG の <strong>4本</strong> です。AB自身を引き忘れると「5」になります。</p>
          }
        }
      ]
    },
    {
      id: "6",
      title: "6. 反比例の式",
      knowledge: ["反比例 y = a/x"],
      originalText: <p><TextWithMath text="$y$" /> は <TextWithMath text="$x$" /> に反比例し、<TextWithMath text="$x=-2$" /> のとき <TextWithMath text="$y=8$" /> である。<TextWithMath text="$y$" /> を <TextWithMath text="$x$" /> の式で表しなさい。</p>,
      steps: [
        {
          id: 1, title: '① 比例定数を求める',
          content: <p>反比例は <TextWithMath text="$y=\frac{a}{x}$" />、つまり <TextWithMath text="$a = xy$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '比例定数 a はいくつ？',
            options: ['−4', '−16', '16'],
            correctAnswer: '−16',
            explanation: <p><TextWithMath text="$a = (-2)\times 8 = -16$" /> です。「−4」は <TextWithMath text="$y=ax$" />（比例）と取り違えたときの答えです。</p>
          }
        },
        {
          id: 2, title: '② 式を書く',
          content: <p>求めた比例定数を <TextWithMath text="$y=\frac{a}{x}$" /> に入れます。</p>,
          quiz: {
            type: 'choice',
            question: 'y を x の式で表すと？',
            options: ['y = −16/x', 'y = 16/x', 'y = −4x'],
            correctAnswer: 'y = −16/x',
            explanation: <p><strong><TextWithMath text="$y = -\frac{16}{x}$" /></strong>。検算：<TextWithMath text="$x=-2$" /> を入れると <TextWithMath text="$-16 \div (-2) = 8$" /> で合っています。</p>
          }
        }
      ]
    },
    {
      id: "7",
      title: "7. 円周角と中心角",
      knowledge: ["円周角の定理", "中心角は円周角の2倍"],
      originalText: (
        <div>
          <p>右の図において、点A、B、Cは円Oの周上の点である。<TextWithMath text="$\angle x$" /> の大きさを求めなさい。</p>
          <CircleAngleFig />
          <p className="text-xs text-slate-500">※図：∠AOC（点Bがある側の角）が134°、∠ABC が x</p>
        </div>
      ),
      steps: [
        {
          id: 1, title: '① ∠x が見ている弧はどっち？',
          content: <p>∠x（∠ABC）は円周角です。円周角は「頂点Bと反対側の弧AC」に対応します。134°の角は点Bの側にあるので、∠xに対応する中心角は134°ではありません。</p>,
          quiz: {
            type: 'choice',
            question: '∠x に対応する中心角（Bをふくまない弧ACの中心角）は何度？',
            options: ['134°', '226°', '46°'],
            correctAnswer: '226°',
            explanation: <p>中心のまわりは360°なので <TextWithMath text="$360^\circ - 134^\circ = 226^\circ$" /> です。</p>
          }
        },
        {
          id: 2, title: '② 円周角を求める',
          content: <p>円周角は、同じ弧に対する中心角の半分です。</p>,
          quiz: {
            type: 'choice',
            question: '∠x は何度？',
            options: ['67°', '113°', '134°'],
            correctAnswer: '113°',
            explanation: (
              <div>
                <p><TextWithMath text="$226^\circ \div 2 = 113^\circ$" />。答えは <strong>113°</strong>。</p>
                <p className="mt-2">「67°」は134°をそのまま半分にした典型ミス。図でも∠xは鈍角に見えるので、67°はおかしいと気づけます。</p>
                <p className="mt-2 text-sm">検算：四角形OABCで、∠OAB＋∠OCB＝360°−134°−113°＝113°。OA=OB=OCの二等辺三角形2つから ∠OBA＋∠OBC＝∠OAB＋∠OCB となり、∠x＝113°と一致します。</p>
              </div>
            )
          }
        }
      ]
    },
    {
      id: "8",
      title: "8. 相似な図形の面積比",
      knowledge: ["相似比と面積比"],
      originalText: <p>△ABCと△DEFは相似であり、その相似比は 3 : 5 である。このとき、△DEFの面積は△ABCの面積の何倍か求めなさい。</p>,
      steps: [
        {
          id: 1, title: '① 面積比を求める',
          content: <p>相似比が <TextWithMath text="$m:n$" /> のとき、面積比は <TextWithMath text="$m^2:n^2$" /> です。</p>,
          quiz: {
            type: 'choice',
            question: '△ABC と △DEF の面積比は？',
            options: ['3 : 5', '9 : 25', '27 : 125'],
            correctAnswer: '9 : 25',
            explanation: <p><TextWithMath text="$3^2 : 5^2 = 9:25$" />。27:125 は体積比（3乗）です。</p>
          }
        },
        {
          id: 2, title: '② 何倍かを求める',
          content: <p>△DEF が △ABC の何倍か → △DEF ÷ △ABC を計算します。</p>,
          quiz: {
            type: 'choice',
            question: '△DEF の面積は △ABC の何倍？',
            options: ['9/25倍', '25/9倍', '5/3倍'],
            correctAnswer: '25/9倍',
            explanation: <p><TextWithMath text="$25 \div 9 = \frac{25}{9}$" /> 倍。わる順番を逆にすると 9/25 になってしまうので注意。</p>
          }
        }
      ]
    }
  ]
};
