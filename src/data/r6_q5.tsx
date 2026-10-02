import React from 'react';
import { Step } from '@/components/StepLayout';
import { TextWithMath, MathText } from '@/components/MathText';
import { MajorQuestionData } from './r7';

export const q5Data: MajorQuestionData = {
  id: "q5",
  title: "令和6年 大問5：動く図形と重なる面積",
  subs: [
    {
      id: "1",
      title: "(1) 特定の時間の重なる面積を求める",
      knowledge: ['図形の移動と面積', '場合分け', '関数の利用', '空間把握'],
      originalText: (
        <div className="space-y-4 text-sm leading-relaxed border-2 border-slate-300 dark:border-slate-600 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-inner">
          <h3 className="font-bold border-b border-slate-300 pb-2 mb-4 text-slate-800 dark:text-slate-100">【元の問題文（抜粋）】</h3>
          <p>
            <TextWithMath text="$AB=a$" /> cm, <TextWithMath text="$BC=b$" /> cmの長方形ABCDと、1辺の長さが6cmの正方形の右上部から1辺の長さが3cmの正方形を切り取ったL字型の図形EFGHIJがある。辺BCと辺FGは直線 <TextWithMath text="$\ell$" /> 上にあり、点Cと点Fは同じ位置にある。図形EFGHIJを固定し、長方形ABCDを直線 <TextWithMath text="$\ell$" /> に沿って毎秒1cmで点Bが点Gと同じ位置になるまで移動させる。
          </p>
          <p>
            長方形ABCDが移動し始めてから <TextWithMath text="$x$" /> 秒後の2つの図形が重なった部分の面積を <TextWithMath text="$y$" /> cm²とする。
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/30 p-4 mt-4 border border-orange-200 dark:border-orange-800">
            <p className="font-bold mb-2">(1) <TextWithMath text="$a = 2$" />, <TextWithMath text="$b = 4$" /> とする。</p>
            <p>
              下の表は <TextWithMath text="$x$" /> と <TextWithMath text="$y$" /> の関係をまとめたものである。表の①、②に当てはまる数をそれぞれ求めなさい。
            </p>
            <div className="flex justify-center mt-4">
              <table className="border-collapse border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800">
                <tbody>
                  <tr>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12"><TextWithMath text="$x$" /></td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">0</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">1</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">4</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">7</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12"><TextWithMath text="$y$" /></td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">0</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">2</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12 bg-orange-100 dark:bg-orange-800 font-bold">①</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12">…</td>
                    <td className="border border-slate-400 dark:border-slate-500 p-2 text-center w-12 bg-orange-100 dark:bg-orange-800 font-bold">②</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
      steps: [
        {
          id: 1,
          title: '動く図形（長方形ABCD）のサイズを確認する',
          content: (
            <div className="space-y-4">
              <p>まずは動く図形である「長方形ABCD」の大きさを確認しましょう。</p>
              <p>問題(1)では、縦の長さ <TextWithMath text="$a=2$" />、横の長さ <TextWithMath text="$b=4$" /> と指定されています。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'この長方形の面積はいくつですか？',
            options: ['2 cm²', '4 cm²', '8 cm²'],
            correctAnswer: '8 cm²',
            explanation: <p>縦が2cm、横が4cmなので、<TextWithMath text="$2 \times 4 = 8$" /> で 8 cm² です。</p>
          }
        },
        {
          id: 2,
          title: '固定されている図形（L字型）の形を確認する',
          content: (
            <div className="space-y-4">
              <p>次に、動かない図形である「L字型の図形」の形を整理します。</p>
              <p>1辺6cmの正方形の右上から、3cm×3cmの正方形を切り取った形です。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'L字型の図形を「左側」と「右側」の2つの長方形に分けたとき、左側（幅3cmの部分）の高さは何cmですか？',
            options: ['3 cm', '6 cm', '9 cm'],
            correctAnswer: '6 cm',
            explanation: <p>もともと1辺6cmの正方形から右上を切り取ったので、左半分は切り取られずに高さ6cmのまま残っています。右半分の高さは3cmです。</p>
          }
        },
        {
          id: 3,
          title: '長方形がどのように動くかを理解する',
          content: (
            <div className="space-y-4">
              <p>長方形ABCDは、直線上に沿って「毎秒1cm」の速さで右に移動します。「x秒後」というのは、移動し始めてからの時間です。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '毎秒1cmで右に進むとき、「x秒後」には長方形の先頭（右端の点C）は何cm進んでいることになりますか？',
            options: ['x cm', '2x cm', 'x/2 cm'],
            correctAnswer: 'x cm',
            explanation: <p>速さ1cm/秒 × 時間x秒 = x cm なので、x秒後には右にx cm進んでいます。</p>
          }
        },
        {
          id: 4,
          title: 'x=4 のときの長方形の位置を考える',
          content: (
            <div className="space-y-4">
              <p>いよいよ表の空欄①（x=4のとき）について考えていきましょう。</p>
              <p>長方形は毎秒1cmで進むので、4秒後にはどうなっているかをイメージします。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'x=4 のとき、長方形の右端（点C）は、スタート地点から何cm右に進んだ位置にありますか？',
            options: ['2 cm', '4 cm', '8 cm'],
            correctAnswer: '4 cm',
            explanation: <p>毎秒1cmで4秒間進むので、右端は 4cm の位置にあります。</p>
          }
        },
        {
          id: 5,
          title: 'x=4 のときの長方形とL字型の関係をイメージする',
          content: (
            <div className="space-y-4">
              <p>長方形の右端が4cmの位置にあるとき、長方形の左端はどこにあるでしょうか？</p>
              <p>長方形の横幅は4cmなので、左端は <TextWithMath text="$4 - 4 = 0$" /> cm（つまりスタート地点）にあります。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'このとき、長方形はL字型の左側部分（幅3cm）と右側部分にまたがります。長方形の高さは2cmですが、L字型の図形からはみ出しますか？',
            options: ['はみ出す', 'はみ出さない', '条件が足りずわからない'],
            correctAnswer: 'はみ出さない',
            explanation: <p>長方形の高さは2cmで、L字型の最も低い部分（右半分の高さ3cm）よりも低いため、上にはみ出すことはありません。完全にL字型の中に収まっています。</p>
          }
        },
        {
          id: 6,
          title: 'x=4 のとき（空欄①）の面積を計算する',
          content: (
            <div className="space-y-4">
              <p>x=4 のとき、長方形ABCDはすっぽりとL字型の図形の内側に収まっていることがわかりました。</p>
              <p>「重なる面積 y」は、長方形そのものの面積になります。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'それでは、表の空欄①（x=4のときのyの値）はいくつになりますか？',
            options: ['6', '8', '12'],
            correctAnswer: '8',
            explanation: <p>完全に収まっているので、長方形の面積そのもの（<TextWithMath text="$2 \times 4 = 8$" />）が重なる面積になります。これが空欄①の答えです。</p>
          }
        },
        {
          id: 7,
          title: 'x=7 のときの長方形の「右端」の位置を考える',
          content: (
            <div className="space-y-4">
              <p>次は表の空欄②（x=7のとき）について考えます。</p>
              <p>L字型の図形全体の幅は、もとの正方形の1辺と同じ「6cm」しかありません。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'x=7 のとき、長方形の右端はスタート地点から何cmの位置にありますか？',
            options: ['6 cm', '7 cm', '8 cm'],
            correctAnswer: '7 cm',
            explanation: <p>毎秒1cmで7秒進むので、右端は 7cm の位置にあります。L字型の全体の幅（6cm）をすでに通り越していることに注意しましょう！</p>
          }
        },
        {
          id: 8,
          title: 'x=7 のときの長方形の「左端」の位置を考える',
          content: (
            <div className="space-y-4">
              <p>長方形の右端が7cmの位置にあるということは、L字型の外（右側）へ 1cm 分（7cm - 6cm = 1cm）はみ出しているということです。</p>
              <p>では、長方形の左端はどこにあるでしょうか？</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '長方形の横幅は「4cm」です。右端が7cmの位置にあるとき、長方形の左端は何cmの位置にありますか？',
            options: ['1 cm', '2 cm', '3 cm'],
            correctAnswer: '3 cm',
            explanation: <p>右端が7cmで幅が4cmなので、<TextWithMath text="$7 - 4 = 3$" /> cmの位置に左端があります。</p>
          }
        },
        {
          id: 9,
          title: 'x=7 のときに長方形がL字型と「重なっている区間」を求める',
          content: (
            <div className="space-y-4">
              <p>左端は 3cm、右端は 7cm の位置にあることがわかりました。</p>
              <p>しかし、L字型の図形があるのは 0cm から 6cm までの区間だけです。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: '長方形がL字型の図形と実際に「重なっている」のは、何cm から 何cm までの区間ですか？',
            options: ['3cm から 7cm', '0cm から 6cm', '3cm から 6cm'],
            correctAnswer: '3cm から 6cm',
            explanation: <p>長方形が存在する 3cm〜7cm のうち、L字型が存在する 6cm までの部分だけが重なります。つまり 3cm から 6cm の区間です。</p>
          }
        },
        {
          id: 10,
          title: 'x=7 のとき（空欄②）の面積を計算する',
          content: (
            <div className="space-y-4">
              <p>最後に、重なっている部分の面積を計算しましょう。</p>
              <p>重なっている区間は 3cm から 6cm までなので、横の長さは <TextWithMath text="$6 - 3 = 3$" /> cm です。</p>
              <p>長方形の縦の長さは 2cm で、L字型の右半分（高さ3cm）より低いため、縦はすべて重なっています。</p>
            </div>
          ),
          quiz: {
            type: 'choice',
            question: 'x=7 のときの重なる面積 y はいくつになりますか？',
            options: ['4', '6', '8'],
            correctAnswer: '6',
            explanation: (
              <div className="space-y-2 mt-2">
                <MathText block math="y = 3 \times 2 = 6" />
                <p>横が3cm、縦が2cmの長方形が重なっているので、<TextWithMath text="$3 \times 2 = 6$" /> です。これが空欄②の答えになります！</p>
              </div>
            )
          }
        }
      ]
    }
  ]
};
