/*
var flow_goodnight_text = {
    stage0: ['msg_39']
}

var flow_goodnight_voice = {
    stage0: ['msg_39']
}
*/

var flow_morning_text = {
    stage0: ['msg_14', 'msg_36']
}

var flow_morning_voice = {
    stage0: ['msg_14', 'msg_36']
}

var flow_evening_text = {
    stage0: ['msg_14', 'msg_37']
}

var flow_evening_voice = {
    stage0: ['msg_14', 'msg_37']
}

var flow_night_text = {
    stage0: ['msg_14', 'msg_38'],
    stage1: ['msg_39']
}

var flow_night_voice = {
    stage0: ['msg_14', 'msg_38'],
    stage1: ['msg_39']
}

var flow_love_text = {
    stage0: ['msg_32']
}

var flow_love_voice = {
    stage0: ['msg_32']
}

var flow_fashion_text = {
    stage0: ['msg_33']
}

var flow_fashion_voice = {
    stage0: ['msg_33']
}

var flow_meetyou_text = {
    stage0: ['msg_34']
}

var flow_meetyou_voice = {
    stage0: ['msg_34']
}

var flow_anotherquestion_text = {
    stage0: ['msg_35']
}

var flow_anotherquestion_voice = {
    stage0: ['msg_35']
}

var flow_level1_text = {
    stage0: ['msg_29']
}

var flow_level1_voice = {
    stage0: ['msg_29']
}

var flow_level2_text = {
    stage0: ['msg_30']
}

var flow_level2_voice = {
    stage0: ['msg_30']
}

var flow_level3_text = {
    stage0: ['msg_31']
}

var flow_level3_voice = {
    stage0: ['msg_31']
}

var flow_second_text = {
    stage0: ['msg_26'],
    stage1: ['msg_27'],
    stage2: ['msg_28'],
    stage3: ['msg_29'],
    stage4: ['msg_30']
};

var flow_second_voice = {
    stage0: ['msg_26'],
    stage1: ['msg_27'],
    stage2: ['msg_28'],
    stage3: ['msg_29'],
    stage4: ['msg_30']
};

var flow_reprompt_text = {
    stage0: ['msg_70'],
    stage1: ['msg_1'],
    stage2: ['msg_2'],
    stage3: ['msg_3'],
    stage4: ['msg_4'],
    stage5: ['msg_5'],
    stage6: ['msg_7'],
    stage7: ['msg_8'],
    stage8: ['msg_13'],
    stage9: ['msg_14'],
    stage10: ['msg_15'],
    stage11: ['msg_17'],
};

var flow_reprompt_voice = {
    stage0: ['msg_70'],
    stage1: ['msg_1'],
    stage2: ['msg_2'],
    stage3: ['msg_3'],
    stage4: ['msg_4'],
    stage5: ['msg_5'],
    stage6: ['msg_7'],
    stage7: ['msg_8'],
    stage8: ['msg_13'],
    stage9: ['msg_14'],
    stage10: ['msg_15'],
    stage11: ['msg_17'],
};


var flow_another_text = {
    stage0: ['msg_24']
}

var flow_another_voice = {
    stage0: ['msg_24']
}

var flow_goal_text = {
    stage0: ['msg_25']
}

var flow_goal_voice = {
    stage0: ['msg_25']
}

var flow_help_text = {
    stage0: ['msg_23']
}

var flow_help_voice = {
    stage0: ['msg_23']
}

var flow_unknown_text = {
    stage0: [],
    stage1: ['msg_22']
}

var flow_unknown_voice = {
    stage0: [],
    stage1: ['msg_22']
}

var flow_noinput_text = {
    stage0: [],
    stage1: [],
    stage2: ['msg_22']
}

var flow_noinput_voice = {
    stage0: [],
    stage1: [],
    stage2: ['msg_22']
}

var flow_quit_text = {
    stage0: ['msg_21']
}

var flow_quit_voice = {
    stage0: ['msg_21']
}

var flow_yes_text = {
    stage0: ['msg_15'],
    stage1: ['msg_16'],
    stage2: ['msg_17'],
    //40番台ランダム
    stage3: ['msg_41'],
    stage4: ['msg_43'],
    stage5: ['msg_45'],
    stage6: ['msg_21']

}

var flow_yes_voice = {
    stage0: ['msg_15'],
    stage1: ['msg_16'],
    stage2: ['msg_17'],
    //40番台ランダム
    stage3: ['msg_41'],
    stage4: ['msg_43'],
    stage5: ['msg_45'],
    stage6: ['msg_21']
}


var flow_no_text = {
    stage0: ['msg_22'],
    stage1: ['msg_23'],
    stage2: ['msg_24'],
    stage3: ['msg_25'],
    stage4: ['msg_26'],
    stage5: ['msg_27'],
    stage6: ['msg_28']
}

var flow_no_voice = {
    stage0: ['msg_22'],
    stage1: ['msg_23'],
    stage2: ['msg_24'],
    stage3: ['msg_25'],
    stage4: ['msg_26'],
    stage5: ['msg_27'],
    stage6: ['msg_28']
}

