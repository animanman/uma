let umaped = new Vue({
el: '#umaped',
data: {


//ウマ娘のモデル馬
umamusme: [
          {character: 'スペシャルウィーク',
            id: 0001,
            parentped: {
              male: 700001,
              female: 300001
            }
          },
          {character: 'サイレンススズカ',
            id: 0002},
          {character: 'トウカイテイオー',
            id: 0003},
          {character: 'マルゼンスキー',
            id: 0004},
          {character: 'フジキセキ',
            id: 0005},
          {character: 'オグリキャップ',
            id: 0006},
          {character: 'ゴールドシップ',
            id: 0007},
          {character: 'ウオッカ',
            id: 0008},
          {character: 'ダイワスカーレット',
            id: 0009},
          {character: 'タイキシャトル',
            id: 0010},
          {character: 'グラスワンダー',
            id: 0011},
          {character: 'ヒシアマゾン',
            id: 0012},
          {character: 'メジロマックイーン',
            id: 0013},
          {character: 'エルコンドルパサー',
            id: 0014},
          {character: 'テイエムオペラオー',
            id: 0015},
          {character: 'ナリタブライアン',
            id: 0016},
          {character: 'シンボリルドルフ',
            id: 0017},
          {character: 'エアグルーヴ',
            id: 0018},
          {character: 'アグネスデジタル',
            id: 0019},
          {character: 'セイウンスカイ',
            id: 0020},
          {character: 'タマモクロス',
            id: 0021},
          {character: 'ファインモーション',
            id: 0022},
          {character: 'ビワハヤヒデ',
            id: 0023},
          {character: 'マヤノトップガン',
            id: 0024},
          {character: 'マンハッタンカフェ',
            id: 0025},
          {character: 'ミホノブルボン',
            id: 0026},
          {character: 'メジロライアン',
            id: 0027},
          {character: 'ヒシアケボノ',
            id: 0028},
          {character: 'ユキノビジン',
            id: 0029},
          {character: 'ライスシャワー',
            id: 0030},
          {character: 'アイネスフウジン',
            id: 0031},
          {character: 'アグネスタキオン',
            id: 0032},
          {character: 'アドマイヤベガ',
            id: 0033},
          {character: 'イナリワン',
            id: 0034},
          {character: 'ウイニングチケット',
            id: 0035},
          {character: 'エアシャカール',
            id: 0036},
          {character: 'エイシンフラッシュ',
            id: 0037},
          {character: 'カレンチャン',
            id: 0038},
          {character: 'カワカミプリンセス',
            id: 0039},
          {character: 'ゴールドシチー',
            id: 0040},
          {character: 'サクラバクシンオー',
            id: 0041},
          {character: 'シーキングザパール',
            id: 0042},
          {character: 'シンコウウインディ',
            id: 0043},
          {character: 'スイープトウショウ',
            id: 0044},
          {character: 'スーパークリーク',
            id: 0045},
          {character: 'スマートファルコン',
            id: 0046},
          {character: 'ゼンノロブロイ',
            id: 0047},
          {character: 'トーセンジョーダン',
            id: 0048},
          {character: 'ナカヤマフェスタ',
            id: 0049},
          {character: 'ナリタタイシン',
            id: 0050},
          {character: 'ニシノフラワー',
            id: 0051},
          {character: 'ハルウララ',
            id: 0052},
          {character: 'バンブーメモリー',
            id: 0053},
          {character: 'ビコーペガサス',
            id: 0054},
          {character: 'マーベラスサンデー',
            id: 0055},
          {character: 'マチカネフクキタル',
            id: 0056},
          {character: 'ミスターシービー',
            id: 0057},
          {character: 'メイショウドトウ',
            id: 0058},
          {character: 'メジロドーベル',
            id: 0059},
          {character: 'ナイスネイチャ',
            id: 0060},
          {character: 'キングヘイロー',
            id: 0061},
          {character: 'マチカネタンホイザ',
            id: 0062},
          {character: 'イクノディクタス',
            id: 0063},
          {character: 'メジロパーマー',
            id: 0064},
          {character: 'ダイタクヘリオス',
            id: 0065},
          {character: 'ツインターボ',
            id: 0066},
          {character: 'サトノダイヤモンド',
            id: 0067},
          {character: 'キタサンブラック',
            id: 0068},
          {character: 'メジロアルダン',
            id: 0069},
          {character: 'サクラチヨノオー',
            id: 0070},
          {character: 'シリウスシンボリ',
            id: 0071},
          {character: 'ヤエノムテキ',
            id: 0072},
          {character: 'ツルマルツヨシ',
            id: 0073},
          {character: 'メジロブライト',
            id: 0074},
          {character: 'デアリングタクト',
            id: 0075},
          {character: 'サクラローレル',
            id: 0076},
          {character: 'ナリタトップロード',
            id: 0077},
          {character: 'ヤマニンゼファー',
            id: 0078},
          {character: 'シンボリクリスエス',
            id: 0079},
          {character: 'タニノギムレット',
            id: 0080},
          {character: 'アストンマーチャン',
            id: 0081},
          {character: '？？？',
            id: 0082},
          {character: '？？？',
            id: 0083},
          {character: 'コパノリッキー',
            id: 0084},
          {character: 'サイレンススズカ',
            id: 0085},
          {character: 'ホッコータルマエ',
            id: 0086},
          {character: 'ワンダーアキュート',
            id: 0087}
        ],



{Race: horse,
list: {

{gender: stallion,genderlist: [

//サンデー父系10代
{name: 'サンデーサイレンス',
id: 700001,
parentped: {
male: 700002,
//female: 3
}
},

{name: 'Halo',
id: 700002,
parentped: {
male: 700003,
//female: 3
}
},

{name: 'Hail to Reason',
id: 700003,
parentped: {
male: 700004,
//female: 3
}
},

{name: 'Turn-to',
id: 700004,
parentped: {
male: 700005,
//female: 3
}
},

{name: 'Royal Charger',
id: 700005,
parentped: {
male: 700006,
//female: 3
}
},

{name: 'Nearco',
id: 700006,
parentped: {
male: 700007,
//female: 3
}
},

{name: 'Pharos',
id: 700007,
parentped: {
male: 700008,
//female: 3
}
},

{name: 'Phalaris',
id: 700008,
parentped: {
male: 700009,
//female: 3
}
},

{name: 'Polymelus',
id: 700009,
parentped: {
male: 700010,
//female: 3
}
},

{name: 'Cyllene',
id: 700010
},

//サンデー母父系10
{name: 'Understanding',
id: 700011,
parentped: {
male: 700012,
//female: 3
}
},

{name: 'Promised Land',
id: 700012,
parentped: {
male: 700013,
//female: 3
}
},

{name: 'Palestinian',
id: 700013,
parentped: {
male: 700014,
//female: 3
}
},

{name: 'Sun Again',
id: 700014,
parentped: {
male: 700015,
//female: 3
}
},

{name: 'Sun Teddy',
id: 700015,
parentped: {
male: 700016,
//female: 3
}
},

{name: 'Teddy',
id: 700016,
parentped: {
male: 700017,
//female: 3
}
},

{name: 'Ajax',
id: 700017,
parentped: {
male: 700018,
//female: 3
}
},

{name: 'Flying Fox',
id: 700018,
parentped: {
male: 700019,
//female: 3
}
},

{name: 'Orme',
id: 700019,
parentped: {
male: 700020,
//female: 3
}
},

{name: 'Ormonde',
id: 700020
},

//サンデー父母父系
{name: 'Cosmic Bomb',
id: 700021,
parentped: {
male: 700022,
//female: 3
}
},

{name: 'Pharamond',
id: 700022,
parentped: {
male: 700008,
//female: 3
}
},

//サンデー母母父系8
{name: 'Montparnasse',
id: 700023,
parentped: {
male: 700024,
//female: 3
}
},

{name: 'Gulf Stream',
id: 700024,
parentped: {
male: 700025,
//female: 3
}
},

{name: 'Hyperion',
id: 700025,
parentped: {
male: 700026,
//female: 3
}
},

{name: 'Gainsborough',
id: 700026,
parentped: {
male: 700027,
//female: 3
}
},

{name: 'Bayardo',
id: 700027,
parentped: {
male: 700028,
//female: 3
}
},

{name: 'Bay Ronald',
id: 700028,
parentped: {
male: 700029,
//female: 3
}
},

{name: 'Hampton',
id: 700029,
parentped: {
male: 700030,
//female: 3
}
},

{name: 'Lord Clifden',
id: 700030
},

//サンデー父父母父系8
{name: 'Blue Swords',
id: 700031,
parentped: {
male: 700032,
//female: 3
}
},

{name: 'Blue Larkspur',
id: 700032,
parentped: {
male: 700033,
//female: 3
}
},

{name: 'Black Servant',
id: 700033,
parentped: {
male: 700034,
//female: 3
}
},

{name: 'Black Toney',
id: 700034,
parentped: {
male: 700035,
//female: 3
}
},

{name: 'Peter Pan',
id: 700035,
parentped: {
male: 700036,
//female: 3
}
},

{name: 'Commando',
id: 700036,
parentped: {
male: 700037,
//female: 3
}
},

{name: 'Domino',
id: 700037,
parentped: {
male: 700038,
//female: 3
}
},

{name: 'Himyar',
id: 700038
},

//サンデー父母母父系8
{name: 'Mahmoud',
id: 700039,
parentped: {
male: 700040,
//female: 3
}
},

{name: 'Blenheim',
id: 700040,
parentped: {
male: 700041,
//female: 3
}
},

{name: 'Blandford',
id: 700041,
parentped: {
male: 700042,
//female: 3
}
},

{name: 'Swynford',
id: 700042,
parentped: {
male: 700043,
//female: 3
}
},

{name: 'John o Gaunt',
id: 700043,
parentped: {
male: 700044,
//female: 3
}
},

{name: 'Isinglass',
id: 700044,
parentped: {
male: 700045,
//female: 3
}
},

{name: 'Isonomy',
id: 700045,
parentped: {
male: 700046,
//female: 3
}
},

{name: 'Sterling',
id: 700046
}

]},

{gender: broodmare,genderlist: [

//スペちゃん母系
{name: 'キャンペーンガール',
id: 300001,
parentped: {
male: 0004,
female: 300002
}
},

{name: 'レディーシラオキ',
id: 300002,
parentped: {
//male:セントクレスピン,
female: 300003
}
},

{horsename: 'ミスアシヤガワ',
id: 300003,
parentped: {
//male:ヒンドスタン,
female: 300004
}
},

{horsename: 'シラオキ',
id: 300004,
parentped: {
//male:プリメロ,
female: 300005
}
},

{horsename: '第弐スターカツプ',
id: 300005,
parentped: {
//male:ダイオライト,
female: 300006
}
},

{horsename: 'スターカツプ',
id: 300006,
parentped: {
//male:シアンモア,
female: 300007
}
},

{horsename: 'フロリスト',
id: 300007,
parentped: {
//male:ガロン,
female: 300008
}
},

{horsename: '第四フロリースカツプ',
id: 300008,
parentped: {
//male:インタグリオー,
female: 300009
}
},

{horsename: 'フロリースカツプ',
id: 300009,
parentped: {
//male:Florizel,
female: 300010
}
},

{horsename: 'Stirrup Cup',
id: 300010
}

]}

}}

}});
