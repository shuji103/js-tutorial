(() => {
// 要素の取得
const $counter = document.getElementById("js-counter");
// 文字列を表示するための要素を取得
const $message = document.getElementById("js-message");

// 関数の定義
const clickHandler = () => {
    // カウントが1から9のときはStand up!という文字列を表示し、カウントが10に達するとYou were knocked out!という文字列を表示し、カウント10を保持したまま停止
    const count = parseInt($counter.textContent);
    if (count > 0 && count <= 9) {
        $message.textContent = "Stand up!";
    } else if (count === 10) {
        $message.textContent = "You were knocked out!";
        // カウント10を保持し、以降のボタン操作を無効化（resetボタン以外）
        const $buttons = document.getElementsByClassName("js-button");
        for (let index = 0; index < $buttons.length; index++) {
            $buttons[index].disabled = true;
        }
    }
}


// 実行部分（クラス要素に対してイベントを設定）
const $buttons = document.getElementsByClassName("js-button");

for (let index = 0; index < $buttons.length; index++) {
    $buttons[index].addEventListener("click", () => clickHandler())
}
})();