var flow_main_text = {
    stage0: ['msg_0'],
    stage1: ['msg_1'],
    stage2: ['msg_2'],
    stage3: ['msg_3'],
    //msg_40, 42, 44 ランダムにだす
    stage4: ['msg_4', 'msg_40', 'msg_5'],
    stage5: ['msg_6', 'msg_42', 'msg_7'],
    stage6: ['msg_8', 'msg_44', 'msg_9'],
    stage7: ['msg_10', 'msg_11', 'msg_12'],
    stage8: ['msg_13']
};

var flow_main_voice = {
    stage0: ['msg_0'],
    stage1: ['msg_1'],
    stage2: ['msg_2'],
    stage3: ['msg_3'],
    //msg_40, 42, 44 ランダムにだす
    stage4: ['msg_4', 'msg_40', 'msg_5'],
    stage5: ['msg_6', 'msg_42', 'msg_7'],
    stage6: ['msg_8', 'msg_44', 'msg_9'],
    stage7: ['msg_10', 'msg_11', 'msg_12'],
    stage8: ['msg_13']
};

var suggestion = {
    stage0: ['はい', 'いいえ'],
    stage1: ['はい', 'いいえ'],
    stage2: ['初級', '中級', '上級'],
    stage3: ['はい', 'いいえ','よろこんで', 'イエス'],
    stage4: ['はい', 'いいえ'],
    stage5: ['はい', 'いいえ'],
    stage6: ['はい', 'いいえ'],
    stage7: ['好きな人がいる', '着たい服がある', '小野寺くんに会いたいから', 'その他'],
    stage8: ['はい', 'いいえ'],
    stage9: []
};


var response = {
    stage0: ['BasicCard'],
    stage1: ['SimpleResponse'],
    stage2: ['SimpleResponse'],
    stage3: ['SimpleResponse'],
    stage4: ['SimpleResponse'],
    stage5: ['SimpleResponse'],
    stage6: ['SimpleResponse'],
    stage7: ['SimpleResponse'],
    stage8: ['SimpleResponse'],
    stage9: ['SimpleResponse'],
    stage10: ['SimpleResponse'],
    stage11: ['BasicCard'],
};

