import React from 'react'

const Aside = () => {
  return (
    <div className="c_ads_list">
        <div className="header">Обратите внимание <i></i></div>

        <div className="ads_list">
            <div className="list_item">
                <div className="title"><a href="/">Заголовок рекламного объявления </a></div>

                <div className="image">
                    <a href="/"><img src="/ads-image.jpg" alt="" /></a>
                </div>

                <div className="text">
                    Краткий текст рекламного
                    объявления
                </div>
            </div>

            <div className="list_item">
                <div className="title"><a href="/">Заголовок рекламного объявления </a></div>

                <div className="image">
                    <a href="/"><img src="/assets/ads-image.jpg" alt="" /></a>
                </div>

                <div className="text">
                    Краткий текст рекламного
                    объявления
                </div>
            </div>
            <div className="list_item">
                <div className="title"><a href="/">Заголовок рекламного объявления </a></div>

                <div className="image">
                    <a href="/"><img src="/ads-image.jpg" alt="" /></a>
                </div>

                <div className="text">
                    Краткий текст рекламного
                    объявления
                </div>
            </div>
        </div>
        <div className="question_how_to">
            <a href="/">Как сюда попасть?</a>
        </div>
      </div>
  )
}

export default Aside
