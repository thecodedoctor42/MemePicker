import { catsData } from "./data"

const emotionsArray = []

function getEmotionsArray(cats){
    for (cat of cats){
        for (emotion of cat.emotionTags) {
            emotionsArray.push(emotion)

        }
    }
    return(emotionsArray)
}

const emotionRadiosEl = document.getElementById('emotion-radios')

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    let emotionRadios = ``
    for (let emotion of emotions){
        emotionRadios +=`<div class="radio">
                            <label for="${emotion}">${emotion}</label>
                            <input
                            type="radio"
                            id="${emotion}"
                            value="${emotion}"
                            name="emotions">
                        </div>`
    }
    emotionRadiosEl.innerHTML = emotionRadios
}

renderEmotionsRadios(catsData)