var text = {
    //main
    msg_0: ['どうも、はじめまして。俺は成瀬桂って言います。今日から君のプライベートトレーナーとして１日３つのトレーニングのサポートをするから。よろしくな。まあ立ち話もなんだし、隣に座るぞ…よっこいしょ。あ、そうそう、俺が話してる途中で言いたいことがあるときは、この魔法の言葉をつかうんだ。「Ok google,」そうすると、話を遮って質問することができるぞ。そうだな……例えば「ok google, 分からない」って言ったら、トレーニングの内容をもう一回教えてやるからな。俺の言ってることわかるか？「はい」か「いいえ」で答えてくれ。'],
    msg_1: ['さて、君は俺の指示に従うだけで目標達成できる…はずだ。くれぐれもサボらずに。約束できるか？'],
    msg_2: ['それじゃあまずは、メニューを決めようか。初級・中級・上級で、希望するレベルを教えてくれ。普段ほとんど運動をしないなら初級。たまにジムに通ったりしてるな。中級。運動が得意なら上級だな。君は、どれがいい？'],
    msg_3: ['よし。これでメニュー設定完了だ。早速トレーニングを始めるけど、その前に、一つだけルールがある。トレーニング中は「はい」か「イエス」か「よろこんで」で返事すること。「ダメ」「無理」「やだ」はなしだぞ？…はは、そんな顔するなよ。安心しろ。どうしても無理なときだけ「やめる」って言って良いから。じゃあ、覚悟はいいか？お返事ど〜ぞ？'],
    msg_4: ['それじゃあまずは、', '１つ目のメニューは', '最初は'],
    msg_5: ['はじめてもいいか？', 'はじめる準備はいいか？', '準備できたか？', 'ちゃんと理解できた？', '体勢は整ったか？', '始めるけど大丈夫？'],
    msg_6: ['次は、', '２つ目のトレーニングは', 'お次は'],
    msg_7: ['はじめてもいいか？', 'はじめる準備はいいか？', '準備できたか？', 'ちゃんと理解できた？', '体勢は整ったか？', '始めるけど大丈夫？'],
    msg_8: ['次が最後のメニューだ。', '３つ目のトレーニングは', '最後のトレーニングは'],
    msg_9: ['はじめてもいいか？', 'はじめる準備はいいか？', '準備できたか？', 'ちゃんと理解できた？', '体勢は整ったか？', '始めるけど大丈夫？'],
    msg_10: ['よし、今日のメニューは終わりだ。お疲れさま。', 'これで３つのトレーニング全部終了だ。ちゃんとついてこれたな、お疲れさま。', 'よし、今日のところはこれで終わりだ。頑張って偉かったな。'],
    msg_11: ['深呼吸してクールダウンしよう。吸ってー。すぅーー。吐いてー。はぁーーー。', 'さあ、深呼吸をするぞ。吸ってー。すぅーー。吐いてー。はぁーーー。', '体を楽にして、深呼吸しよう。吸ってー。すぅーー。吐いてー。はぁーーー。'],
    msg_12: ['なかなか頑張ったじゃん。ちゃんと明日も続けろよ！そういえば、なんでトレーニングなんてやりたいと思ったの？好きな人がいるとか、着たい服があるとか？'],
    msg_13: ['毎日続けないと効果は出ないし、その高い目標も達成できないぞ？めげずに頑張れるか？'],
    msg_14: ['それじゃ、また「イケメンジムに繋いで」って言ってくれたらここに指導に来るからよろしくな。じゃあ、そうゆうわけで。'],
    //yes
    /*
    stage0: ['msg_15'],
    stage1: ['msg_16'],
    stage2: ['msg_17'],
    //40番台ランダム
    stage3: ['msg_41'],
    stage4: ['msg_43'],
    stage5: ['msg_45'],
    stage6: ['msg_21']
    */
    msg_15: ['お！飲み込みが早くてよろしい。その調子で頼んだぞ。'],
    msg_16: ['よし、良い返事だ。'],
    msg_17: ['ふうん、やけに素直じゃん。よし、忘れずにな'],
    msg_18: ['よし、まずは足を肩幅に開いて、そのまま前屈...(シナリオ未定)'],
    msg_19: ['よし、じゃあ行くぞ。俺のカウントにあわせてゆっくり腰を落として...(シナリオ未定)'],
    msg_20: ['オッケー。それじゃあ...(シナリオ未定)'],
    msg_21: ['よし、いい子だ。'],
    //no
    msg_22: ['あれ…おかしいな。まぁいいや…きっとやっていくうちに慣れるだろう。'],
    msg_23: ['おいおい、頼むからついてきてくれよ。'],
    msg_24: ['おいおい、「はい」か「イエス」か「よろこんで」だろ？わかったな？'],
    msg_25: ['わかった'],
    msg_26: ['OK'],
    msg_27: ['繰り返すぞ'],
    msg_28: ['おいおい、忘れたのか？「はい」か「イエス」か「喜んで」、だろ？さあ、覚悟を決めるんだな。'],
    // level
    msg_29: ['おぉ、初級か。まずは優しく…って、期待してるのか？ふっふっふ……甘いぞ。初級だからって安心したら痛い目に合うからな？'],
    msg_30: ['なるほど、中級…ね。君の思う中級よりキツくても、文句は言わせないぞ？（ニコッ）'],
    msg_31: ['ふ〜ん、上級か。なかなか強気だな。じゃあ遠慮なく、思いっきりやっちゃうな。'],
    //love
    msg_32:['え…それって俺のこと？……なんてな。じゃ、相手がびっくりするくらい可愛くなろうな。全力サポートするぞ。'],
    //fashion
    msg_33:['ウンウン。わかるぞ。スキニーパンツ、柄が可愛いワンピース、それにノースリーブとか…気に入った服を良い感じに着られたら最高だよな。お前がその服着たところ、俺も見てみたいし、全面協力させてもらおうか。'],
    //meetyou
    msg_34:['なにそれ…面白いね。俺を呼び出したからには、手加減しないぞ？（ニコッ）'],
    //anotherquestion
    msg_35:['そうか、まあ、目標があるならそれに向かって一緒に頑張ろうな。'],
    //morning
    msg_36:['今日も一日頑張ろうな。', 'じゃ、背筋伸ばして今日も1日がんばろーな。', '今日もファイトだ！じゃあな', 'それじゃあ、良い一日を', 'よし、今日も元気に、気合い入れていこう。それじゃ。'],
    //evening
    msg_37:['またな。', 'お疲れ。', 'お疲れ。', 'じゃあな', 'また明日呼んでくれよ。それじゃ', 'お疲れさん'],
    //night
    msg_38:['おやすみ', 'OK、じゃあ、おやすみ', 'ファ〜…（あくび）じゃあ、おやすみ。', 'じゃあ、夜更かし厳禁だからな。おやすみ。', 'ん〜さて、今日は遅いから休もっか。汗かいたならちゃんと着替えて寝ること。いいな？おやすみ'],
    //goodnight
    msg_39:['はい、おやすみ'],
    //training
    msg_40 :['足のストレッチだ。足を開いて立ってくれ。足幅は拳２個分くらいだ。'],
    msg_41 :['それじゃあ、まずは右足から。手を股関節あたりに当てて。右のつま先を上げるぞ。そのままお尻を引くようにお辞儀をして……。当てた手の指を股関節に挟む感じだ。足の裏の筋肉が伸びている感じがするか？じゃあ、このまま１８秒キープ。行くぞ。１、２、３、４、５、６、７、８、９、１０、１１、１２、１３、１４、あとちょっと、１５、１６、１７、１８。右足終わり。次、同じように左足だ。準備して。左のつま先を上げて、手を股関節に。お尻を後ろに引くようにお辞儀して。指は股関節に挟むように。よし……いいか？行くぞ。１、２、３、４、５、６、７、８、９、１０、１１、１２、１３、１４、もう少し、１５、１６、１７、１８。左足終わりだ。"'],
    msg_42 :['背中のストレッチだ。（よっこいしょ、と中腰になる息遣い）まずは膝を軽く曲げて中腰になれ。その次に、腕で大きな輪っかを作る感じで手を組む。ちょうど、コアラが木にしがみついているみたいなポーズだな。'],
    msg_43 :['コアラのポーズができたら、腕で作った輪っかの中に頭を入れろ。ヘソを覗く様に背中を丸めてくれ。そうしたら、へそから目を離して、右隣を覗いてくれ。背中の右側が伸びているな？そのまま１８秒キープ。行くぞ。１、２、３、４、５、６、７、８、９、１０、１１、１２、１３、１４、あとちょっと、１５、１６、１７、１８。終わり。次、左側も行くぞ。同じポーズで左隣を覗いてくれ。…そのまま１８秒キープ。行くぞ。１、２、３、４、５、６、７、８、９、１０、１１、１２、１３、１４、あとちょっと、１５、１６、１７、１８。終わりだ。'],
    msg_44 :['腕のストレッチをするぞ。まずは足を開いて立ってくれ。足幅はバランスが取りやすければ自由でいいからな。'],
    msg_45 :['よし、右腕のストレッチだ。まずは、左腕を曲げてくれ。そうしたら、左腕の上に右腕を乗せて。乗せた右腕を左側に引っ張って、腕を伸ばすぞ。そのまま１８秒キープ。カウント行くぞー。１、２、３、４、５、６、７、８、９、１０、１１、１２、１３、１４、あとちょっと、１５、１６、１７、１８。終わり。次、反対の左腕のストレッチだ。右腕を曲げて、その上に左腕を乗せる。乗せた左腕を右側に引っ張って、腕を伸ばすぞ。そのまま１８秒キープ。行くぞー。１、２、３、４、５、６、７、８、９、１０、１１、１２、１３、１４、あとちょっと、１５、１６、１７、１８。終わりー。'],
    msg_46 :['お腹のストレッチだ。まずはうつ伏せで寝てくれ。掌と腕を床につける。位置は胸の横だ。'],
    msg_47 :['よし、顔を上げろ。天井を見るように、上体と顎を上げて。腹筋が伸びているか？そのまま１８秒キープだ。カウント行くぞ〜１、２、３、４、５、息止めるな〜６、７、８、９、１０、折り返し〜１１、１２、１３、１４、もう少し、１５、１６、１７、１８。終わりだ。'],
    msg_48 :['足のストレッチをするぞ。まずは足を開いて立ってくれ。足幅はバランスが取りやすければ自由でいいからな。'],
    msg_49 :['よし、まずは右足からだ。かかとをおしりにつけるように片ひざをまげて、右のつま先を右手で掴んでくれ。そのまま膝が後ろに動くくらい引っ張っていく。おっと、バランス崩さないようにな。そのまま１８秒キープしろ。いくぞ〜１、２、３、４、５、６、７、８、９、１０、折り返し〜１１、１２、１３、１４、もう少し、１５、１６、１７、１８。終わりだ。次、左足だ。左のつま先を左手で掴んでくれ。そのまま膝が後ろに動くくらい引っ張っていく。おーし、１８秒キープだ。いくぞ～１、２、３、４、５、６、７、８、９、１０、折り返し～１１、１２、１３、１４、もう少し、１５、１６、１７、１８。終わり〜。'],
    msg_50 :['胸のストレッチをするぞ。まずは足を開いて立ってくれ。足幅はバランスが取りやすければ自由でいいからな。'],
    msg_51 :['よし、いくぞ〜肘を伸ばした状態で、背中で手を繋いでくれ。肩甲骨を背中の真ん中に寄せろ。背中の筋肉を縮めて、胸をはった状態で〜１８秒キープだ。ゆっくりそのまま息をして。いくぞ〜１、２、３、４、５、６、７、８、９、１０、ゆっくり息を吸ってな～〜１１、１２、１３、１４、もうちょい、１５、１６、１７、１８。終わりだ。'],
    msg_52 :['全身と背中のストレッチだ。まずは肩幅程度に足を開いて立ってくれ。'],
    msg_53 :['よし。手を組んで、手のひらを天井に向けながら背伸びをして〜伸びてるか〜？そのまま思いっきり背伸び〜〜そのままゆっくり体を左右に傾けて、肩から膝までの側面を伸ばしていくぞ〜じゃあ、はい、右〜…次、左〜…もういっちょ、右〜…左〜…よし、終わりだ。'],
    msg_54 :['スクワット行くぞ。足を肩幅に開いて、つま先を45度くらい外側に開いていて立ってくれ。'],
    msg_55 :[
        'それじゃあ行くぞ。まずは、仁王立ちのように手を前で組んで肘を上げろ。俺のカウントに合わせてゆっくり膝が90度になるまで腰を落としてくれ。トイレに座るように、尻を後ろに下げながらだぞ。５回カウントする。せーの、１、２、上がる時は息吐きながら、３、尻と腹に力いれてゆっくりー、４、ラスト、５！お疲れ〜',
        'それじゃあ行くぞ。まずは、仁王立ちのように手を前で組んで肘を上げろ。俺のカウントに合わせてゆっくり膝が90度になるまで腰を落としてくれ。トイレに座るように、尻を後ろに下げながらだぞ。１０回カウントする。せーの、１、２、上がる時は息吐きながら、３、尻と腹に力いれてゆっくりー、４、５、太ももも意識して、６、７、呼吸しろ、８、腰下がってないぞ！、９、ラスト！、１０！…お疲れ、楽にしろ。',
        'それじゃあ行くぞ。まずは、仁王立ちのように手を前で組んで肘を上げろ。俺のカウントに合わせてゆっくり膝が90度になるまで腰を落としてくれ。トイレに座るように、尻を後ろに下げながらだぞ。１５回カウントする。せーの、１、２、３…腰が下がってないぞ！、４、５、太もももを意識して、６、７、８、９文句言うな！10、11、12,ほら、ちゃんと呼吸しろ。13、14、ラスト！…15！ふー！お疲れ。'
    ],
    msg_56 :['ワイドスクワットだ。まずは足を開いて立つぞ。だいたい肩幅の１.５倍のくらいだ。つま先は外側に向けておいてくれ。'],
    msg_57 :['よし、仁王立ちのように手を前に組んで肘を上げろ。そうしたら、俺のカウントに合わせてゆっくり膝が90度になるまで腰を落としてくれ。相撲取りの四股のポーズになるくらいまで腰を落とすんだ。尻餅をつくなよ！腰を落としたら、膝が伸び切らない位置まで戻って、１カウントだ。今回は５カウントだ。行くぞ、せーの。１、２、ゆっくりー、３、息吸え〜、４、ラスト！５！お疲れ。'],
    msg_58 :['スプリットスクワットをするぞ。まずは最初の状態をつくろう。まずは足を腰幅に開いてくれ。手は腰に当てた状態だ。そうしたら…よっ（SE）右の足を大きく前に踏み出す。この時、左足のかかとは床に着かずに、天井に向けて上げておけよ。そのまま上体をグッと前に傾けて。頭と踵がたてに一直線になるように前足に全体重をかけて立つんだ。目線は２M先を見ろよ。これが最初の状態だ'],
    msg_59 :[
        'オッケー、それじゃあ１カウントの動きを説明する。後ろの膝が地面に着く寸前まで曲げて、下に下がって〜上がって〜。この時前に出した足の膝を伸ばし切らないように。これで１カウントだ。今回は５カウントだぞ。せーの。１、２、ゆっくり〜３、４、前足と尻意識して～、５！　次は反対側だ。準備をしてくれ。左足を大きく踏み出して全体重をかけるんだ。…いくぞ。１、２、ゆっくり〜３、４、前足と尻意識して～、５！　終わりだ。' ,
        'オッケー、それじゃあ１カウントの動きを説明する。後ろの膝が地面に着く寸前まで曲げて、下に下がって〜上がって〜。この時前に出した足の膝を伸ばし切らないように。これで１カウントだ。今回は10カウントだぞ。せーの。１、２、ゆっくり〜３、４、前足と尻意識して～、５、ちゃんと腰落とせ、６、７、膝曲がってないぞ！８、９、ラスト！１０。　次は反対側だ。準備をしてくれ。左足を大きく踏み出して全体重をかけるんだ。…いくぞ。１、２、ゆっくり〜３、４、前足と尻意識して～、５、ちゃんと腰落とせ、６、７、膝曲がってないぞ！８、９、ラスト！１０。お疲れ〜。',
        'オッケー、それじゃあ１カウントの動きを説明する。後ろの膝が地面に着く寸前まで曲げて、下に下がって〜上がって〜。この時前に出した足の膝を伸ばし切らないように。これで１カウントだ。今回は1５カウントだぞ。せーの。１、２、ゆっくり〜３、４、前足と尻意識して～、５、ちゃんと腰落とせ、６、７、膝曲がってないぞ！８、９、１０、息ちゃんと吸え〜、１１、１２、まだ終わりじゃないぞ気張れ！１３、もう少し！１４、ラスト！１５！。　次は反対側だ。準備をしてくれ。左足を大きく踏み出して全体重をかけるんだ。…いくぞ。１、２、ゆっくり〜３、４、前足と尻意識して～、５、ちゃんと腰落とせ、６、７、膝曲がってないぞ！８、９、１０、息ちゃんと吸え〜、１１、１２、まだ終わりじゃないぞ気張れ！１３、もう少し！１４、ラスト！１５！。ふ〜〜〜…お疲れ〜！'],
    msg_60 :['ダイアゴナルを行うぞ。まず四つん這いになってくれ。手は肩の真下に、ひざは股関節の真下に来るように、体勢を整えろ。'],
    msg_61 :[
        'それじゃあ、次に1カウントの動きを説明する。右の肘と左の膝を、お腹の前でくっつけろ。そしたらそのあと、尻と背中を縮める意識で、右腕と左足を伸ばして上げるんだ。これで１カウントだ。左右入れ替えで５回ずつやって行くぞ〜よし、カウントする！せーの。１、２、尻と背中を意識！３、４、ラスト！５！終わり。次、反対行くぞ。左の肘と右の膝をお腹の前でくっつけろ。よし、カウントする。せーの１、２、手と足の高さ下げるな！３、４、ラスト！５！　終わり〜お疲れ様。',
        'それじゃあ、次に1カウントの動きを説明する。右の肘と左の膝を、お腹の前でくっつけろ。そしたらそのあと、尻と背中を縮める意識で、右腕と左足を伸ばして上げるんだ。これで１カウントだ。左右入れ替えで５回ずつやって行くぞ〜よし、カウントする！せーの。１、２、尻と背中を意識！３、４、５、手と足の高さ下げるな！６、７、まだまだ！８、９、ラスト！１０！終わり。次、反対行くぞ。左の肘と右の膝をお腹の前でくっつけろ。よし、カウントする。せーの１、２、３、そのちょーし、４、５、だんだん手足下がってきてないか、６、７、もう少し、８、９、ラスト！１０！　終わり〜お疲れ様。',
        'それじゃあ、次に1カウントの動きを説明する。右の肘と左の膝を、お腹の前でくっつけろ。そしたらそのあと、尻と背中を縮める意識で、右腕と左足を伸ばして上げるんだ。これで１カウントだ。左右入れ替えで５回ずつやって行くぞ〜よし、カウントする！せーの。１、２、尻と背中を意識！３、４、５、手と足の高さ下げるな！６、７、折り返し〜８、９、１０、息吸ってるか〜、１１、１２、だんだん手足下がってきてないか、１３、１４ラスト！１５！終わり。次、反対行くぞ。左の肘と右の膝をお腹の前でくっつけろ。よし、カウントする。せーの１、２、尻と背中の意識！３、そのちょーし、４、５、６、７、折り返し！、８、９、１０、まだまだ、１１、１２、手足下げない！、１３、もうちょっと！、１４、ラスト！１５！　ふ〜…！終わり〜お疲れ様。'
    ],
    msg_62 :['スーパーマンをやるぞ。両手両足を伸ばした状態でうつ伏せで床に寝てくれ。これが最初の状態だ。'],
    msg_63 :[
        'よ〜し、それじゃあ1カウントの動きを説明する。両手両足を背中と尻の力を使ってグッと持ち上げろ。背中を反りながら、背中の筋肉を縮めるように、肘をまげて脇をしめてくれ。脇で小さいボールを挟むイメージだ。縮め切ったら両手両足を伸ばして、最初の状態に戻る。これで１カウントだ。５カウントするぞ。せーの。１、２、３、腕は床と平行だ、４、ラスト！５！お疲れ！',
        'よ〜し、それじゃあ1カウントの動きを説明する。両手両足を背中と尻の力を使ってグッと持ち上げろ。背中を反りながら、背中の筋肉を縮めるように、肘をまげて脇をしめてくれ。脇で小さいボールを挟むイメージだ。縮め切ったら両手両足を伸ばして、最初の状態に戻る。これで１カウントだ。10カウントするぞ。せーの。１、２、３、腕は床と平行だ、４、５、ゆっくり動かせ〜６、７、手は床につけない！８、９、ラスト！１０！お疲れ！',
        'よ〜し、それじゃあ1カウントの動きを説明する。両手両足を背中と尻の力を使ってグッと持ち上げろ。背中を反りながら、背中の筋肉を縮めるように、肘をまげて脇をしめてくれ。脇で小さいボールを挟むイメージだ。縮め切ったら両手両足を伸ばして、最初の状態に戻る。これで１カウントだ。15カウントするぞ。せーの。１、２、３、腕は床と平行だ、４、５、ゆっくり動かせ〜６、７、手は床につけない！８、９、１０、しっかり筋肉縮めろ！１１、１２、あとちょっと！、１３、１４、ラスト！、１５！お疲れ！'    
    ],
    msg_64 :['四つ足腕立て伏せだ。四つん這いになってくれ。手は肩幅よりも少しだけ広い幅で床につけるんだぞ。このとき、指は少し内側に向けろ。膝の位置は、股関節の真下に来るように、床についてくれ。'],
    msg_65 :[
        'それじゃあ次に１カウントの動きを説明する。四つんばいの体勢を保ちながら、手と手の間に胸を落とし、体を下げていく。下に下がる時は肩甲骨を寄せろよ。胸の筋肉がしっかりと張る感覚があるか？下がり切ったら、体を上に押し上げて元の状態に戻る。これで１カウントだ。それじゃあ、今から５カウントするぞ。せーの、１、胸の筋肉を意識、２、下がる時に息吸って、３、４、ラスト！、５！お疲れ様。',
        'それじゃあ次に１カウントの動きを説明する。四つんばいの体勢を保ちながら、手と手の間に胸を落とし、体を下げていく。下に下がる時は肩甲骨を寄せろよ。胸の筋肉がしっかりと張る感覚があるか？下がり切ったら、体を上に押し上げて元の状態に戻る。これで１カウントだ。それじゃあ、今から１０カウントするぞ。せーの、１、胸の筋肉を意識、２、下がる時に息吸って、３、４、肩甲骨を寄せるんだ！、５、折り返しだ、６、７、ちゃんと下がれ〜、８、９、ラスト！１０！お疲れ様。',
        'それじゃあ次に１カウントの動きを説明する。四つんばいの体勢を保ちながら、手と手の間に胸を落とし、体を下げていく。下に下がる時は肩甲骨を寄せろよ。胸の筋肉がしっかりと張る感覚があるか？下がり切ったら、体を上に押し上げて元の状態に戻る。これで１カウントだ。それじゃあ、今から15カウントするぞ。せーの、１、胸の筋肉を意識、２、下がる時に息吸って、３、上がる時息を吐く、４、５、肩甲骨を寄せるんだ！、６、７、折り返し〜、８、９、ちゃんと下がれ〜、１０、あと５回！、１１、１２、泣き言いうな！、１３、もう少し！、１４、ラスト！１５ふう〜お疲れ様！よくやったな'
    ],
    msg_66 :['膝付き腕立て伏せをするぞ。まずは最初の状態を説明する。四つん這いになってくれ。手は肩幅よりも少しだけ広い幅で床につける。このとき、指は少し内側に向けろ。膝は最初股関節の真下だが、頭と腰とひざが一直線になる様に徐々に膝を後ろに動かしてくれ。これが最初の状態だ。'],
    msg_67 :[
        'よし、そしたら１カウントの動きを教えるぞ。膝から頭が一直線の姿勢を保ったまま、手と手の間に胸を落として、体全体を下げていくぞ。下に下がる時は肩甲骨を寄せろよ。胸の筋肉がしっかりと張る感覚があるか？下がり切ったら、体を上に押し上げて元の状態に戻る。これで１カウントだ。それじゃあ、今から5カウントするぞ。せーの、１、２、肩甲骨寄せる！、３、、ちゃんと下がって、４、ラスト、５！お疲れ。',
        'よし、そしたら１カウントの動きを教えるぞ。膝から頭が一直線の姿勢を保ったまま、手と手の間に胸を落として、体全体を下げていくぞ。下に下がる時は肩甲骨を寄せろよ。胸の筋肉がしっかりと張る感覚があるか？下がり切ったら、体を上に押し上げて元の状態に戻る。これで１カウントだ。それじゃあ、今から10カウントするぞ。せーの、１、２、肩甲骨寄せる！、３、ちゃんと下がって、４、５,折り返し、６、７、下がる時息吸う、胸の筋肉の意識、８、腕だけで下がるな、９、ラスト、１０！ふ〜お疲れ。',
        'よし、そしたら１カウントの動きを教えるぞ。膝から頭が一直線の姿勢を保ったまま、手と手の間に胸を落として、体全体を下げていくぞ。下に下がる時は肩甲骨を寄せろよ。胸の筋肉がしっかりと張る感覚があるか？下がり切ったら、体を上に押し上げて元の状態に戻る。これで１カウントだ。それじゃあ、今から1５カウントするぞ。せーの、１、２、肩甲骨寄せる！、３、ちゃんと下がって、４、５、下がる時息吸う、６、７、折り返し、８、９、胸の筋肉の意識、１０、１１、腕だけで下がるな、１２、尻が上がってないか！頭と膝は一直線だ、１３、１４、ラスト、１５！ふ〜！！よくやった！お疲れ。'
    ],
    msg_68 :['腹筋だ。仰向けに寝てくれ。膝は立てて９０度になるように曲げるんだ。手は肘をのばして太ももに置いてくれ'],
    msg_69 :[
        'ポーズができたら、手が膝をタッチするところまで、上体を起こすんだ。ヘソを覗き込むように、背中を丸めながら腹筋を縮めるぞ。よし、全部で５カウントだ。いくぞ。１、２、息吐きながらあげる！３、４、５！よし、終わりだ。',
        'ポーズができたら、手が膝をタッチするところまで、上体を起こすんだ。ヘソを覗き込むように、背中を丸めながら腹筋を縮めるぞ。よし、全部で10カウントだ。いくぞ。１、２、息吐きながら！３、４、５、首の反動使うなー、６、７、戻す時力抜きすぎない、８、９、ラスト！、１０！お疲れ〜',
        'ポーズができたら、手が膝をタッチするところまで、上体を起こすんだ。ヘソを覗き込むように、背中を丸めながら腹筋を縮めるぞ。よし、全部で15カウントだ。いくぞ。１、２、息吐きながら,３、４、５、戻す時力抜きすぎないで、６、７、折り返し、８、９、１０、首の反動使わずに腹筋で起きて、１１、１２、１３、あと少し、１４、ラスト！１５！お疲れ〜'
    ],
    //雑談
    msg_70 :["わかった"]
};

