(() => {
    // 要素の取得
    const $counter = document.getElementById("js-counter");

    // 関数の定義（クリックイベント時の処理）
    const clickHandler = (e) => {

        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);

        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }
    }

    // 実行部分（クラス要素に対してイベントを設定）
    const $buttons = document.getElementsByClassName("js-button");

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();