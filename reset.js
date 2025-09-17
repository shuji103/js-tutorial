// リセット機能

(() => {
    const $counter = document.getElementById("js-counter");
    const $message = document.getElementById("js-message");

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

    document.getElementById("js-reset-button").addEventListener("click", clickHandler)
})();