var voice = {
    msg_0: ['output0.wav'],
    msg_1: ['output1.wav'],
    msg_2: ['output2.wav'],
    msg_3: ['output3.wav'],
    msg_4: ['output4.wav'],
    msg_5: ['output5.wav'],
    msg_6: ['output6.wav'],
    msg_7: ['output7.wav'],
    msg_8: ['output8.wav'],
    msg_9: ['output9.wav'],
    msg_10: ['output10.wav'],
    msg_11: ['output11.wav'],
    msg_12: ['output12.wav'],
    msg_13: ['output13.wav'],
    msg_14: ['output14.wav'],
    msg_15: ['output15.wav'],
    msg_16: ['output16.wav'],
    msg_17: ['output17.wav'],
    msg_18: ['output18.wav'],
    msg_19: ['output19.wav'],
    msg_20: ['output20.wav'],
    msg_21: ['output21.wav'],
    msg_22: ['output21.wav'],
    msg_23: ['output23.wav'],
    msg_24: ['output24.wav'],
    msg_25: ['output25.wav'],
    msg_26: ['output26.wav'],
    msg_27: ['output27.wav'],
    msg_28: ['output28.wav'],
    msg_29: ['output29.wav'],
    msg_30: ['output30.wav'],
    msg_31: ['output31.wav'],
    msg_32: ['output32.wav'],
    msg_33: ['output33.wav'],
    msg_34: ['output34.wav'],
    msg_35: ['output35.wav'],
    msg_36: ['output36.wav'],
    msg_37: ['output37.wav'],
    msg_38: ['output38.wav'],
    msg_39: ['output39.wav'],
    msg_40: ['output40.wav'],
    msg_41: ['output41.wav'],
    msg_42: ['output42.wav'],
    msg_43: ['output43.wav'],
    msg_44: ['output44.wav'],
    msg_45: ['output45.wav'],
    msg_46: ['output46.wav'],
    msg_47: ['output47.wav'],
    msg_48: ['output48.wav'],
    msg_49: ['output49.wav'],
    msg_50: ['output50.wav'],
    msg_51: ['output51.wav'],
    msg_52: ['output52.wav'],
    msg_53: ['output53.wav'],
    msg_54: ['output54.wav'],
    msg_55: ['output55.wav'],
    msg_56: ['output56.wav'],
    msg_57: ['output57.wav'],
    msg_58: ['output58.wav'],
    msg_59: ['output59.wav'],
    msg_60: ['output60.wav'],
    msg_61: ['output61.wav'],
    msg_62: ['output62.wav'],
    msg_63: ['output63.wav'],
    msg_64: ['output64.wav'],
    msg_65: ['output65.wav'],
    msg_66: ['output66.wav'],
    msg_67: ['output67.wav'],
    msg_68: ['output68.wav'],
    msg_69: ['output69.wav'],
    msg_70: ['output69.wav']
};

