// リセット機能

(() => {
    // ボタン要素js-reset-buttonがクリックされたら、カウンターのテキストの値を0にする処理を行っている
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0;
    }

    document.getElementById("js-reset-button").addEventListener("click", clickHandler)
})();