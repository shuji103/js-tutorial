// リセット機能

(() => {
    // 要素の取得
    const $counter = document.getElementById("js-counter");
    // 文字列を表示するための要素を取得
    const $message = document.getElementById("js-message");

    // 関数の定義
    const clickHandler = () => {
        // カウント部分の初期化
        $counter.textContent = 0;

        // メッセージ初期化
        $message.innerText = "You're down!";

        // 無効化していたボタンを再度有効化
        const $buttons = document.getElementsByClassName("js-button");
        for (let index = 0; index < $buttons.length; index++) {
            $buttons[index].disabled = false;
        }
    }
    // 実行部分
    document.getElementById("js-reset-button").addEventListener("click", clickHandler)
})();