module.exports = {
    text: text,
    voice: voice,
    suggestion: suggestion,
    response: response,
    flow_main_text: flow_main_text,
    flow_main_voice: flow_main_voice,
    flow_yes_text: flow_yes_text,
    flow_yes_voice: flow_yes_voice,
    flow_no_text: flow_no_text,
    flow_no_voice: flow_no_voice,
    flow_quit_text: flow_quit_text,
    flow_quit_voice: flow_quit_voice,
    flow_noinput_text: flow_noinput_text,
    flow_noinput_voice: flow_noinput_voice,
    flow_unknown_text: flow_unknown_text,
    flow_unknown_voice: flow_unknown_voice,
    flow_help_text: flow_help_text,
    flow_help_voice: flow_help_voice,
    flow_goal_text: flow_goal_text,
    flow_goal_voice: flow_goal_voice,
    flow_another_text: flow_another_text,
    flow_another_voice: flow_another_voice,
    flow_reprompt_text: flow_reprompt_text,
    flow_reprompt_voice: flow_reprompt_voice,
    flow_second_text: flow_second_text,
    flow_second_voice: flow_second_voice,

    flow_level1_text: flow_level1_text,
    flow_level1_voice: flow_level1_voice,
    flow_level2_text: flow_level2_text,
    flow_level2_voice: flow_level2_voice,
    flow_level3_text: flow_level3_text,
    flow_level3_voice: flow_level3_voice,

    flow_love_text: flow_love_text,
    flow_love_voice: flow_love_voice,
    flow_fashion_text: flow_fashion_text,
    flow_fashion_voice: flow_fashion_voice,
    flow_meetyou_text: flow_meetyou_text,
    flow_meetyou_voice: flow_meetyou_voice,
    flow_anotherquestion_text: flow_anotherquestion_text,
    flow_anotherquestion_voice: flow_anotherquestion_voice,

    flow_morning_text: flow_morning_text,
    flow_morning_voice: flow_morning_voice,
    flow_evening_text: flow_evening_text,
    flow_evening_voice: flow_evening_voice,
    flow_night_text: flow_night_text,
    flow_night_voice: flow_night_voice,
    //flow_goodnight_text: flow_night_text,
    //flow_goodnight_voice: flow_night_voice,
}